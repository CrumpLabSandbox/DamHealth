import type { Catalog, Dam, IndexRow, ListRow, RecheckFile, StateFile, Summary } from './types'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const cache = new Map<string, Promise<unknown>>()

function getJSON<T>(path: string): Promise<T> {
  const url = `${BASE}/data/${path}`
  if (!cache.has(url)) {
    cache.set(url, fetch(url).then((r) => {
      if (!r.ok) throw new Error(`Failed to load ${path} (${r.status})`)
      return r.json()
    }))
  }
  return cache.get(url) as Promise<T>
}

export const loadCatalog = () => getJSON<Catalog>('catalog.json')
export const loadSummary = () => getJSON<Summary>('summary.json')
export const loadRecheck = () => getJSON<RecheckFile>('recheck.json')
export const loadState = (st: string) => getJSON<StateFile>(`states/${st.toUpperCase()}.json`)

let indexPromise: Promise<IndexRow[]> | null = null
export function loadIndex(): Promise<IndexRow[]> {
  if (!indexPromise) {
    indexPromise = getJSON<{ columns: string[]; rows: unknown[][] }>('index.json').then((d) => d.rows.map(rowToIndex))
  }
  return indexPromise
}

export function rowToIndex(r: unknown[]): IndexRow {
  const [id, name, st, lat, lon, hz, cond, grade, dhi] = r as [string, string, string, number | null, number | null, string, string, string, number]
  return { id, name, st, lat, lon, hz: hz as IndexRow['hz'], cond: cond as IndexRow['cond'], grade: grade as IndexRow['grade'], dhi }
}

export function rowToList(r: unknown[]): ListRow {
  const base = rowToIndex(r)
  const [, , , , , , , , , year, height_ft, storage_acft, county, river, n_issues, plan_status, eap] = r as unknown[]
  return {
    ...base,
    year: year as number | null,
    height_ft: height_ft as number | null,
    storage_acft: storage_acft as number | null,
    county: county as string | null,
    river: river as string | null,
    n_issues: n_issues as number,
    plan_status: plan_status as ListRow['plan_status'],
    eap: eap as string | null,
  }
}

const SHARD = 250
export function shardPath(nidId: string): string {
  const st = nidId.slice(0, 2).toUpperCase()
  const digits = nidId.replace(/\D/g, '') || '0'
  const shard = String(Math.floor(parseInt(digits, 10) / SHARD)).padStart(4, '0')
  return `dams/${st}/${shard}.json`
}

export async function loadDam(nidId: string): Promise<Dam | null> {
  const id = nidId.toUpperCase()
  try {
    const shard = await getJSON<Record<string, Dam>>(shardPath(id))
    return shard[id] ?? null
  } catch {
    return null
  }
}

/** Nearby dams from the index (haversine, km). */
export function nearby(rows: IndexRow[], lat: number, lon: number, n = 8, exclude?: string): (IndexRow & { km: number })[] {
  const out: (IndexRow & { km: number })[] = []
  const cosLat = Math.cos((lat * Math.PI) / 180)
  for (const r of rows) {
    if (r.lat == null || r.lon == null || r.id === exclude) continue
    const dLat = (r.lat - lat) * 111
    const dLon = (r.lon - lon) * 111 * cosLat
    const km = Math.hypot(dLat, dLon)
    if (km < 80) out.push({ ...r, km })
  }
  return out.sort((a, b) => a.km - b.km).slice(0, n)
}
