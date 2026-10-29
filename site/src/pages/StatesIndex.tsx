import { Link } from 'react-router-dom'
import Loading, { ErrorBox } from '../components/Loading'
import { useSummary, useTitle } from '../lib/hooks'
import { fmtInt, fmtUSD } from '../lib/format'

export default function StatesIndex() {
  useTitle('States')
  const { data, error } = useSummary()
  if (error) return <ErrorBox message={error} />
  if (!data) return <Loading what="state summaries" />
  const states = Object.entries(data.states).sort((a, b) => a[1].name.localeCompare(b[1].name))
  return (
    <div className="wrap section">
      <h1>Dam health by state</h1>
      <p className="muted prose">Every state runs its own dam safety program. The columns below count dams in the National Inventory, high-hazard dams (failure would likely cause loss of life), how many of those are rated Poor or Unsatisfactory, how many have no Emergency Action Plan, and the planning-level cost band to bring the state's dams up to standard.</p>
      <div style={{ overflowX: 'auto' }}>
        <table className="data">
          <thead>
            <tr>
              <th>State</th><th className="num">Dams</th><th className="num">High hazard</th><th className="num">Poor / Unsat.</th><th className="num">Not rated</th><th className="num">No EAP</th><th className="num">D &amp; F grades</th><th className="num">Est. cost</th>
            </tr>
          </thead>
          <tbody>
            {states.map(([st, s]) => (
              <tr key={st}>
                <td><Link to={`/state/${st}`}>{s.name}</Link></td>
                <td className="num">{fmtInt(s.dams)}</td>
                <td className="num">{fmtInt(s.high_hazard)}</td>
                <td className="num">{fmtInt(s.high_poor_unsat)}</td>
                <td className="num">{fmtInt(s.high_not_rated)}</td>
                <td className="num">{fmtInt(s.high_no_eap)}</td>
                <td className="num">{fmtInt((s.grades.D ?? 0) + (s.grades.F ?? 0))}</td>
                <td className="num">{fmtUSD(s.cost_low_usd)} – {fmtUSD(s.cost_high_usd)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
