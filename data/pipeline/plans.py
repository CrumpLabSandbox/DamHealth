"""Step 05: renovation plans (1 / 5 / 10 year), plan status and community projections.

Plans are composed from the detected issues using action templates written for two
audiences (community, engineering). Projections are screening-level estimates only.
"""
from __future__ import annotations

import math

ACFT_TO_M3 = 1233.48
FT_TO_M = 0.3048

# --------------------------------------------------------------------------- action templates
# horizon: 1 = Year 1 "Stabilize & know", 5 = Years 2–5 "Fix the deficiencies", 10 = Years 5–10 "Modernize & sustain"
ACTIONS = {
    "COND_UNSAT": [
        (1, "Reduce the risk right now", "Lower the reservoir level, add 24/7 monitoring, and make sure people downstream know the warning signs.",
         "Interim risk-reduction measures (IRRM): pool restriction, increased surveillance frequency, piezometer/seepage weir monitoring, emergency drawdown capability check; issue notice to downstream jurisdictions."),
        (1, "Confirm what is wrong", "Bring in engineers to pin down the exact problem and design a fix.",
         "Issue evaluation study / Potential Failure Mode Analysis (PFMA); geotechnical and hydraulic investigations; 30% design of remedial alternatives."),
        (5, "Fix the deficiency", "Carry out the repair — this is the top priority project for the dam.",
         "Construct remedial measures per the selected alternative (e.g., filtered toe drain / chimney filter, cutoff wall, spillway armoring or enlargement, outlet works replacement). Construction QA/QC and post-construction performance monitoring."),
    ],
    "COND_POOR": [
        (1, "Investigate and design the fix", "Engineers need to study the problem found by inspectors and design a repair.",
         "PFMA and issue evaluation; targeted investigations (seepage, slope stability, spillway capacity vs. inflow design flood); alternatives analysis; funding application (FEMA HHPD, state program)."),
        (5, "Complete the repair", "Fund and build the repair within five years.",
         "Final design, permitting and construction of remedial works; instrumentation upgrade; update O&M manual and EAP for the modified structure."),
    ],
    "COND_FAIR": [
        (5, "Plan for the rare event", "Check how the dam would handle a very large flood or earthquake and fix any weak points.",
         "Hydrologic/hydraulic update to current inflow design flood; seismic screening where applicable; design and schedule upgrades for identified extreme-load deficiencies."),
    ],
    "COND_UNKNOWN": [
        (1, "Get the dam rated", "Ask the state dam safety office to inspect the dam and publish a condition rating.",
         "Perform a Phase 1 / periodic inspection with condition assessment per state program and FEMA P-93; publish rating to NID."),
    ],
    "NO_EAP": [
        (1, "Write an Emergency Action Plan", "Every dam that could kill people needs a written plan to warn and evacuate them. This can be done in months.",
         "Develop EAP per FEMA P-64: inundation mapping (breach analysis), notification flowchart, roles, and distribute to emergency management; conduct a tabletop exercise within 12 months."),
    ],
    "NO_EAP_SIG": [
        (1, "Write an Emergency Action Plan", "A written plan to warn people downstream should be in place within the year.",
         "Develop EAP per FEMA P-64 with simplified inundation mapping; distribute to local emergency management."),
    ],
    "INSPECT_OVERDUE": [
        (1, "Inspect the dam", "An inspection is overdue; schedule one this year.",
         "Perform the required periodic inspection; document findings; update NID record."),
    ],
    "INSPECT_NEVER": [
        (1, "Inspect the dam", "There is no inspection on record; the dam should be inspected this year.",
         "Perform an initial comprehensive inspection and condition assessment; establish an inspection interval."),
    ],
    "AGE_100": [
        (5, "Full modern safety review", "A century-old dam should be fully checked against today's standards.",
         "Comprehensive dam safety review: updated hydrology (PMF/IDF), stability and seepage analyses, filter compatibility assessment, outlet works condition; identify modernization scope."),
        (10, "Modernize or retire", "Decide whether to rebuild the dam to modern standards or remove it.",
         "Execute modernization program (spillway capacity, filters/drains, instrumentation) or decommissioning/removal where the dam no longer serves its purpose."),
    ],
    "AGE_75": [
        (5, "Modern safety review", "Check the dam against today's design standards.",
         "Updated hydrology and stability analyses; evaluate filters and outlet works; schedule upgrades."),
    ],
    "AGE_50": [
        (10, "Life-extension plan", "Plan the upgrades that will keep the dam safe for the next 50 years.",
         "Develop a life-extension and capital plan; prioritize spillway adequacy and seepage control upgrades."),
    ],
    "HAZARD_UNDET": [
        (1, "Determine the hazard class", "Find out what would happen downstream if this dam failed.",
         "Perform hazard potential classification (breach inundation screening) per FEMA P-333; update NID; apply EAP and inspection requirements accordingly."),
    ],
    "HIGH_CONSEQUENCE": [
        (5, "Risk-informed review", "A large dam deserves a deeper, risk-based review and public inundation maps.",
         "Semi-quantitative risk assessment; publish inundation maps to emergency managers; verify spillway and outlet reliability under PMF."),
        (10, "Modern monitoring and alerts", "Install automated monitoring that can alert downstream communities.",
         "Automated instrumentation with telemetry; integrate with local warning systems (IPAWS/WEA); periodic EAP exercises."),
    ],
    "SPILLWAY_UNKNOWN": [
        (1, "Document the spillway", "Record how this dam passes floods and whether it is big enough.",
         "Field verify spillway type and capacity; compare to inflow design flood; update NID."),
    ],
    "PRIVATE_HIGH": [
        (1, "Line up funding", "Private owners can apply for state or FEMA rehabilitation grants; the community can help make the case.",
         "Apply to FEMA HHPD (via state), state loan/grant programs; evaluate ownership transfer or public-private cost share."),
    ],
    "UNREGULATED": [
        (1, "Bring the dam under oversight", "Ask the state dam safety program to confirm jurisdiction over this dam.",
         "Confirm regulatory jurisdiction; enroll in state inspection program; update NID regulatory fields."),
    ],
    "ENFORCEMENT": [
        (1, "Resolve the enforcement action", "Regulators have ordered action; the community can press for compliance.",
         "Comply with regulatory order; document corrective actions; schedule compliance inspection."),
    ],
    "STALE_DATA": [
        (1, "Refresh the record", "Our newest information on this dam is from 2019; the state should publish current data.",
         "Submit current inventory data to NID; confirm hazard class, condition, EAP and inspection date."),
    ],
}

BASELINE = [
    (10, "Keep it maintained", "Routine inspection, vegetation and animal-burrow control, and clear spillways keep a sound dam sound.",
     "Routine O&M: annual owner inspections, vegetation/burrow control, spillway debris removal, outlet exercise, instrumentation readings."),
]


def build_plan(r: dict, issues: list[str]) -> dict:
    seen = set()
    horizons = {1: [], 5: [], 10: []}
    for code in issues:
        for h, title, plain, eng in ACTIONS.get(code, []):
            key = (h, title)
            if key in seen:
                continue
            seen.add(key)
            horizons[h].append({"title": title, "plain": plain, "eng": eng, "from": code})
    if not any(horizons.values()):
        for h, title, plain, eng in BASELINE:
            horizons[h].append({"title": title, "plain": plain, "eng": eng, "from": "BASELINE"})
    return {"year1": horizons[1], "year5": horizons[5], "year10": horizons[10]}


# --------------------------------------------------------------------------- plan status

def plan_status(r: dict, curated: dict | None) -> dict:
    """Combine the 2026 NID status field with any curated research row."""
    if curated:
        return {"status": curated["status"], "program": curated.get("program") or None,
                "amount_usd": curated.get("amount_usd") or None, "year": curated.get("year") or None,
                "source_url": curated.get("source_url") or None, "note": curated.get("note") or None,
                "basis": "curated research"}
    st = r.get("status") or ""
    if st.startswith("Under Remediation"):
        return {"status": "under_construction", "basis": "NID 2026 status: Under Remediation"}
    if st.startswith("Under Investigation"):
        return {"status": "study_or_design", "basis": "NID 2026 status: Under Investigation, Planning, Permitting, or Design for Remediation"}
    if st.startswith("Enforcement"):
        return {"status": "unfunded_identified", "basis": "NID 2026 status: Enforcement Pending/Ongoing"}
    if r.get("condition") in ("Poor", "Unsatisfactory"):
        return {"status": "no_public_plan", "basis": "Deficiency recorded but no remediation status or public plan found"}
    if r["coverage"] in ("both", "2026"):
        return {"status": "none_needed_or_unknown", "basis": "NID 2026 status: " + (st or "not reported")}
    return {"status": "unknown", "basis": "No 2026 data"}


# --------------------------------------------------------------------------- projections

def breach_estimate(r: dict) -> dict | None:
    """Froehlich (1995) peak breach discharge: Qp = 0.607 · Vw^0.295 · hw^1.24 (SI)."""
    st, h = r.get("storage_acft"), r.get("height_ft")
    if not st or not h:
        return None
    vw = st * ACFT_TO_M3
    hw = h * FT_TO_M
    qp = 0.607 * vw ** 0.295 * hw ** 1.24  # m³/s
    qp_cfs = qp * 35.3147
    reach_mi = min(40.0, qp / 1000.0 * 1.0)  # screening heuristic used by the source explorer, widened cap
    if qp_cfs < 5_000:
        band = "Localized flooding below the dam"
    elif qp_cfs < 50_000:
        band = "Serious flooding for several miles downstream"
    elif qp_cfs < 500_000:
        band = "Destructive flood wave for many miles downstream"
    else:
        band = "Catastrophic regional flood"
    return {"peak_discharge_cfs": round(qp_cfs, -2), "reach_band": band, "reach_miles_screening": round(reach_mi, 1),
            "method": "Froehlich (1995) empirical breach equation; screening only"}


# NCA5 regions and a qualitative extreme-precipitation outlook.
CLIMATE_REGION = {
    **dict.fromkeys(["CT", "DE", "ME", "MD", "MA", "NH", "NJ", "NY", "PA", "RI", "VT", "WV", "DC"], "Northeast"),
    **dict.fromkeys(["AL", "AR", "FL", "GA", "KY", "LA", "MS", "NC", "SC", "TN", "VA"], "Southeast"),
    **dict.fromkeys(["IL", "IN", "IA", "MI", "MN", "MO", "OH", "WI"], "Midwest"),
    **dict.fromkeys(["KS", "MT", "NE", "ND", "SD", "WY"], "Northern Great Plains"),
    **dict.fromkeys(["OK", "TX"], "Southern Great Plains"),
    **dict.fromkeys(["AZ", "CA", "CO", "NV", "NM", "UT"], "Southwest"),
    **dict.fromkeys(["ID", "OR", "WA"], "Northwest"),
    "AK": "Alaska", "HI": "Hawaii and Pacific Islands", "PR": "U.S. Caribbean", "VI": "U.S. Caribbean",
    "GU": "Hawaii and Pacific Islands", "AS": "Hawaii and Pacific Islands", "MP": "Hawaii and Pacific Islands",
}
CLIMATE_OUTLOOK = {
    "Northeast": "The Northeast has seen the largest increase in heavy-precipitation events of any U.S. region (~60% since the 1950s), and further increases are projected. Spillways designed to mid-20th-century floods are most exposed here.",
    "Southeast": "Heavy rainfall and hurricane-driven extreme precipitation are increasing; slow-moving tropical systems (e.g., Harvey, Florence, Helene) have overtopped or failed dozens of dams. Spillway capacity is the critical question.",
    "Midwest": "Spring and summer extreme rainfall is increasing, with repeated record floods (2008, 2019, 2024). Many small earthen dams and aging mill dams face overtopping and internal-erosion risk.",
    "Northern Great Plains": "Rapid snowmelt and intense convective storms drive flood risk; 2011 and 2019 floods failed multiple dams (e.g., Spencer Dam). Ice loading and spring flows stress older structures.",
    "Southern Great Plains": "Among the highest short-duration rainfall intensities in the country, projected to increase. Thousands of NRCS-era flood-control dams are reaching the end of design life.",
    "Southwest": "Longer droughts punctuated by intense atmospheric-river and monsoon storms; sediment-laden runoff and post-wildfire debris flows reduce spillway capacity. Seismic hazard is significant for many dams.",
    "Northwest": "Atmospheric rivers deliver increasingly intense multi-day rainfall; rain-on-snow events and Cascadia seismic hazard both bear on dam safety.",
    "Alaska": "Warming permafrost, glacial-lake outbursts and changing snowmelt timing affect embankment foundations and inflows.",
    "Hawaii and Pacific Islands": "Intense tropical rainfall on steep catchments; the 2006 Ka Loko failure showed how quickly small reservoirs can overtop.",
    "U.S. Caribbean": "Hurricane rainfall intensity is increasing; Hurricane Maria (2017) nearly failed Guajataca Dam's spillway.",
}

SERVICES = {
    "Water Supply": "drinking or industrial water supply",
    "Irrigation": "irrigation water for farms",
    "Hydroelectric": "electricity generation",
    "Flood Risk Reduction": "flood protection for downstream communities",
    "Navigation": "river navigation",
    "Recreation": "a lake used for recreation and property values around it",
    "Fire Protection, Stock, or Small Farm Pond": "fire protection or livestock water",
    "Fish and Wildlife Pond": "fish and wildlife habitat",
    "Tailings": "containment of mine tailings",
    "Debris Control": "debris and sediment control",
    "Grade Stabilization": "erosion control",
}


def projections(r: dict, issues: list[str], grade: str) -> dict:
    region = CLIMATE_REGION.get(r["state"], "United States")
    services = [SERVICES[p] for p in (r.get("purposes") or []) if p in SERVICES]
    breach = breach_estimate(r)
    outlook = []
    if r["hazard"] == "High":
        outlook.append("Failure would likely cause loss of life downstream (High hazard classification).")
    elif r["hazard"] == "Significant":
        outlook.append("Failure would likely cause economic loss or environmental damage but probably not loss of life (Significant hazard).")
    if any(i.startswith("COND_") and i != "COND_FAIR" for i in issues) and "COND_UNKNOWN" not in issues:
        outlook.append("Without funded repairs, the identified deficiency will worsen; the next decade's extreme storms are the most likely trigger for a failure.")
    if "COND_UNKNOWN" in issues:
        outlook.append("The community cannot judge its own risk until a condition rating is published.")
    if "NO_EAP" in issues or "NO_EAP_SIG" in issues:
        outlook.append("If the dam fails there is currently no plan for who warns whom; evacuation would be improvised.")
    if any(i.startswith("AGE_") for i in issues):
        outlook.append("The dam predates modern flood and filter design criteria; expect a safety review to find upgrades needed.")
    if services:
        outlook.append("Losing or lowering this reservoir would affect " + ", ".join(services) + ".")
    if r.get("county_pop_2023"):
        outlook.append(f"{r['county_pop_2023']:,} people live in {r.get('county_full_name') or r.get('county')} (county population — the true downstream population is usually much smaller and depends on inundation mapping).")
    return {
        "climate_region": region,
        "climate_outlook": CLIMATE_OUTLOOK.get(region, ""),
        "services_at_stake": services,
        "breach": breach,
        "ten_year_outlook": outlook,
    }
