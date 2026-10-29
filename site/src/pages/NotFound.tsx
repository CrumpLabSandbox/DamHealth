import { Link } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import { useTitle } from '../lib/hooks'

export default function NotFound() {
  useTitle('Not found')
  return (
    <div className="wrap section">
      <h1>We couldn't find that page.</h1>
      <p className="muted">Try searching for a dam, or <Link to="/explore">explore the map</Link>.</p>
      <div style={{ maxWidth: 520 }}><SearchBox /></div>
    </div>
  )
}
