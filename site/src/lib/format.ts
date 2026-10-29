export const fmtInt = (n: number | null | undefined) => (n == null ? '—' : Math.round(n).toLocaleString('en-US'))

export function fmtNum(n: number | null | undefined, digits = 1): string {
  if (n == null) return '—'
  return n.toLocaleString('en-US', { maximumFractionDigits: digits })
}

export function fmtUSD(n: number | null | undefined): string {
  if (n == null) return '—'
  if (n >= 1e9) return `$${(n / 1e9).toLocaleString('en-US', { maximumFractionDigits: 1 })}B`
  if (n >= 1e6) return `$${(n / 1e6).toLocaleString('en-US', { maximumFractionDigits: 0 })}M`
  if (n >= 1e3) return `$${(n / 1e3).toLocaleString('en-US', { maximumFractionDigits: 0 })}K`
  return `$${n.toLocaleString('en-US')}`
}

export function fmtRange(lo: number | null | undefined, hi: number | null | undefined): string {
  if (lo == null || hi == null) return '—'
  return `${fmtUSD(lo)} – ${fmtUSD(hi)}`
}

export function fmtDate(iso: string | null | undefined): string {
  if (!iso) return '—'
  const d = new Date(iso + 'T00:00:00')
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function fmtAcreFeet(acft: number | null | undefined): string {
  if (acft == null) return '—'
  return `${fmtInt(acft)} acre-feet`
}

/** Plain-language equivalent for a reservoir volume. */
export function volumeAnalogy(acft: number | null | undefined): string | null {
  if (acft == null) return null
  const gallons = acft * 325851
  const pools = gallons / 660000 // olympic pool ≈ 660,000 gal
  if (pools < 2) return 'about one Olympic swimming pool'
  if (pools < 1000) return `about ${fmtInt(pools)} Olympic swimming pools`
  const superdomes = (acft * 43560) / 125_000_000 // Superdome ≈ 125M ft³
  if (superdomes < 1000) return `enough water to fill the Superdome ${fmtInt(superdomes)} times`
  return `${fmtNum(acft / 1e6, 1)} million acre-feet — a major reservoir`
}

export function ageOf(year: number | null | undefined, ref = 2026): number | null {
  return year == null ? null : ref - year
}

export const GRADE_WORDS: Record<string, string> = {
  A: 'Sound', B: 'Watch', C: 'Concern', D: 'Serious', F: 'Critical',
}
export const GRADE_SENTENCE: Record<string, string> = {
  A: 'Rated satisfactory with an emergency plan in place — the kind of record every dam should have.',
  B: 'Nothing bad is on record, but the record is thin or the dam is aging. Worth watching.',
  C: 'Known concerns: a fair rating, missing plans or inspections, or an undetermined hazard class.',
  D: 'Serious problems have been documented and need funded repairs.',
  F: 'A critical safety deficiency on a dam that could cause loss of life. Urgent action is needed.',
}

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
