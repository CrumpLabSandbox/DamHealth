import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const ROUTES = ['/', '/dam/MI00549', '/dam/NV10122?view=engineering', '/state/CA', '/states', '/issues', '/plan', '/community', '/engineering', '/act?dam=MI00549', '/methodology']

test.beforeEach(async ({ page }) => {
  // Keep tests hermetic: runtime enrichment (Wikipedia) and map tiles are external.
  await page.route(/^https?:\/\/(?!localhost)/, (r) => r.abort())
})

for (const route of ROUTES) {
  test(`renders and passes axe: ${route}`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    await page.goto(route)
    await expect(page.locator('main')).toBeVisible()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('h1').first()).toBeVisible()
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag22aa']).exclude('.maplibregl-map').analyze()
    expect(results.violations, JSON.stringify(results.violations.map((v) => ({ id: v.id, nodes: v.nodes.length, help: v.help })), null, 1)).toEqual([])
    expect(errors).toEqual([])
  })
}

test('search navigates to a dam', async ({ page }) => {
  await page.goto('/')
  const input = page.getByRole('combobox', { name: 'Search dams' }).first()
  await input.fill('Edenville')
  await page.getByRole('option', { name: /Edenville/ }).first().waitFor()
  await input.press('Enter')
  await expect(page).toHaveURL(/\/dam\/MI00549/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Edenville')
})

test('lens toggle changes dam page copy', async ({ page }) => {
  await page.goto('/dam/MI00549')
  await page.getByRole('button', { name: 'Engineering' }).click()
  await expect(page.getByRole('heading', { name: /Issues \(\d+\)/ })).toBeVisible()
  await page.getByRole('button', { name: 'Community' }).click()
  await expect(page.getByRole('heading', { name: 'Pressing issues' })).toBeVisible()
})
