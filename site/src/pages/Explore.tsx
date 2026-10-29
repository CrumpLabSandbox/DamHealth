import * as maplibregl from 'maplibre-gl'
import type { GeoJSONSource, Map as MLMap } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import GradeBadge from '../components/GradeBadge'
import IssueList from '../components/IssueList'
import { loadDam, loadIndex } from '../lib/data'
import { GRADE_SENTENCE, GRADE_WORDS, fmtInt } from '../lib/format'
import { useCatalog, useTitle } from '../lib/hooks'
import { useLens } from '../lib/lens'
import type { Dam, Grade, HazardCode, IndexRow } from '../lib/types'
import HealthGauge from '../viz/HealthGauge'
import DamSchematic from '../viz/DamSchematic'

const GRADE_HEX: Record<Grade, string> = { A: '#0ca30c', B: '#2a78d6', C: '#eda100', D: '#e34948', F: '#9e2b4a' }
const US_BOUNDS: [[number, number], [number, number]] = [[-125, 24], [-66, 50]]

const STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap contributors', maxzoom: 19 },
  },
  layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
}

export default function Explore() {
  useTitle('Explore dams')
  const { lens } = useLens()
  const nav = useNavigate()
  const [params, setParams] = useSearchParams()
  const cat = useCatalog().data
  const mapRef = useRef<MLMap | null>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const [rows, setRows] = useState<IndexRow[] | null>(null)
  const [dam, setDam] = useState<Dam | null>(null)
  const [mapOk, setMapOk] = useState(true)
  const [mapReady, setMapReady] = useState(false)

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

  // Map init
  useEffect(() => {
    if (!divRef.current || mapRef.current) return
    let map: MLMap
    try {
      map = new maplibregl.Map({ container: divRef.current, style: STYLE, bounds: US_BOUNDS, fitBoundsOptions: { padding: 20 }, attributionControl: { compact: true } })
    } catch { setMapOk(false); return }
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')
    map.on('error', (e) => { if (/tile|style/i.test(String(e.error?.message))) setMapOk(false) })
    map.on('load', () => {
      map.addSource('dams', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }, cluster: true, clusterRadius: 40, clusterMaxZoom: 9, clusterProperties: { worst: ['max', ['get', 'dhi']] } })
      map.addLayer({ id: 'clusters', type: 'circle', source: 'dams', filter: ['has', 'point_count'], paint: {
        'circle-color': ['step', ['get', 'worst'], GRADE_HEX.B, 30, GRADE_HEX.C, 45, GRADE_HEX.D, 60, GRADE_HEX.F],
        'circle-opacity': 0.75, 'circle-stroke-color': '#fff', 'circle-stroke-width': 1.5,
        'circle-radius': ['step', ['get', 'point_count'], 12, 50, 16, 250, 20, 1000, 26, 5000, 32] } })
      map.addLayer({ id: 'cluster-count', type: 'symbol', source: 'dams', filter: ['has', 'point_count'], layout: { 'text-field': ['get', 'point_count_abbreviated'], 'text-size': 11 }, paint: { 'text-color': '#fff' } })
      map.addLayer({ id: 'points', type: 'circle', source: 'dams', filter: ['!', ['has', 'point_count']], paint: {
        'circle-color': ['match', ['get', 'grade'], 'A', GRADE_HEX.A, 'B', GRADE_HEX.B, 'C', GRADE_HEX.C, 'D', GRADE_HEX.D, GRADE_HEX.F],
        'circle-radius': ['case', ['==', ['get', 'hz'], 'H'], 7, 5], 'circle-stroke-color': '#fff', 'circle-stroke-width': 1.5 } })
      map.addLayer({ id: 'selected', type: 'circle', source: 'dams', filter: ['==', ['get', 'id'], ''], paint: { 'circle-radius': 12, 'circle-color': 'rgba(0,0,0,0)', 'circle-stroke-color': '#0b0b0b', 'circle-stroke-width': 3 } })
      map.on('click', 'clusters', (e) => {
        const f = e.features?.[0]; if (!f) return
        const src = map.getSource('dams') as GeoJSONSource
        src.getClusterExpansionZoom(f.properties!.cluster_id as number).then((z) => map.easeTo({ center: (f.geometry as GeoJSON.Point).coordinates as [number, number], zoom: z }))
      })
      map.on('click', 'points', (e) => { const f = e.features?.[0]; if (f) set('dam', f.properties!.id as string) })
      map.on('mouseenter', 'points', () => { map.getCanvas().style.cursor = 'pointer' })
      map.on('mouseleave', 'points', () => { map.getCanvas().style.cursor = '' })
      map.on('mouseenter', 'clusters', () => { map.getCanvas().style.cursor = 'pointer' })
      map.on('mouseleave', 'clusters', () => { map.getCanvas().style.cursor = '' })
      mapRef.current = map
      setMapReady(true)
    })
    return () => { map.remove(); mapRef.current = null }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Push filtered data to map
  useEffect(() => {
    const map = mapRef.current
    if (!map || !map.getSource('dams')) return
    const fc: GeoJSON.FeatureCollection = { type: 'FeatureCollection', features: filtered.filter((r) => r.lat != null && r.lon != null).map((r) => ({ type: 'Feature', geometry: { type: 'Point', coordinates: [r.lon!, r.lat!] }, properties: { id: r.id, grade: r.grade, hz: r.hz, dhi: r.dhi, name: r.name } })) }
    ;(map.getSource('dams') as GeoJSONSource).setData(fc)
  }, [filtered, mapOk, mapReady])

  // Highlight + fly to selection
  useEffect(() => {
    const map = mapRef.current
    if (!map || !map.getLayer('selected')) return
    map.setFilter('selected', ['==', ['get', 'id'], selected ?? ''])
    if (dam?.lat != null && dam.lon != null) {
      const z = map.getZoom()
      map.easeTo({ center: [dam.lon, dam.lat], zoom: Math.max(z, 9), duration: 600 })
    }
  }, [dam, selected, mapReady])

  const go = useCallback((i: number) => { if (ordered[i]) set('dam', ordered[i].id) }, [ordered]) // eslint-disable-line react-hooks/exhaustive-deps
  const random = () => { if (filtered.length) set('dam', filtered[Math.floor(Math.random() * filtered.length)].id) }
  const nearMe = () => {
    navigator.geolocation?.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords
      let best: IndexRow | null = null, bd = Infinity
      for (const r of filtered) { if (r.lat == null || r.lon == null) continue; const d = Math.hypot((r.lat - latitude) * 111, (r.lon - longitude) * 111 * Math.cos(latitude * Math.PI / 180)); if (d < bd) { bd = d; best = r } }
      if (best) set('dam', best.id)
      mapRef.current?.easeTo({ center: [longitude, latitude], zoom: 10 })
    }, () => alert('Location unavailable. You can search by name instead.'))
  }

  const states = useMemo(() => rows ? [...new Set(rows.map((r) => r.st))].sort() : [], [rows])

  return (
    <div className="explore">
      <div className="explore-filters wrap">
        <label className="small">Grade{' '}<select value={grade} onChange={(e) => set('grade', e.target.value)}><option value="all">All</option>{(['F', 'D', 'C', 'B', 'A'] as Grade[]).map((g) => <option key={g} value={g}>{g}</option>)}</select></label>
        <label className="small">Hazard{' '}<select value={hz} onChange={(e) => set('hz', e.target.value)}><option value="all">All</option><option value="H">High</option><option value="S">Significant</option><option value="L">Low</option><option value="U">Undetermined</option></select></label>
        <label className="small">State{' '}<select value={st} onChange={(e) => set('st', e.target.value)}><option value="all">All</option>{states.map((s) => <option key={s} value={s}>{s}</option>)}</select></label>
        <span className="small muted">{rows ? `${fmtInt(filtered.length)} dams` : 'Loading 92,000 dams…'}</span>
        <span style={{ flex: 1 }} />
        <button className="btn btn-sm" onClick={() => go(idx <= 0 ? ordered.length - 1 : idx - 1)} disabled={!ordered.length} aria-label="Previous dam (worse)">‹ Prev</button>
        <button className="btn btn-sm" onClick={() => go(idx < 0 ? 0 : (idx + 1) % ordered.length)} disabled={!ordered.length} aria-label="Next dam">Next ›</button>
        <button className="btn btn-sm" onClick={random} disabled={!filtered.length}>Random dam</button>
        <button className="btn btn-sm" onClick={nearMe} disabled={!filtered.length}>Dams near me</button>
      </div>
      <div className="explore-body">
        <div className="explore-map">
          <div ref={divRef} style={{ position: 'absolute', inset: 0 }} aria-label="Map of dams; click a point to select a dam" role="application" />
          {!mapOk && <div className="callout warn small" style={{ position: 'absolute', left: 12, right: 12, bottom: 12 }}>Map tiles could not load (offline?). Use the filters and Next/Random buttons, or <Link to="/states">browse by state</Link>.</div>}
          <div className="explore-legend small" aria-hidden="true">
            {(['A', 'B', 'C', 'D', 'F'] as Grade[]).map((g) => <span key={g} className="row" style={{ gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: GRADE_HEX[g], display: 'inline-block' }} />{g} {GRADE_WORDS[g]}</span>)}
          </div>
        </div>
        <aside className="explore-panel" aria-live="polite" aria-label="Selected dam">
          {!selected && (
            <div className="stack">
              <h2>Pick a dam</h2>
              <p className="muted">Click a point on the map, press <strong>Next</strong> to step through dams from worst to best, or try <strong>Random dam</strong>. Markers and clusters are colored by grade; larger points are high-hazard dams.</p>
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
