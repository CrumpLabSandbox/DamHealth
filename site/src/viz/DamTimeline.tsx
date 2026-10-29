import type { Dam } from '../lib/types'

const NOW = 2026

interface Ev { year: number; label: string; kind: 'past' | 'now' | 'plan' }

/** Horizontal timeline: built, modified, inspection, EAP, today, then the 1/5/10-year plan horizons. */
export default function DamTimeline({ dam }: { dam: Dam }) {
  const past: Ev[] = []
  if (dam.year_completed) past.push({ year: dam.year_completed, label: `Built ${dam.year_completed}`, kind: 'past' })
  if (dam.year_modified) past.push({ year: dam.year_modified, label: `Modified ${dam.year_modified}`, kind: 'past' })
  if (dam.eap_last_revision) past.push({ year: +dam.eap_last_revision.slice(0, 4), label: `EAP revised ${dam.eap_last_revision.slice(0, 4)}`, kind: 'past' })
  if (dam.inspection_date) past.push({ year: +dam.inspection_date.slice(0, 4), label: `Inspected ${dam.inspection_date.slice(0, 4)}`, kind: 'past' })
  past.sort((a, b) => a.year - b.year)
  const plan: Ev[] = [
    { year: NOW, label: 'Today', kind: 'now' },
    { year: NOW + 1, label: 'Yr 1 · stabilize', kind: 'plan' },
    { year: NOW + 5, label: 'Yr 5 · fixed', kind: 'plan' },
    { year: NOW + 10, label: 'Yr 10 · modern', kind: 'plan' },
  ]
  // Past uses a compressed scale on the left 60%; the plan decade gets the right 40% so labels fit.
  const minY = Math.min(...past.map((e) => e.year), NOW - 20)
  const xPast = (y: number) => 20 + ((y - minY) / Math.max(1, NOW - minY)) * 330
  const xPlan = (y: number) => 350 + ((y - NOW) / 11) * 230
  const all = [...past.map((e) => ({ ...e, x: xPast(e.year) })), ...plan.map((e) => ({ ...e, x: xPlan(e.year) }))]
  // Alternate label rows and nudge labels that would collide.
  const placed = all.map((e, i) => ({ ...e, row: i % 2 }))
  return (
    <>
    <ol className="timeline-list show-sm" aria-label="Timeline">
      {all.map((e) => (
        <li key={e.label} className={`tl-${e.kind}`}><span className="tl-dot" aria-hidden="true" />{e.kind === 'plan' ? `${e.year} · ${e.label.replace(/^Yr (\d+) · /, 'year $1: ')}` : e.label}</li>
      ))}
    </ol>
    <svg className="hide-sm" viewBox="0 0 600 120" role="img" aria-label={`Timeline: ${all.map((e) => e.label).join('; ')}`} style={{ width: '100%', height: 'auto' }}>
      <line x1="20" y1="62" x2="350" y2="62" stroke="var(--axis)" strokeWidth="2" />
      <line x1="350" y1="62" x2="580" y2="62" stroke="var(--accent-fill)" strokeWidth="2" strokeDasharray="4 4" />
      <rect x="350" y="52" width="230" height="20" fill="var(--accent-fill)" opacity="0.08" />
      {placed.map((e) => (
        <g key={e.label}>
          <circle cx={e.x} cy="62" r={e.kind === 'now' ? 7 : 5} fill={e.kind === 'plan' ? 'var(--surface)' : e.kind === 'now' ? 'var(--accent-fill)' : 'var(--ink-2)'} stroke={e.kind === 'plan' ? 'var(--accent-fill)' : 'var(--surface)'} strokeWidth="2" />
          <line x1={e.x} y1={e.row ? 70 : 54} x2={e.x} y2={e.row ? 82 : 42} stroke="var(--axis)" />
          <text x={e.x} y={e.row ? 94 : 38} textAnchor="middle" fontSize="9" fill={e.kind === 'plan' ? 'var(--accent-fill)' : 'var(--ink-2)'} fontWeight={e.kind === 'now' ? 700 : 400}>{e.label}</text>
        </g>
      ))}
      <text x="20" y="114" fontSize="8" fill="var(--ink-3)">{minY}</text>
      <text x="350" y="114" fontSize="8" fill="var(--ink-3)" textAnchor="middle">{NOW}</text>
      <text x="580" y="114" fontSize="8" fill="var(--ink-3)" textAnchor="end">{NOW + 10}</text>
    </svg>
    </>
  )
}
