import type { ActionTemplate, Catalog, Dam, Lens } from './types'

export interface PlanAction extends ActionTemplate { from: string }
export interface Plan { year1: PlanAction[]; year5: PlanAction[]; year10: PlanAction[] }

/** Mirrors data/pipeline/plans.py build_plan(): compose a 1/5/10-year plan from issue codes. */
export function buildPlan(issues: string[], catalog: Catalog): Plan {
  const seen = new Set<string>()
  const plan: Plan = { year1: [], year5: [], year10: [] }
  for (const code of issues) {
    for (const a of catalog.actions[code] ?? []) {
      const key = `${a.horizon}|${a.title}`
      if (seen.has(key)) continue
      seen.add(key)
      bucket(plan, a.horizon).push({ ...a, from: code })
    }
  }
  if (!plan.year1.length && !plan.year5.length && !plan.year10.length) {
    for (const a of catalog.baseline) bucket(plan, a.horizon).push({ ...a, from: 'BASELINE' })
  }
  return plan
}

function bucket(plan: Plan, h: 1 | 5 | 10) {
  return h === 1 ? plan.year1 : h === 5 ? plan.year5 : plan.year10
}

export const HORIZONS: { key: keyof Plan; label: string; sub: string }[] = [
  { key: 'year1', label: 'Year 1', sub: 'Stabilize & know' },
  { key: 'year5', label: 'Years 2–5', sub: 'Fix the deficiencies' },
  { key: 'year10', label: 'Years 5–10', sub: 'Modernize & sustain' },
]

export function actionText(a: ActionTemplate, lens: Lens) {
  return lens === 'engineering' ? a.eng : a.plain
}

/** Issues sorted by severity, descending. */
export function sortedIssues(dam: Dam, catalog: Catalog) {
  return [...dam.issues]
    .map((code) => ({ code, meta: catalog.issues[code] }))
    .filter((x) => x.meta)
    .sort((a, b) => b.meta.sev - a.meta.sev)
}

export const SEVERITY_WORD: Record<number, string> = { 5: 'Critical', 4: 'Serious', 3: 'Significant', 2: 'Moderate', 1: 'Note' }

/** Failure-mode checklist for the engineering lens, derived from issues and structure. */
export function failureModes(dam: Dam): { mode: string; relevance: 'elevated' | 'baseline' | 'n/a'; why: string }[] {
  const emb = dam.family === 'embankment'
  const spillUnknown = dam.issues.includes('SPILLWAY_UNKNOWN') || !dam.spillway_type
  const old = dam.issues.some((i) => i.startsWith('AGE_'))
  const poor = ['Poor', 'Unsatisfactory'].includes(dam.condition ?? '')
  return [
    { mode: 'Overtopping (inadequate spillway capacity)', relevance: spillUnknown || old || poor ? 'elevated' : 'baseline',
      why: spillUnknown ? 'Spillway type/capacity not documented.' : old ? 'Hydrology predates current inflow design flood criteria.' : 'Leading U.S. failure mode (~34% of failures).' },
    { mode: 'Internal erosion / piping', relevance: emb ? (old || poor ? 'elevated' : 'baseline') : 'n/a',
      why: emb ? (old ? 'Older embankments often lack filtered drains.' : 'Second most common embankment failure mode.') : 'Not an embankment dam.' },
    { mode: 'Slope instability', relevance: emb ? (poor ? 'elevated' : 'baseline') : 'n/a',
      why: emb ? 'Evaluate under steady seepage, rapid drawdown and seismic loading.' : 'Not an embankment dam.' },
    { mode: 'Foundation seepage / karst', relevance: dam.foundation?.includes('Rock') && old ? 'elevated' : 'baseline',
      why: dam.foundation ? `Foundation: ${dam.foundation}.` : 'Foundation material not recorded.' },
    { mode: 'Structural (concrete) distress', relevance: emb ? 'n/a' : (old || poor ? 'elevated' : 'baseline'),
      why: emb ? 'Not a concrete dam.' : 'Alkali-silica reaction, freeze-thaw, uplift and sliding stability.' },
    { mode: 'Gates / outlet works malfunction', relevance: dam.spillway_type === 'Controlled' ? (old ? 'elevated' : 'baseline') : 'baseline',
      why: dam.spillway_type === 'Controlled' ? 'Gated spillway: mechanical and power reliability matter.' : 'Outlet works reliability for drawdown.' },
    { mode: 'Seismic', relevance: ['CA', 'OR', 'WA', 'AK', 'NV', 'UT', 'HI', 'PR', 'MO', 'TN', 'SC', 'AR', 'KY', 'IL'].includes(dam.state) ? 'elevated' : 'baseline',
      why: 'Based on state-level seismic hazard; site-specific analysis required.' },
  ]
}
