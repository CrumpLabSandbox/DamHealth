import { fmtInt } from '../lib/format'

/** Single-series horizontal bars with the label, value and share always visible. */
export default function BarList({ rows, total }: { rows: { label: string; value: number }[]; total: number }) {
  const max = Math.max(1, ...rows.map((r) => r.value))
  return (
    <div role="table" aria-label="Values">
      {rows.map((r) => (
        <div key={r.label} role="row" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 2fr) 3fr 110px', gap: 10, alignItems: 'center', margin: '5px 0' }}>
          <span className="small" role="cell">{r.label}</span>
          <div role="cell" style={{ height: 12, background: 'var(--surface-2)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${(100 * r.value) / max}%`, height: '100%', background: 'var(--accent-fill)', borderRadius: '0 4px 4px 0' }} />
          </div>
          <span className="small tabular" role="cell"><strong>{fmtInt(r.value)}</strong> <span className="muted">· {total ? ((100 * r.value) / total).toFixed(0) : 0}%</span></span>
        </div>
      ))}
    </div>
  )
}
