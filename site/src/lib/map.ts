import type { Grade, IndexRow } from './types'

export type Bounds = [[number, number], [number, number]]

/** Grade colors for map layers (MapLibre needs literal colors, not CSS variables). Match --grade-* in tokens.css. */
export const GRADE_HEX: Record<Grade, string> = { A: '#0ca30c', B: '#2a78d6', C: '#eda100', D: '#e34948', F: '#9e2b4a' }
export const US_BOUNDS: Bounds = [[-125, 24], [-66, 50]]

/** Bounding box of the rows that have coordinates, or null if none do. */
export function boundsOf(rows: IndexRow[]): Bounds | null {
  let w = Infinity, s = Infinity, e = -Infinity, n = -Infinity
  for (const r of rows) {
    if (r.lat == null || r.lon == null) continue
    w = Math.min(w, r.lon); e = Math.max(e, r.lon); s = Math.min(s, r.lat); n = Math.max(n, r.lat)
  }
  return Number.isFinite(w) ? [[w, s], [e, n]] : null
}
