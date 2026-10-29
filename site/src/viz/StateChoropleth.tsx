import { geoAlbersUsa, geoPath } from 'd3-geo'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { feature } from 'topojson-client'
import type { Topology, GeometryCollection } from 'topojson-specification'
import { fmtInt } from '../lib/format'
import type { Rollup } from '../lib/types'

type Metric = 'high_poor_unsat' | 'high_no_eap' | 'high_hazard' | 'high_not_rated' | 'df_share'
const METRICS: { key: Metric; label: string }[] = [
  { key: 'high_poor_unsat', label: 'High-hazard dams in Poor/Unsatisfactory condition' },
  { key: 'high_no_eap', label: 'High-hazard dams with no Emergency Action Plan' },
  { key: 'high_not_rated', label: 'High-hazard dams with no condition rating' },
  { key: 'high_hazard', label: 'High-hazard dams' },
  { key: 'df_share', label: 'Share of high-hazard dams graded D or F' },
]
const FIPS: Record<string, string> = { '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA', '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL', '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN', '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME', '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS', '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH', '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND', '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI', '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', '49': 'UT', '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI', '56': 'WY', '72': 'PR' }
const RAMP = ['var(--seq-100)', 'var(--seq-200)', 'var(--seq-300)', 'var(--seq-400)', 'var(--seq-500)', 'var(--seq-600)', 'var(--seq-700)']

let topoPromise: Promise<Topology> | null = null
const loadTopo = () => (topoPromise ??= import('us-atlas/states-10m.json').then((m) => (m.default ?? m) as unknown as Topology))

function value(s: Rollup, m: Metric): number {
  if (m === 'df_share') return s.high_hazard ? (100 * ((s.grades.D ?? 0) + (s.grades.F ?? 0))) / s.high_hazard : 0
  return s[m] as number
}

export default function StateChoropleth({ states, metric: initial = 'high_poor_unsat' }: { states: Record<string, Rollup & { name: string }>; metric?: Metric }) {
  const [metric, setMetric] = useState<Metric>(initial)
  const [topo, setTopo] = useState<Topology | null>(null)
  const [hover, setHover] = useState<string | null>(null)
  const [table, setTable] = useState(false)
  const nav = useNavigate()
  useEffect(() => { loadTopo().then(setTopo) }, [])

  const { features, path, breaks } = useMemo(() => {
    if (!topo) return { features: [], path: null, breaks: [] as number[] }
    const fc = feature(topo, topo.objects.states as GeometryCollection)
    const projection = geoAlbersUsa().scale(1100).translate([480, 300])
    const path = geoPath(projection)
    const vals = Object.values(states).map((s) => value(s, metric)).filter((v) => v > 0).sort((a, b) => a - b)
    const q = (p: number) => vals[Math.min(vals.length - 1, Math.floor(p * vals.length))] ?? 0
    const breaks = [q(1 / 7), q(2 / 7), q(3 / 7), q(4 / 7), q(5 / 7), q(6 / 7)]
    return { features: fc.features, path, breaks }
  }, [topo, states, metric])

  const bin = (v: number) => (v <= 0 ? -1 : breaks.findIndex((b) => v <= b) === -1 ? 6 : breaks.findIndex((b) => v <= b))
  const label = METRICS.find((m) => m.key === metric)!.label
  const fmt = (v: number) => (metric === 'df_share' ? `${v.toFixed(0)}%` : fmtInt(v))

  const rows = Object.entries(states).map(([st, s]) => ({ st, name: s.name, v: value(s, metric) })).sort((a, b) => b.v - a.v)

  return (
    <div>
      <div className="row" style={{ marginBottom: 8 }}>
        <label className="small">Show{' '}
          <select value={metric} onChange={(e) => setMetric(e.target.value as Metric)}>
            {METRICS.map((m) => <option key={m.key} value={m.key}>{m.label}</option>)}
          </select>
        </label>
        <button className="btn btn-sm" onClick={() => setTable(!table)}>{table ? 'Show map' : 'Show as table'}</button>
      </div>
      {table ? (
        <table className="data"><thead><tr><th>State</th><th className="num">{label}</th></tr></thead>
          <tbody>{rows.map((r) => <tr key={r.st}><td><a href={`${import.meta.env.BASE_URL}state/${r.st}`} onClick={(e) => { e.preventDefault(); nav(`/state/${r.st}`) }}>{r.name}</a></td><td className="num">{fmt(r.v)}</td></tr>)}</tbody></table>
      ) : (
        <>
          <svg viewBox="0 0 960 600" role="group" aria-label={`Map of U.S. states shaded by ${label}. Use the table view for exact values.`} style={{ width: '100%', height: 'auto' }}>
            {path && features.map((f) => {
              const st = FIPS[String(f.id).padStart(2, '0')]
              const s = st ? states[st] : undefined
              const v = s ? value(s, metric) : 0
              const b = bin(v)
              return (
                <path
                  key={String(f.id)}
                  d={path(f as never) ?? undefined}
                  fill={b < 0 ? 'var(--surface-2)' : RAMP[b]}
                  stroke="var(--surface)"
                  strokeWidth={hover === st ? 2.5 : 1}
                  style={{ cursor: st ? 'pointer' : 'default' }}
                  onMouseEnter={() => setHover(st ?? null)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => st && nav(`/state/${st}`)}
                  tabIndex={s ? 0 : undefined}
                  role={s ? 'link' : undefined}
                  onKeyDown={(e) => { if (st && (e.key === 'Enter' || e.key === ' ')) nav(`/state/${st}`) }}
                  onFocus={() => setHover(st ?? null)}
                  onBlur={() => setHover(null)}
                  aria-label={s ? `${s.name}: ${fmt(v)}` : undefined}
                >
                  {s && <title>{s.name}: {fmt(v)}</title>}
                </path>
              )
            })}
            {!topo && <text x="480" y="300" textAnchor="middle" fill="var(--ink-3)">Loading map…</text>}
          </svg>
          <div className="row small" style={{ justifyContent: 'space-between' }}>
            <span className="muted">{hover && states[hover] ? <><strong>{states[hover].name}</strong>: {fmt(value(states[hover], metric))}</> : 'Hover or focus a state; click to open it.'}</span>
            <span className="row" style={{ gap: 2 }} aria-hidden="true">
              <span className="muted" style={{ marginRight: 4 }}>fewer</span>
              {RAMP.map((c, i) => <span key={i} style={{ width: 16, height: 10, background: c, display: 'inline-block' }} />)}
              <span className="muted" style={{ marginLeft: 4 }}>more</span>
            </span>
          </div>
        </>
      )}
    </div>
  )
}
