import { HORIZONS, actionText, buildPlan } from '../lib/plan'
import { fmtRange } from '../lib/format'
import { useLens } from '../lib/lens'
import type { Catalog, Dam } from '../lib/types'

export default function PlanPanel({ dam, catalog }: { dam: Dam; catalog: Catalog }) {
  const { lens } = useLens()
  const plan = buildPlan(dam.issues, catalog)
  const eng = lens === 'engineering'
  const ps = dam.plan_status
  return (
    <div>
      <p className="muted">
        {ps.status === 'no_public_plan' && (eng
          ? 'A deficiency is on record but NID reports no remediation status and our research found no funded project. Treat the plan below as the proposed scope.'
          : 'Regulators have documented a problem, but we could find no public plan or funding to fix it. The steps below are what should happen.')}
        {ps.status === 'under_construction' && 'Good news: repairs are reported to be under way. The plan below is what a complete program looks like; check the owner or regulator for the actual scope.'}
        {ps.status === 'study_or_design' && 'A study, design or permitting process is under way. The plan below shows the horizon such work normally follows.'}
        {ps.status === 'funded' && <>A funded project has been identified{ps.program && <> ({ps.program}{ps.amount_usd && <>, about ${Number(ps.amount_usd).toLocaleString()}</>})</>}. The plan below is generic to the dam's issues.</>}
        {ps.status === 'completed' && 'A rehabilitation program has been completed. Remaining items below reflect what the inventory still records.'}
        {ps.status === 'unfunded_identified' && 'A problem has been identified by regulators (enforcement action) with no funding on record.'}
        {(ps.status === 'none_needed_or_unknown' || ps.status === 'unknown') && (dam.issues.length ? 'No remediation program is reported. The plan below is composed from the issues on record.' : 'No remediation is needed on the record; routine maintenance keeps a sound dam sound.')}
        {ps.basis && eng && <span className="small"> Basis: {ps.basis}.</span>}
      </p>
      <div className="grid grid-3">
        {HORIZONS.map((h) => (
          <div key={h.key} className="card" style={{ background: 'var(--surface-2)' }}>
            <h3 style={{ marginBottom: 2 }}>{h.label}</h3>
            <div className="muted small" style={{ marginBottom: 10 }}>{h.sub}</div>
            {plan[h.key].length === 0 && <p className="muted small">Nothing specific in this window.</p>}
            <ol style={{ paddingLeft: 18, margin: 0 }}>
              {plan[h.key].map((a) => (
                <li key={a.title} style={{ marginBottom: 8 }}>
                  <strong>{a.title}</strong>
                  <div className="small">{actionText(a, lens)}</div>
                  {eng && <div className="small muted">from {a.from}</div>}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <p className="small muted" style={{ marginTop: 12 }}>
        Planning-level cost band for a full rehabilitation: <strong>{fmtRange(dam.cost?.low_usd, dam.cost?.high_usd)}</strong>. {eng ? 'Order-of-magnitude band from size × condition × hazard (ASDSO-style); not a project estimate.' : 'Typical funding: FEMA’s High Hazard Potential Dam grant (65% federal share), state dam-safety loans and grants, and the owner.'}
      </p>
    </div>
  )
}
