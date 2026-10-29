import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BuildInfo from '../components/BuildInfo'
import Loading, { ErrorBox } from '../components/Loading'
import Markdown from '../components/Markdown'
import StatTile from '../components/StatTile'
import { loadRecheck } from '../lib/data'
import { fmtInt, fmtUSD } from '../lib/format'
import { useAsync, useCatalog, useTitle } from '../lib/hooks'
import type { ExternalFact, PlanStatusCode, RecheckRow } from '../lib/types'

type Tab = 'name' | 'none' | 'missing'
const TABS: { key: Tab; label: string; issue: (r: RecheckRow) => boolean; help: string }[] = [
  { key: 'name', label: 'Matched by name only', issue: (r) => r.issue.startsWith('matched by name'),
    help: 'These research rows were attached to a dam because the names agree. A renamed inventory record can move a row to the wrong dam, so each needs a person to confirm the dam and pin its NID ID in data/curated/plan_status.csv.' },
  { key: 'none', label: 'No matching dam', issue: (r) => r.issue.startsWith('no dam'),
    help: 'No dam in this inventory snapshot matches these rows, so their projects appear on no dam page. Find each dam’s NID ID and pin it.' },
  { key: 'missing', label: 'Pinned dam missing', issue: (r) => r.issue.startsWith('pinned'),
    help: 'These rows are pinned to an NID ID that is not in this snapshot; the dam was removed or renumbered.' },
]

function factValue(key: string, f: ExternalFact): string {
  if (typeof f.value === 'string') return f.value
  if (key.endsWith('_usd')) return fmtUSD(f.value)
  if (key.endsWith('_share')) return `${Math.round(f.value * 100)}%`
  return fmtInt(f.value)
}

/** Everything the build could not verify by itself, and how fresh each hand check is. */
export default function DataHealth() {
  useTitle('Data health')
  const { data, error } = useAsync(loadRecheck, [])
  const cat = useCatalog().data
  const [tab, setTab] = useState<Tab>('name')
  // Links from ✎ marks point at a section; scroll there once the report has loaded.
  const { hash } = useLocation()
  useEffect(() => {
    if (!data || !hash) return
    // Wait a tick: the router's scroll-to-top runs after this page's effects.
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' }), 50)
    return () => clearTimeout(t)
  }, [data, hash])
  if (error) return <ErrorBox message={error} />
  if (!data || !cat) return <Loading what="the data health report" />

  const rows = data.curated_plan_rows
  const count = (t: Tab) => rows.filter(TABS.find((x) => x.key === t)!.issue).length
  const overdue = data.external_facts.filter((f) => f.overdue).length
  const active = TABS.find((t) => t.key === tab)!
  // Rows whose name fits several dams are the likeliest to be on the wrong one; list them first.
  const shown = rows.filter(active.issue).sort((a, b) => (b.candidates ?? 0) - (a.candidates ?? 0) || a.row.localeCompare(b.row))
  const label = (s?: string | null) => (s && cat.plan_status_labels[s as PlanStatusCode]) || s || '—'

  return (
    <div className="wrap section">
      <h1>Data health</h1>
      <p className="lede muted prose">
        Every count, grade, map and chart on this site is recomputed from the official National Inventory of Dams file on each build; none of those figures is typed by hand. This page lists what the build cannot verify by itself, so a person can check it.
      </p>

      <div className="grid grid-4">
        <StatTile value={fmtInt(count('name'))} label={`of ${fmtInt(data.curated_rows_total)} research rows matched to a dam by name only`} />
        <StatTile value={fmtInt(count('none'))} label="research rows that match no dam" />
        <StatTile value={fmtInt(count('missing'))} label="pinned dams missing from this snapshot" />
        <StatTile value={`${fmtInt(overdue)} of ${fmtInt(data.external_facts.length)}`} label={`outside figures overdue for a check (over ${data.external_max_age_days} days)`} />
      </div>

      <div style={{ margin: '16px 0' }}><BuildInfo catalog={cat} /></div>

      <h2 id="external" style={{ marginTop: 28 }}>Figures from outside the inventory</h2>
      <p className="muted prose small">These come from published reports, not the dam inventory, so they cannot be recomputed. They live in <code>data/curated/external_facts.json</code>. The build warns when one has not been checked for {data.external_max_age_days} days. On other pages they are marked with <span className="hand-mark" aria-hidden="true">✎</span>.</p>
      <div className="table-scroll" tabIndex={0}>
        <table className="data">
          <thead><tr><th>Figure</th><th className="num">Value</th><th className="hide-sm">Source</th><th className="hide-sm">As of</th><th>Last checked</th></tr></thead>
          <tbody>
            {data.external_facts.map((f) => (
              <tr key={f.key}>
                <td>{f.label}{f.round ? ` (${f.round})` : ''}<div className="show-sm small"><a href={f.url} rel="noopener">{f.source}</a></div></td>
                <td className="num">{factValue(f.key, f)}</td>
                <td className="hide-sm small"><a href={f.url} rel="noopener">{f.source}</a></td>
                <td className="hide-sm">{f.as_of}</td>
                <td><span className={`chip ${f.overdue ? 'chip-warn' : 'chip-ok'}`}>{f.overdue ? 'Overdue' : 'OK'}</span> <span className="small muted">{f.checked} · {fmtInt(f.days_since_check)} days ago</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="research" style={{ marginTop: 28 }}>Rehabilitation research to confirm</h2>
      <p className="muted prose small">Funded, planned and completed projects come from hand research in <code>data/curated/plan_status.csv</code>. A dam’s page shows that status only when the row is attached to it, and pages that rely on an unconfirmed match say so.</p>
      <div className="row" role="tablist" aria-label="Research rows by check needed" style={{ marginBottom: 8 }}>
        {TABS.map((t) => (
          <button key={t.key} role="tab" aria-selected={tab === t.key} className={`btn btn-sm${tab === t.key ? ' btn-primary' : ''}`} onClick={() => setTab(t.key)}>{t.label} ({fmtInt(count(t.key))})</button>
        ))}
      </div>
      <p className="small prose">{active.help}</p>
      {shown.length === 0 ? <p className="muted">Nothing to check here.</p> : (
        <div className="table-scroll" tabIndex={0}>
          <table className="data">
            <thead><tr><th>Research row</th>{tab !== 'none' && <th>Attached dam</th>}<th className="hide-sm">Project</th>{tab === 'name' && <th className="num hide-sm">Dams with that name</th>}<th className="hide-sm">Source</th></tr></thead>
            <tbody>
              {shown.map((r) => (
                <tr key={r.row}>
                  <td>{r.row}<div className="show-sm small muted">{label(r.status)}</div></td>
                  {tab !== 'none' && <td>{r.nid_id ? (tab === 'missing' ? <code>{r.nid_id}</code> : <Link to={`/dam/${r.nid_id}`}>{r.matched_name ?? r.nid_id}</Link>) : '—'}{r.nid_id && tab === 'name' && <div className="small muted">{r.nid_id}</div>}</td>}
                  <td className="hide-sm small">{label(r.status)}{r.program && <div className="muted">{r.program}</div>}</td>
                  {tab === 'name' && <td className="num hide-sm">{r.candidates ?? '—'}</td>}
                  <td className="hide-sm small">{r.source_url ? <a href={r.source_url} rel="noopener">source</a> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2 style={{ marginTop: 28 }}>Everything else checked by hand</h2>
      <p className="muted prose small">The research text on <Link to="/case-studies">case studies</Link> and funding programs, the scoring rules, the Census population vintage and the Wikipedia matches are also maintained by hand. The full checklist follows.</p>
      <details className="card">
        <summary>How the checks work (RECHECK.md)</summary>
        <Markdown file="RECHECK.md" />
      </details>
    </div>
  )
}
