import { Link, useParams } from 'react-router-dom'
import GradeBadge from '../components/GradeBadge'
import Loading, { ErrorBox } from '../components/Loading'
import DamPhoto from '../components/DamPhoto'
import IssueList from '../components/IssueList'
import PlanPanel from '../components/PlanPanel'
import AttributeTable from '../components/AttributeTable'
import NearbyDams from '../components/NearbyDams'
import HealthGauge from '../viz/HealthGauge'
import DamSchematic from '../viz/DamSchematic'
import ConsequenceStrip from '../viz/ConsequenceStrip'
import DamTimeline from '../viz/DamTimeline'
import ComparisonBars from '../viz/ComparisonBars'
import FailureModes from '../components/FailureModes'
import SourcesPanel from '../components/SourcesPanel'
import { useState } from 'react'
import { loadDam } from '../lib/data'
import { GRADE_SENTENCE, GRADE_WORDS, ageOf, fmtInt, fmtRange, volumeAnalogy } from '../lib/format'
import { useAsync, useCatalog, useSummary, useTitle } from '../lib/hooks'
import { useLens } from '../lib/lens'

export default function DamPage() {
  const { id = '' } = useParams()
  const { lens } = useLens()
  const { data: dam, error, loading } = useAsync(() => loadDam(id), [id])
  const [wiki, setWiki] = useState<{ title: string; url: string } | null>(null)
  const cat = useCatalog().data
  const summary = useSummary().data
  useTitle(dam ? `${dam.name} (${dam.state})` : 'Dam')

  if (error) return <ErrorBox message={error} />
  if (loading || !cat) return <Loading what="dam record" />
  if (!dam) {
    return (
      <div className="wrap section">
        <h1>No dam with ID {id.toUpperCase()}</h1>
        <p className="muted">Check the NID ID, or <Link to="/explore">search the map</Link>.</p>
      </div>
    )
  }

  const eng = lens === 'engineering'
  const age = ageOf(dam.year_completed)
  const planLabel = cat.plan_status_labels[dam.plan_status.status]
  const stateRoll = summary?.states[dam.state]
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <article className="wrap section">
      <nav aria-label="Breadcrumb" className="small muted" style={{ marginBottom: 8 }}>
        <Link to="/states">States</Link> › <Link to={`/state/${dam.state}`}>{dam.state_name}</Link>{dam.county && <> › {dam.county_full_name ?? `${dam.county} County`}</>}
      </nav>

      <header className="grid grid-2" style={{ alignItems: 'start' }}>
        <div>
          <h1 style={{ marginBottom: 4 }}>{dam.name}{!/dam|dike|reservoir|lake|levee/i.test(dam.name) && ' Dam'}</h1>
          <p className="muted" style={{ marginBottom: 12 }}>
            {dam.river && <>{dam.river} · </>}{dam.county && <>{dam.county} County, </>}{dam.state_name} · NID {dam.nid_id}
            {dam.other_names.length > 0 && <> · also known as {dam.other_names.join(', ')}</>}
          </p>
          <div className="row" style={{ alignItems: 'center', gap: 16 }}>
            <GradeBadge grade={dam.grade} size="lg" />
            <div style={{ flex: '1 1 200px', minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{GRADE_WORDS[dam.grade]} — Dam Health Index {dam.scores.dhi}</div>
              <div className="muted">{GRADE_SENTENCE[dam.grade]}</div>
              <div className="small muted">Data confidence: <strong>{dam.confidence}</strong>{dam.coverage === 'current' ? ` · NID data as of ${dam.attr_date}` : dam.coverage === '2019' ? ' · newest record 2019' : ' · includes March 2026 data'}</div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 14 }}>
            <span className={`chip`}>Hazard: {dam.hazard}</span>
            <span className="chip">Condition: {dam.condition ?? 'No rating'}</span>
            <span className="chip">EAP: {dam.eap ?? 'Unknown'}</span>
            <span className="chip">Plan: {planLabel}</span>
          </div>
          {dam.hazard_note && <p className="callout warn small" style={{ marginTop: 12 }}>{dam.hazard_note}</p>}
          {dam.merge_note && <p className="callout small" style={{ marginTop: 12 }}>{dam.merge_note}</p>}
        </div>
        <DamPhoto dam={dam} onMatch={setWiki} />
      </header>

      <section className="grid grid-2" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>{eng ? 'Index breakdown' : 'What the grade means'}</h2>
          <HealthGauge scores={dam.scores} grade={dam.grade} />
          {eng ? (
            <ul className="small muted">
              <li>DHI = 0.70 × Condition × (0.5 + 0.5 × Consequence/100) + 0.30 × Readiness</li>
              {dam.grade_rules.map((r) => <li key={r}>Rule applied: {r}</li>)}
              <li><Link to="/methodology">Full methodology</Link></li>
            </ul>
          ) : (
            <p className="muted">
              {dam.hazard === 'High' ? 'If this dam failed, people downstream would likely die. ' : dam.hazard === 'Significant' ? 'If this dam failed, it would likely cause major property or environmental damage. ' : dam.hazard === 'Low' ? 'If this dam failed, damage would mostly be limited to the owner’s property. ' : 'Nobody has yet determined what a failure would do downstream. '}
              {dam.condition === 'Unsatisfactory' ? 'Inspectors have found a deficiency that needs immediate or emergency action.' : dam.condition === 'Poor' ? 'Inspectors have found a deficiency that needs repair.' : dam.condition === 'Fair' ? 'No problems under normal conditions, but an extreme flood or earthquake could expose one.' : dam.condition === 'Satisfactory' ? 'Inspectors found no deficiencies.' : 'No condition rating is published for this dam.'}
            </p>
          )}
        </div>
        <div className="card">
          <h2>{eng ? 'Schematic section' : 'The dam, drawn'}</h2>
          <DamSchematic dam={dam} catalog={cat} />
        </div>
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <div className="section-title">
          <h2>{eng ? `Issues (${dam.issues.length})` : dam.issues.length ? 'Pressing issues' : 'No issues on record'}</h2>
          <span className="small"><Link to="/issues">About these issues</Link> · <a href="#sources">what triggered each</a></span>
        </div>
        <IssueList dam={dam} catalog={cat} />
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <div className="section-title">
          <h2>{eng ? 'Rehabilitation work plan' : 'What should happen, and when'}</h2>
          <span className="chip">{planLabel}</span>
        </div>
        <PlanPanel dam={dam} catalog={cat} />
      </section>

      <section className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h2>{eng ? 'Consequence screening' : 'What a failure would mean downstream'}</h2>
          <ConsequenceStrip dam={dam} />
          {dam.projections.breach && (
            <p className="small muted">
              {eng
                ? `Froehlich (1995) screening: peak breach discharge ≈ ${fmtInt(dam.projections.breach.peak_discharge_cfs)} cfs. Screening heuristic only; not a substitute for a breach/inundation study.`
                : `${dam.projections.breach.reach_band}. ${volumeAnalogy(dam.storage_acft) ? `The reservoir holds ${volumeAnalogy(dam.storage_acft)}.` : ''}`}
            </p>
          )}
          <h3 style={{ marginTop: 16 }}>The next ten years</h3>
          <ul>{dam.projections.ten_year_outlook.map((o, i) => <li key={i}>{o}</li>)}</ul>
          <h3>Climate stress — {dam.projections.climate_region}</h3>
          <p className="small muted">{cat.climate_outlook[dam.projections.climate_region]}</p>
        </div>
        <div className="card">
          <h2>Timeline</h2>
          <DamTimeline dam={dam} />
          <h3 style={{ marginTop: 16 }}>Compared with {dam.state_name} and the nation</h3>
          <ComparisonBars dam={dam} state={stateRoll} national={summary?.national} />
        </div>
      </section>

      {eng && (
        <section className="card" style={{ marginTop: 16 }}>
          <h2>Failure-mode checklist</h2>
          <FailureModes dam={dam} />
        </section>
      )}

      <section className="card" style={{ marginTop: 16 }} id="sources">
        <h2>Sources &amp; verification</h2>
        <SourcesPanel dam={dam} catalog={cat} wiki={wiki} />
      </section>

      <section className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h2>{eng ? 'NID attributes' : 'Facts about this dam'}</h2>
          <AttributeTable dam={dam} />
          <p className="small muted">
            Cost to rehabilitate (planning-level band): <strong>{fmtRange(dam.cost?.low_usd, dam.cost?.high_usd)}</strong>{dam.cost?.basis && <> · basis: {dam.cost.basis}</>}. {age != null && <>Age: {age} years.</>}
          </p>
        </div>
        <div className="card">
          <h2>Who is responsible</h2>
          <dl className="attr">
            <dt>Owner</dt><dd>{dam.owner_name ?? '—'} {dam.owner_types.length > 0 && <span className="muted">({dam.owner_types.join(', ')})</span>}</dd>
            <dt>State regulator</dt><dd>{dam.state_reg_agency ?? (dam.state_regulated ? 'State dam safety program' : 'Not recorded')}</dd>
            {dam.federal_roles.length > 0 && <><dt>Federal roles</dt><dd>{dam.federal_roles.join('; ')}</dd></>}
            {dam.cong_district && <><dt>Congressional district{dam.cong_rep_2019 ? ' (2019)' : ''}</dt><dd>{dam.cong_district}{dam.cong_rep_2019 && <> · {dam.cong_rep_2019} at the time</>}</dd></>}
            <dt>Official record</dt><dd><a href={`https://nid.sec.usace.army.mil/#/dams/system/${dam.nid_id}/summary`} rel="noopener">National Inventory of Dams: {dam.nid_id}</a></dd>
            {dam.plan_status.source_url && <><dt>Plan source</dt><dd><a href={dam.plan_status.source_url} rel="noopener">{dam.plan_status.program ?? 'Source'}</a>{dam.plan_status.note && <div className="small muted">{dam.plan_status.note}</div>}</dd></>}
          </dl>
          {!eng && <p><Link className="btn btn-primary" to={`/act?dam=${dam.nid_id}`}>Take action for this dam</Link></p>}
          <NearbyDams dam={dam} />
        </div>
      </section>
    </article>
  )
}
