import * as maplibregl from 'maplibre-gl'
import type { GeoJSONSource, LngLatBoundsLike, Map as MLMap } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
// MapLibre 6 looks for its worker next to its own module, which bundling moves.
// Point it at a copy Vite emits with the build so GeoJSON points can render.
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url'
import { useEffect, useRef, useState } from 'react'
import { GRADE_WORDS } from '../lib/format'
import { GRADE_HEX, boundsOf, type Bounds } from '../lib/map'
import type { Grade, IndexRow } from '../lib/types'

maplibregl.setWorkerUrl(new URL(workerUrl, window.location.href).href)

const GRADES: Grade[] = ['A', 'B', 'C', 'D', 'F']

const STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap contributors', maxzoom: 19 },
  },
  layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
}

export interface DamMapProps {
  rows: IndexRow[]
  /** Fixed bounds, or 'rows' to fit (and refit) to the dams shown. */
  fit: Bounds | 'rows'
  onSelect: (id: string) => void
  selectedId?: string | null
  focus?: [number, number] | null
  ariaLabel: string
  onTilesFailed?: () => void
}

/** Map of dams, each a dot colored by its grade. */
export default function DamMap({ rows, fit, onSelect, selectedId = null, focus = null, ariaLabel, onTilesFailed }: DamMapProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MLMap | null>(null)
  const [ready, setReady] = useState(false)
  const [drawing, setDrawing] = useState(true)
  const onSelectRef = useRef(onSelect)
  onSelectRef.current = onSelect
  const failRef = useRef(onTilesFailed)
  failRef.current = onTilesFailed
  const fitRef = useRef<{ target: Bounds | null; done: boolean }>({ target: null, done: false })

  const doFit = (map: MLMap, animate: boolean) => {
    const t = fitRef.current.target
    const el = divRef.current
    if (!t || !el || el.clientWidth === 0 || el.clientHeight === 0) return
    const single = t[0][0] === t[1][0] && t[0][1] === t[1][1]
    if (single) map.jumpTo({ center: t[0], zoom: 10 })
    else map.fitBounds(t as LngLatBoundsLike, { padding: 30, maxZoom: 11, duration: animate ? 500 : 0 })
    fitRef.current.done = true
  }

  // Create the map once.
  useEffect(() => {
    const el = divRef.current
    if (!el) return
    let map: MLMap
    try {
      map = new maplibregl.Map({ container: el, style: STYLE, center: [-98, 39], zoom: 3, attributionControl: { compact: true } })
    } catch { failRef.current?.(); return }
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')
    map.on('error', (e) => { if (/tile|style/i.test(String(e.error?.message))) failRef.current?.() })
    const popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 10 })
    map.on('load', () => {
      map.addSource('dams', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } })
      // Every dam is drawn, small when zoomed out; worse grades sort on top so problem areas stand out.
      map.addLayer({ id: 'points', type: 'circle', source: 'dams', layout: { 'circle-sort-key': ['get', 'dhi'] }, paint: {
        'circle-color': ['match', ['get', 'grade'], 'A', GRADE_HEX.A, 'B', GRADE_HEX.B, 'C', GRADE_HEX.C, 'D', GRADE_HEX.D, GRADE_HEX.F],
        'circle-radius': ['interpolate', ['linear'], ['zoom'],
          3, ['case', ['==', ['get', 'hz'], 'H'], 2.2, 1.4],
          7, ['case', ['==', ['get', 'hz'], 'H'], 4.5, 3],
          11, ['case', ['==', ['get', 'hz'], 'H'], 8, 6]],
        'circle-opacity': 0.9,
        'circle-stroke-color': '#fff',
        'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 6, 0, 9, 1.5] } })
      map.addLayer({ id: 'selected', type: 'circle', source: 'dams', filter: ['==', ['get', 'id'], ''], paint: { 'circle-radius': 12, 'circle-color': 'rgba(0,0,0,0)', 'circle-stroke-color': '#0b0b0b', 'circle-stroke-width': 3 } })
      map.on('click', 'points', (e) => { const f = e.features?.[0]; if (f) onSelectRef.current(f.properties!.id as string) })
      map.on('mousemove', 'points', (e) => {
        const f = e.features?.[0]; if (!f) return
        map.getCanvas().style.cursor = 'pointer'
        const p = f.properties as { name: string; grade: Grade }
        const node = document.createElement('div')
        node.className = 'small'
        node.textContent = `${p.name} · ${p.grade} (${GRADE_WORDS[p.grade]})`
        popup.setLngLat((f.geometry as GeoJSON.Point).coordinates as [number, number]).setDOMContent(node).addTo(map)
      })
      map.on('mouseleave', 'points', () => { map.getCanvas().style.cursor = ''; popup.remove() })
      mapRef.current = map
      map.resize()
      doFit(map, false)
      setReady(true)
    })
    // The container can start at zero size (lazy route, flex layout); keep the canvas in step
    // and do the first fit once there is room for it.
    const ro = new ResizeObserver(() => {
      map.resize()
      if (!fitRef.current.done && mapRef.current) doFit(map, false)
    })
    ro.observe(el)
    return () => { ro.disconnect(); popup.remove(); map.remove(); mapRef.current = null }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Data, then fit.
  useEffect(() => {
    const map = mapRef.current
    if (!map || !ready) return
    const fc: GeoJSON.FeatureCollection = {
      type: 'FeatureCollection',
      features: rows.filter((r) => r.lat != null && r.lon != null).map((r) => ({ type: 'Feature', geometry: { type: 'Point', coordinates: [r.lon!, r.lat!] }, properties: { id: r.id, grade: r.grade, hz: r.hz, dhi: r.dhi, name: r.name } })),
    }
    setDrawing(true)
    ;(map.getSource('dams') as GeoJSONSource).setData(fc)
    const done = () => setDrawing(false)
    map.once('idle', done)
    return () => { map.off('idle', done) }
  }, [rows, ready])

  const fitKey = fit === 'rows' ? `rows:${JSON.stringify(boundsOf(rows))}` : JSON.stringify(fit)
  useEffect(() => {
    const target = fit === 'rows' ? boundsOf(rows) : fit
    const first = !fitRef.current.done
    fitRef.current = { target, done: false }
    const map = mapRef.current
    if (map && ready) doFit(map, !first)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitKey, ready])

  // Selection highlight and focus.
  useEffect(() => {
    const map = mapRef.current
    if (!map || !ready) return
    map.setFilter('selected', ['==', ['get', 'id'], selectedId ?? ''])
  }, [selectedId, ready])
  useEffect(() => {
    const map = mapRef.current
    if (!map || !ready || !focus) return
    map.easeTo({ center: focus, zoom: Math.max(map.getZoom(), 9), duration: 600 })
  }, [focus?.[0], focus?.[1], ready]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div ref={divRef} style={{ position: 'absolute', inset: 0 }} aria-label={ariaLabel} role="application" />
      {drawing && <div className="map-status small" role="status">Drawing dams…</div>}
      <div className="explore-legend small" aria-hidden="true">
        {GRADES.map((g) => <span key={g} className="row" style={{ gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: GRADE_HEX[g], display: 'inline-block' }} />{g} {GRADE_WORDS[g]}</span>)}
      </div>
    </>
  )
}
