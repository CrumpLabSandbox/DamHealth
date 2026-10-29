import { describe, expect, it } from 'vitest'
import { buildPlan, failureModes, sortedIssues } from './plan'
import { fmtUSD, volumeAnalogy } from './format'
import { shardPath, rowToIndex } from './data'
import type { Catalog, Dam } from './types'

const catalog = {
  issues: {
    COND_POOR: { sev: 4, group: 'condition', title: 'Rated Poor', plain: 'p', eng: 'e' },
    NO_EAP: { sev: 4, group: 'readiness', title: 'No EAP', plain: 'p', eng: 'e' },
    AGE_50: { sev: 1, group: 'condition', title: 'Old', plain: 'p', eng: 'e' },
  },
  actions: {
    COND_POOR: [{ horizon: 1, title: 'Investigate', plain: 'a', eng: 'b' }, { horizon: 5, title: 'Repair', plain: 'a', eng: 'b' }],
    NO_EAP: [{ horizon: 1, title: 'Write an EAP', plain: 'a', eng: 'b' }],
    AGE_50: [{ horizon: 10, title: 'Life-extension plan', plain: 'a', eng: 'b' }],
  },
  baseline: [{ horizon: 10, title: 'Keep it maintained', plain: 'a', eng: 'b' }],
} as unknown as Catalog

const dam = { issues: ['AGE_50', 'COND_POOR', 'NO_EAP'], family: 'embankment', state: 'TX', spillway_type: null, condition: 'Poor', foundation: 'Rock' } as unknown as Dam

describe('plan', () => {
  it('composes horizons from issues without duplicates', () => {
    const p = buildPlan(dam.issues, catalog)
    expect(p.year1.map((a) => a.title)).toEqual(['Investigate', 'Write an EAP'])
    expect(p.year5.map((a) => a.title)).toEqual(['Repair'])
    expect(p.year10.map((a) => a.title)).toEqual(['Life-extension plan'])
  })
  it('falls back to baseline with no issues', () => {
    expect(buildPlan([], catalog).year10[0].from).toBe('BASELINE')
  })
  it('sorts issues by severity', () => {
    expect(sortedIssues(dam, catalog).map((i) => i.code)).toEqual(['COND_POOR', 'NO_EAP', 'AGE_50'])
  })
  it('flags overtopping and piping for an old poor embankment', () => {
    const fm = failureModes(dam)
    expect(fm.find((m) => m.mode.startsWith('Overtopping'))?.relevance).toBe('elevated')
    expect(fm.find((m) => m.mode.startsWith('Internal erosion'))?.relevance).toBe('elevated')
    expect(fm.find((m) => m.mode.startsWith('Structural'))?.relevance).toBe('n/a')
  })
})

describe('data helpers', () => {
  it('computes shard paths', () => {
    expect(shardPath('CA00035')).toBe('dams/CA/0000.json')
    expect(shardPath('TX07324')).toBe('dams/TX/0029.json')
  })
  it('parses index rows', () => {
    expect(rowToIndex(['CA00035', 'Oroville', 'CA', 39.5, -121.5, 'H', 'F', 'C', 42.5]).grade).toBe('C')
  })
})

describe('format', () => {
  it('formats money', () => {
    expect(fmtUSD(1_500_000)).toBe('$2M')
    expect(fmtUSD(76_700_000_000)).toBe('$76.7B')
  })
  it('gives a volume analogy', () => {
    expect(volumeAnalogy(1)).toContain('Olympic')
    expect(volumeAnalogy(3_540_000)).toContain('million acre-feet')
  })
})
