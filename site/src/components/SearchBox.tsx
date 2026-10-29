import MiniSearch from 'minisearch'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadIndex } from '../lib/data'
import type { IndexRow } from '../lib/types'
import GradeBadge from './GradeBadge'

let searchPromise: Promise<MiniSearch<IndexRow>> | null = null
function getSearch() {
  if (!searchPromise) {
    searchPromise = loadIndex().then((rows) => {
      const ms = new MiniSearch<IndexRow>({
        fields: ['name', 'id', 'st'],
        storeFields: ['id', 'name', 'st', 'grade', 'hz', 'dhi'],
        searchOptions: { prefix: true, fuzzy: 0.15, boost: { name: 3 }, combineWith: 'AND' },
      })
      ms.addAll(rows)
      return ms
    })
  }
  return searchPromise
}

export default function SearchBox({ compact = false, autoFocus = false }: { compact?: boolean; autoFocus?: boolean }) {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<IndexRow[]>([])
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [ready, setReady] = useState(false)
  const nav = useNavigate()
  const listId = useId()
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!q) { setResults([]); return }
    let cancelled = false
    getSearch().then((ms) => {
      if (cancelled) return
      setReady(true)
      const hits = ms.search(q).slice(0, 10).map((h) => ({
        id: h.id as string, name: h.name as string, st: h.st as string, grade: h.grade, hz: h.hz, dhi: h.dhi, lat: null, lon: null, cond: '',
      })) as IndexRow[]
      setResults(hits)
      setActive(0)
      setOpen(true)
    })
    return () => { cancelled = true }
  }, [q])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (!wrapRef.current?.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const go = (r: IndexRow) => { setOpen(false); setQ(''); nav(`/dam/${r.id}`) }

  const placeholder = useMemo(() => (compact ? 'Search dams…' : 'Search by dam name, lake, or NID ID (e.g. Oroville, CA00035)'), [compact])

  return (
    <div className="search" ref={wrapRef}>
      <label className="visually-hidden" htmlFor={`${listId}-input`}>Search dams</label>
      <input
        id={`${listId}-input`}
        type="search"
        role="combobox"
        aria-expanded={open && results.length > 0}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && results[active] ? `${listId}-${results[active].id}` : undefined}
        placeholder={placeholder}
        value={q}
        autoFocus={autoFocus}
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => { getSearch().then(() => setReady(true)); if (results.length) setOpen(true) }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)) }
          else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)) }
          else if (e.key === 'Enter' && results[active]) { e.preventDefault(); go(results[active]) }
          else if (e.key === 'Escape') setOpen(false)
        }}
      />
      {open && q && (
        <ul id={listId} role="listbox" aria-label="Search results">
          {results.length === 0 && <li aria-disabled="true" className="muted">{ready ? 'No dams match.' : 'Loading the inventory…'}</li>}
          {results.map((r, i) => (
            <li key={r.id} id={`${listId}-${r.id}`} role="option" aria-selected={i === active} onMouseDown={() => go(r)} onMouseEnter={() => setActive(i)}>
              <GradeBadge grade={r.grade} size="sm" />
              <span style={{ flex: 1 }}>{r.name} <span className="muted small">· {r.st}</span></span>
              <span className="muted small tabular">{r.id}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
