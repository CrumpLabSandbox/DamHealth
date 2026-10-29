import { Link } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import { useTitle } from '../lib/hooks'

export default function Community() {
  useTitle('Community guide')
  return (
    <div className="wrap section">
      <h1>For communities: how to get your dam fixed</h1>
      <p className="lede muted prose">Most dam repairs in America happen because someone downstream refused to let the problem stay invisible. This page is the playbook.</p>
      <div style={{ maxWidth: 560, margin: '16px 0 28px' }}><SearchBox /></div>

      <div className="grid grid-3">
        <div className="card">
          <h2>1. Find your dam</h2>
          <p>Search above, or open the <Link to="/explore">map</Link> and press <em>Dams near me</em>. Each dam page tells you its grade, its issues, who owns it, who regulates it, and whether there is a plan.</p>
        </div>
        <div className="card">
          <h2>2. Read the grade honestly</h2>
          <p>A <strong>D or F</strong> means regulators have documented a serious problem. A <strong>C</strong> often means something basic is missing — an emergency plan, an inspection, a rating. A <strong>B</strong> with low confidence means nobody has looked closely. Ask for the record.</p>
        </div>
        <div className="card">
          <h2>3. Ask three questions</h2>
          <ul>
            <li>Is there an Emergency Action Plan, and has our county emergency manager rehearsed it?</li>
            <li>When was the dam last inspected, and what did the report say?</li>
            <li>Is there a funded plan to fix the deficiencies — and if not, why not?</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>Who to contact</h2>
        <div className="grid grid-3">
          <div><h3>The owner</h3><p className="small">Listed on each dam page. Owners are legally responsible for maintenance and repairs. Private owners often need help finding funding — your support can unlock a grant application.</p></div>
          <div><h3>The state dam safety office</h3><p className="small">Every state except Alabama has one. They inspect, rate, and can order repairs. Ask for the latest inspection report; it is usually a public record.</p></div>
          <div><h3>County emergency management</h3><p className="small">They receive the Emergency Action Plan and run the warning system. Ask whether inundation maps exist and whether a tabletop exercise has been held.</p></div>
          <div><h3>Your state legislators</h3><p className="small">State loan and grant programs (see <Link to="/plan">the plan</Link>) are funded in state budgets. A specific dam with a specific price tag is a powerful ask.</p></div>
          <div><h3>Your U.S. Representative and Senators</h3><p className="small">FEMA's High Hazard Potential Dam grant program is reauthorized and funded by Congress. Ask them to fund it at the scale of the problem.</p></div>
          <div><h3>Local press</h3><p className="small">Dam stories get covered. A dam page link, the grade, and a "no public plan" status is a story.</p></div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h2>Letter template — to the owner or regulator</h2>
          <pre className="small" style={{ whiteSpace: 'pre-wrap', background: 'var(--surface-2)', padding: 12, borderRadius: 8 }}>{`Dear [Owner / State Dam Safety Program],

I live downstream of [DAM NAME] (National Inventory of Dams ID [NID ID]). Public records show it is classified as [HAZARD] hazard and rated [CONDITION], and that [ISSUE — e.g., it has no Emergency Action Plan / its last inspection was in YEAR].

Please let me know:
1. The date and findings of the most recent inspection;
2. Whether an Emergency Action Plan exists and when it was last exercised with county emergency management;
3. What plan and funding exist to correct the documented deficiencies, and on what schedule.

I am asking as a resident who wants this dam repaired before the next major storm, and I am glad to support a grant application or public funding request.

Sincerely,
[Name, address]`}</pre>
        </div>
        <div className="card">
          <h2>Letter template — to your legislator</h2>
          <pre className="small" style={{ whiteSpace: 'pre-wrap', background: 'var(--surface-2)', padding: 12, borderRadius: 8 }}>{`Dear [Representative / Senator],

[DAM NAME] in [COUNTY] is a [HAZARD]-hazard dam rated [CONDITION], with [no public plan to fix it]. If it fails, people downstream could die. Planning-level estimates put repairs at [COST RANGE].

I am asking you to:
• Fund FEMA's High Hazard Potential Dam Rehabilitation grant program at a scale that matches the more than 2,600 high-hazard dams in poor or unsatisfactory condition nationwide;
• Support state dam-safety staffing so inspections and ratings happen on schedule;
• Require an Emergency Action Plan for every high-hazard dam.

Please tell me what you will do about [DAM NAME].

Sincerely,
[Name, address]`}</pre>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>Public meeting checklist</h2>
        <ul className="prose">
          <li>Bring the dam page (print or link) and the inspection report.</li>
          <li>State the hazard class and condition in plain words: "If this dam fails, people will likely die. Inspectors rated it Poor in 2024."</li>
          <li>Ask for a date: when will the EAP be exercised; when will design start; when will funding be applied for.</li>
          <li>Ask who owns the next step, by name.</li>
          <li>Share the <Link to="/case-studies">case studies</Link> — Edenville, Spencer, Rapidan — every one had warnings years before it failed.</li>
        </ul>
      </div>
    </div>
  )
}
