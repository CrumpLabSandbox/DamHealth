import { Link } from 'react-router-dom'

/** Marks a figure or claim that a person checks by hand instead of the build computing it. */
export default function HandMark({ what = 'figure', anchor = 'external', checked }: { what?: string; anchor?: 'external' | 'research'; checked?: string }) {
  const text = `This ${what} is checked by hand, not computed from the inventory${checked ? `; last checked ${checked}` : ''}. See Data health.`
  return <Link to={`/data-health#${anchor}`} className="hand-mark" title={text} aria-label={text}>✎</Link>
}
