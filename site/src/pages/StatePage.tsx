import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import GradeBadge from '../components/GradeBadge'
import Loading, { ErrorBox } from '../components/Loading'
import StatTile from '../components/StatTile'
import GradeDistribution from '../viz/GradeDistribution'
import { loadState, rowToList } from '../lib/data'
import { fmtInt, fmtUSD } from '../lib/format'
import { useAsync, useCatalog, useTitle } from '../lib/hooks'
import { useLens } from '../lib/lens'
import type { Grade, ListRow } from '../lib/types'

type SortKey = 'dhi' | 'name' | 'storage' | 'year'

export default function StatePage() {
  const { st = '' } = useParams()
  const { lens } = useLens()
  const { data, error } = useAsync(() => loadState(st), [st])
  const cat = useCatalog().data
  useTitle(data ? `${data.name} dams` : 'State')
  const [grade, setGrade] = useState<Grade | 'all'>('all')
  const [highOnly, setHighOnly] = useState(true)
  const [sort, setSort] = useState<SortKey>('dhi')
  const [limit, setLimit] = useState(100)

  const rows = useMemo(() => {
    if (!data) return [] as ListRow[]
    let r = data.rows.map(rowToList)
    if (highOnly) r = r.filter((x) => x.hz === 'H')
    if (grade !== 'all') r = r.filter((x) => x.grade === grade)
    r.sort((a, b) => sort === 'dhi' ? b.dhi - a.dhi : sort === 'name' ? a.name.localeCompare(b.name) : sort === 'storage' ? (b.storage_acft ?? 0) - (a.storage_acft ?? 0) : (a.year ?? 9999) - (b.year ?? 9999))
    return r
  }, [data, grade, highOnly, sort])

  if (error) return <ErrorBox message={error} />
  if (!data) return <Loading what="state data" />
  const s = data.rollup
  const topIssues = Object.entries(s.issues).filter(([k]) => k !== 'STALE_DATA').slice(0, 6)

  return (
    <div className="wrap section">
      <p className="small"><Link to="/states">All states</Link></p>
      <h1>{data.name}</h1>
      <p className="lede muted prose">
        {fmtInt(s.dams)} dams in the National Inventory, {fmtInt(s.high_hazard)} of them high-hazard. {fmtInt(s.high_poor_unsat)} high-hazard dams are rated Poor or Unsatisfactory and {fmtInt(s.high_no_eap)} have no Emergency Action Plan.
      </p>
      <div className="grid grid-4">
        <StatTile value={fmtInt(s.high_hazard)} label="High-hazard dams" />
        <StatTile value={fmtInt(s.high_poor_unsat)} label="Poor or Unsatisfactory (high-hazard)" />
        <StatTile value={fmtInt(s.high_not_rated)} label="High-hazard, not rated" />
        <StatTile value={`${fmtUSD(s.cost_low_usd)}–${fmtUSD(s.cost_high_usd)}`} label="Planning-level rehabilitation cost" />
      </div>

      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Grades</h3>
          <GradeDistribution grades={s.grades} />
        </div>
        <div className="card">
          <h3>Most common issues</h3>
          <ul>
            {topIssues.map(([k, v]) => (
              <li key={k}><strong>{fmtInt(v)}</strong> — {cat?.issues[k]?.title ?? k}{lens === 'engineering' && <span className="muted small"> ({k})</span>}</li>
            ))}
          </ul>
          <p className="small"><Link to="/issues">What these issues mean →</Link></p>
        </div>
      </div>

      <h2 style={{ marginTop: 32 }}>Dams in {data.name}</h2>
      <div className="row" style={{ marginBottom: 12 }}>
        <label className="row"><input type="checkbox" checked={highOnly} onChange={(e) => setHighOnly(e.target.checked)} /> High-hazard only</label>
        <label>Grade{' '}
          <select value={grade} onChange={(e) => setGrade(e.target.value as Grade | 'all')}>
            <option value="all">All</option>{(['F', 'D', 'C', 'B', 'A'] as Grade[]).map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </label>
        <label>Sort{' '}
          <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
            <option value="dhi">Worst first</option><option value="storage">Largest first</option><option value="year">Oldest first</option><option value="name">Name</option>
          </select>
        </label>
        <span className="muted small">{fmtInt(rows.length)} dams</span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="data">
          <thead><tr><th>Grade</th><th>Dam</th><th>County</th><th>Hazard</th><th>Condition</th><th className="num">Built</th><th className="num">Storage (ac-ft)</th><th>EAP</th><th>Plan</th></tr></thead>
          <tbody>
            {rows.slice(0, limit).map((r) => (
              <tr key={r.id}>
                <td><GradeBadge grade={r.grade} size="sm" /></td>
                <td><Link to={`/dam/${r.id}`}>{r.name}</Link></td>
                <td>{r.county ?? '—'}</td>
                <td>{{ H: 'High', S: 'Significant', L: 'Low', U: 'Undetermined', N: 'N/A' }[r.hz]}</td>
                <td>{{ S: 'Satisfactory', F: 'Fair', P: 'Poor', U: 'Unsatisfactory', N: 'Not rated', '': '—' }[r.cond]}</td>
                <td className="num">{r.year ?? '—'}</td>
                <td className="num">{fmtInt(r.storage_acft)}</td>
                <td>{r.eap ?? '—'}</td>
                <td className="small">{cat?.plan_status_labels[r.plan_status] ?? r.plan_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length > limit && <p><button className="btn" onClick={() => setLimit(limit + 200)}>Show more</button></p>}
    </div>
  )
}
