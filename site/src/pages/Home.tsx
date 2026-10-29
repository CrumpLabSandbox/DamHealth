import { Link } from 'react-router-dom'
import GradeBadge from '../components/GradeBadge'
import Loading, { ErrorBox } from '../components/Loading'
import SearchBox from '../components/SearchBox'
import StatTile from '../components/StatTile'
import GradeDistribution from '../viz/GradeDistribution'
import StateChoropleth from '../viz/StateChoropleth'
import { rowToList } from '../lib/data'
import { fmtInt, fmtUSD } from '../lib/format'
import { useLens } from '../lib/lens'
import { useCatalog, useSummary, useTitle } from '../lib/hooks'

export default function Home() {
  useTitle(null)
  const { lens } = useLens()
  const { data, error } = useSummary()
  const cat = useCatalog().data
  if (error) return <ErrorBox message={error} />
  if (!data) return <Loading what="the national picture" />
  const n = data.national
  const worst = data.worst_high_hazard_unsat.slice(0, 12).map(rowToList)

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>America has {fmtInt(n.dams)} dams. {fmtInt(n.high_poor_unsat)} of the ones that could kill people are in poor or failing condition.</h1>
          <p className="lede">
            {lens === 'community'
              ? 'DamHealth shows you the dam upstream of your town, what is wrong with it, and what it would take to fix it — so communities can push for repairs before the next flood.'
              : 'DamHealth merges the National Inventory of Dams with condition, EAP and inspection data into a transparent Dam Health Index, with issue-driven 1/5/10-year rehabilitation plans for every structure.'}
          </p>
          <div style={{ maxWidth: 640, margin: '20px 0' }}><SearchBox /></div>
          <div className="row">
            <Link className="btn btn-primary" to="/explore">Explore the map</Link>
            <Link className="btn" to="/dashboard" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', background: 'transparent' }}>National dashboard</Link>
            <Link className="btn" to="/plan" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', background: 'transparent' }}>Read the national plan</Link>
          </div>
          <div className="grid grid-4" style={{ marginTop: 28 }}>
            <StatTile onDark value={fmtInt(n.high_hazard)} label="High-hazard dams — failure would likely cause loss of life" />
            <StatTile onDark value={fmtInt(n.high_not_rated)} label="High-hazard dams with no published condition rating" />
            <StatTile onDark value={fmtInt(n.high_no_eap)} label="High-hazard dams with no Emergency Action Plan" />
            <StatTile onDark value={`${fmtUSD(n.cost_low_usd)}–${fmtUSD(n.cost_high_usd)}`} label="Planning-level cost to bring every dam up to standard" />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-title">
          <h2>How the nation's dams grade out</h2>
          <Link to="/methodology">How grades are computed →</Link>
        </div>
        <div className="grid grid-2">
          <div className="card">
            <h3>All {fmtInt(n.dams)} dams</h3>
            <GradeDistribution grades={n.grades} />
            <p className="muted small">{fmtInt((n.condition['Not Rated'] ?? 0) + (n.condition['None'] ?? 0))} dams have no published condition rating, so many A and B grades mean "nothing bad is published", not "safe". Check each dam's data confidence.</p>
          </div>
          <div className="card">
            <h3>Where the problems are</h3>
            <StateChoropleth states={data.states} metric="avg_grade_high" />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-title">
          <h2>Unsatisfactory, high-hazard, and large</h2>
          <Link to="/explore?grade=F">All F-graded dams →</Link>
        </div>
        <p className="muted prose">These dams carry an <strong>Unsatisfactory</strong> condition rating — a deficiency that regulators say needs immediate or emergency action — and a High hazard classification, ranked by the Dam Health Index and reservoir size.</p>
        <div style={{ overflowX: 'auto' }}>
          <table className="data">
            <thead><tr><th>Grade</th><th>Dam</th><th>State</th><th className="num">Built</th><th className="num">Height (ft)</th><th className="num">Storage (ac-ft)</th><th>Plan status</th></tr></thead>
            <tbody>
              {worst.map((r) => (
                <tr key={r.id}>
                  <td><GradeBadge grade={r.grade} size="sm" /></td>
                  <td><Link to={`/dam/${r.id}`}>{r.name}</Link></td>
                  <td>{r.st}</td>
                  <td className="num">{r.year ?? '—'}</td>
                  <td className="num">{fmtInt(r.height_ft)}</td>
                  <td className="num">{fmtInt(r.storage_acft)}</td>
                  <td className="small">{cat?.plan_status_labels[r.plan_status] ?? r.plan_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="wrap section">
        <div className="grid grid-2">
          <div className="card">
            <h2>For communities</h2>
            <p>Find your dam. Learn what its grade means, who owns it, who regulates it, and whether anyone has a plan to fix it. Then use our letter templates and meeting checklist to get it funded.</p>
            <Link className="btn" to="/community">Community guide →</Link>
          </div>
          <div className="card">
            <h2>For engineers</h2>
            <p>Issue codes, trigger logic, failure-mode checklists, and work-breakdown plans by horizon for every dam — plus the open problems list: {fmtInt(n.high_not_rated)} high-hazard dams with no rating on record.</p>
            <Link className="btn" to="/engineering">Engineering library →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
