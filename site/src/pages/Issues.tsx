import { Link } from 'react-router-dom'
import Loading, { ErrorBox } from '../components/Loading'
import { fmtInt } from '../lib/format'
import { useCatalog, useSummary, useTitle } from '../lib/hooks'
import { useLens } from '../lib/lens'
import { SEVERITY_WORD } from '../lib/plan'

export default function Issues() {
  useTitle('Issues explained')
  const { lens } = useLens()
  const cat = useCatalog()
  const sum = useSummary()
  if (cat.error || sum.error) return <ErrorBox message={cat.error ?? sum.error ?? ''} />
  if (!cat.data || !sum.data) return <Loading what="issue catalogue" />
  const counts = sum.data.national.issues
  const issues = Object.entries(cat.data.issues).sort((a, b) => b[1].sev - a[1].sev || (counts[b[0]] ?? 0) - (counts[a[0]] ?? 0))
  const eng = lens === 'engineering'
  return (
    <div className="wrap section">
      <h1>The issues, explained</h1>
      <p className="lede muted prose">Every dam's grade is built from a short list of yes/no flags read from public inventory data. Here is each one: what it means, why it matters, how it is fixed, and how many dams carry it today.</p>
      <div className="grid grid-2">
        {issues.map(([code, m]) => (
          <div key={code} className="card" id={code}>
            <div className="row" style={{ gap: 8 }}>
              <span className={`sev sev-${m.sev}`} aria-hidden="true" />
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{m.title}</h2>
              <span className="chip">{SEVERITY_WORD[m.sev]}{eng && <> · {code}</>}</span>
            </div>
            <p className="muted small" style={{ margin: '4px 0 8px' }}>{m.group} · <strong>{fmtInt(counts[code] ?? 0)}</strong> dams</p>
            <p>{eng ? m.eng : m.plain}</p>
            <details>
              <summary>How it gets fixed</summary>
              <ul className="small">
                {(cat.data!.actions[code] ?? []).map((a) => <li key={a.title}><strong>{a.horizon === 1 ? 'Year 1' : a.horizon === 5 ? 'Years 2–5' : 'Years 5–10'}: {a.title}.</strong> {eng ? a.eng : a.plain}</li>)}
              </ul>
            </details>
            <p className="small"><Link to={`/explore?${code === 'NO_EAP' ? 'hz=H' : code.startsWith('COND_UNSAT') ? 'grade=F' : code.startsWith('COND_POOR') ? 'grade=D' : ''}`}>See dams on the map →</Link></p>
          </div>
        ))}
      </div>
    </div>
  )
}
