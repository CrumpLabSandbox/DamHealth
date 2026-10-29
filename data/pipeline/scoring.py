"""Step 04: issue detection, sub-scores, Dam Health Index (DHI), grade and cost band.

Everything here is a transparent screening indicator computed from public inventory
fields. It is not an engineering assessment. See data/methodology.md.
"""
from __future__ import annotations

from datetime import date

REFERENCE_YEAR = 2026

# --------------------------------------------------------------------------- issue catalogue
# severity: 1 note … 5 critical. group: condition | readiness | consequence.
ISSUES = {
    "COND_UNSAT": {"sev": 5, "group": "condition", "title": "Rated Unsatisfactory",
                   "plain": "Inspectors found a safety deficiency that needs immediate or emergency action.",
                   "eng": "Condition assessment = Unsatisfactory (NID). A deficiency requiring immediate or emergency remedial action is recognized."},
    "COND_POOR": {"sev": 4, "group": "condition", "title": "Rated Poor",
                  "plain": "A safety deficiency has been found for conditions that can realistically happen. Repairs are needed.",
                  "eng": "Condition assessment = Poor (NID). Deficiency recognized for loading conditions that may realistically occur; remedial action necessary, or uncertainties require further investigation."},
    "COND_FAIR": {"sev": 2, "group": "condition", "title": "Rated Fair",
                  "plain": "No problems under normal conditions, but a rare flood or earthquake could cause one.",
                  "eng": "Condition assessment = Fair (NID). No deficiencies under normal loading; rare or extreme hydrologic/seismic events may result in a deficiency."},
    "COND_UNKNOWN": {"sev": 3, "group": "condition", "title": "Condition not rated",
                     "plain": "This dam could cause loss of life or serious damage if it failed, yet no condition rating is published.",
                     "eng": "No condition assessment in NID for a High or Significant hazard dam. Treated as a data gap with moderate weight."},
    "NO_EAP": {"sev": 4, "group": "readiness", "title": "No Emergency Action Plan",
               "plain": "There is no written plan for warning and evacuating people downstream if the dam fails.",
               "eng": "EAP = No for a High-hazard dam (FEMA P-64 recommends EAPs for all high and significant hazard dams)."},
    "NO_EAP_SIG": {"sev": 3, "group": "readiness", "title": "No Emergency Action Plan",
                   "plain": "There is no written plan for warning people downstream if the dam fails.",
                   "eng": "EAP = No for a Significant-hazard dam."},
    "INSPECT_OVERDUE": {"sev": 3, "group": "readiness", "title": "Inspection overdue",
                        "plain": "The last recorded inspection is older than the required inspection interval.",
                        "eng": "Last inspection date exceeds the required inspection frequency (or > 5 years where frequency unknown), measured at the snapshot date."},
    "INSPECT_NEVER": {"sev": 3, "group": "readiness", "title": "No inspection on record",
                      "plain": "No inspection date is recorded for a dam whose failure could hurt people.",
                      "eng": "No inspection date in NID for a High or Significant hazard dam."},
    "AGE_100": {"sev": 3, "group": "condition", "title": "Over 100 years old",
                "plain": "Built more than a century ago, before modern design standards, with no recorded major modification in the last 25 years.",
                "eng": "Age ≥ 100 yrs and no YEAR_MODIFIED within 25 yrs. Pre-dates modern hydrologic (PMF) and filter design criteria."},
    "AGE_75": {"sev": 2, "group": "condition", "title": "Over 75 years old",
               "plain": "Older than 75 years with no recorded major modification in the last 25 years.",
               "eng": "Age ≥ 75 yrs and no YEAR_MODIFIED within 25 yrs."},
    "AGE_50": {"sev": 1, "group": "condition", "title": "Past typical design life",
               "plain": "Older than 50 years — the typical design life — with no recorded major modification.",
               "eng": "Age ≥ 50 yrs and no YEAR_MODIFIED within 25 yrs."},
    "HAZARD_UNDET": {"sev": 2, "group": "readiness", "title": "Hazard class undetermined",
                     "plain": "Nobody has determined what would happen downstream if this dam failed.",
                     "eng": "Hazard potential = Undetermined / Not Available. Downstream consequence classification has not been performed."},
    "HIGH_CONSEQUENCE": {"sev": 3, "group": "consequence", "title": "Very large reservoir or tall dam",
                         "plain": "This is a large dam; a failure would release a very large volume of water.",
                         "eng": "High hazard and (storage ≥ 50,000 ac-ft or height ≥ 100 ft). Breach outflow and inundation extent scale with head and volume."},
    "SPILLWAY_UNKNOWN": {"sev": 1, "group": "condition", "title": "Spillway type unknown",
                         "plain": "The inventory does not record how this dam passes floodwater.",
                         "eng": "Spillway type not recorded for a High-hazard dam; spillway adequacy (overtopping) is the leading U.S. failure mode."},
    "PRIVATE_HIGH": {"sev": 2, "group": "readiness", "title": "Privately owned, needs work",
                     "plain": "A private owner must pay for repairs on a dam that could endanger others, and private owners often lack the funds.",
                     "eng": "Owner type Private, High hazard, condition Fair/Poor/Unsatisfactory. Funding capacity is the main barrier to rehabilitation for private owners."},
    "UNREGULATED": {"sev": 3, "group": "readiness", "title": "No regulating agency recorded",
                    "plain": "No state or federal agency is recorded as regulating this dam.",
                    "eng": "Not state regulated and no federal regulatory/inspection role recorded, for a High or Significant hazard dam."},
    "ENFORCEMENT": {"sev": 3, "group": "readiness", "title": "Under enforcement action",
                    "plain": "Regulators have an enforcement action pending or ongoing against the owner.",
                    "eng": "NID status = Enforcement Pending/Ongoing."},
    "STALE_DATA": {"sev": 1, "group": "readiness", "title": "Only 2019 data available",
                   "plain": "Our most recent record for this dam is from 2019.",
                   "eng": "Record not present in the 2026 extract; attributes are from the 2019 full inventory."},
}

GRADE_BOUNDS = [(20, "A"), (35, "B"), (50, "C"), (65, "D"), (101, "F")]

CONDITION_BASE = {"Unsatisfactory": 100, "Poor": 80, "Fair": 45, "Satisfactory": 10, "Not Rated": 40, None: 40}
HAZARD_BASE = {"High": 70, "Significant": 40, "Low": 10, "Undetermined": 30, "Not Available": 20}
READINESS_WEIGHT = {"NO_EAP": 50, "NO_EAP_SIG": 35, "INSPECT_OVERDUE": 25, "INSPECT_NEVER": 30,
                    "HAZARD_UNDET": 20, "UNREGULATED": 30, "PRIVATE_HIGH": 15, "ENFORCEMENT": 30,
                    "STALE_DATA": 5}


def _iso_year(d: str | None) -> int | None:
    return int(d[:4]) if d else None


def detect_issues(r: dict) -> list[str]:
    issues: list[str] = []
    hz, cond = r["hazard"], r.get("condition")
    serious = hz in ("High", "Significant")

    if cond == "Unsatisfactory":
        issues.append("COND_UNSAT")
    elif cond == "Poor":
        issues.append("COND_POOR")
    elif cond == "Fair":
        issues.append("COND_FAIR")
    elif serious and cond in (None, "Not Rated"):
        issues.append("COND_UNKNOWN")

    if r.get("eap") == "No":
        if hz == "High":
            issues.append("NO_EAP")
        elif hz == "Significant":
            issues.append("NO_EAP_SIG")

    snap_year = _iso_year(r.get("attr_date")) or REFERENCE_YEAR
    insp_year = _iso_year(r.get("inspection_date"))
    if insp_year is None:
        if serious:
            issues.append("INSPECT_NEVER")
    else:
        freq = r.get("inspection_frequency_yrs") or 5
        if snap_year - insp_year > freq + 1:  # one year of grace for reporting lag
            issues.append("INSPECT_OVERDUE")

    yc = r.get("year_completed")
    ym = r.get("year_modified")
    if yc:
        age = REFERENCE_YEAR - yc
        recently_modified = ym is not None and REFERENCE_YEAR - ym <= 25
        if not recently_modified:
            if age >= 100:
                issues.append("AGE_100")
            elif age >= 75:
                issues.append("AGE_75")
            elif age >= 50:
                issues.append("AGE_50")

    if hz in ("Undetermined", "Not Available"):
        issues.append("HAZARD_UNDET")

    if hz == "High" and ((r.get("storage_acft") or 0) >= 50_000 or (r.get("height_ft") or 0) >= 100):
        issues.append("HIGH_CONSEQUENCE")

    if hz == "High" and r.get("spillway_type") is None and r["coverage"] != "2026":
        issues.append("SPILLWAY_UNKNOWN")

    if hz == "High" and "Private" in (r.get("owner_types") or []) and cond in ("Fair", "Poor", "Unsatisfactory"):
        issues.append("PRIVATE_HIGH")

    fed_reg = any(role.startswith(("Regulatory", "Inspection")) for role in (r.get("federal_roles") or []))
    if serious and r["coverage"] != "2026" and not r.get("state_regulated") and not fed_reg:
        issues.append("UNREGULATED")

    if (r.get("status") or "").startswith("Enforcement"):
        issues.append("ENFORCEMENT")

    if r["coverage"] == "2019":
        issues.append("STALE_DATA")
    return issues


def sub_scores(r: dict, issues: list[str]) -> dict:
    cond = r.get("condition")
    condition = CONDITION_BASE.get(cond, 40)
    if "AGE_100" in issues:
        condition += 15
    elif "AGE_75" in issues:
        condition += 10
    elif "AGE_50" in issues:
        condition += 5
    condition = min(100, condition)

    readiness = min(100, sum(READINESS_WEIGHT.get(i, 0) for i in issues))

    consequence = HAZARD_BASE.get(r["hazard"], 20)
    st = r.get("storage_acft") or 0
    h = r.get("height_ft") or 0
    consequence += 30 if st >= 1_000_000 else 20 if st >= 100_000 else 10 if st >= 10_000 else 5 if st >= 1_000 else 0
    consequence += 15 if h >= 200 else 10 if h >= 100 else 5 if h >= 50 else 0
    consequence = min(100, consequence)
    return {"condition": condition, "readiness": readiness, "consequence": consequence}


def grade_for(dhi: float) -> str:
    for bound, g in GRADE_BOUNDS:
        if dhi < bound:
            return g
    return "F"


def dam_health_index(r: dict, issues: list[str], s: dict) -> tuple[float, str, list[str]]:
    dhi = 0.45 * s["condition"] + 0.25 * s["readiness"] + 0.30 * s["consequence"]
    rules: list[str] = []
    cond, hz = r.get("condition"), r["hazard"]
    if cond == "Unsatisfactory" and hz == "High":
        if dhi < 65:
            rules.append("Unsatisfactory + High hazard ⇒ F")
        dhi = max(dhi, 65)
    elif cond == "Unsatisfactory":
        if dhi < 50:
            rules.append("Unsatisfactory ⇒ at least D")
        dhi = max(dhi, 50)
    elif cond == "Poor" and hz == "High":
        if dhi < 50:
            rules.append("Poor + High hazard ⇒ at least D")
        dhi = max(dhi, 50)
    if hz == "Low" and cond is None and dhi > 49:
        rules.append("Low hazard with no condition data ⇒ capped at C")
        dhi = 49
    dhi = round(dhi, 1)
    return dhi, grade_for(dhi), rules


def data_confidence(r: dict) -> str:
    if r["coverage"] in ("both", "2026"):
        return "high" if r.get("condition") not in (None, "Not Rated") else "medium"
    if r.get("inspection_date") and r.get("year_completed"):
        return "medium"
    return "low"


# --------------------------------------------------------------------------- cost band
# Planning-level order-of-magnitude bands adapted from the structure of ASDSO's
# "Cost of Rehabilitating Dams in the U.S." method (size class × condition × hazard).
HEIGHT_BANDS = [  # (max height ft, low $, high $)
    (25, 0.4e6, 2.0e6), (50, 1.0e6, 5.0e6), (100, 3.0e6, 15.0e6), (200, 10.0e6, 60.0e6), (1e9, 50.0e6, 300.0e6),
]
CONDITION_FACTOR = {"Unsatisfactory": 1.5, "Poor": 1.2, "Fair": 0.7, "Satisfactory": 0.3, "Not Rated": 0.8, None: 0.5}


def cost_band(r: dict) -> dict | None:
    h = r.get("height_ft")
    if h is None:
        h = 30.0
        basis = "height unknown; assumed 30 ft"
    else:
        basis = f"height {h:.0f} ft"
    for max_h, lo, hi in HEIGHT_BANDS:
        if h < max_h:
            break
    f = CONDITION_FACTOR.get(r.get("condition"), 0.5)
    st = r.get("storage_acft") or 0
    if st >= 1_000_000:
        f *= 2.0
    elif st >= 100_000:
        f *= 1.5
    if r["hazard"] == "High":
        f *= 1.2
    return {"low_usd": round(lo * f, -5), "high_usd": round(hi * f, -5), "basis": basis}


def score(r: dict) -> dict:
    issues = detect_issues(r)
    s = sub_scores(r, issues)
    dhi, grade, rules = dam_health_index(r, issues, s)
    return {
        "issues": issues,
        "scores": {**s, "dhi": dhi},
        "grade": grade,
        "grade_rules": rules,
        "confidence": data_confidence(r),
        "cost": cost_band(r),
    }
