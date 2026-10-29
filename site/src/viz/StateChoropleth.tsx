import { geoAlbersUsa, geoPath } from 'd3-geo'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { feature } from 'topojson-client'
import type { Topology, GeometryCollection } from 'topojson-specification'
import { GRADE_WORDS, fmtInt } from '../lib/format'
import type { Grade, Rollup } from '../lib/types'

type Metric = 'avg_grade_high' | 'high_poor_unsat' | 'high_no_eap' | 'high_hazard' | 'high_not_rated' | 'df_share'
const METRICS: { key: Metric; label: string }[] = [
  { key: 'avg_grade_high', label: 'Average grade of high-hazard dams' },
  { key: 'high_poor_unsat', label: 'High-hazard dams in Poor/Unsatisfactory condition' },
  { key: 'high_no_eap', label: 'High-hazard dams with no Emergency Action Plan' },
  { key: 'high_not_rated', label: 'High-hazard dams with no condition rating' },
  { key: 'high_hazard', label: 'High-hazard dams' },
  { key: 'df_share', label: 'Share of high-hazard dams graded D or F' },
]
const FIPS: Record<string, string> = { '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA', '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL', '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN', '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME', '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS', '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH', '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND', '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI', '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', '49': 'UT', '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI', '56': 'WY', '72': 'PR' }
// Same colors as the grades everywhere else: green = best, maroon = worst.
const GRADES: Grade[] = ['A', 'B', 'C', 'D', 'F']
const RAMP = GRADES.map((g) => `var(--grade-${g.toLowerCase()})`)
// Dam Health Index bounds for A/B/C/D (F above), matching data/pipeline/scoring.py GRADE_BOUNDS.
const GRADE_BREAKS = [20, 30, 45, 60]
const gradeOf = (dhi: number): Grade => GRADES[GRADE_BREAKS.findIndex((b) => dhi < b) === -1 ? 4 : GRADE_BREAKS.findIndex((b) => dhi < b)]

let topoPromise: Promise<Topology> | null = null
const loadTopo = () => (topoPromise ??= import('us-atlas/states-10m.json').then((m) => (m.default ?? m) as unknown as Topology))

function value(s: Rollup, m: Metric): number {
  if (m === 'df_share') return s.high_hazard ? (100 * ((s.grades_high.D ?? 0) + (s.grades_high.F ?? 0))) / s.high_hazard : 0
  if (m === 'avg_grade_high') return s.mean_dhi_high ?? 0
  return s[m] as number
}

export default function StateChoropleth({ states, metric: initial = 'avg_grade_high' }: { states: Record<string, Rollup & { name: string }>; metric?: Metric }) {
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
    // Counts and shares: five quantile classes across states, colored best-to-worst like grades.
    const vals = Object.values(states).map((s) => value(s, metric)).filter((v) => v > 0).sort((a, b) => a - b)
    const q = (p: number) => vals[Math.min(vals.length - 1, Math.floor(p * vals.length))] ?? 0
    const breaks = [q(1 / 5), q(2 / 5), q(3 / 5), q(4 / 5)]
    return { features: fc.features, path, breaks }
  }, [topo, states, metric])

  const isGrade = metric === 'avg_grade_high'
  const bin = (v: number, s?: Rollup) => {
    if (isGrade) return s?.mean_dhi_high == null ? -1 : GRADES.indexOf(gradeOf(v))
    if (v <= 0) return s ? 0 : -1
    const i = breaks.findIndex((b) => v <= b)
    return i === -1 ? 4 : i
  }
  const label = METRICS.find((m) => m.key === metric)!.label
  const fmt = (v: number) => (isGrade ? `${gradeOf(v)} (${GRADE_WORDS[gradeOf(v)]}, index ${v.toFixed(1)})` : metric === 'df_share' ? `${v.toFixed(0)}%` : fmtInt(v))
  const range = (i: number) => {
    const lo = i === 0 ? 0 : breaks[i - 1], hi = breaks[i]
    const f = (v: number) => (metric === 'df_share' ? `${v.toFixed(0)}%` : fmtInt(v))
    const next = metric === 'df_share' ? lo : Math.floor(lo) + 1
    return i === 4 ? `over ${f(lo)}` : i === 0 ? `up to ${f(hi)}` : `${f(next)}–${f(hi)}`
  }

  const rows = Object.entries(states).map(([st, s]) => ({ st, name: s.name, v: value(s, metric) })).sort((a, b) => b.v - a.v)

  return (
    <div>
      <div className="row" style={{ marginBottom: 8 }}>
        <label className="small row" style={{ gap: 6, flex: '1 1 240px', minWidth: 0, flexWrap: 'nowrap' }}>Show
          <select value={metric} onChange={(e) => setMetric(e.target.value as Metric)} style={{ flex: 1, minWidth: 0 }}>
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
              const b = bin(v, s)
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
            <span className="muted">{hover && states[hover] ? <><strong>{states[hover].name}</strong>: {fmt(value(states[hover], metric))}</> : <><span className="hide-sm">Hover or focus a state; click to open it.</span><span className="show-sm">Tap a state to open it, or use the table for exact values.</span></>}</span>
            <span className="row" style={{ gap: 8, flexWrap: 'wrap' }} aria-hidden="true">
              {RAMP.map((c, i) => (
                <span key={i} className="row" style={{ gap: 4 }}>
                  <span style={{ width: 14, height: 10, background: c, display: 'inline-block', borderRadius: 2 }} />
                  {isGrade ? `${GRADES[i]} ${GRADE_WORDS[GRADES[i]]}` : range(i)}
                </span>
              ))}
            </span>
          </div>
        </>
      )}
    </div>
  )
}
