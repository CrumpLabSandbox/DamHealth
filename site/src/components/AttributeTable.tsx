import { fmtDate, fmtInt, fmtNum } from '../lib/format'
import { useLens } from '../lib/lens'
import type { Dam } from '../lib/types'

export default function AttributeTable({ dam }: { dam: Dam }) {
  const { lens } = useLens()
  const eng = lens === 'engineering'
  const rows: [string, string | null | undefined][] = [
    ['Type', dam.dam_types.join(', ') || '—'],
    ['Purposes', dam.purposes.join(', ') || '—'],
    ['Completed', dam.year_completed ? String(dam.year_completed) : '—'],
    ['Modified', dam.year_modified ? String(dam.year_modified) : '—'],
    ['Height', dam.height_ft ? `${fmtInt(dam.height_ft)} ft` : '—'],
    ['Length', dam.length_ft ? `${fmtInt(dam.length_ft)} ft` : '—'],
    ['Max storage', dam.storage_acft ? `${fmtInt(dam.storage_acft)} acre-feet` : '—'],
    ['Normal storage', dam.normal_storage_acft ? `${fmtInt(dam.normal_storage_acft)} acre-feet` : null],
    ['Surface area', dam.surface_area_ac ? `${fmtInt(dam.surface_area_ac)} acres` : null],
    ['Drainage area', dam.drainage_area_sqmi ? `${fmtNum(dam.drainage_area_sqmi)} sq mi` : null],
    ['Spillway', dam.spillway_type ? `${dam.spillway_type}${dam.spillway_width_ft ? `, ${fmtInt(dam.spillway_width_ft)} ft wide` : ''}` : '—'],
    ['Max discharge', dam.max_discharge_cfs ? `${fmtInt(dam.max_discharge_cfs)} cfs` : null],
    ['Core', eng ? dam.core ?? '—' : null],
    ['Foundation', eng ? dam.foundation ?? '—' : null],
    ['Designer', dam.designer ?? null],
    ['Hazard potential', dam.hazard],
    ['Condition', dam.condition ? `${dam.condition}${dam.condition_date ? ` (as of ${fmtDate(dam.condition_date)})` : ''}` : 'Not available'],
    ['Emergency Action Plan', dam.eap ? `${dam.eap}${dam.eap_last_revision ? `, revised ${fmtDate(dam.eap_last_revision)}` : ''}` : '—'],
    ['Last inspection', dam.inspection_date ? `${fmtDate(dam.inspection_date)}${dam.inspection_frequency_yrs ? ` (every ${dam.inspection_frequency_yrs} yr)` : ''}` : 'None on record'],
    ['Operational status', dam.status ?? null],
    ['Nearest city', dam.city ? `${dam.city}${dam.city_distance_mi ? `, ${fmtNum(dam.city_distance_mi)} mi` : ''}` : null],
    ['County population (2023)', dam.county_pop_2023 ? fmtInt(dam.county_pop_2023) : null],
    ['Coordinates', eng && dam.lat != null ? `${dam.lat.toFixed(4)}, ${dam.lon?.toFixed(4)}` : null],
    ['Record provenance', eng ? dam.coverage === 'current' ? `National Inventory of Dams, data as of ${dam.attr_date}${dam.record_updated ? `; record last updated ${fmtDate(dam.record_updated)}` : ''}` : `${dam.coverage === 'both' ? '2019 inventory + 2026 high-hazard extract' : dam.coverage === '2026' ? '2026 high-hazard extract only' : '2019 inventory only'} (as of ${dam.attr_date})` : null],
  ]
  return (
    <dl className="attr">
      {rows.filter(([, v]) => v != null).map(([k, v]) => (
        <div key={k} style={{ display: 'contents' }}><dt>{k}</dt><dd>{v}</dd></div>
      ))}
    </dl>
  )
}
