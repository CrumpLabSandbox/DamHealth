import HandMark from '../components/HandMark'
import Markdown from '../components/Markdown'
import { useTitle } from '../lib/hooks'

export default function CaseStudies() {
  useTitle('Case studies')
  return (
    <div className="wrap section">
      <h1>Case studies</h1>
      <p className="lede muted prose">Twenty dams that failed, nearly failed, or are being rebuilt — what went wrong, what it cost, and what it took to fix. Every entry cites its sources; figures marked "unconfirmed" could not be verified against a primary document.</p>
      <p className="callout small">This page is hand-researched text<HandMark what="research text" anchor="research" />. Statuses and dollar figures are as of each source's date and are rechecked by hand; statements about a dam's current inventory values are filled in from the data on each build.</p>
      <Markdown file="case_studies.md" />
    </div>
  )
}
