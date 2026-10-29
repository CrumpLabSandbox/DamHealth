import { ageOf, fmtInt } from '../lib/format'
import type { Dam, Rollup } from '../lib/types'

/** This dam vs. state vs. nation — one measure per row, same axis per row. */
export default function ComparisonBars({ dam, state, national, refYear }: { dam: Dam; state?: Rollup; national?: Rollup; refYear: number }) {
  const rows: { label: string; dam: number | null; state: number | null; nation: number | null; fmt: (n: number) => string }[] = [
    { label: 'Dam Health Index (0 best – 100 worst)', dam: dam.scores.dhi, state: state?.mean_dhi ?? null, nation: national?.mean_dhi ?? null, fmt: (n) => n.toFixed(0) },
    { label: 'Age (years)', dam: ageOf(dam.year_completed, refYear), state: ageOf(state?.median_year, refYear), nation: ageOf(national?.median_year, refYear), fmt: (n) => fmtInt(n) },
  ]
  return (
    <div>
      {rows.map((r) => {
        const max = Math.max(1, ...[r.dam, r.state, r.nation].filter((v): v is number => v != null))
        return (
          <div key={r.label} style={{ margin: '10px 0' }}>
            <div className="small muted">{r.label}</div>
            {[['This dam', r.dam, 'var(--accent-fill)'], [dam.state_name + ' (typical)', r.state, 'var(--axis)'], ['United States (typical)', r.nation, 'var(--axis)']].map(([lab, v, color]) => (
              <div key={lab as string} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 48px', gap: 8, alignItems: 'center', margin: '3px 0' }}>
                <span className="small">{lab as string}</span>
                <div style={{ height: 10, background: 'var(--surface-2)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: v == null ? 0 : `${(100 * (v as number)) / max}%`, height: '100%', background: color as string, borderRadius: '0 4px 4px 0' }} />
                </div>
                <span className="small tabular" style={{ textAlign: 'right' }}>{v == null ? '—' : r.fmt(v as number)}</span>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
