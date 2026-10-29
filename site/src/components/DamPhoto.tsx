import { useEffect, useState } from 'react'
import type { Dam } from '../lib/types'
import { useLens } from '../lib/lens'

interface WikiHit { title: string; extract: string; url: string; image?: string; imageAlt?: string; confidence: number }

const cache = new Map<string, Promise<WikiHit | null>>()

function norm(s: string) {
  return s.toLowerCase().replace(/\b(dam|lake|reservoir|the)\b/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()
}

/** Score a Wikipedia title against the dam. Requires the name tokens and a dam-ish word. */
function score(title: string, extract: string, dam: Dam): number {
  const t = title.toLowerCase()
  const n = norm(dam.name)
  let s = 0
  if (!n) return 0
  const tokens = n.split(' ').filter((w) => w.length > 2)
  const hit = tokens.filter((w) => t.includes(w)).length
  s += (hit / Math.max(1, tokens.length)) * 0.6
  if (/\b(dam|reservoir|lake|dike|levee)\b/.test(t)) s += 0.2
  const ex = extract.toLowerCase()
  if (ex.includes(dam.state_name.toLowerCase())) s += 0.15
  if (/\bdam\b/.test(ex)) s += 0.1
  if (dam.river && ex.includes(dam.river.toLowerCase().split(',')[0])) s += 0.1
  return Math.min(1, s)
}

async function lookup(dam: Dam): Promise<WikiHit | null> {
  const queries = [`${dam.name} Dam ${dam.state_name}`, `${dam.name} ${dam.state_name} dam`, ...dam.other_names.map((n) => `${n} ${dam.state_name}`)]
  for (const q of queries) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srlimit=3&format=json&origin=*`
    const res = await fetch(url).catch(() => null)
    if (!res?.ok) continue
    const data = await res.json()
    for (const hit of data?.query?.search ?? []) {
      const title: string = hit.title
      const sum = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`).then((r) => (r.ok ? r.json() : null)).catch(() => null)
      if (!sum) continue
      const c = score(title, sum.extract ?? '', dam)
      if (c >= 0.6) {
        return { title, extract: sum.extract ?? '', url: sum.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`, image: sum.originalimage?.source ?? sum.thumbnail?.source, imageAlt: title, confidence: c }
      }
    }
  }
  return null
}

/** Runtime enrichment: photo + background from Wikipedia (CORS, no key). Falls back gracefully. */
export default function DamPhoto({ dam, onMatch }: { dam: Dam; onMatch?: (h: { title: string; url: string } | null) => void }) {
  const { lens } = useLens()
  const [hit, setHit] = useState<WikiHit | null | undefined>(undefined)
  useEffect(() => {
    let alive = true
    setHit(undefined)
    if (!cache.has(dam.nid_id)) cache.set(dam.nid_id, lookup(dam).catch(() => null))
    cache.get(dam.nid_id)!.then((h) => { if (!alive) return; setHit(h); onMatch?.(h ? { title: h.title, url: h.url } : null) })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dam])

  const history = buildHistory(dam)
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      {hit?.image ? (
        <figure style={{ margin: 0 }}>
          <img src={hit.image} alt={`${hit.title} (photo from Wikipedia)`} style={{ width: '100%', maxHeight: 320, objectFit: 'cover' }} loading="lazy" />
          <figcaption className="small muted" style={{ padding: '6px 16px 0' }}>Photo via Wikipedia — <a href={hit.url} rel="noopener">{hit.title}</a>{hit.confidence < 0.8 && ' (possible match)'}</figcaption>
        </figure>
      ) : (
        <div style={{ background: 'var(--sky)', padding: '18px 16px' }} aria-hidden={hit === undefined}>
          <div className="small muted">{hit === undefined ? 'Looking for a photo…' : 'No photo found in public sources; see the schematic below.'}</div>
        </div>
      )}
      <div style={{ padding: 16 }}>
        <h2 style={{ fontSize: '1.1rem' }}>History &amp; background</h2>
        {hit?.extract ? (
          <p className="small">{hit.extract} <a href={hit.url} rel="noopener">Read more on Wikipedia</a></p>
        ) : (
          <p className="small">{history}</p>
        )}
        {lens === 'engineering' && hit && <p className="small muted">Match confidence {Math.round(hit.confidence * 100)}% (name tokens, state, dam keywords).</p>}
      </div>
    </div>
  )
}

/** Reconstruct a short history from NID facts when no article exists. */
export function buildHistory(dam: Dam): string {
  const parts: string[] = []
  const type = dam.dam_types[0] ? `${dam.dam_types[0].toLowerCase()} dam` : 'dam'
  if (dam.year_completed) parts.push(`${dam.name} is a ${type} completed in ${dam.year_completed}${dam.river ? ` on ${dam.river}` : ''}${dam.county ? ` in ${dam.county} County, ${dam.state_name}` : ` in ${dam.state_name}`}.`)
  else parts.push(`${dam.name} is a ${type}${dam.river ? ` on ${dam.river}` : ''} in ${dam.state_name}; its construction date is not recorded.`)
  if (dam.designer) parts.push(`It was designed by ${dam.designer}.`)
  if (dam.purposes.length) parts.push(`Its recorded purpose${dam.purposes.length > 1 ? 's are' : ' is'} ${dam.purposes.map((p) => p.toLowerCase()).join(', ')}.`)
  if (dam.height_ft || dam.storage_acft) parts.push(`It stands ${dam.height_ft ? `${Math.round(dam.height_ft)} feet high` : 'at an unrecorded height'}${dam.storage_acft ? ` and can store about ${Math.round(dam.storage_acft).toLocaleString()} acre-feet of water` : ''}.`)
  if (dam.year_modified) parts.push(`It was last significantly modified in ${dam.year_modified}.`)
  if (dam.owner_name) parts.push(`It is owned by ${dam.owner_name}.`)
  return parts.join(' ')
}
