import { useState } from 'react'
import { fmtInt } from '../lib/format'

/** Column histogram over numeric bins (keys are bin starts). One hue; optional emphasis band. */
export default function Histogram({ bins, binWidth, label, highlightBelow }: { bins: Record<string, number>; binWidth: number; label: string; highlightBelow?: number }) {
  const [table, setTable] = useState(false)
  const entries = Object.entries(bins).map(([k, v]) => [Number(k), v] as [number, number]).sort((a, b) => a[0] - b[0])
  if (!entries.length) return null
  const max = Math.max(...entries.map((e) => e[1]))
  const W = 600, H = 170, pad = 28
  const bw = (W - pad * 2) / entries.length
  if (table) {
    return (
      <div>
        <table className="data small"><thead><tr><th>{label}</th><th className="num">Dams</th></tr></thead>
          <tbody>{entries.map(([k, v]) => <tr key={k}><td>{k}–{k + binWidth - 1}</td><td className="num">{fmtInt(v)}</td></tr>)}</tbody></table>
        <button className="btn btn-sm" style={{ marginTop: 8 }} onClick={() => setTable(false)}>Show chart</button>
      </div>
    )
  }
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${label} histogram; see table for values`} style={{ width: '100%', height: 'auto' }}>
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="var(--axis)" />
        {entries.map(([k, v], i) => {
          const h = ((H - pad * 2) * v) / max
          const x = pad + i * bw
          const hl = highlightBelow != null && k < highlightBelow
          return (
            <g key={k}>
              <rect x={x + 1} y={H - pad - h} width={Math.max(1, bw - 2)} height={h} rx="2" fill="var(--accent-fill)" opacity={hl || highlightBelow == null ? 1 : 0.45}>
                <title>{k}–{k + binWidth - 1}: {fmtInt(v)}</title>
              </rect>
              {(i % Math.ceil(entries.length / 8) === 0 || i === entries.length - 1) && <text x={x + bw / 2} y={H - pad + 12} fontSize="9" textAnchor="middle" fill="var(--ink-3)">{k}</text>}
            </g>
          )
        })}
        <text x={pad} y={12} fontSize="9" fill="var(--ink-3)">max {fmtInt(max)}</text>
      </svg>
      <button className="btn btn-sm" onClick={() => setTable(true)}>Show as table</button>
    </div>
  )
}
