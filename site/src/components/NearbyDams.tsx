import { Link } from 'react-router-dom'
import GradeBadge from './GradeBadge'
import { loadIndex, nearby } from '../lib/data'
import { useAsync } from '../lib/hooks'
import type { Dam } from '../lib/types'

export default function NearbyDams({ dam }: { dam: Dam }) {
  const { data } = useAsync(async () => {
    if (dam.lat == null || dam.lon == null) return []
    const rows = await loadIndex()
    return nearby(rows, dam.lat, dam.lon, 8, dam.nid_id)
  }, [dam.nid_id])
  if (!data || !data.length) return null
  return (
    <div style={{ marginTop: 16 }}>
      <h3>Nearby dams</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {data.map((r) => (
          <li key={r.id} className="row" style={{ padding: '4px 0' }}>
            <GradeBadge grade={r.grade} size="sm" />
            <Link to={`/dam/${r.id}`}>{r.name}</Link>
            <span className="muted small">{r.km < 1.6 ? '< 1 mi' : `${Math.round(r.km / 1.609)} mi`}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
