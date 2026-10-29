import { Link } from 'react-router-dom'
import Loading, { ErrorBox } from '../components/Loading'
import { fmtInt } from '../lib/format'
import { useSummary, useTitle } from '../lib/hooks'

export default function Engineering() {
  useTitle('Engineering library')
  const { data, error } = useSummary()
  if (error) return <ErrorBox message={error} />
  if (!data) return <Loading what="summary" />
  const n = data.national
  return (
    <div className="wrap section">
      <h1>For engineers: the open problems</h1>
      <p className="lede muted prose">Switch the lens to <strong>Engineering</strong> (top right) and every dam page shows issue codes and trigger logic, a dimensioned schematic, a failure-mode screening checklist, and a work-breakdown plan by horizon. This page is the index.</p>

      <div className="grid grid-4">
        <div className="stat"><div className="value">{fmtInt(n.high_not_rated)}</div><div className="label">high-hazard dams with no NID condition assessment</div></div>
        <div className="stat"><div className="value">{fmtInt(n.issues['SPILLWAY_UNKNOWN'] ?? 0)}</div><div className="label">high-hazard dams with no spillway type recorded</div></div>
        <div className="stat"><div className="value">{fmtInt((n.hazard['Undetermined'] ?? 0) + (n.hazard['Not Available'] ?? 0))}</div><div className="label">dams with undetermined hazard potential</div></div>
        <div className="stat"><div className="value">{fmtInt(n.issues['AGE_100'] ?? 0)}</div><div className="label">dams ≥ 100 years old with no recorded modification</div></div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Failure-mode library</h2>
          <div className="table-scroll" tabIndex={0}>
          <table className="data">
            <thead><tr><th>Mode</th><th>Typical indicators in inventory data</th><th>First analysis</th></tr></thead>
            <tbody>
              <tr><td>Overtopping</td><td>Spillway unknown/uncontrolled, pre-1970 hydrology, large drainage area vs. storage</td><td>Update IDF/PMF; spillway rating curve; freeboard check</td></tr>
              <tr><td>Internal erosion / piping</td><td>Embankment, homogeneous or unknown core, age, Poor rating</td><td>Filter compatibility; seepage mapping; piezometers</td></tr>
              <tr><td>Slope instability</td><td>Embankment, steep sections, rapid drawdown operations</td><td>Limit-equilibrium stability (steady seepage, drawdown, seismic)</td></tr>
              <tr><td>Foundation</td><td>Rock/karst foundation, seepage history (Wolf Creek, Center Hill)</td><td>Foundation seepage model; grout/cutoff wall alternatives</td></tr>
              <tr><td>Concrete structural</td><td>Gravity/arch, age, ASR regions, uplift</td><td>Stability (sliding/overturning), uplift pressures, materials testing</td></tr>
              <tr><td>Gates / outlet works</td><td>Controlled spillway, age, no power redundancy</td><td>Mechanical/electrical reliability; drawdown capacity</td></tr>
              <tr><td>Seismic</td><td>High-seismicity state, hydraulic fill, liquefiable foundation</td><td>Deformation analysis; liquefaction screening</td></tr>
            </tbody>
          </table>
          </div>
        </div>
        <div className="card">
          <h2>Standards and references</h2>
          <ul className="prose">
            <li>FEMA P-93, <em>Federal Guidelines for Dam Safety</em>; FEMA P-64, <em>Emergency Action Planning for Dams</em>; FEMA P-333, <em>Hazard Potential Classification</em>; FEMA P-94, <em>Selecting and Accommodating Inflow Design Floods</em>; FEMA P-1015, <em>Risk-Informed Decision Making</em>.</li>
            <li>USACE ER 1110-2-1156, <em>Safety of Dams — Policy and Procedures</em> (DSAC classification); USACE/USBR <em>Best Practices in Dam and Levee Safety Risk Analysis</em>.</li>
            <li>ASDSO, <em>Cost of Rehabilitating Dams in the U.S.</em> (2023, 2025 update); ASDSO Dam Failures and Incidents database.</li>
            <li>Froehlich (1995), "Peak outflow from breached embankment dam," <em>J. Water Resour. Plan. Manage.</em> — the screening equation used here.</li>
            <li>ASCE, <em>2025 Report Card for America's Infrastructure — Dams</em> (D+).</li>
          </ul>
          <h3>Work-breakdown by horizon</h3>
          <p className="small">Year 1: inspection/condition assessment, PFMA, interim risk reduction, EAP, instrumentation, funding application. Years 2–5: investigations, alternatives, final design, permitting, construction. Years 5–10: full standards compliance, monitoring/telemetry, inundation mapping, O&amp;M program. Each dam page lists these keyed to the dam's issue codes.</p>
          <p className="small"><Link to="/methodology">Scoring methodology and data dictionary →</Link></p>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>Contribute</h2>
        <p className="prose">Scoring is deterministic Python in <code>data/pipeline/</code>. Proposals to re-weight sub-scores, add issue triggers (e.g., drainage-area-to-storage ratio as an overtopping proxy), or attach state inspection data are welcome as pull requests to <a href="https://github.com/CrumpLabSandbox/DamHealth" rel="noopener">the repository</a>. Curated plan-status rows live in <code>data/curated/plan_status.csv</code>; add a row with a source URL to mark a dam's rehabilitation as funded or complete.</p>
      </div>
    </div>
  )
}
