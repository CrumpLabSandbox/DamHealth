# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /engineering
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 5,
  "help": "Elements must meet minimum color contrast ratio thresholds"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 198

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fcfcfb",
+               "contrastRatio": 4.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#2a78d6",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/methodology\" data-discover=\"true\">Scoring methodology and data dictionary →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".small:nth-child(5) > a[href$=\"methodology\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fcfcfb",
+               "contrastRatio": 4.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#2a78d6",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"card\" style=\"margin-top: 16px;\">",
+                 "target": Array [
+                   ".section > .card",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://github.com/CrumpLabSandbox/DamHealth\" rel=\"noopener\">the repository</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".prose > a[rel=\"noopener\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f7f5",
+               "contrastRatio": 4.1,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#2a78d6",
+               "fontSize": "10.8pt (14.4px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body>",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/methodology\" data-discover=\"true\">Methodology &amp; limitations</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".grid-3 > div:nth-child(2) > p > a[href$=\"methodology\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f7f5",
+               "contrastRatio": 4.1,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#2a78d6",
+               "fontSize": "10.8pt (14.4px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body>",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/act\" data-discover=\"true\">Take action</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"act\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f7f5",
+               "contrastRatio": 4.1,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#2a78d6",
+               "fontSize": "10.8pt (14.4px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body>",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://nid.sec.usace.army.mil/\" rel=\"noopener\">Official National Inventory of Dams</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(2) > p > a[rel=\"noopener\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to content" [ref=e3] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "DamHealth home" [ref=e6] [cursor=pointer]:
        - /url: /
        - text: DamHealth
      - navigation "Primary" [ref=e11]:
        - link "Explore" [ref=e12] [cursor=pointer]:
          - /url: /explore
        - link "States" [ref=e13] [cursor=pointer]:
          - /url: /states
        - link "Issues" [ref=e14] [cursor=pointer]:
          - /url: /issues
        - link "The Plan" [ref=e15] [cursor=pointer]:
          - /url: /plan
        - link "Case Studies" [ref=e16] [cursor=pointer]:
          - /url: /case-studies
        - link "Community" [ref=e17] [cursor=pointer]:
          - /url: /community
        - link "Engineering" [ref=e18] [cursor=pointer]:
          - /url: /engineering
      - generic [ref=e19]:
        - generic [ref=e21]:
          - generic [ref=e22]: Search dams
          - combobox "Search dams" [ref=e23]
        - group "Choose how information is presented" [ref=e24]:
          - button "Community" [pressed] [ref=e25] [cursor=pointer]
          - button "Engineering" [ref=e26] [cursor=pointer]
        - button "Switch to dark theme" [ref=e27] [cursor=pointer]: ☾
  - main [active] [ref=e28]:
    - generic [ref=e29]:
      - 'heading "For engineers: the open problems" [level=1] [ref=e30]'
      - paragraph [ref=e31]:
        - text: Switch the lens to
        - strong [ref=e32]: Engineering
        - text: (top right) and every dam page shows issue codes and trigger logic, a dimensioned schematic, a failure-mode screening checklist, and a work-breakdown plan by horizon. This page is the index.
      - generic [ref=e33]:
        - generic [ref=e34]:
          - generic [ref=e35]: 4,701
          - generic [ref=e36]: high-hazard dams with no NID condition assessment
        - generic [ref=e37]:
          - generic [ref=e38]: 5,596
          - generic [ref=e39]: high-hazard dams with no spillway type recorded
        - generic [ref=e40]:
          - generic [ref=e41]: 10,430
          - generic [ref=e42]: dams with undetermined hazard potential
        - generic [ref=e43]:
          - generic [ref=e44]: 7,140
          - generic [ref=e45]: dams ≥ 100 years old with no recorded modification
      - generic [ref=e46]:
        - generic [ref=e47]:
          - heading "Failure-mode library" [level=2] [ref=e48]
          - table [ref=e49]:
            - rowgroup [ref=e50]:
              - row [ref=e51]:
                - columnheader "Mode" [ref=e52]
                - columnheader "Typical indicators in inventory data" [ref=e53]
                - columnheader "First analysis" [ref=e54]
            - rowgroup [ref=e55]:
              - row [ref=e56]:
                - cell "Overtopping" [ref=e57]
                - cell "Spillway unknown/uncontrolled, pre-1970 hydrology, large drainage area vs. storage" [ref=e58]
                - cell "Update IDF/PMF; spillway rating curve; freeboard check" [ref=e59]
              - row [ref=e60]:
                - cell "Internal erosion / piping" [ref=e61]
                - cell "Embankment, homogeneous or unknown core, age, Poor rating" [ref=e62]
                - cell "Filter compatibility; seepage mapping; piezometers" [ref=e63]
              - row [ref=e64]:
                - cell "Slope instability" [ref=e65]
                - cell "Embankment, steep sections, rapid drawdown operations" [ref=e66]
                - cell "Limit-equilibrium stability (steady seepage, drawdown, seismic)" [ref=e67]
              - row [ref=e68]:
                - cell "Foundation" [ref=e69]
                - cell "Rock/karst foundation, seepage history (Wolf Creek, Center Hill)" [ref=e70]
                - cell "Foundation seepage model; grout/cutoff wall alternatives" [ref=e71]
              - row [ref=e72]:
                - cell "Concrete structural" [ref=e73]
                - cell "Gravity/arch, age, ASR regions, uplift" [ref=e74]
                - cell "Stability (sliding/overturning), uplift pressures, materials testing" [ref=e75]
              - row [ref=e76]:
                - cell "Gates / outlet works" [ref=e77]
                - cell "Controlled spillway, age, no power redundancy" [ref=e78]
                - cell "Mechanical/electrical reliability; drawdown capacity" [ref=e79]
              - row [ref=e80]:
                - cell "Seismic" [ref=e81]
                - cell "High-seismicity state, hydraulic fill, liquefiable foundation" [ref=e82]
                - cell "Deformation analysis; liquefaction screening" [ref=e83]
        - generic [ref=e84]:
          - heading "Standards and references" [level=2] [ref=e85]
          - list [ref=e86]:
            - listitem [ref=e87]:
              - text: FEMA P-93,
              - emphasis [ref=e88]: Federal Guidelines for Dam Safety
              - text: ; FEMA P-64,
              - emphasis [ref=e89]: Emergency Action Planning for Dams
              - text: ; FEMA P-333,
              - emphasis [ref=e90]: Hazard Potential Classification
              - text: ; FEMA P-94,
              - emphasis [ref=e91]: Selecting and Accommodating Inflow Design Floods
              - text: ; FEMA P-1015,
              - emphasis [ref=e92]: Risk-Informed Decision Making
              - text: .
            - listitem [ref=e93]:
              - text: USACE ER 1110-2-1156,
              - emphasis [ref=e94]: Safety of Dams — Policy and Procedures
              - text: (DSAC classification); USACE/USBR
              - emphasis [ref=e95]: Best Practices in Dam and Levee Safety Risk Analysis
              - text: .
            - listitem [ref=e96]:
              - text: ASDSO,
              - emphasis [ref=e97]: Cost of Rehabilitating Dams in the U.S.
              - text: (2023, 2025 update); ASDSO Dam Failures and Incidents database.
            - listitem [ref=e98]:
              - text: Froehlich (1995), "Peak outflow from breached embankment dam,"
              - emphasis [ref=e99]: J. Water Resour. Plan. Manage.
              - text: — the screening equation used here.
            - listitem [ref=e100]:
              - text: ASCE,
              - emphasis [ref=e101]: 2025 Report Card for America's Infrastructure — Dams
              - text: (D+).
          - heading "Work-breakdown by horizon" [level=3] [ref=e102]
          - paragraph [ref=e103]: "Year 1: inspection/condition assessment, PFMA, interim risk reduction, EAP, instrumentation, funding application. Years 2–5: investigations, alternatives, final design, permitting, construction. Years 5–10: full standards compliance, monitoring/telemetry, inundation mapping, O&M program. Each dam page lists these keyed to the dam's issue codes."
          - paragraph [ref=e104]:
            - link "Scoring methodology and data dictionary →" [ref=e105] [cursor=pointer]:
              - /url: /methodology
      - generic [ref=e106]:
        - heading "Contribute" [level=2] [ref=e107]
        - paragraph [ref=e108]:
          - text: Scoring is deterministic Python in
          - code [ref=e109]: data/pipeline/
          - text: . Proposals to re-weight sub-scores, add issue triggers (e.g., drainage-area-to-storage ratio as an overtopping proxy), or attach state inspection data are welcome as pull requests to
          - link "the repository" [ref=e110] [cursor=pointer]:
            - /url: https://github.com/CrumpLabSandbox/DamHealth
          - text: . Curated plan-status rows live in
          - code [ref=e111]: data/curated/plan_status.csv
          - text: ; add a row with a source URL to mark a dam's rehabilitation as funded or complete.
  - contentinfo [ref=e112]:
    - generic [ref=e113]:
      - generic [ref=e114]:
        - strong [ref=e115]: DamHealth
        - paragraph [ref=e116]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e118]:
        - link "Methodology & limitations" [ref=e119] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e120] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e121] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e123]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
```

# Test source

```ts
  1  | import AxeBuilder from '@axe-core/playwright'
  2  | import { expect, test } from '@playwright/test'
  3  | 
  4  | const ROUTES = ['/', '/dam/MI00549', '/dam/NV10122?view=engineering', '/state/CA', '/states', '/issues', '/plan', '/community', '/engineering', '/act?dam=MI00549', '/methodology']
  5  | 
  6  | test.beforeEach(async ({ page }) => {
  7  |   // Keep tests hermetic: runtime enrichment (Wikipedia) and map tiles are external.
  8  |   await page.route(/^https?:\/\/(?!localhost)/, (r) => r.abort())
  9  | })
  10 | 
  11 | for (const route of ROUTES) {
  12 |   test(`renders and passes axe: ${route}`, async ({ page }) => {
  13 |     const errors: string[] = []
  14 |     page.on('pageerror', (e) => errors.push(e.message))
  15 |     await page.goto(route)
  16 |     await expect(page.locator('main')).toBeVisible()
  17 |     await page.waitForLoadState('networkidle')
  18 |     await expect(page.locator('h1').first()).toBeVisible()
  19 |     const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag22aa']).exclude('.maplibregl-map').analyze()
> 20 |     expect(results.violations, JSON.stringify(results.violations.map((v) => ({ id: v.id, nodes: v.nodes.length, help: v.help })), null, 1)).toEqual([])
     |                                                                                                                                             ^ Error: [
  21 |     expect(errors).toEqual([])
  22 |   })
  23 | }
  24 | 
  25 | test('search navigates to a dam', async ({ page }) => {
  26 |   await page.goto('/')
  27 |   const input = page.getByRole('combobox', { name: 'Search dams' }).first()
  28 |   await input.fill('Edenville')
  29 |   await page.getByRole('option', { name: /Edenville/ }).first().waitFor()
  30 |   await input.press('Enter')
  31 |   await expect(page).toHaveURL(/\/dam\/MI00549/)
  32 |   await expect(page.getByRole('heading', { level: 1 })).toContainText('Edenville')
  33 | })
  34 | 
  35 | test('lens toggle changes dam page copy', async ({ page }) => {
  36 |   await page.goto('/dam/MI00549')
  37 |   await page.getByRole('button', { name: 'Engineering' }).click()
  38 |   await expect(page.getByRole('heading', { name: /Issues \(\d+\)/ })).toBeVisible()
  39 |   await page.getByRole('button', { name: 'Community' }).click()
  40 |   await expect(page.getByRole('heading', { name: 'Pressing issues' })).toBeVisible()
  41 | })
  42 | 
```