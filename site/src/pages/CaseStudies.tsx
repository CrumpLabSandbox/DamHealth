import Markdown from '../components/Markdown'
import { useTitle } from '../lib/hooks'

export default function CaseStudies() {
  useTitle('Case studies')
  return (
    <div className="wrap section">
      <h1>Case studies</h1>
      <p className="lede muted prose">Twenty dams that failed, nearly failed, or are being rebuilt — what went wrong, what it cost, and what it took to fix. Every entry cites its sources; figures marked "unconfirmed" could not be verified against a primary document.</p>
      <Markdown file="case_studies.md" />
    </div>
  )
}
