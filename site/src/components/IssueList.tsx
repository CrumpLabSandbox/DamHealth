import { SEVERITY_WORD, sortedIssues } from '../lib/plan'
import { useLens } from '../lib/lens'
import type { Catalog, Dam } from '../lib/types'

export default function IssueList({ dam, catalog }: { dam: Dam; catalog: Catalog }) {
  const { lens } = useLens()
  const issues = sortedIssues(dam, catalog)
  if (!issues.length) {
    return <p className="muted">This dam has a Satisfactory rating, an Emergency Action Plan, a current inspection, and no age flags. That is the record every dam should have.</p>
  }
  return (
    <ol className="issue-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {issues.map(({ code, meta }, i) => (
        <li key={code} id={`issue-${code}`} className="issue" style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12, padding: '12px 0', borderTop: i ? '1px solid var(--hairline)' : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 8, background: 'var(--surface-2)', fontWeight: 800 }} aria-hidden="true">{i + 1}</div>
          <div>
            <div className="row" style={{ gap: 8 }}>
              <span className={`sev sev-${meta.sev}`} aria-hidden="true" />
              <strong>{meta.title}</strong>
              <span className="chip">{SEVERITY_WORD[meta.sev]}{lens === 'engineering' && <> · sev {meta.sev} · {code}</>}</span>
              <span className="muted small">{meta.group}</span>
            </div>
            <p style={{ margin: '4px 0 0' }}>{lens === 'engineering' ? meta.eng : meta.plain}</p>
            {dam.issue_facts?.[code] && <p className="small muted" style={{ margin: '2px 0 0' }}>Based on: {dam.issue_facts[code]}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}
