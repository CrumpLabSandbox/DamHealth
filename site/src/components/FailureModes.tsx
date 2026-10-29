import { failureModes } from '../lib/plan'
import type { Dam } from '../lib/types'

export default function FailureModes({ dam }: { dam: Dam }) {
  const modes = failureModes(dam)
  return (
    <table className="data">
      <thead><tr><th>Potential failure mode</th><th>Screening relevance</th><th>Why</th></tr></thead>
      <tbody>
        {modes.map((m) => (
          <tr key={m.mode}>
            <td>{m.mode}</td>
            <td><span className="chip">{m.relevance === 'elevated' ? '▲ Elevated' : m.relevance === 'baseline' ? '• Baseline' : '— N/A'}</span></td>
            <td className="small muted">{m.why}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
