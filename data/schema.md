# DamHealth canonical dam record

One JSON object per dam, keyed by `nid_id`. Built by `data/pipeline/build_dataset.py` from:

| Source | Snapshot | Records | Fields |
|---|---|---|---|
| USACE National Inventory of Dams, full export (mirror: `bcongdon/nid-data`) | 2019 | 91,457 | 70 raw columns |
| USACE NID high-hazard-potential extract (mirror: `kalchikee/dam-failure-explorer`) | 2026-03-15 | 16,805 | 23 fields incl. condition, EAP, last inspection |

Merge rule: records are joined on NID ID. For dams in both, the 2026 value replaces the 2019 value for every field the 2026 extract carries (`name, county, city, river, lat, lon, owner_name, owner_types, dam_types, purposes, year_completed, height_ft, max_storage_acft, hazard, condition, condition_date, eap, inspection_date, status`). All other fields come from 2019. `coverage` records which snapshots a dam appears in; `attr_date` is the date of the most recent snapshot that touched the record.

## Identity and location
| Field | Type | Notes |
|---|---|---|
| `nid_id` | string | Official NID ID, e.g. `CA00232`. |
| `name` | string | Title-cased dam name. |
| `other_names` | string[] | Alternate / former names (2019). |
| `state`, `state_name` | string | Two-letter code and full name. |
| `county`, `county_full_name` | string? | NID county; Census county name when matched. |
| `county_pop_2023` | int? | Census Vintage 2023 county population estimate (context figure, not downstream population). |
| `city`, `city_distance_mi` | string?, number? | Nearest city and distance (2019). |
| `river` | string? | River or stream. |
| `lat`, `lon`, `has_coords` | number?, number?, bool | WGS84. |
| `cong_district`, `cong_rep_2019` | string? | Congressional district and representative as of 2019 (historical). |

## Ownership and regulation
| Field | Type | Notes |
|---|---|---|
| `owner_name` | string? | |
| `owner_types` | string[] | Federal, State, Local Government, Public Utility, Private, Not Listed. |
| `private_dam` | bool | 2019 flag. |
| `state_regulated`, `state_reg_agency` | bool, string? | |
| `jurisdictional`, `permitting_authority`, `inspection_authority`, `enforcement_authority` | bool | 2019 flags. |
| `federal_roles` | string[] | e.g. `"Regulatory: FERC"`. |
| `source_agency` | string? | Agency that submitted the record. |
| `url` | string? | Owner/agency URL from NID. |

## Structure
| Field | Type | Notes |
|---|---|---|
| `dam_types` | string[] | Primary first: Earth, Rockfill, Gravity, Buttress, Arch, Multi-Arch, Concrete, Masonry, Stone, Timber Crib, Roller-Compacted Concrete, Other. |
| `family` | string | Schematic family derived from primary type: `embankment`, `gravity`, `arch`, `buttress`, `other`. |
| `core`, `foundation` | string? | Decoded NID core/foundation codes (2019). |
| `designer` | string? | |
| `year_completed`, `year_modified` | int? | |
| `height_ft` | number? | NID height (max of structural/hydraulic). |
| `structural_height_ft`, `hydraulic_height_ft`, `length_ft` | number? | |
| `storage_acft` | number? | Best available storage: max → NID → normal. |
| `max_storage_acft`, `normal_storage_acft`, `nid_storage_acft` | number? | acre-feet. |
| `surface_area_ac`, `drainage_area_sqmi`, `max_discharge_cfs`, `volume_cy` | number? | |
| `spillway_type`, `spillway_width_ft`, `outlet_gates` | string?, number?, string? | Controlled / Uncontrolled / None. |
| `number_of_locks`, `num_structures` | int? | |
| `purposes` | string[] | Flood Risk Reduction, Water Supply, Hydroelectric, Irrigation, Recreation, Navigation, Tailings, Debris Control, Fish and Wildlife Pond, Fire Protection/Stock/Small Farm Pond, Grade Stabilization, Other. |

Zero values in NID measurements mean "unknown" and are stored as `null`.

## Safety
| Field | Type | Notes |
|---|---|---|
| `hazard` | string | High, Significant, Low, Undetermined, Not Available. Describes consequences of failure, **not** condition. |
| `hazard_note` | string? | Set when a dam was High in 2019 but absent from the 2026 high-hazard extract. |
| `condition`, `condition_date` | string?, string? | Satisfactory, Fair, Poor, Unsatisfactory, Not Rated. Only populated from the 2026 extract (high-hazard dams); `Not Rated` is also assigned to Significant-hazard dams without a rating. `null` means no rating is available in our sources. |
| `eap`, `eap_last_revision` | string?, string? | Emergency Action Plan: Yes, No, Not Required. |
| `inspection_date`, `inspection_frequency_yrs` | string?, int? | Last inspection; required frequency (2019). |
| `status` | string? | 2026 regulatory status: Normal Operations; Under Investigation, Planning, Permitting, or Design for Remediation; Under Remediation; Enforcement Pending/Ongoing; Not Applicable. |

## Provenance
| Field | Type | Notes |
|---|---|---|
| `coverage` | string | `both`, `2019`, `2026`. |
| `attr_date` | string | ISO date of the newest snapshot that touched the record. |

Scoring fields (`issues`, `scores`, `grade`, `plan`, `projections`) are added by `score_and_plan.py`; see `data/methodology.md`.
