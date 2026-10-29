import type { Grade } from '../lib/types'

const SUBS: { key: 'condition' | 'readiness' | 'consequence'; label: string; plain: string }[] = [
  { key: 'condition', label: 'Condition', plain: 'What inspectors found, plus age' },
  { key: 'readiness', label: 'Readiness', plain: 'Emergency plan, inspections, oversight' },
  { key: 'consequence', label: 'Consequence', plain: 'How bad a failure would be' },
]

/** Arc gauge for the DHI (0 best → 100 worst) with the three sub-score bars. */
export default function HealthGauge({ scores, grade }: { scores: { condition: number; readiness: number; consequence: number; dhi: number }; grade: Grade }) {
  const r = 70
  const cx = 90
  const cy = 86
  const start = Math.PI
  const sweep = Math.PI * (scores.dhi / 100)
  const arc = (a0: number, a1: number) => {
    const x0 = cx + r * Math.cos(a0), y0 = cy - r * Math.sin(a0)
    const x1 = cx + r * Math.cos(a1), y1 = cy - r * Math.sin(a1)
    return `M${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1}`
  }
  // Grade band ticks at 20/30/45/60
  const bands = [[0, 20, 'a'], [20, 30, 'b'], [30, 45, 'c'], [45, 60, 'd'], [60, 100, 'f']] as const
  return (
    <div className="grid gauge-grid">
      <svg viewBox="0 0 180 100" role="img" aria-label={`Dam Health Index ${scores.dhi} of 100, grade ${grade}`} style={{ width: '100%', maxWidth: 220, margin: '0 auto' }}>
        {bands.map(([a, b, g]) => (
          <path key={g} d={arc(start - (Math.PI * a) / 100, start - (Math.PI * b) / 100)} fill="none" stroke={`var(--grade-${g})`} strokeWidth="6" opacity="0.28" strokeLinecap="butt" />
        ))}
        <path d={arc(start, start - Math.max(0.02, sweep))} fill="none" stroke={`var(--grade-${grade.toLowerCase()})`} strokeWidth="10" strokeLinecap="round" />
        <text x={cx} y={cy - 8} textAnchor="middle" fontSize="30" fontWeight="800" fill="var(--ink)">{Math.round(scores.dhi)}</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fontSize="9" fill="var(--ink-2)">Dam Health Index · 0 best, 100 worst</text>
        <text x={cx - r} y={cy + 12} textAnchor="middle" fontSize="8" fill="var(--ink-3)">0</text>
        <text x={cx + r} y={cy + 12} textAnchor="middle" fontSize="8" fill="var(--ink-3)">100</text>
      </svg>
      <div>
        {SUBS.map((s) => (
          <div key={s.key} style={{ margin: '6px 0' }}>
            <div className="row spread small" style={{ flexWrap: 'nowrap', alignItems: 'flex-start' }}><span style={{ minWidth: 0 }}><strong>{s.label}</strong> <span className="muted">· {s.plain}</span></span><span className="tabular">{Math.round(scores[s.key])}</span></div>
            <div style={{ height: 8, background: 'var(--surface-2)', borderRadius: 4, overflow: 'hidden' }} aria-hidden="true">
              <div style={{ width: `${scores[s.key]}%`, height: '100%', background: 'var(--accent-fill)', borderRadius: '0 4px 4px 0' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
