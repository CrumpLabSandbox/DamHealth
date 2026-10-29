import { fmtInt } from '../lib/format'
import type { Catalog } from '../lib/types'

const REPO = 'https://github.com/CrumpLabSandbox/DamHealth'

/** Exactly which NID file and which code produced the numbers on this site. */
export default function BuildInfo({ catalog }: { catalog: Catalog }) {
  const p = catalog.provenance
  if (!p) return null
  const sha = p.nid_sha256
  return (
    <div className="card small">
      <h3 style={{ marginBottom: 8 }}>This build</h3>
      <dl className="attr">
        <dt>NID snapshot</dt><dd>{p.nid_snapshot ?? 'legacy fallback (2019 export and March 2026 extract)'}{p.nid_url && <> · <a href={p.nid_url} rel="noopener">official national CSV</a></>}</dd>
        {p.nid_rows != null && <><dt>Rows read</dt><dd>{fmtInt(p.nid_rows)} rows → {fmtInt(p.dams)} dams</dd></>}
        {sha && <><dt>Input SHA-256</dt><dd><code style={{ overflowWrap: 'anywhere' }}>{sha}</code>{p.nid_bytes != null && <> ({fmtInt(p.nid_bytes)} bytes)</>}</dd></>}
        <dt>Code</dt><dd>{p.git_sha ? <a href={`${REPO}/commit/${p.git_sha}`} rel="noopener"><code>{p.git_sha.slice(0, 7)}</code></a> : 'unknown'}</dd>
        <dt>Built</dt><dd>{p.built}</dd>
      </dl>
      <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>Every figure on this site is recomputed from that file on each build. To reproduce it, check out the commit and run the pipeline in the README; the official file changes over time, so compare its SHA-256 with the one above (each build's input file is also kept as a workflow artifact for 90 days).</p>
    </div>
  )
}
