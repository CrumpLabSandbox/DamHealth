# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /community
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 6,
  "help": "Elements must meet minimum color contrast ratio thresholds"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 233

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
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"card\"><h2>1. Find your dam</h2><p>Search above, or open the <a href=\"/explore\" data-discover=\"true\">map</a> and press <em>Dams near me</em>. Each dam page tells you its grade, its issues, who owns it, who regulates it, and whether there is a plan.</p></div>",
+                 "target": Array [
+                   ".grid-3.grid > .card:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">map</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "p > a[href$=\"explore\"][data-discover=\"true\"]",
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
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"card\" style=\"margin-top: 16px;\">",
+                 "target": Array [
+                   ".card:nth-child(5)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/plan\" data-discover=\"true\">the plan</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".small > a[href$=\"plan\"][data-discover=\"true\"]",
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
+                   ".card:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/case-studies\" data-discover=\"true\">case studies</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "li:nth-child(5) > a[href$=\"case-studies\"][data-discover=\"true\"]",
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
+           "a[href$=\"methodology\"]",
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
+           "a[rel=\"noopener\"]",
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
      - 'heading "For communities: how to get your dam fixed" [level=1] [ref=e30]'
      - paragraph [ref=e31]: Most dam repairs in America happen because someone downstream refused to let the problem stay invisible. This page is the playbook.
      - generic [ref=e33]:
        - generic [ref=e34]: Search dams
        - combobox "Search dams" [ref=e35]
      - generic [ref=e36]:
        - generic [ref=e37]:
          - heading "1. Find your dam" [level=2] [ref=e38]
          - paragraph [ref=e39]:
            - text: Search above, or open the
            - link "map" [ref=e40] [cursor=pointer]:
              - /url: /explore
            - text: and press
            - emphasis [ref=e41]: Dams near me
            - text: . Each dam page tells you its grade, its issues, who owns it, who regulates it, and whether there is a plan.
        - generic [ref=e42]:
          - heading "2. Read the grade honestly" [level=2] [ref=e43]
          - paragraph [ref=e44]:
            - text: A
            - strong [ref=e45]: D or F
            - text: means regulators have documented a serious problem. A
            - strong [ref=e46]: C
            - text: often means something basic is missing — an emergency plan, an inspection, a rating. A
            - strong [ref=e47]: B
            - text: with low confidence means nobody has looked closely. Ask for the record.
        - generic [ref=e48]:
          - heading "3. Ask three questions" [level=2] [ref=e49]
          - list [ref=e50]:
            - listitem [ref=e51]: Is there an Emergency Action Plan, and has our county emergency manager rehearsed it?
            - listitem [ref=e52]: When was the dam last inspected, and what did the report say?
            - listitem [ref=e53]: Is there a funded plan to fix the deficiencies — and if not, why not?
      - generic [ref=e54]:
        - heading "Who to contact" [level=2] [ref=e55]
        - generic [ref=e56]:
          - generic [ref=e57]:
            - heading "The owner" [level=3] [ref=e58]
            - paragraph [ref=e59]: Listed on each dam page. Owners are legally responsible for maintenance and repairs. Private owners often need help finding funding — your support can unlock a grant application.
          - generic [ref=e60]:
            - heading "The state dam safety office" [level=3] [ref=e61]
            - paragraph [ref=e62]: Every state except Alabama has one. They inspect, rate, and can order repairs. Ask for the latest inspection report; it is usually a public record.
          - generic [ref=e63]:
            - heading "County emergency management" [level=3] [ref=e64]
            - paragraph [ref=e65]: They receive the Emergency Action Plan and run the warning system. Ask whether inundation maps exist and whether a tabletop exercise has been held.
          - generic [ref=e66]:
            - heading "Your state legislators" [level=3] [ref=e67]
            - paragraph [ref=e68]:
              - text: State loan and grant programs (see
              - link "the plan" [ref=e69] [cursor=pointer]:
                - /url: /plan
              - text: ) are funded in state budgets. A specific dam with a specific price tag is a powerful ask.
          - generic [ref=e70]:
            - heading "Your U.S. Representative and Senators" [level=3] [ref=e71]
            - paragraph [ref=e72]: FEMA's High Hazard Potential Dam grant program is reauthorized and funded by Congress. Ask them to fund it at the scale of the problem.
          - generic [ref=e73]:
            - heading "Local press" [level=3] [ref=e74]
            - paragraph [ref=e75]: Dam stories get covered. A dam page link, the grade, and a "no public plan" status is a story.
      - generic [ref=e76]:
        - generic [ref=e77]:
          - heading "Letter template — to the owner or regulator" [level=2] [ref=e78]
          - generic [ref=e79]: "Dear [Owner / State Dam Safety Program], I live downstream of [DAM NAME] (National Inventory of Dams ID [NID ID]). Public records show it is classified as [HAZARD] hazard and rated [CONDITION], and that [ISSUE — e.g., it has no Emergency Action Plan / its last inspection was in YEAR]. Please let me know: 1. The date and findings of the most recent inspection; 2. Whether an Emergency Action Plan exists and when it was last exercised with county emergency management; 3. What plan and funding exist to correct the documented deficiencies, and on what schedule. I am asking as a resident who wants this dam repaired before the next major storm, and I am glad to support a grant application or public funding request. Sincerely, [Name, address]"
        - generic [ref=e80]:
          - heading "Letter template — to your legislator" [level=2] [ref=e81]
          - generic [ref=e82]: "Dear [Representative / Senator], [DAM NAME] in [COUNTY] is a [HAZARD]-hazard dam rated [CONDITION], with [no public plan to fix it]. If it fails, people downstream could die. Planning-level estimates put repairs at [COST RANGE]. I am asking you to: • Fund FEMA's High Hazard Potential Dam Rehabilitation grant program at a scale that matches the more than 2,600 high-hazard dams in poor or unsatisfactory condition nationwide; • Support state dam-safety staffing so inspections and ratings happen on schedule; • Require an Emergency Action Plan for every high-hazard dam. Please tell me what you will do about [DAM NAME]. Sincerely, [Name, address]"
      - generic [ref=e83]:
        - heading "Public meeting checklist" [level=2] [ref=e84]
        - list [ref=e85]:
          - listitem [ref=e86]: Bring the dam page (print or link) and the inspection report.
          - listitem [ref=e87]: "State the hazard class and condition in plain words: \"If this dam fails, people will likely die. Inspectors rated it Poor in 2024.\""
          - listitem [ref=e88]: "Ask for a date: when will the EAP be exercised; when will design start; when will funding be applied for."
          - listitem [ref=e89]: Ask who owns the next step, by name.
          - listitem [ref=e90]:
            - text: Share the
            - link "case studies" [ref=e91] [cursor=pointer]:
              - /url: /case-studies
            - text: — Edenville, Spencer, Rapidan — every one had warnings years before it failed.
  - contentinfo [ref=e92]:
    - generic [ref=e93]:
      - generic [ref=e94]:
        - strong [ref=e95]: DamHealth
        - paragraph [ref=e96]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e98]:
        - link "Methodology & limitations" [ref=e99] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e100] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e101] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e103]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
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