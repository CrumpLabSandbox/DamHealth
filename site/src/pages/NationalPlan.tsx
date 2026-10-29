import { Link } from 'react-router-dom'
import Loading, { ErrorBox } from '../components/Loading'
import HandMark from '../components/HandMark'
import Markdown from '../components/Markdown'
import { fmtInt, fmtUSD } from '../lib/format'
import { useCatalog, useSummary, useTitle } from '../lib/hooks'

export default function NationalPlan() {
  useTitle('The national plan')
  const { data, error } = useSummary()
  const cat = useCatalog().data
  if (error) return <ErrorBox message={error} />
  if (!data || !cat) return <Loading what="national summary" />
  const n = data.national
  // Figures from outside the inventory: data/curated/external_facts.json (checked by hand, see RECHECK.md).
  const ext = cat.external
  const num = (k: string) => Number(ext[k]?.value ?? 0)
  const ps = n.plan_status
  const noPlan = ps.no_public_plan ?? 0
  return (
    <div className="wrap section">
      <h1>A 1 / 5 / 10-year plan for America's dams</h1>
      <p className="lede muted prose">Every dam on this site carries its own plan, composed from its issues. Rolled up, those plans describe a national program. The numbers below come straight from the data; the policy asks are what it would take to deliver them.</p>

      <div className="grid grid-4">
        <div className="stat"><div className="value">{fmtInt(n.high_poor_unsat)}</div><div className="label">high-hazard dams rated Poor or Unsatisfactory</div></div>
        <div className="stat"><div className="value">{fmtInt(noPlan)}</div><div className="label">of them with no public plan or funding we could find</div></div>
        <div className="stat"><div className="value">{fmtInt(n.high_no_eap)}</div><div className="label">high-hazard dams with no Emergency Action Plan</div></div>
        <div className="stat"><div className="value">{fmtInt(n.high_not_rated)}</div><div className="label">high-hazard dams with no published condition rating</div></div>
      </div>

      <div className="grid grid-3" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Year 1 — Stabilize &amp; know</h2>
          <ul>
            <li>Write an Emergency Action Plan for all {fmtInt(n.high_no_eap)} high-hazard dams that lack one (months, not years; FEMA P-64 template).</li>
            <li>Publish a condition rating for every high-hazard dam: {fmtInt(n.high_not_rated)} are unrated today.</li>
            <li>Interim risk reduction (lowered pools, monitoring) at every Unsatisfactory dam: {fmtInt(n.condition['Unsatisfactory'] ?? 0)} dams.</li>
            <li>Determine the hazard class of {fmtInt((n.hazard['Undetermined'] ?? 0) + (n.hazard['Not Available'] ?? 0))} dams whose downstream consequences are unknown.</li>
            <li>Catch up overdue inspections: {fmtInt(n.issues['INSPECT_OVERDUE'] ?? 0)} dams.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Years 2–5 — Fix the deficiencies</h2>
          <ul>
            <li>Design and construct repairs at the {fmtInt(n.high_poor_unsat)} Poor/Unsatisfactory high-hazard dams, starting with those that have no plan.</li>
            <li>Spillway capacity upgrades where hydrology predates modern criteria — the {fmtInt(n.issues['AGE_75'] ?? 0)} dams over 75 and {fmtInt(n.issues['AGE_100'] ?? 0)} over 100 years old with no recorded modernization.</li>
            <li>Filtered drains and seepage control on aging embankments.</li>
            <li>Remove dams that no longer serve a purpose rather than rebuilding them.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Years 5–10 — Modernize &amp; sustain</h2>
          <ul>
            <li>Bring every high-hazard dam to current hydrologic (inflow design flood) and seismic standards.</li>
            <li>Automated monitoring with telemetry and public alert integration on large high-hazard dams ({fmtInt(n.issues['HIGH_CONSEQUENCE'] ?? 0)} dams).</li>
            <li>Public inundation maps for every high-hazard dam.</li>
            <li>Owner financial-assurance requirements so repairs are never stranded by a bankrupt owner.</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <h2>What it costs, and who pays</h2>
        <p className="prose">Our planning-level bands put the full rehabilitation of the nation's dams at <strong>{fmtUSD(n.cost_low_usd)}–{fmtUSD(n.cost_high_usd)}</strong>, compared with <a href={ext.asdso_nonfederal_usd?.url} rel="noopener">ASDSO's estimate</a> ({ext.asdso_nonfederal_usd?.as_of}) of {fmtUSD(num('asdso_nonfederal_usd'))}<HandMark checked={ext.asdso_nonfederal_usd?.checked} /> for non-federal dams ({fmtUSD(num('asdso_high_hazard_usd'))} for the high-hazard subset). Against that, FEMA's High Hazard Potential Dam Rehabilitation grant program received {fmtUSD(num('hhpd_iija_usd'))}<HandMark checked={ext.hhpd_iija_usd?.checked} /> from the 2021 infrastructure law — and its <a href={ext.hhpd_annual_usd?.url} rel="noopener">{ext.hhpd_annual_usd?.round ?? 'latest'} round</a> was about {fmtUSD(num('hhpd_annual_usd'))}<HandMark checked={ext.hhpd_annual_usd?.checked} />. Private owners hold most of the problem dams and most lack the means to pay.</p>
        <h3>Policy asks</h3>
        <ol className="prose">
          <li><strong>Reauthorize and fund the HHPD Rehabilitation Grant Program</strong> at a level that matches the inventory — at least $1 billion a year for a decade.</li>
          <li><strong>Fully fund the National Dam Safety Program</strong> and state dam-safety staffing, so inspections and ratings actually happen.</li>
          <li><strong>Require an EAP for every high- and significant-hazard dam</strong>, with annual tabletop exercises, as a condition of operation.</li>
          <li><strong>Publish condition ratings and inundation maps</strong> for every high-hazard dam, including federal dams whose DSAC/SOD classifications are kept out of the National Inventory.</li>
          <li><strong>Create a private-owner pathway</strong>: low-interest state loans, public acquisition where appropriate, and funded removal for dams without a purpose.</li>
          <li><strong>Update the inventory every year</strong>: {fmtInt(n.issues['STALE_DATA'] ?? 0)} dams on this site have a public record that has not been updated in more than five years.</li>
        </ol>
        <p className="small"><Link to="/act">Take action →</Link> · <Link to="/methodology">Methodology →</Link></p>
      </div>

      <h2 style={{ marginTop: 32 }}>Funding programs that exist today<HandMark what="research table" anchor="research" /></h2>
      <p className="small muted">Hand-researched from program pages and press releases; amounts and deadlines are as of each source and are rechecked by hand.</p>
      <Markdown file="funding_programs.md" />
    </div>
  )
}
