export type Grade = 'A' | 'B' | 'C' | 'D' | 'F'
export type HazardCode = 'H' | 'S' | 'L' | 'U' | 'N'
export type CondCode = 'S' | 'F' | 'P' | 'U' | 'N' | ''
export type Lens = 'community' | 'engineering'

export const HAZARD_LABEL: Record<HazardCode, string> = {
  H: 'High', S: 'Significant', L: 'Low', U: 'Undetermined', N: 'Not Available',
}
export const COND_LABEL: Record<CondCode, string> = {
  S: 'Satisfactory', F: 'Fair', P: 'Poor', U: 'Unsatisfactory', N: 'Not Rated', '': 'No rating',
}

/** Row of index.json: [id, name, st, lat, lon, hz, cond, grade, dhi] */
export interface IndexRow {
  id: string
  name: string
  st: string
  lat: number | null
  lon: number | null
  hz: HazardCode
  cond: CondCode
  grade: Grade
  dhi: number
}

/** Row of a state file / leaderboard: IndexRow + extras */
export interface ListRow extends IndexRow {
  year: number | null
  height_ft: number | null
  storage_acft: number | null
  county: string | null
  river: string | null
  n_issues: number
  plan_status: PlanStatusCode
  eap: string | null
}

export type PlanStatusCode =
  | 'funded' | 'study_or_design' | 'under_construction' | 'completed'
  | 'unfunded_identified' | 'no_public_plan' | 'none_needed_or_unknown' | 'unknown'

export interface IssueMeta { sev: number; group: 'condition' | 'readiness' | 'consequence'; title: string; plain: string; eng: string }
export interface ActionTemplate { horizon: 1 | 5 | 10; title: string; plain: string; eng: string }

export interface Catalog {
  issues: Record<string, IssueMeta>
  actions: Record<string, ActionTemplate[]>
  baseline: ActionTemplate[]
  climate_region: Record<string, string>
  climate_outlook: Record<string, string>
  plan_status_labels: Record<PlanStatusCode, string>
  grade_bounds: [number, Grade][]
  state_names: Record<string, string>
  snapshot_dates: { nid_full: string; nid_high_hazard: string; census: string }
}

export interface Rollup {
  dams: number
  grades: Record<Grade, number>
  hazard: Record<string, number>
  condition: Record<string, number>
  high_hazard: number
  high_poor_unsat: number
  high_not_rated: number
  high_no_eap: number
  issues: Record<string, number>
  plan_status: Partial<Record<PlanStatusCode, number>>
  mean_dhi: number | null
  median_year: number | null
  cost_low_usd: number
  cost_high_usd: number
  storage_acft: number
}

export interface Summary {
  national: Rollup
  states: Record<string, Rollup & { name: string }>
  worst_national: unknown[][]
  worst_high_hazard_unsat: unknown[][]
  largest_no_eap: unknown[][]
  shard_size: number
  columns: string[]
}

export interface StateFile {
  state: string
  name: string
  rollup: Rollup
  columns: string[]
  worst: unknown[][]
  rows: unknown[][]
}

export interface Dam {
  nid_id: string
  name: string
  other_names: string[]
  state: string
  state_name: string
  county: string | null
  county_full_name: string | null
  county_pop_2023: number | null
  city: string | null
  city_distance_mi: number | null
  river: string | null
  lat: number | null
  lon: number | null
  owner_name: string | null
  owner_types: string[]
  private_dam?: boolean
  designer?: string | null
  dam_types: string[]
  family: 'embankment' | 'gravity' | 'arch' | 'buttress' | 'other'
  core?: string | null
  foundation?: string | null
  purposes: string[]
  year_completed: number | null
  year_modified?: number | null
  length_ft?: number | null
  height_ft: number | null
  structural_height_ft?: number | null
  hydraulic_height_ft?: number | null
  max_discharge_cfs?: number | null
  storage_acft: number | null
  max_storage_acft?: number | null
  normal_storage_acft?: number | null
  surface_area_ac?: number | null
  drainage_area_sqmi?: number | null
  hazard: 'High' | 'Significant' | 'Low' | 'Undetermined' | 'Not Available'
  hazard_note?: string | null
  condition: 'Satisfactory' | 'Fair' | 'Poor' | 'Unsatisfactory' | 'Not Rated' | null
  condition_date: string | null
  eap: 'Yes' | 'No' | 'Not Required' | null
  eap_last_revision?: string | null
  inspection_date: string | null
  inspection_frequency_yrs?: number | null
  state_regulated?: boolean
  state_reg_agency?: string | null
  jurisdictional?: boolean
  spillway_type?: string | null
  spillway_width_ft?: number | null
  outlet_gates?: string | null
  volume_cy?: number | null
  federal_roles: string[]
  source_agency?: string | null
  url?: string | null
  cong_district?: string | null
  cong_rep_2019?: string | null
  status: string | null
  coverage: 'both' | '2019' | '2026'
  attr_date: string
  merge_note?: string | null
  issues: string[]
  scores: { condition: number; readiness: number; consequence: number; dhi: number }
  grade: Grade
  grade_rules: string[]
  confidence: 'high' | 'medium' | 'low'
  cost: { low_usd: number; high_usd: number; basis: string } | null
  plan_status: { status: PlanStatusCode; basis?: string; program?: string | null; amount_usd?: string | number | null; year?: string | number | null; source_url?: string | null; note?: string | null }
  projections: {
    climate_region: string
    services_at_stake: string[]
    breach: { peak_discharge_cfs: number; reach_band: string; reach_miles_screening: number; method: string } | null
    ten_year_outlook: string[]
  }
}
