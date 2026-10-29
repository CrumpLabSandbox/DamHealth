import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import DamMap from '../components/DamMap'
import { US_BOUNDS } from '../lib/map'
import GradeBadge from '../components/GradeBadge'
import IssueList from '../components/IssueList'
import { loadDam, loadIndex } from '../lib/data'
import { GRADE_SENTENCE, GRADE_WORDS, fmtInt } from '../lib/format'
import { useCatalog, useTitle } from '../lib/hooks'
import { useLens } from '../lib/lens'
import type { Dam, Grade, HazardCode, IndexRow } from '../lib/types'
import HealthGauge from '../viz/HealthGauge'
import DamSchematic from '../viz/DamSchematic'

export default function Explore() {
  useTitle('Explore dams')
  const { lens } = useLens()
  const nav = useNavigate()
  const [params, setParams] = useSearchParams()
  const cat = useCatalog().data
  const [rows, setRows] = useState<IndexRow[] | null>(null)
  const [dam, setDam] = useState<Dam | null>(null)
  const [mapOk, setMapOk] = useState(true)
  const [userPos, setUserPos] = useState<[number, number] | null>(null)
  const panelRef = useRef<HTMLElement>(null)
  const mapBoxRef = useRef<HTMLDivElement>(null)
  // On phones the details panel sits below the map; bring it into view when a dam is picked.
  const narrow = () => window.matchMedia('(max-width: 860px)').matches
  const lastShown = useRef<string | null>(null)

  const selected = params.get('dam')
  const grade = (params.get('grade') ?? 'all') as Grade | 'all'
  const hz = (params.get('hz') ?? 'all') as HazardCode | 'all'
  const st = params.get('st') ?? 'all'
  const set = (k: string, v: string | null) => { const p = new URLSearchParams(params); if (v == null || v === 'all' || v === '') p.delete(k); else p.set(k, v); setParams(p, { replace: true }) }

  useEffect(() => { loadIndex().then(setRows) }, [])

  const filtered = useMemo(() => {
    if (!rows) return []
    return rows.filter((r) => (grade === 'all' || r.grade === grade) && (hz === 'all' || r.hz === hz) && (st === 'all' || r.st === st))
  }, [rows, grade, hz, st])

  const ordered = useMemo(() => [...filtered].sort((a, b) => b.dhi - a.dhi), [filtered])
  const idx = selected ? ordered.findIndex((r) => r.id === selected) : -1

  // Load selected dam record
  useEffect(() => {
    if (!selected) { setDam(null); return }
    let alive = true
    loadDam(selected).then((d) => alive && setDam(d))
    return () => { alive = false }
  }, [selected])
  useEffect(() => {
    if (!dam || lastShown.current === dam.nid_id) return
    lastShown.current = dam.nid_id
    if (narrow()) panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [dam])

  const go = useCallback((i: number) => { if (ordered[i]) set('dam', ordered[i].id) }, [ordered]) // eslint-disable-line react-hooks/exhaustive-deps
  const random = () => { if (filtered.length) set('dam', filtered[Math.floor(Math.random() * filtered.length)].id) }
  const nearMe = () => {
    navigator.geolocation?.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords
      let best: IndexRow | null = null, bd = Infinity
      for (const r of filtered) { if (r.lat == null || r.lon == null) continue; const d = Math.hypot((r.lat - latitude) * 111, (r.lon - longitude) * 111 * Math.cos(latitude * Math.PI / 180)); if (d < bd) { bd = d; best = r } }
      if (best) set('dam', best.id)
      else setUserPos([longitude, latitude])
    }, () => alert('Location unavailable. You can search by name instead.'))
  }

  const states = useMemo(() => rows ? [...new Set(rows.map((r) => r.st))].sort() : [], [rows])

  return (
    <div className="explore">
      <div className="explore-filters wrap">
        <div className="explore-selects">
        <label className="small">Grade{' '}<select value={grade} onChange={(e) => set('grade', e.target.value)}><option value="all">All</option>{(['F', 'D', 'C', 'B', 'A'] as Grade[]).map((g) => <option key={g} value={g}>{g}</option>)}</select></label>
        <label className="small">Hazard{' '}<select value={hz} onChange={(e) => set('hz', e.target.value)}><option value="all">All</option><option value="H">High</option><option value="S">Significant</option><option value="L">Low</option><option value="U">Undetermined</option></select></label>
        <label className="small">State{' '}<select value={st} onChange={(e) => set('st', e.target.value)}><option value="all">All</option>{states.map((s) => <option key={s} value={s}>{s}</option>)}</select></label>
        </div>
        <span className="small muted explore-count">{rows ? `${fmtInt(filtered.length)} dams` : 'Loading dams…'}</span>
        <span className="explore-spacer" />
        <div className="explore-actions">
        <button className="btn btn-sm" onClick={() => go(idx <= 0 ? ordered.length - 1 : idx - 1)} disabled={!ordered.length} aria-label="Previous dam (worse)">‹ Prev</button>
        <button className="btn btn-sm" onClick={() => go(idx < 0 ? 0 : (idx + 1) % ordered.length)} disabled={!ordered.length} aria-label="Next dam">Next ›</button>
        <button className="btn btn-sm" onClick={random} disabled={!filtered.length}>Random dam</button>
        <button className="btn btn-sm" onClick={nearMe} disabled={!filtered.length}>Dams near me</button>
        </div>
      </div>
      <div className="explore-body">
        <div className="explore-map" ref={mapBoxRef}>
          <DamMap
            rows={filtered}
            fit={st === 'all' ? US_BOUNDS : 'rows'}
            onSelect={(id) => set('dam', id)}
            selectedId={selected}
            focus={dam?.lat != null && dam.lon != null ? [dam.lon, dam.lat] : userPos}
            ariaLabel="Map of dams; click a point to select a dam"
            onTilesFailed={() => setMapOk(false)}
          />
          {!mapOk && <div className="callout warn small" style={{ position: 'absolute', left: 12, right: 12, bottom: 12 }}>Map tiles could not load (offline?). Use the filters and Next/Random buttons, or <Link to="/states">browse by state</Link>.</div>}
        </div>
        <aside className="explore-panel" aria-live="polite" aria-label="Selected dam" ref={panelRef}>
          {selected && <p className="back-to-map small"><button className="linklike" onClick={() => mapBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>↑ Back to map</button></p>}
          {!selected && (
            <div className="stack">
              <h2>Pick a dam</h2>
              <p className="muted">Click a point on the map, press <strong>Next</strong> to step through dams from worst to best, or try <strong>Random dam</strong>. Every dam is a dot colored by its grade, with the worst drawn on top; larger dots are high-hazard dams.</p>
              {ordered.length > 0 && (
                <>
                  <h3>Worst in view of your filters</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {ordered.slice(0, 12).map((r) => <li key={r.id} className="row" style={{ padding: '3px 0' }}><GradeBadge grade={r.grade} size="sm" /><button className="linklike" onClick={() => set('dam', r.id)}>{r.name}</button><span className="muted small">{r.st}</span></li>)}
                  </ul>
                </>
              )}
            </div>
          )}
          {selected && !dam && <p className="muted">Loading {selected}…</p>}
          {dam && cat && (
            <div className="stack">
              <div className="row" style={{ alignItems: 'flex-start' }}>
                <GradeBadge grade={dam.grade} size="lg" />
                <div style={{ flex: 1 }}>
                  <h2 style={{ marginBottom: 2 }}>{dam.name}</h2>
                  <div className="muted small">{dam.river && <>{dam.river} · </>}{dam.county && <>{dam.county} County, </>}{dam.state_name} · {dam.nid_id}</div>
                  <div className="small" style={{ marginTop: 4 }}><strong>{GRADE_WORDS[dam.grade]}</strong> · DHI {dam.scores.dhi} · {GRADE_SENTENCE[dam.grade]}</div>
                </div>
              </div>
              <div className="row">
                <span className="chip">Hazard: {dam.hazard}</span><span className="chip">Condition: {dam.condition ?? 'No rating'}</span><span className="chip">EAP: {dam.eap ?? '—'}</span>
                <span className="chip">{cat.plan_status_labels[dam.plan_status.status]}</span>
              </div>
              <HealthGauge scores={dam.scores} grade={dam.grade} />
              <DamSchematic dam={dam} catalog={cat} />
              <h3>{lens === 'engineering' ? `Issues (${dam.issues.length})` : 'Pressing issues'}</h3>
              <IssueList dam={dam} catalog={cat} />
              <p><Link className="btn btn-primary" to={`/dam/${dam.nid_id}`}>Full profile: history, plan, projections →</Link></p>
              <p className="small muted">{idx >= 0 && <>#{idx + 1} of {fmtInt(ordered.length)} by index (worst first). </>}<button className="linklike" onClick={() => nav(`/state/${dam.state}`)}>All dams in {dam.state_name}</button></p>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
