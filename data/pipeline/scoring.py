"""Step 04: issue detection, sub-scores, Dam Health Index (DHI), grade and cost band.

Everything here is a transparent screening indicator computed from public inventory
fields. It is not an engineering assessment. See data/methodology.md.
"""
from __future__ import annotations

from datetime import date

# Ages are measured at the year of the NID snapshot the record came from, so a data
# refresh moves them forward automatically. REFERENCE_YEAR is only the fallback for the
# legacy 2019 + March 2026 build.
REFERENCE_YEAR = 2026
STALE_YEARS = 5


def ref_year(r: dict) -> int:
    if r.get("coverage") == "current" and r.get("attr_date"):
        return int(r["attr_date"][:4])
    return REFERENCE_YEAR


def is_stale(r: dict) -> bool:
    """Newest public data for this dam is more than STALE_YEARS old at the snapshot."""
    if r.get("coverage") == "2019":
        return True
    upd, snap = r.get("record_updated"), r.get("attr_date")
    if not upd or not snap:
        return False
    try:
        return (date.fromisoformat(snap) - date.fromisoformat(upd)).days > STALE_YEARS * 365.25
    except ValueError:
        return False

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
    "COND_FEDERAL_UNPUBLISHED": {"sev": 1, "group": "condition", "title": "Federal rating not published",
                                 "plain": "Federal dams are assessed under their own agency's risk program, but the rating is not published in the National Inventory.",
                                 "eng": "Federally owned/regulated dam without an NID condition assessment. USACE (DSAC) and Reclamation (SOD) ratings are not reported to NID; see agency sources."},
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
    "STALE_DATA": {"sev": 1, "group": "readiness", "title": "Record not kept up to date",
                   "plain": "The public record for this dam has not been updated in more than five years.",
                   "eng": "NID 'Data Last Updated' for this record is more than five years before the inventory snapshot (or, in the legacy build, the newest data is the 2019 full inventory)."},
}

GRADE_BOUNDS = [(20, "A"), (30, "B"), (45, "C"), (60, "D"), (101, "F")]

CONDITION_BASE = {"Unsatisfactory": 100, "Poor": 80, "Fair": 45, "Satisfactory": 10, "Not Rated": 50, None: 50}
HAZARD_BASE = {"High": 70, "Significant": 40, "Low": 10, "Undetermined": 30, "Not Available": 20}
READINESS_WEIGHT = {"NO_EAP": 50, "NO_EAP_SIG": 35, "INSPECT_OVERDUE": 25, "INSPECT_NEVER": 30,
                    "HAZARD_UNDET": 20, "UNREGULATED": 30, "PRIVATE_HIGH": 15, "ENFORCEMENT": 30,
                    "STALE_DATA": 5}


def _iso_year(d: str | None) -> int | None:
    return int(d[:4]) if d else None


def is_federal(r: dict) -> bool:
    if "Federal" in (r.get("owner_types") or []):
        return True
    return any(role.startswith(("Owner", "Operation", "Regulatory")) for role in (r.get("federal_roles") or []))


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
        issues.append("COND_FEDERAL_UNPUBLISHED" if is_federal(r) else "COND_UNKNOWN")

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
        age = ref_year(r) - yc
        recently_modified = ym is not None and ref_year(r) - ym <= 25
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

    if is_stale(r):
        issues.append("STALE_DATA")
    return issues


def sub_scores(r: dict, issues: list[str]) -> dict:
    cond = r.get("condition")
    condition = 25 if "COND_FEDERAL_UNPUBLISHED" in issues else CONDITION_BASE.get(cond, 50)
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
    # Condition drives the index, scaled by how bad a failure would be; readiness adds on top.
    dhi = 0.70 * s["condition"] * (0.5 + 0.5 * s["consequence"] / 100.0) + 0.30 * s["readiness"]
    rules: list[str] = []
    cond, hz = r.get("condition"), r["hazard"]
    if cond == "Unsatisfactory" and hz == "High":
        if dhi < 60:
            rules.append("Unsatisfactory + High hazard ⇒ F")
        dhi = max(dhi, 60)
    elif cond == "Unsatisfactory":
        if dhi < 45:
            rules.append("Unsatisfactory ⇒ at least D")
        dhi = max(dhi, 45)
    elif cond == "Poor" and hz == "High":
        if dhi < 45:
            rules.append("Poor + High hazard ⇒ at least D")
        dhi = max(dhi, 45)
    if "NO_EAP" in issues and dhi < 30:
        rules.append("High hazard without an EAP ⇒ at least C")
        dhi = 30
    if hz == "Low" and cond is None and dhi > 44:
        rules.append("Low hazard with no condition data ⇒ capped at C")
        dhi = 44
    dhi = round(dhi, 1)
    return dhi, grade_for(dhi), rules


def data_confidence(r: dict) -> str:
    if r.get("condition") not in (None, "Not Rated") and r["coverage"] in ("current", "both", "2026"):
        return "high"
    if r["coverage"] in ("both", "2026"):
        return "medium"
    if r["coverage"] == "current" and (r.get("inspection_date") or r.get("year_completed")):
        return "medium"
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


def issue_facts(r: dict, issues: list[str]) -> dict[str, str]:
    """The exact inventory field/value that triggered each issue, for the Sources panel."""
    snap = r.get("attr_date")
    cd = r.get("condition_date") or snap
    f: dict[str, str] = {}
    for i in issues:
        if i.startswith("COND_") and i not in ("COND_UNKNOWN", "COND_FEDERAL_UNPUBLISHED"):
            f[i] = f"Condition assessment = {r.get('condition')} (NID, {cd})"
        elif i in ("COND_UNKNOWN", "COND_FEDERAL_UNPUBLISHED"):
            f[i] = f"Condition assessment = {r.get('condition') or 'none'}; hazard = {r['hazard']} (NID, {snap})"
        elif i in ("NO_EAP", "NO_EAP_SIG"):
            f[i] = f"EAP = {r.get('eap')}; hazard = {r['hazard']} (NID, {snap})"
        elif i == "INSPECT_OVERDUE":
            f[i] = f"Last inspection = {r.get('inspection_date')}; required every {r.get('inspection_frequency_yrs') or 'unknown→5'} yr (NID, {snap})"
        elif i == "INSPECT_NEVER":
            f[i] = f"Inspection date = none; hazard = {r['hazard']} (NID, {snap})"
        elif i.startswith("AGE_"):
            f[i] = f"Year completed = {r.get('year_completed')}; year modified = {r.get('year_modified') or 'none'} (NID, {snap}); age measured at {ref_year(r)}"
        elif i == "HAZARD_UNDET":
            f[i] = f"Hazard potential = {r['hazard']} (NID, {snap})"
        elif i == "HIGH_CONSEQUENCE":
            f[i] = f"Hazard = High; storage = {r.get('storage_acft')} ac-ft; height = {r.get('height_ft')} ft (NID, {snap})"
        elif i == "SPILLWAY_UNKNOWN":
            f[i] = f"Spillway type = none recorded (NID, {snap})"
        elif i == "PRIVATE_HIGH":
            f[i] = f"Owner type = {', '.join(r.get('owner_types') or [])}; hazard = High; condition = {r.get('condition')} (NID, {snap})"
        elif i == "UNREGULATED":
            f[i] = f"State regulated = {r.get('state_regulated')}; federal roles = {'; '.join(r.get('federal_roles') or []) or 'none'} (NID, {snap})"
        elif i == "ENFORCEMENT":
            f[i] = f"Regulatory status = {r.get('status')} (NID, {snap})"
        elif i == "STALE_DATA":
            if r["coverage"] == "2019":
                f[i] = "Record absent from the 2026 high-hazard extract; newest data is the 2019 full inventory"
            else:
                f[i] = f"Record last updated {r.get('record_updated')}; inventory snapshot {snap} (NID)"
    return f


def score(r: dict) -> dict:
    issues = detect_issues(r)
    s = sub_scores(r, issues)
    dhi, grade, rules = dam_health_index(r, issues, s)
    return {
        "issues": issues,
        "issue_facts": issue_facts(r, issues),
        "scores": {**s, "dhi": dhi},
        "grade": grade,
        "grade_rules": rules,
        "confidence": data_confidence(r),
        "cost": cost_band(r),
    }
