import { fmtDate } from '../lib/format'
import type { Catalog, Dam } from '../lib/types'

const SHOWN: [string, string][] = [
  ['name', 'Name'], ['hazard', 'Hazard potential'], ['condition', 'Condition assessment'], ['eap', 'Emergency Action Plan'],
  ['inspection_date', 'Last inspection'], ['year_completed', 'Year completed'], ['year_modified', 'Year modified'],
  ['height_ft', 'Height'], ['storage_acft', 'Storage'], ['dam_types', 'Dam type'], ['purposes', 'Purposes'],
  ['owner_name', 'Owner'], ['owner_types', 'Owner type'], ['state_reg_agency', 'State regulator'], ['spillway_type', 'Spillway'],
  ['foundation', 'Foundation'], ['status', 'Regulatory status'], ['lat', 'Coordinates'], ['county_pop_2023', 'County population'],
]

function sourceOf(field: string, dam: Dam, cat: Catalog): string {
  const fs = cat.field_sources
  if (fs.computed.includes(field)) return 'computed'
  if (fs.census2023.includes(field)) return 'census2023'
  if (dam.coverage === 'current') return 'nidcurrent'
  if (dam.coverage === '2026') return 'nid2026hh'
  if (dam.coverage === 'both' && fs.nid2026hh.includes(field)) return 'nid2026hh'
  return 'nid2019'
}

function show(v: unknown): string {
  if (v == null || v === '') return '—'
  if (Array.isArray(v)) return v.join(', ') || '—'
  if (typeof v === 'number') return Number.isInteger(v) && v >= 1500 && v <= 2100 ? String(v) : v.toLocaleString('en-US')
  return String(v)
}

/** Field-by-field provenance for everything stated about this dam. */
export default function SourcesPanel({ dam, catalog, wiki }: { dam: Dam; catalog: Catalog; wiki?: { title: string; url: string } | null }) {
  const official = `https://nid.sec.usace.army.mil/#/dams/system/${dam.nid_id}/summary`
  const src = catalog.sources
  const link = (id: string) => {
    const s = src[id]
    if (!s) return id
    const href = id.startsWith('nid') ? official : s.url
    return <a href={href} rel="noopener">{id === 'nid2019' ? 'NID 2019' : id === 'nid2026hh' || id === 'nidcurrent' ? `NID ${s.snapshot}` : id === 'census2023' ? 'Census 2023' : id === 'computed' ? 'Computed by DamHealth' : s.name}</a>
  }
  return (
    <div>
      <p className="small">
        Every fact on this page comes from the official <a href={official} rel="noopener">National Inventory of Dams record {dam.nid_id}</a>, read from the snapshots below. Grades, scores, cost bands, breach estimates and plans are <strong>computed by DamHealth</strong> from those facts and are not statements by any agency.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table className="data small">
          <thead><tr><th>Field</th><th>Value</th><th>Source</th></tr></thead>
          <tbody>
            {SHOWN.filter(([f]) => f in dam || f === 'lat').map(([f, label]) => {
              const id = sourceOf(f, dam, catalog)
              const val = f === 'lat' ? (dam.lat != null ? `${dam.lat.toFixed(4)}, ${dam.lon?.toFixed(4)}` : '—') : f === 'inspection_date' ? fmtDate(dam.inspection_date) : f === 'condition' && dam.condition ? `${dam.condition}${dam.condition_date ? ` (${fmtDate(dam.condition_date)})` : ''}` : show((dam as unknown as Record<string, unknown>)[f])
              return <tr key={f}><td>{label}</td><td>{val}</td><td>{link(id)}</td></tr>
            })}
            <tr><td>Issues</td><td>{dam.issues.length} flags, each with its triggering field below</td><td>{link('computed')}</td></tr>
            <tr><td>Grade / Dam Health Index</td><td>{dam.grade} / {dam.scores.dhi}</td><td>{link('computed')} (<a href={`${import.meta.env.BASE_URL}methodology`}>method</a>)</td></tr>
            <tr><td>Cost band, breach estimate, plan, projections</td><td>screening estimates</td><td>{link('computed')}</td></tr>
            <tr><td>Plan status</td><td>{catalog.plan_status_labels[dam.plan_status.status]}{dam.plan_status.basis && <span className="muted"> — {dam.plan_status.basis}</span>}</td><td>{dam.plan_status.source_url ? <><a href={dam.plan_status.source_url} rel="noopener">{dam.plan_status.program ?? 'cited source'}</a>{dam.plan_status.match === 'name' && <span className="muted"> (attached by dam name; not yet confirmed — <a href={`${import.meta.env.BASE_URL}data-health#research`}>Data health</a>)</span>}</> : dam.plan_status.basis?.startsWith('NID') ? link(dam.coverage === 'current' ? 'nidcurrent' : dam.coverage === '2019' ? 'nid2019' : 'nid2026hh') : link('computed')}</td></tr>
            {wiki && <tr><td>Photo and background text</td><td>{wiki.title}</td><td><a href={wiki.url} rel="noopener">Wikipedia</a> (matched at runtime by name and state; may be wrong — check the title)</td></tr>}
          </tbody>
        </table>
      </div>
      {dam.issues.length > 0 && (
        <details style={{ marginTop: 8 }}>
          <summary className="small">What triggered each issue</summary>
          <ul className="small">
            {dam.issues.map((code) => <li key={code}><strong>{catalog.issues[code]?.title ?? code}:</strong> {dam.issue_facts?.[code] ?? '—'}</li>)}
          </ul>
        </details>
      )}
      <p className="small muted" style={{ marginTop: 8 }}>
        Snapshots: {Object.values(src).filter((s) => s.id !== 'computed' && s.id !== 'curated').map((s) => <span key={s.id}>{s.name} ({s.snapshot}{s.mirror_commit ? <>, <a href={`${s.mirror}/tree/${s.mirror_commit}`} rel="noopener">commit {s.mirror_commit.slice(0, 7)}</a></> : ''}); </span>)}
        {dam.record_updated ? <>state last updated this record {dam.record_updated}.</> : <>record last touched {dam.attr_date}.</>}
      </p>
    </div>
  )
}
