import { useState } from 'react'
import { fmtInt } from '../lib/format'
import { useLens } from '../lib/lens'
import { sortedIssues } from '../lib/plan'
import type { Catalog, Dam } from '../lib/types'

/** Where each issue attaches on the drawing. */
const ANCHOR: Record<string, 'crest' | 'spillway' | 'body' | 'downstream' | 'foundation' | 'reservoir' | 'office'> = {
  COND_UNSAT: 'body', COND_POOR: 'body', COND_FAIR: 'body', COND_UNKNOWN: 'office', COND_FEDERAL_UNPUBLISHED: 'office',
  NO_EAP: 'downstream', NO_EAP_SIG: 'downstream', INSPECT_OVERDUE: 'office', INSPECT_NEVER: 'office',
  AGE_100: 'crest', AGE_75: 'crest', AGE_50: 'crest', HAZARD_UNDET: 'downstream', HIGH_CONSEQUENCE: 'reservoir',
  SPILLWAY_UNKNOWN: 'spillway', PRIVATE_HIGH: 'office', UNREGULATED: 'office', ENFORCEMENT: 'office', STALE_DATA: 'office',
}
const POS: Record<string, [number, number]> = {
  crest: [300, 92], spillway: [392, 128], body: [318, 168], downstream: [520, 214], foundation: [320, 236], reservoir: [120, 150], office: [84, 70],
}

/** Cross-section schematic chosen by structural family, with issue callouts. */
export default function DamSchematic({ dam, catalog }: { dam: Dam; catalog: Catalog }) {
  const { lens } = useLens()
  const [active, setActive] = useState<string | null>(null)
  const issues = sortedIssues(dam, catalog)
  // Spread callouts sharing an anchor.
  const used: Record<string, number> = {}
  const callouts = issues.map(({ code, meta }, i) => {
    const a = ANCHOR[code] ?? 'body'
    const n = used[a] ?? 0
    used[a] = n + 1
    const [x, y] = POS[a]
    return { code, meta, n: i + 1, x: x + n * 26, y: y - n * 4, anchor: a }
  })
  const fam = dam.family
  const label = dam.dam_types[0] ?? 'Dam'
  const h = dam.height_ft
  const desc = `Schematic cross-section of a ${label.toLowerCase()} dam${h ? `, ${fmtInt(h)} feet high` : ''}, reservoir on the left, downstream valley on the right. ${issues.length} issue callout${issues.length === 1 ? '' : 's'}.`

  return (
    <div>
      <svg viewBox="0 0 600 270" role="group" aria-label={desc} style={{ width: '100%', height: 'auto' }}>
        <title>{desc}</title>
        {/* sky & ground */}
        <rect x="0" y="0" width="600" height="270" fill="var(--sky)" rx="8" />
        <path d="M0 232 L600 232 L600 270 L0 270Z" fill="var(--rock)" />
        <path d="M0 232 Q 300 226 600 232" fill="none" stroke="var(--ink-3)" strokeWidth="1" />
        {/* reservoir */}
        <path d="M0 140 L250 140 L250 232 L0 232Z" fill="var(--water)" />
        <path d="M0 140 Q 40 136 80 140 T 160 140 T 250 140" fill="none" stroke="var(--water-deep)" strokeWidth="2" />
        {/* downstream river */}
        <path d="M430 222 Q 500 218 600 224 L600 232 L430 232Z" fill="var(--water)" />
        {/* dam body by family */}
        {fam === 'embankment' && (
          <g>
            <path d="M190 232 L285 88 L335 88 L440 232Z" fill="var(--earth)" />
            <path d="M285 88 L335 88 L440 232 L360 232Z" fill="var(--earth-dark)" opacity=".35" />
            {lens === 'engineering' && <>
              <path d="M300 96 L322 96 L350 232 L286 232Z" fill="var(--concrete-dark)" opacity=".35" />
              <path d="M360 232 L395 232 L372 170Z" fill="var(--concrete)" opacity=".6" />
              <text x="312" y="200" fontSize="9" fill="var(--ink)" textAnchor="middle">core</text>
              <text x="378" y="226" fontSize="8" fill="var(--ink)" textAnchor="middle">toe drain</text>
            </>}
          </g>
        )}
        {fam === 'gravity' && (
          <g>
            <path d="M265 232 L275 88 L320 88 L400 232Z" fill="var(--concrete)" />
            <path d="M320 88 L400 232 L340 232Z" fill="var(--concrete-dark)" opacity=".35" />
            {lens === 'engineering' && <text x="330" y="190" fontSize="9" fill="var(--ink)" textAnchor="middle">gravity section</text>}
          </g>
        )}
        {fam === 'arch' && (
          <g>
            <path d="M262 232 L270 88 L300 88 L320 232Z" fill="var(--concrete)" />
            <path d="M300 88 L320 232 L296 232Z" fill="var(--concrete-dark)" opacity=".35" />
            <path d="M268 88 Q 285 60 300 88" fill="none" stroke="var(--concrete-dark)" strokeWidth="2" strokeDasharray="3 3" />
            {lens === 'engineering' && <text x="292" y="190" fontSize="9" fill="var(--ink)" textAnchor="middle">arch</text>}
          </g>
        )}
        {fam === 'buttress' && (
          <g>
            <path d="M262 232 L270 88 L300 88 L306 232Z" fill="var(--concrete)" />
            {[0, 1, 2].map((i) => <path key={i} d={`M${306 + i * 2} ${110 + i * 40} L${370 + i * 10} 232 L${306 + i * 2} 232Z`} fill="var(--concrete-dark)" opacity={0.6 - i * 0.15} />)}
          </g>
        )}
        {fam === 'other' && (
          <g>
            <path d="M230 232 L285 100 L335 100 L400 232Z" fill="var(--concrete)" opacity=".8" strokeDasharray="4 3" stroke="var(--ink-3)" />
          </g>
        )}
        {/* spillway */}
        <path d="M335 128 L372 128 L372 136 L350 136Z" fill="var(--concrete)" stroke="var(--concrete-dark)" />
        <path d="M372 136 Q 400 170 430 222" fill="none" stroke="var(--water-deep)" strokeWidth="3" strokeLinecap="round" strokeDasharray={dam.spillway_type ? undefined : '4 4'} />
        {/* downstream town */}
        <g fill="var(--ink-2)">
          <rect x="500" y="200" width="16" height="22" /><rect x="522" y="206" width="12" height="16" /><rect x="540" y="196" width="20" height="26" />
          <path d="M498 200 L508 190 L518 200Z" /><path d="M538 196 L550 186 L562 196Z" />
        </g>
        {/* office / records */}
        <g>
          <rect x="60" y="56" width="48" height="30" rx="3" fill="var(--surface)" stroke="var(--ink-3)" />
          <line x1="68" y1="66" x2="100" y2="66" stroke="var(--ink-3)" /><line x1="68" y1="74" x2="92" y2="74" stroke="var(--ink-3)" />
          <text x="84" y="98" fontSize="8" fill="var(--ink-2)" textAnchor="middle">records &amp; oversight</text>
        </g>
        {/* dimension */}
        {h && (
          <g stroke="var(--ink-2)" fill="var(--ink-2)" fontSize="9">
            <line x1="470" y1="88" x2="470" y2="232" /><line x1="465" y1="88" x2="475" y2="88" /><line x1="465" y1="232" x2="475" y2="232" />
            <text x="476" y="164" transform="rotate(-90 476 164)" textAnchor="middle">{fmtInt(h)} ft</text>
          </g>
        )}
        <text x="120" y="130" fontSize="10" fill="var(--ink-2)" textAnchor="middle">reservoir{dam.storage_acft ? ` · ${fmtInt(dam.storage_acft)} ac-ft` : ''}</text>
        <text x="530" y="246" fontSize="10" fill="var(--ink-2)" textAnchor="middle">downstream</text>
        <text x="310" y="256" fontSize="10" fill="var(--ink-2)" textAnchor="middle">{label}{dam.dam_types.length > 1 ? ` (+${dam.dam_types.slice(1).join(', ')})` : ''}</text>
        {/* callouts */}
        {callouts.map((c) => (
          <g key={c.code} tabIndex={0} role="button" aria-label={`Issue ${c.n}: ${c.meta.title}`}
            onMouseEnter={() => setActive(c.code)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(c.code)} onBlur={() => setActive(null)}
            onClick={() => document.getElementById(`issue-${c.code}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            style={{ cursor: 'pointer' }}>
            <circle cx={c.x} cy={c.y} r={active === c.code ? 13 : 11} fill={`var(--sev-${c.meta.sev})`} stroke="var(--surface)" strokeWidth="2" />
            <text x={c.x} y={c.y + 4} fontSize="11" fontWeight="800" textAnchor="middle" fill={c.meta.sev === 3 ? '#0b0b0b' : '#fff'}>{c.n}</text>
          </g>
        ))}
      </svg>
      <div className="small" style={{ minHeight: 40, marginTop: 6 }} aria-live="polite">
        {active ? (
          <><strong>{callouts.find((c) => c.code === active)?.n}. {catalog.issues[active].title}</strong> — {lens === 'engineering' ? catalog.issues[active].eng : catalog.issues[active].plain}</>
        ) : (
          <span className="muted">{issues.length ? 'Numbered markers show where each issue sits on the dam. Hover or focus one to read it; click to jump to the details.' : 'No issue markers: nothing adverse is on record for this dam.'}</span>
        )}
      </div>
    </div>
  )
}
