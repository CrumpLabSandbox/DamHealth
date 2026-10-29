import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import GradeBadge from '../components/GradeBadge'
import { loadDam } from '../lib/data'
import { fmtRange } from '../lib/format'
import { useTitle } from '../lib/hooks'
import type { Dam } from '../lib/types'

export default function Act() {
  useTitle('Take action')
  const [params] = useSearchParams()
  const id = params.get('dam')
  const [dam, setDam] = useState<Dam | null>(null)
  useEffect(() => { if (id) loadDam(id).then(setDam) }, [id])
  const share = typeof window !== 'undefined' ? window.location.origin + import.meta.env.BASE_URL + (dam ? `dam/${dam.nid_id}` : '') : ''
  const text = dam
    ? `${dam.name} (${dam.state}) is a ${dam.hazard}-hazard dam rated ${dam.condition ?? 'with no published condition'} — DamHealth grade ${dam.grade}. ${dam.plan_status.status === 'no_public_plan' ? 'No public plan to fix it.' : ''} ${share}`
    : `More than 2,600 U.S. dams that could kill people are in poor or unsatisfactory condition. See yours: ${share}`

  return (
    <div className="wrap section">
      <h1>Take action</h1>
      {dam && (
        <div className="card row" style={{ marginBottom: 16 }}>
          <GradeBadge grade={dam.grade} size="md" />
          <div><strong><Link to={`/dam/${dam.nid_id}`}>{dam.name}</Link></strong> · {dam.state_name} · {dam.hazard} hazard · {dam.condition ?? 'no rating'} · est. repair {fmtRange(dam.cost?.low_usd, dam.cost?.high_usd)}</div>
        </div>
      )}
      <div className="grid grid-3">
        <div className="card">
          <h2>Share it</h2>
          <p className="small">Copy a one-line summary with a link to the dam page.</p>
          <textarea readOnly className="small" style={{ width: '100%', minHeight: 110, padding: 8, borderRadius: 8, border: '1px solid var(--hairline)', background: 'var(--surface-2)' }} value={text} aria-label="Shareable summary" />
          <button className="btn btn-sm" onClick={() => navigator.clipboard?.writeText(text)}>Copy</button>
        </div>
        <div className="card">
          <h2>Write to someone</h2>
          <p className="small">Ready-to-edit letters to the dam owner, the state dam safety office, and your legislators are in the <Link to="/community">community guide</Link>. Fill in the dam's name, NID ID, hazard, condition and cost band from its page.</p>
          <p className="small">Find your U.S. representative at <a href="https://www.house.gov/representatives/find-your-representative" rel="noopener">house.gov</a> and senators at <a href="https://www.senate.gov/senators/senators-contact.htm" rel="noopener">senate.gov</a>. State dam safety offices are listed by the <a href="https://damsafety.org/states" rel="noopener">Association of State Dam Safety Officials</a>.</p>
        </div>
        <div className="card">
          <h2>Support the programs that pay for repairs</h2>
          <ul className="small">
            <li>FEMA <a href="https://www.fema.gov/emergency-managers/risk-management/dam-safety/rehabilitation-high-hazard-potential-dams" rel="noopener">High Hazard Potential Dam Rehabilitation grants</a> — ask Congress to fund them at scale.</li>
            <li>FEMA <a href="https://www.fema.gov/emergency-managers/risk-management/dam-safety" rel="noopener">National Dam Safety Program</a> — state assistance grants that pay for inspectors.</li>
            <li>Your state's dam-safety loan or grant fund — see <Link to="/plan">the national plan</Link> for a list.</li>
          </ul>
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h2>Owners and engineers</h2>
        <p className="prose small">If you own or work on a dam listed here and the record is out of date — a completed rehabilitation, a new EAP, a current rating — open an issue or pull request on <a href="https://github.com/CrumpLabSandbox/DamHealth" rel="noopener">GitHub</a> with a source, and update the National Inventory through your state dam safety program so the next data refresh reflects it.</p>
      </div>
    </div>
  )
}
