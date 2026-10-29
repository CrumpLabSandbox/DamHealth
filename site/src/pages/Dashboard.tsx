import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading, { ErrorBox } from '../components/Loading'
import BuildInfo from '../components/BuildInfo'
import StatTile from '../components/StatTile'
import GradeDistribution from '../viz/GradeDistribution'
import StateChoropleth from '../viz/StateChoropleth'
import BarList from '../viz/BarList'
import Histogram from '../viz/Histogram'
import { ageOf, fmtInt, fmtUSD } from '../lib/format'
import { useCatalog, useSummary, useTitle } from '../lib/hooks'
import type { Rollup } from '../lib/types'

type Col = 'name' | 'dams' | 'high_hazard' | 'high_poor_unsat' | 'high_not_rated' | 'high_no_eap' | 'df' | 'pct_bad' | 'cost'


function verdict(n: Rollup): { grade: string; text: string } {
  const high = n.high_hazard || 1
  const bad = n.high_poor_unsat / high
  const noEap = n.high_no_eap / high
  const unrated = n.high_not_rated / high
  const parts = [
    `${(100 * bad).toFixed(0)}% of the ${fmtInt(n.high_hazard)} dams whose failure would likely kill people are rated Poor or Unsatisfactory`,
    `${(100 * noEap).toFixed(0)}% have no Emergency Action Plan`,
    `${(100 * unrated).toFixed(0)}% have no published condition rating at all`,
  ]
  const grade = bad > 0.15 || noEap > 0.15 ? 'D' : bad > 0.08 || noEap > 0.08 ? 'C' : 'B'
  return { grade, text: parts.join('; ') + '.' }
}

export default function Dashboard() {
  useTitle('National dashboard')
  const { data, error } = useSummary()
  const cat = useCatalog().data
  const [sort, setSort] = useState<Col>('high_poor_unsat')
  const [desc, setDesc] = useState(true)

  const rows = useMemo(() => {
    if (!data) return []
    const r = Object.entries(data.states).map(([st, s]) => ({
      st, name: s.name, dams: s.dams, high_hazard: s.high_hazard, high_poor_unsat: s.high_poor_unsat, high_not_rated: s.high_not_rated,
      high_no_eap: s.high_no_eap, df: (s.grades.D ?? 0) + (s.grades.F ?? 0), pct_bad: s.high_hazard ? (100 * s.high_poor_unsat) / s.high_hazard : 0,
      cost: s.cost_high_usd,
    }))
    r.sort((a, b) => {
      const x = a[sort], y = b[sort]
      const c = typeof x === 'string' ? (x as string).localeCompare(y as string) : (x as number) - (y as number)
      return desc ? -c : c
    })
    return r
  }, [data, sort, desc])

  if (error) return <ErrorBox message={error} />
  if (!data || !cat) return <Loading what="the national dashboard" />
  const n = data.national
  const v = verdict(n)
  const hz = (h: string, c: string) => n.hazard_condition[`${h}|${c}`] ?? 0
  // Figures from outside the inventory: data/curated/external_facts.json (checked by hand, see RECHECK.md).
  const ext = cat.external
  const num = (k: string) => Number(ext[k]?.value ?? 0)
  const conds = ['Satisfactory', 'Fair', 'Poor', 'Unsatisfactory', 'Not Rated', 'None']
  const hazards = ['High', 'Significant', 'Low', 'Undetermined', 'Not Available']
  const ps = n.plan_status
  const funnel = [
    ['Problem documented (Poor/Unsatisfactory, high-hazard)', n.high_poor_unsat],
    ['…with any remediation status or plan on record', (ps.study_or_design ?? 0) + (ps.under_construction ?? 0) + (ps.funded ?? 0) + (ps.completed ?? 0) + (ps.unfunded_identified ?? 0)],
    ['…in study, design or permitting', ps.study_or_design ?? 0],
    ['…with funding identified', ps.funded ?? 0],
    ['…under construction', ps.under_construction ?? 0],
    ['…completed', ps.completed ?? 0],
  ] as [string, number][]
  const th = (key: Col, label: string, num = true, extra = '') => (
    <th className={[num ? 'num' : '', extra].filter(Boolean).join(' ') || undefined} aria-sort={sort === key ? (desc ? 'descending' : 'ascending') : 'none'}>
      <button className="linklike" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }} onClick={() => { if (sort === key) setDesc(!desc); else { setSort(key); setDesc(key !== 'name') } }}>{label}{sort === key ? (desc ? ' ▼' : ' ▲') : ''}</button>
    </th>
  )

  return (
    <div className="wrap section">
      <h1>The State of America's Dams</h1>
      <p className="lede muted prose">One page for residents, agencies and lawmakers: how healthy the nation's dams are, who owns the problem ones, how far the fixes have progressed, and what it would cost. Every figure is computed from the sources listed at the bottom and can be regenerated from the open pipeline.</p>

      <div className="card" style={{ borderLeft: '6px solid var(--grade-' + v.grade.toLowerCase() + ')' }}>
        <div className="row" style={{ alignItems: 'flex-start' }}>
          <span className={`grade grade-lg grade-${v.grade}`} role="img" aria-label={`National verdict grade ${v.grade}`}>{v.grade}</span>
          <div style={{ flex: 1 }}>
            <h2 style={{ marginBottom: 4 }}>Verdict: {v.grade === 'D' ? 'a serious, fixable problem' : v.grade === 'C' ? 'concerning' : 'manageable'}</h2>
            <p style={{ margin: 0 }}>{v.text} The American Society of Civil Engineers graded dams <strong>{String(ext.asce_dams_grade?.value ?? '—')}</strong> in its <a href={ext.asce_dams_grade?.url} rel="noopener">{ext.asce_dams_grade?.year} Report Card</a>; the data here supports that verdict.</p>
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: 28 }}>Headline numbers</h2>
      <div className="grid grid-4">
        <StatTile value={fmtInt(n.dams)} label="dams in the National Inventory" />
        <StatTile value={fmtInt(n.high_hazard)} label="high-hazard: failure would likely cause loss of life" />
        <StatTile value={fmtInt(n.high_poor_unsat)} label="high-hazard dams rated Poor or Unsatisfactory" sub={`${fmtInt(n.condition['Unsatisfactory'] ?? 0)} Unsatisfactory`} />
        <StatTile value={fmtInt(n.high_no_eap)} label="high-hazard dams with no Emergency Action Plan" />
        <StatTile value={fmtInt(n.high_not_rated)} label="high-hazard dams with no published condition rating" />
        <StatTile value={fmtInt((n.hazard['Undetermined'] ?? 0) + (n.hazard['Not Available'] ?? 0))} label="dams whose downstream hazard is undetermined" />
        <StatTile value={fmtInt(n.issues['STALE_DATA'] ?? 0)} label="dams whose public record is over five years old" />
        <StatTile value={n.median_year ? `${ageOf(n.median_year, cat.snapshot_year)} yrs` : '—'} label={`median dam age in ${cat.snapshot_year}`} />
      </div>

      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Hazard × condition</h3>
          <p className="small muted">Many low- and significant-hazard dams have no published condition rating, so those rows are thinner than the high-hazard row — itself a finding.</p>
          <div style={{ overflowX: 'auto' }} tabIndex={0}>
            <table className="data small">
              <thead><tr><th>Hazard</th>{conds.map((c) => <th key={c} className="num">{c === 'None' ? 'No rating' : c}</th>)}<th className="num">Total</th></tr></thead>
              <tbody>
                {hazards.map((h) => (
                  <tr key={h}><td>{h}</td>{conds.map((c) => <td key={c} className="num" style={{ background: (c === 'Poor' || c === 'Unsatisfactory') && hz(h, c) ? 'color-mix(in srgb, var(--grade-f) 12%, transparent)' : undefined }}>{fmtInt(hz(h, c))}</td>)}<td className="num"><strong>{fmtInt(n.hazard[h] ?? 0)}</strong></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <h3>Dam Health Index grades</h3>
          <GradeDistribution grades={n.grades} />
          <h4 style={{ marginTop: 12 }}>High-hazard dams only</h4>
          <GradeDistribution grades={n.grades_high} compact />
          <p className="small muted">Index distribution (0 best – 100 worst), all dams:</p>
          <Histogram bins={n.dhi_hist} binWidth={10} label="Dam Health Index" />
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Who owns the problem dams</h3>
          <p className="small muted">Primary owner type of high-hazard dams rated Poor or Unsatisfactory, vs. all dams.</p>
          <BarList rows={Object.entries(n.owners_high_poor_unsat).map(([k, v]) => ({ label: k, value: v }))} total={n.high_poor_unsat} />
          <p className="small muted" style={{ marginTop: 8 }}>All dams: {Object.entries(n.owners).map(([k, v]) => `${k} ${fmtInt(v)}`).join(' · ')}. Federal dams ({fmtInt(n.federal)}, {fmtInt(n.federal_high)} high-hazard) are assessed under agency risk programs whose ratings are not published to the National Inventory.</p>
        </div>
        <div className="card">
          <h3>How far the fixes have progressed</h3>
          <p className="small muted">Plan status for the {fmtInt(n.high_poor_unsat)} high-hazard dams with a documented deficiency (from NID regulatory status and curated research).</p>
          <BarList rows={funnel.map(([label, value]) => ({ label, value }))} total={n.high_poor_unsat} />
          <p className="small"><strong>{fmtInt(ps.no_public_plan ?? 0)}</strong> deficient high-hazard dams have no remediation status and no public plan we could find.</p>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>When the dams were built</h3>
          <Histogram bins={Object.fromEntries(Object.entries(n.decades).filter(([d]) => +d >= 1850))} binWidth={10} label="Completion decade" highlightBelow={1976} />
          <p className="small muted">Highlighted: completed before 1976, i.e. before the National Dam Safety Program and the post-Teton design reforms. {fmtInt(n.issues['AGE_50'] ?? 0)} dams are past a 50-year design life with no recorded modification; {fmtInt(n.issues['AGE_100'] ?? 0)} are over 100.</p>
        </div>
        <div className="card">
          <h3>Emergency planning, high-hazard dams</h3>
          <BarList rows={Object.entries(n.eap_high).map(([k, v]) => ({ label: `EAP: ${k}`, value: v }))} total={n.high_hazard} />
          <p className="small muted">FEMA guidance calls for an Emergency Action Plan at every high-hazard dam. "Not Required" reflects a state's own rule, not the federal recommendation.</p>
          <h3 style={{ marginTop: 16 }}>What the dams do</h3>
          <BarList rows={Object.entries(n.purposes).map(([k, v]) => ({ label: k, value: v }))} total={n.dams} />
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3>What it would cost, and what is funded</h3>
        <div className="grid grid-4">
          <StatTile value={`${fmtUSD(n.cost_low_usd)}–${fmtUSD(n.cost_high_usd)}`} label="DamHealth planning-level band, all dams" />
          <StatTile value={fmtUSD(num('asdso_nonfederal_usd'))} label={`ASDSO estimate (${ext.asdso_nonfederal_usd?.as_of}), non-federal dams`} sub={`${fmtUSD(num('asdso_high_hazard_usd'))} for high-hazard`} />
          <StatTile value={fmtUSD(num('hhpd_iija_usd'))} label={ext.hhpd_iija_usd?.label ?? ''} />
          <StatTile value={fmtUSD(num('hhpd_annual_usd'))} label={`FEMA HHPD grants, ${ext.hhpd_annual_usd?.round ?? 'latest'} round`} />
        </div>
        <p className="small muted" style={{ marginTop: 8 }}>At the {ext.hhpd_annual_usd?.round ?? 'latest'} pace the federal rehabilitation grant program would take roughly {fmtInt(num('asdso_high_hazard_usd') / num('hhpd_annual_usd'))} years to fund the high-hazard backlog alone ({fmtInt(100 * num('hhpd_federal_share'))}% federal share, before cost growth). Sources: <a href={ext.asdso_nonfederal_usd?.url} rel="noopener">{ext.asdso_nonfederal_usd?.source}</a>; <a href={ext.hhpd_annual_usd?.url} rel="noopener">{ext.hhpd_annual_usd?.source}</a>; see <Link to="/plan">the national plan</Link>.</p>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3>Where</h3>
        <StateChoropleth states={data.states} metric="high_poor_unsat" />
      </div>

      <h2 style={{ marginTop: 28 }}>State leaderboard</h2>
      <p className="small muted">Click a column to sort. "% bad" is Poor/Unsatisfactory as a share of the state's high-hazard dams.</p>
      <div style={{ overflowX: 'auto' }} tabIndex={0}>
        <table className="data">
          <thead><tr>{th('name', 'State', false)}{th('dams', 'Dams', true, 'hide-sm')}{th('high_hazard', 'High hazard')}{th('high_poor_unsat', 'Poor / Unsat.')}{th('pct_bad', '% bad')}{th('high_not_rated', 'Not rated', true, 'hide-sm')}{th('high_no_eap', 'No EAP')}{th('df', 'D & F', true, 'hide-sm')}{th('cost', 'Cost (high band)', true, 'hide-sm')}</tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.st}>
                <td><Link to={`/state/${r.st}`}>{r.name}</Link></td>
                <td className="num hide-sm">{fmtInt(r.dams)}</td><td className="num">{fmtInt(r.high_hazard)}</td><td className="num">{fmtInt(r.high_poor_unsat)}</td>
                <td className="num">{r.pct_bad.toFixed(0)}%</td><td className="num hide-sm">{fmtInt(r.high_not_rated)}</td><td className="num">{fmtInt(r.high_no_eap)}</td><td className="num hide-sm">{fmtInt(r.df)}</td><td className="num hide-sm">{fmtUSD(r.cost)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: 28 }}>Sources for this page</h2>
      <div className="table-scroll" tabIndex={0}>
      <table className="data small">
        <thead><tr><th>Source</th><th>Publisher</th><th>Snapshot</th><th>Records</th><th>Where we read it</th></tr></thead>
        <tbody>
          {Object.values(cat.sources).map((s) => (
            <tr key={s.id}>
              <td><a href={s.url} rel="noopener">{s.name}</a></td><td>{s.publisher}</td><td>{s.snapshot}</td><td className="num">{s.records ? fmtInt(s.records) : '—'}</td>
              <td className="small">{s.mirror ? <a href={s.mirror_commit ? `${s.mirror}/tree/${s.mirror_commit}` : s.mirror} rel="noopener">{s.file}{s.mirror_commit ? ` @ ${s.mirror_commit.slice(0, 7)}` : ''}</a> : s.file}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div style={{ margin: '12px 0' }}><BuildInfo catalog={cat} /></div>
      <p className="small muted">Download: <a href={`${import.meta.env.BASE_URL}data/summary.json`}>summary.json</a> · <Link to="/methodology">methodology</Link>.</p>
    </div>
  )
}
