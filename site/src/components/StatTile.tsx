import type { ReactNode } from 'react'

export default function StatTile({ value, label, onDark = false, sub }: { value: ReactNode; label: ReactNode; onDark?: boolean; sub?: ReactNode }) {
  return (
    <div className={`stat${onDark ? ' on-dark' : ''}`}>
      <div className="value">{value}</div>
      <div className="label">{label}</div>
      {sub && <div className="label small">{sub}</div>}
    </div>
  )
}
