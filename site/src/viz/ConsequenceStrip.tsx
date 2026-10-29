import { fmtInt } from '../lib/format'
import type { Dam } from '../lib/types'

/** Downstream consequence strip: hazard class, flood-wave band, people context. */
export default function ConsequenceStrip({ dam }: { dam: Dam }) {
  const hz = dam.hazard
  const level = hz === 'High' ? 3 : hz === 'Significant' ? 2 : hz === 'Low' ? 1 : 0
  const b = dam.projections.breach
  const waveH = b ? Math.min(60, 12 + Math.log10(Math.max(1, b.peak_discharge_cfs)) * 9) : level * 14 + 10
  const words = hz === 'High' ? 'Loss of life likely' : hz === 'Significant' ? 'Major damage likely, loss of life unlikely' : hz === 'Low' ? 'Damage mostly to the owner' : 'Not determined'
  return (
    <div>
      <svg viewBox="0 0 600 120" role="img" aria-label={`Downstream consequence: hazard ${hz}. ${words}.`} style={{ width: '100%', height: 'auto' }}>
        <rect width="600" height="120" fill="var(--sky)" rx="8" />
        <path d="M0 100 L600 100 L600 120 L0 120Z" fill="var(--rock)" />
        <path d="M0 100 L40 36 L70 36 L100 100Z" fill="var(--earth)" />
        <path d={`M100 ${100 - waveH} Q 250 ${100 - waveH * 0.6} 420 ${100 - waveH * 0.25} T 600 ${100 - waveH * 0.1} L600 100 L100 100Z`} fill="var(--water)" opacity="0.9" />
        <path d={`M100 ${100 - waveH} Q 250 ${100 - waveH * 0.6} 420 ${100 - waveH * 0.25} T 600 ${100 - waveH * 0.1}`} fill="none" stroke="var(--water-deep)" strokeWidth="2" />
        <g fill="var(--ink-2)">
          {[200, 260, 320, 400, 470, 540].slice(0, 2 + level * 2).map((x, i) => (
            <g key={x}><rect x={x} y={78 - (i % 2) * 6} width="18" height={22 + (i % 2) * 6} /><path d={`M${x - 2} ${78 - (i % 2) * 6} L${x + 9} ${68 - (i % 2) * 6} L${x + 20} ${78 - (i % 2) * 6}Z`} /></g>
          ))}
        </g>
        <text x="300" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">{hz} hazard — {words}</text>
      </svg>
      <div className="grid grid-3 small" style={{ marginTop: 8 }}>
        <div><div className="muted">Hazard class</div><strong>{hz}</strong></div>
        <div><div className="muted">Flood-wave screening</div><strong>{b ? `${fmtInt(b.peak_discharge_cfs)} cfs peak` : 'Not enough data'}</strong></div>
        <div><div className="muted">County population</div><strong>{dam.county_pop_2023 ? fmtInt(dam.county_pop_2023) : '—'}</strong> <span className="muted">(context, not downstream count)</span></div>
      </div>
    </div>
  )
}
