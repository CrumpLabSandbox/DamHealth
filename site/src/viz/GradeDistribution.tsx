import { useState } from 'react'
import { fmtInt } from '../lib/format'
import type { Grade } from '../lib/types'

const ORDER: Grade[] = ['A', 'B', 'C', 'D', 'F']
const WORD: Record<Grade, string> = { A: 'Sound', B: 'Watch', C: 'Concern', D: 'Serious', F: 'Critical' }

/** Horizontal bars, one per grade: color = grade status token, letter + count always visible. */
export default function GradeDistribution({ grades, compact = false }: { grades: Record<Grade, number>; compact?: boolean }) {
  const [table, setTable] = useState(false)
  const total = ORDER.reduce((s, g) => s + (grades[g] ?? 0), 0) || 1
  const max = Math.max(...ORDER.map((g) => grades[g] ?? 0), 1)
  if (table) {
    return (
      <div>
        <table className="data"><thead><tr><th>Grade</th><th className="num">Dams</th><th className="num">Share</th></tr></thead>
          <tbody>{ORDER.map((g) => <tr key={g}><td>{g} — {WORD[g]}</td><td className="num">{fmtInt(grades[g] ?? 0)}</td><td className="num">{((100 * (grades[g] ?? 0)) / total).toFixed(1)}%</td></tr>)}</tbody></table>
        <button className="btn btn-sm" style={{ marginTop: 8 }} onClick={() => setTable(false)}>Show chart</button>
      </div>
    )
  }
  return (
    <div>
      <div role="img" aria-label={`Grade distribution: ${ORDER.map((g) => `${g} ${fmtInt(grades[g] ?? 0)}`).join(', ')}`}>
        {ORDER.map((g) => {
          const v = grades[g] ?? 0
          const w = Math.max(2, (100 * v) / max)
          return (
            <div key={g} style={{ display: 'grid', gridTemplateColumns: '28px 1fr 110px', alignItems: 'center', gap: 10, margin: compact ? '4px 0' : '8px 0' }} title={`${g}: ${fmtInt(v)} dams`}>
              <span className={`grade grade-sm grade-${g}`} aria-hidden="true">{g}</span>
              <div style={{ height: compact ? 10 : 14, background: 'var(--surface-2)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: `${w}%`, height: '100%', background: `var(--grade-${g.toLowerCase()})`, borderRadius: '0 4px 4px 0' }} />
              </div>
              <span className="small tabular"><strong>{fmtInt(v)}</strong> <span className="muted">· {((100 * v) / total).toFixed(0)}%</span></span>
            </div>
          )
        })}
      </div>
      {!compact && <button className="btn btn-sm" style={{ marginTop: 8 }} onClick={() => setTable(true)}>Show as table</button>}
    </div>
  )
}
