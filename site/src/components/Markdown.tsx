import { marked } from 'marked'
import { useEffect, useMemo, useState } from 'react'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const cache = new Map<string, Promise<string>>()

/** Render a Markdown file from public/content/. Content is first-party, so no sanitizer is needed. */
export default function Markdown({ file, className = 'prose' }: { file: string; className?: string }) {
  const [md, setMd] = useState<string | null>(null)
  useEffect(() => {
    const url = `${BASE}/content/${file}`
    if (!cache.has(url)) cache.set(url, fetch(url).then((r) => (r.ok ? r.text() : `*Content not available (${r.status}).*`)))
    cache.get(url)!.then(setMd)
  }, [file])
  const html = useMemo(() => (md == null ? '' : (marked.parse(md, { async: false }) as string)), [md])
  if (md == null) return <p className="muted">Loading…</p>
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
