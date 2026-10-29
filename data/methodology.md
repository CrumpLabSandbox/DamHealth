# Methodology: the Dam Health Index

DamHealth turns public inventory data into a transparent, reproducible screening indicator for every dam in the U.S. National Inventory of Dams (NID). **It is not an engineering assessment.** It cannot see cracks, seepage or spillway erosion; it can only read what regulators have published. Its purpose is to help communities ask the right questions and to help engineers prioritize where to look.

## 1. Data

| Source | Snapshot | Dams | What it gives us |
|---|---|---|---|
| NID full national export, downloaded from nid.sec.usace.army.mil on every build | the file's "Data Last Updated" date (27 Oct 2026 for the build these figures come from) | 91,907 | Location, structure, owner, purposes, hazard class, **condition assessment**, EAP, inspection date & frequency, regulator, operational status, spillway, foundation, congressional district |
| Census Vintage 2023 | 2023 | 3,143 counties | County population as a context figure |
| Curated research | 2024–2026 | ~130 dams | Funded/completed rehabilitation projects, case studies, funding programs |

Every record carries `coverage` (`current`) and `attr_date`, the snapshot date printed on the first line of the export, plus `record_updated`, the date the state or agency last updated that dam's entry. Associated structures (dikes, auxiliary spillways) that share a parent dam's NID ID are folded into the main structure. Condition ratings now cover every hazard class where the state reports one; where none is published we say so rather than guess.

If the official download fails, the build falls back to the 2019 full export joined with the March 2026 high-hazard extract (both from GitHub mirrors), labels those records `2019`, `2026` or `both`, and the CI run shows a warning.

## 2. Issues

An issue is a yes/no flag derived from inventory fields, with a severity tier (1 note … 5 critical) and a group.

| Code | Trigger | Sev | Group |
|---|---|---|---|
| COND_UNSAT | Condition = Unsatisfactory | 5 | condition |
| COND_POOR | Condition = Poor | 4 | condition |
| COND_FAIR | Condition = Fair | 2 | condition |
| COND_UNKNOWN | High/Significant hazard with no rating | 3 | condition |
| COND_FEDERAL_UNPUBLISHED | Same, but federally owned/regulated (USACE/Reclamation ratings are not reported to NID); condition base 25 | 1 | condition |
| NO_EAP / NO_EAP_SIG | EAP = No, High / Significant hazard | 4 / 3 | readiness |
| INSPECT_OVERDUE | Last inspection older than required interval + 1 yr grace (5 yrs if unknown), judged at the snapshot date | 3 | readiness |
| INSPECT_NEVER | No inspection date, High/Significant hazard | 3 | readiness |
| AGE_100 / AGE_75 / AGE_50 | Age thresholds with no modification in the last 25 years | 3 / 2 / 1 | condition |
| HAZARD_UNDET | Hazard Undetermined / Not Available | 2 | readiness |
| HIGH_CONSEQUENCE | High hazard and (storage ≥ 50,000 ac-ft or height ≥ 100 ft) | 3 | consequence |
| SPILLWAY_UNKNOWN | High hazard, spillway type not recorded | 1 | condition |
| PRIVATE_HIGH | Private owner, High hazard, condition ≤ Fair | 2 | readiness |
| UNREGULATED | High/Significant hazard, no state or federal regulator recorded | 3 | readiness |
| ENFORCEMENT | NID status = Enforcement Pending/Ongoing | 3 | readiness |
| STALE_DATA | The dam's NID record was last updated more than five years before the snapshot (legacy build: record only in the 2019 snapshot) | 1 | readiness |

## 3. Sub-scores (0 = best, 100 = worst)

- **Condition** = base by rating (Unsatisfactory 100, Poor 80, Fair 45, Satisfactory 10, Not Rated/unknown 50) + age bonus (+15 / +10 / +5), capped at 100.
- **Readiness** = sum of weights for readiness issues (No EAP 50 / 35, overdue 25, never inspected 30, undetermined hazard 20, unregulated 30, private 15, enforcement 30, stale 5), capped at 100.
- **Consequence** = hazard base (High 70, Significant 40, Undetermined 30, Not Available 20, Low 10) + storage bump (≥1M ac-ft +30, ≥100k +20, ≥10k +10, ≥1k +5) + height bump (≥200 ft +15, ≥100 +10, ≥50 +5), capped at 100.

## 4. Dam Health Index and grade

```
DHI = 0.70 × Condition × (0.5 + 0.5 × Consequence/100) + 0.30 × Readiness
```

Condition drives the index; consequence scales it (a Poor dam above a town scores worse than a Poor farm pond); readiness adds on top. Grades: **A** < 20, **B** 20–29, **C** 30–44, **D** 45–59, **F** ≥ 60.

Hard rules override the arithmetic:
- Unsatisfactory + High hazard ⇒ **F**
- Unsatisfactory (any hazard) ⇒ at least **D**
- Poor + High hazard ⇒ at least **D**
- High hazard with no EAP ⇒ at least **C**
- Low hazard with no condition data ⇒ capped at **C**

**Confidence**: `high` when a condition rating (Satisfactory to Unsatisfactory) exists; `medium` when there is no rating but the record has an inspection date or a construction year; `low` otherwise. A low-confidence B means "nothing bad is on record", not "this dam is fine".

### Result (NID snapshot 27 Oct 2026)
| Grade | All dams | High-hazard dams |
|---|---|---|
| A | 25,047 | 4,887 |
| B | 40,367 | 1,788 |
| C | 17,942 | 4,474 |
| D | 6,586 | 3,637 |
| F | 1,965 | 1,758 |

Only high-hazard dams can earn an A because only they have published condition ratings. Federal dams (USACE, Reclamation) are assessed under their agencies' own risk programs that are not reported to NID; they carry the low-severity `COND_FEDERAL_UNPUBLISHED` flag rather than being penalized for a missing rating.

## 5. Cost bands

Planning-level, order-of-magnitude bands adapted from the structure (size × condition × hazard) of ASDSO's *Cost of Rehabilitating Dams in the U.S.* method. Base range by height (< 25 ft $0.4–2M; 25–50 ft $1–5M; 50–100 ft $3–15M; 100–200 ft $10–60M; > 200 ft $50–300M) × condition factor (Unsatisfactory 1.5, Poor 1.2, Not Rated 0.8, Fair 0.7, unknown 0.5, Satisfactory 0.3) × storage factor (≥ 1M ac-ft 2.0, ≥ 100k 1.5) × 1.2 for High hazard. National sum: $77B–$416B, bracketing ASDSO's 2025 estimate of $165.2B for non-federal dams. **Never use a band to budget a specific dam.**

## 6. Plans

Each issue maps to actions in three horizons — Year 1 *Stabilize & know*, Years 2–5 *Fix the deficiencies*, Years 5–10 *Modernize & sustain* — each written twice: for community members and for engineers (with references to FEMA P-64 EAPs, FEMA P-93 inspection guidelines, FEMA P-333 hazard classification, PFMA/risk-informed practice).

**Plan status** combines the NID operational status (Under Remediation ⇒ `under_construction`; Under Investigation/Planning/Design ⇒ `study_or_design`; Enforcement ⇒ `unfunded_identified`) with curated research on funded projects (`funded`, `completed`). A Poor/Unsatisfactory dam with neither is `no_public_plan` — the advocacy gap this site exists to close.

## 7. Projections

- **Breach screening**: Froehlich (1995) peak discharge, Qp = 0.607 · Vw^0.295 · hw^1.24 (SI), banded into plain-language reach descriptions. Not a substitute for inundation mapping.
- **Climate stress**: the dam's NCA5 region and its documented extreme-precipitation trend.
- **Services at stake**: from NID purposes.
- **People**: county population as an upper-bound context figure; true downstream population requires inundation maps that are not public for most dams.

## 8. Limitations
Condition ratings are self-reported by states and agencies and 3,515 high-hazard dams carry none; 14,665 dams have a record that has not been updated in more than five years; NID stores 0 for unknown measurements; owner and regulator fields are incomplete; our cost bands and breach estimates are screening heuristics. All code is in `data/pipeline/` and every number on the site can be regenerated from the sources above.
