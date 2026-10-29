# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /plan
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 12,
  "help": "Elements must meet minimum color contrast ratio thresholds"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 415

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
+                 "html": "<div class=\"card\" style=\"margin-top: 24px;\">",
+                 "target": Array [
+                   ".section > .card",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/act\" data-discover=\"true\">Take action →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".small > a[href$=\"act\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" style=\"margin-top: 24px;\">",
+                 "target": Array [
+                   ".section > .card",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/methodology\" data-discover=\"true\">Methodology →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".small > a[href$=\"methodology\"][data-discover=\"true\"]",
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
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://www.publications.usace.army.mil/Portals/76/FY25%20Civil%20Works%20Annual%20Financial%20Report%20FINAL.pdf\">https://www.publications.usace.army.mil/Portals/76/FY25%20Civil%20Works%20Annual%20Financial%20Report%20FINAL.pdf</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "tr:nth-child(2) > td:nth-child(8) > a",
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
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://www.usbr.gov/mp/sod/projects/sisk/\">https://www.usbr.gov/mp/sod/projects/sisk/</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "tr:nth-child(3) > td:nth-child(8) > a:nth-child(1)",
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
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://www.congress.gov/crs-product/R47032\">https://www.congress.gov/crs-product/R47032</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "td:nth-child(8) > a:nth-child(2)",
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
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://www.nrcs.usda.gov/sites/default/files/2026-03/NRCS_WatershedRehab_Fact%20Sheet-0326%20-508.pdf\">https://www.nrcs.usda.gov/sites/default/files/2026-03/NRCS_WatershedRehab_Fact%20Sheet-0326%20-508.pdf</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "tr:nth-child(4) > td:nth-child(8) > a",
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
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://www.michigan.gov/egle/newsroom/press-releases/2025/05/08/michigan-dams-get-safety-upgrade-funding\">https://www.michigan.gov/egle/newsroom/press-releases/2025/05/08/michigan-dams-get-safety-upgrade-funding</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "tr:nth-child(5) > td:nth-child(8) > a",
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
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://texasfloodclearinghouse.org/funding/index.html\">https://texasfloodclearinghouse.org/funding/index.html</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "tr:nth-child(10) > td:nth-child(8) > a",
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
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://dnr.wisconsin.gov/aid/DamMunicipal.html\">https://dnr.wisconsin.gov/aid/DamMunicipal.html</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "tr:nth-child(12) > td:nth-child(8) > a",
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
+           "div:nth-child(2) > p > a[href$=\"methodology\"][data-discover=\"true\"]",
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
+           "div:nth-child(2) > p > a[href$=\"act\"][data-discover=\"true\"]",
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
      - heading "A 1 / 5 / 10-year plan for America's dams" [level=1] [ref=e30]
      - paragraph [ref=e31]: Every dam on this site carries its own plan, composed from its issues. Rolled up, those plans describe a national program. The numbers below come straight from the data; the policy asks are what it would take to deliver them.
      - generic [ref=e32]:
        - generic [ref=e33]:
          - generic [ref=e34]: 2,628
          - generic [ref=e35]: high-hazard dams rated Poor or Unsatisfactory
        - generic [ref=e36]:
          - generic [ref=e37]: 1,965
          - generic [ref=e38]: of them with no public plan or funding we could find
        - generic [ref=e39]:
          - generic [ref=e40]: 2,823
          - generic [ref=e41]: high-hazard dams with no Emergency Action Plan
        - generic [ref=e42]:
          - generic [ref=e43]: 4,701
          - generic [ref=e44]: high-hazard dams with no published condition rating
      - generic [ref=e45]:
        - generic [ref=e46]:
          - heading "Year 1 — Stabilize & know" [level=2] [ref=e47]
          - list [ref=e48]:
            - listitem [ref=e49]: Write an Emergency Action Plan for all 2,823 high-hazard dams that lack one (months, not years; FEMA P-64 template).
            - listitem [ref=e50]: "Publish a condition rating for every high-hazard dam: 4,701 are unrated today."
            - listitem [ref=e51]: "Interim risk reduction (lowered pools, monitoring) at every Unsatisfactory dam: 456 dams."
            - listitem [ref=e52]: Determine the hazard class of 10,430 dams whose downstream consequences are unknown.
            - listitem [ref=e53]: "Catch up overdue inspections: 20,078 dams."
        - generic [ref=e54]:
          - heading "Years 2–5 — Fix the deficiencies" [level=2] [ref=e55]
          - list [ref=e56]:
            - listitem [ref=e57]: Design and construct repairs at the 2,628 Poor/Unsatisfactory high-hazard dams, starting with those that have no plan.
            - listitem [ref=e58]: Spillway capacity upgrades where hydrology predates modern criteria — the 10,793 dams over 75 and 7,140 over 100 years old with no recorded modernization.
            - listitem [ref=e59]: Filtered drains and seepage control on aging embankments.
            - listitem [ref=e60]: Remove dams that no longer serve a purpose rather than rebuilding them.
        - generic [ref=e61]:
          - heading "Years 5–10 — Modernize & sustain" [level=2] [ref=e62]
          - list [ref=e63]:
            - listitem [ref=e64]: Bring every high-hazard dam to current hydrologic (inflow design flood) and seismic standards.
            - listitem [ref=e65]: Automated monitoring with telemetry and public alert integration on large high-hazard dams (1,832 dams).
            - listitem [ref=e66]: Public inundation maps for every high-hazard dam.
            - listitem [ref=e67]: Owner financial-assurance requirements so repairs are never stranded by a bankrupt owner.
      - generic [ref=e68]:
        - heading "What it costs, and who pays" [level=2] [ref=e69]
        - paragraph [ref=e70]:
          - text: Our planning-level bands put the full rehabilitation of the nation's dams at
          - strong [ref=e71]: $76.7B–$416B
          - text: ", bracketing ASDSO's 2025 estimate of $165.2 billion for non-federal dams ($37.4 billion for the high-hazard subset). Against that, FEMA's High Hazard Potential Dam Rehabilitation grant program received $585 million from the 2021 infrastructure law — and its FY2026 round was about $11 million. Private owners hold most of the problem dams and most lack the means to pay."
        - heading "Policy asks" [level=3] [ref=e72]
        - list [ref=e73]:
          - listitem [ref=e74]:
            - strong [ref=e75]: Reauthorize and fund the HHPD Rehabilitation Grant Program
            - text: at a level that matches the inventory — at least $1 billion a year for a decade.
          - listitem [ref=e76]:
            - strong [ref=e77]: Fully fund the National Dam Safety Program
            - text: and state dam-safety staffing, so inspections and ratings actually happen.
          - listitem [ref=e78]:
            - strong [ref=e79]: Require an EAP for every high- and significant-hazard dam
            - text: ", with annual tabletop exercises, as a condition of operation."
          - listitem [ref=e80]:
            - strong [ref=e81]: Publish condition ratings and inundation maps
            - text: for every high-hazard dam, including federal dams whose DSAC/SOD classifications are kept out of the National Inventory.
          - listitem [ref=e82]:
            - strong [ref=e83]: Create a private-owner pathway
            - text: ": low-interest state loans, public acquisition where appropriate, and funded removal for dams without a purpose."
          - listitem [ref=e84]:
            - strong [ref=e85]: Update the inventory every year
            - text: ": 75,672 dams on this site have no data newer than 2019."
        - paragraph [ref=e86]:
          - link "Take action →" [ref=e87] [cursor=pointer]:
            - /url: /act
          - text: ·
          - link "Methodology →" [ref=e88] [cursor=pointer]:
            - /url: /methodology
      - heading "Funding programs that exist today" [level=2] [ref=e89]
      - generic [ref=e90]:
        - heading "Dam rehabilitation funding programs (U.S.)" [level=1] [ref=e91]
        - paragraph [ref=e92]:
          - text: Compiled 2026-10-29 from web search results. "Status 2025–2026" reflects what could be confirmed from sources seen; items marked
          - emphasis [ref=e93]: unconfirmed
          - text: could not be verified.
        - table [ref=e94]:
          - rowgroup [ref=e95]:
            - row [ref=e96]:
              - columnheader "#" [ref=e97]
              - columnheader "Program" [ref=e98]
              - columnheader "Agency" [ref=e99]
              - columnheader "What it funds" [ref=e100]
              - columnheader "Cost share" [ref=e101]
              - columnheader "Annual amount" [ref=e102]
              - columnheader "Status 2025–2026" [ref=e103]
              - columnheader "URL" [ref=e104]
          - rowgroup [ref=e105]:
            - row [ref=e106]:
              - cell "1" [ref=e107]
              - cell "Rehabilitation of High Hazard Potential Dams (HHPD)" [ref=e108]
              - cell "FEMA (National Dam Safety Program)" [ref=e109]
              - cell "Planning, design, repair, rehabilitation or removal of non-federal, state-regulated high-hazard dams that fail state safety criteria; passed through states to local-government/nonprofit sub-recipients (private owners not eligible)" [ref=e110]
              - cell "65% federal / 35% non-federal" [ref=e111]
              - 'cell "~$10–12M/yr regular appropriation (FY2026: $11.4M); FY2024 Fall round $185.1M from Bipartisan Infrastructure Law; no FY2023 appropriation" [ref=e112]'
              - cell "Active; FY2026 NOFO opened Aug 5 2026 (deadline Aug 31 2026). BIL supplemental money is exhausted after the FY2024 round." [ref=e113]
              - cell [ref=e114]:
                - link "https://www.fema.gov/grants/mitigation/learn/dam-safety/rehabilitation-high-hazard-potential-dams" [ref=e115] [cursor=pointer]:
                  - /url: https://www.fema.gov/grants/mitigation/learn/dam-safety/rehabilitation-high-hazard-potential-dams
            - row [ref=e116]:
              - cell "2" [ref=e117]
              - cell "USACE Dam Safety Program – Dam Safety Modification Studies / Dam Safety Assurance (DSAC-prioritized)" [ref=e118]
              - cell "U.S. Army Corps of Engineers" [ref=e119]
              - cell "Risk assessment, Dam Safety Modification Studies (DSMS) and construction fixes at USACE-owned dams, prioritized by Dam Safety Action Classification (DSAC 1 = highest urgency)" [ref=e120]
              - cell "Federal; local sponsors repay a share of modification costs for some projects (per GAO-16-106)" [ref=e121]
              - cell "Varies by appropriation; individual mega-projects $0.3–1.4B (Rough River up to $891M; Whittier Narrows $1.367B with $571M appropriated FY2026)" [ref=e122]
              - cell "Active. FY2025 AFR lists DSMS at Arkabutla, Bonneville, Carbon Canyon, Garrison (Snake Creek), Joe Pool, Kinzua, Mojave, Oahe, Painted Rock, Wappapello; 16 dams lowered / 3 raised in DSAC during FY2025" [ref=e123]
              - cell [ref=e124]:
                - link "https://www.publications.usace.army.mil/Portals/76/FY25%20Civil%20Works%20Annual%20Financial%20Report%20FINAL.pdf" [ref=e125] [cursor=pointer]:
                  - /url: https://www.publications.usace.army.mil/Portals/76/FY25%20Civil%20Works%20Annual%20Financial%20Report%20FINAL.pdf
            - row [ref=e126]:
              - cell "3" [ref=e127]
              - cell "Safety of Dams Program (SOD)" [ref=e128]
              - cell "Bureau of Reclamation (Interior)" [ref=e129]
              - cell "Modification of Reclamation-owned dams to correct safety deficiencies (seismic, hydrologic, seepage), under the Reclamation Safety of Dams Act" [ref=e130]
              - cell "Generally 85% federal non-reimbursable / 15% reimbursable by project beneficiaries (repayment contracts)" [ref=e131]
              - cell [ref=e132]:
                - text: Base appropriation
                - deletion [ref=e133]: $100M+/yr; plus $500M over FY2022–2026 from the Bipartisan Infrastructure Law (
                - text: $100M/yr) for ~12 dams
              - cell [ref=e134]:
                - text: Active; BIL tranche ends FY2026. B.F. Sisk ($100M BIL, 2022; $255M Phase 2 contract 2025) is the flagship.
                - emphasis [ref=e135]: Full BIL dam list not confirmed.
              - cell [ref=e136]:
                - link "https://www.usbr.gov/mp/sod/projects/sisk/" [ref=e137] [cursor=pointer]:
                  - /url: https://www.usbr.gov/mp/sod/projects/sisk/
                - text: ;
                - link "https://www.congress.gov/crs-product/R47032" [ref=e138] [cursor=pointer]:
                  - /url: https://www.congress.gov/crs-product/R47032
            - row [ref=e139]:
              - cell "4" [ref=e140]
              - cell "Watershed Rehabilitation Program (REHAB)" [ref=e141]
              - cell "USDA Natural Resources Conservation Service" [ref=e142]
              - cell "Rehabilitation of aging NRCS-assisted watershed (PL-566 / PL-534) flood-control dams that have reached design life or no longer meet safety criteria; assessment, planning, design, construction" [ref=e143]
              - cell "65% federal / 35% local sponsor (Texas state covers 33.25% of the 35%)" [ref=e144]
              - 'cell "FY2025: >$30M to 112 dam projects (50 in assessment); BIL provided additional rounds in FY2022–2023" [ref=e145]'
              - cell [ref=e146]:
                - text: Active; FY2026 appropriation level
                - emphasis [ref=e147]: unconfirmed
                - text: . 6,782 watershed dams past design life by end-2025 (CRS).
              - cell [ref=e148]:
                - link "https://www.nrcs.usda.gov/sites/default/files/2026-03/NRCS_WatershedRehab_Fact%20Sheet-0326%20-508.pdf" [ref=e149] [cursor=pointer]:
                  - /url: https://www.nrcs.usda.gov/sites/default/files/2026-03/NRCS_WatershedRehab_Fact%20Sheet-0326%20-508.pdf
            - row [ref=e150]:
              - cell "5" [ref=e151]
              - cell "Dam Risk Reduction Grant Program (DRRGP)" [ref=e152]
              - cell "Michigan EGLE" [ref=e153]
              - cell "Repair, removal, maintenance, and design for publicly and privately owned dams; prioritizes high/significant-hazard, poor-condition dams" [ref=e154]
              - cell "Grant; match varies by applicant" [ref=e155]
              - 'cell "Launched 2022 with ~$15M/yr: $15.3M (16 dams, 2023), $14.1M (22 dams, 2024), $14.9M (19 dams, 2025)" [ref=e156]'
              - cell [ref=e157]:
                - text: Active through the 2024-25 cycle; a 2026 round was
                - emphasis [ref=e158]: not confirmed
                - text: in results
              - cell [ref=e159]:
                - link "https://www.michigan.gov/egle/newsroom/press-releases/2025/05/08/michigan-dams-get-safety-upgrade-funding" [ref=e160] [cursor=pointer]:
                  - /url: https://www.michigan.gov/egle/newsroom/press-releases/2025/05/08/michigan-dams-get-safety-upgrade-funding
            - row [ref=e161]:
              - cell "6" [ref=e162]
              - cell "Dam Safety Grant Fund / Dam Safety Grant Program" [ref=e163]
              - cell "North Carolina DEQ (DEMLR)" [ref=e164]
              - cell "Rehabilitation of high-hazard (Class C) dams with unresolved deficiency notices; first fund limited to Hurricane Helene-damaged dams in declared counties" [ref=e165]
              - cell "Grant to dam owners; per-project cap $4M in the 2026 program" [ref=e166]
              - cell "$10M (SL2025-26, Helene) fully awarded in two rounds (Feb & Sept 2026); additional $20M in 2026 state budget for 12 named dams" [ref=e167]
              - cell "Active; $20M round allocations pending" [ref=e168]
              - cell [ref=e169]:
                - link "https://www.deq.nc.gov/news/press-releases/2026/09/16/ncdeq-awards-second-round-grants-repair-high-hazard-dams-damaged-hurricane-helene" [ref=e170] [cursor=pointer]:
                  - /url: https://www.deq.nc.gov/news/press-releases/2026/09/16/ncdeq-awards-second-round-grants-repair-high-hazard-dams-damaged-hurricane-helene
            - row [ref=e171]:
              - cell "7" [ref=e172]
              - cell "Dam Restoration and Inland Water Projects Loan Program" [ref=e173]
              - cell "New Jersey DEP" [ref=e174]
              - cell "Low-interest loans to public and private dam owners for restoration/repair of dams (and lake dredging)" [ref=e175]
              - cell "Loan (2% / 20-yr historically)" [ref=e176]
              - cell "Episodic bond-act appropriations; P.L.2025 c.44 appropriated $28.7M for 17–19 projects conditionally approved in 2022" [ref=e177]
              - cell "Program page says \"currently unavailable due to funding\"; no new application round found" [ref=e178]
              - cell [ref=e179]:
                - link "https://dep.nj.gov/grantandloanprograms/dam-restoration-inland-water-projects-loan-program/" [ref=e180] [cursor=pointer]:
                  - /url: https://dep.nj.gov/grantandloanprograms/dam-restoration-inland-water-projects-loan-program/
            - row [ref=e181]:
              - cell "8" [ref=e182]
              - cell "Dam and Seawall Repair or Removal Program" [ref=e183]
              - cell "Massachusetts EEA (Office of Coastal Zone Management)" [ref=e184]
              - cell "Grants and loans to municipalities and nonprofits for design, permitting, repair or removal of dams, levees, seawalls" [ref=e185]
              - cell "Grant/loan; match required" [ref=e186]
              - 'cell "~$5–11M/yr: $5.6M (Jul 2023), $10.9M to 23 recipients (Sep 2025); ~$146M since 2013" [ref=e187]'
              - cell "Active" [ref=e188]
              - cell [ref=e189]:
                - link "https://www.mass.gov/news/healey-driscoll-administration-awards-nearly-11-million-in-funding-for-dams-levees-and-coastal-infrastructure" [ref=e190] [cursor=pointer]:
                  - /url: https://www.mass.gov/news/healey-driscoll-administration-awards-nearly-11-million-in-funding-for-dams-levees-and-coastal-infrastructure
            - row [ref=e191]:
              - cell "9" [ref=e192]
              - cell "Flood Control Structural Repair Grant Program / Dam Rehabilitation Program" [ref=e193]
              - cell "Texas State Soil and Water Conservation Board (TSSWCB)" [ref=e194]
              - cell "100% of allowable repair/upgrade costs for NRCS flood-control dams; state match (33.25%) for federal REHAB projects; EWP match" [ref=e195]
              - cell "State pays local share; REHAB split 65% fed / 33.25% state / 1.75% local" [ref=e196]
              - 'cell "Biennial appropriation (10-year plan: 169 dams need repair, 515 need rehab/upgrade)" [ref=e197]'
              - cell [ref=e198]:
                - text: Active; FY2024–25 award list
                - emphasis [ref=e199]: not found
                - text: ". Note: TWDB separately finances dam projects via loans (e.g., $40M Lake Dunlap) but has no dedicated dam-rehab grant program found."
              - cell [ref=e200]:
                - link "https://tsswcb.texas.gov/programs/flood-control-program" [ref=e201] [cursor=pointer]:
                  - /url: https://tsswcb.texas.gov/programs/flood-control-program
            - row [ref=e202]:
              - cell "10" [ref=e203]
              - cell "Rehabilitation of High Hazard Potential Dams – Texas pass-through" [ref=e204]
              - cell "Texas Commission on Environmental Quality" [ref=e205]
              - cell "Sub-awards of FEMA HHPD funds to eligible Texas dam owners" [ref=e206]
              - cell "65/35" [ref=e207]
              - 'cell "FY2024: $10.74M federal share to TCEQ" [ref=e208]'
              - cell [ref=e209]:
                - text: Active; FY26 applications due Aug 14 2026; funded dam names
                - emphasis [ref=e210]: not found
              - cell [ref=e211]:
                - link "https://texasfloodclearinghouse.org/funding/index.html" [ref=e212] [cursor=pointer]:
                  - /url: https://texasfloodclearinghouse.org/funding/index.html
            - row [ref=e213]:
              - cell "11" [ref=e214]
              - cell "Dam Safety, Flood Prevention and Protection Assistance Fund" [ref=e215]
              - cell "Virginia DCR / Virginia Resources Authority" [ref=e216]
              - cell "Matching grants for engineering studies (up to $1M), design/repair/removal/safety modification (up to $4M), EAPs; loans also available" [ref=e217]
              - cell "Reimbursement grants with 10–30% match" [ref=e218]
              - cell "~$5M/yr ($4.9M to 17 recipients in 2025; $4.4M to 63 recipients earlier)" [ref=e219]
              - cell "Active; 2026 round $5M, applications due Mar 31 2026" [ref=e220]
              - cell [ref=e221]:
                - link "https://virginiaresources.gov/program/dam-safety-and-flood-prevention/" [ref=e222] [cursor=pointer]:
                  - /url: https://virginiaresources.gov/program/dam-safety-and-flood-prevention/
            - row [ref=e223]:
              - cell "12" [ref=e224]
              - cell "Municipal Dam Grant Program" [ref=e225]
              - cell "Wisconsin DNR" [ref=e226]
              - cell "Engineering and construction for maintenance, repair, modification or removal of municipally owned dams" [ref=e227]
              - 'cell "Repair: 50% of first $1M + 25% of next $2M; removal 100% of first $1M" [ref=e228]'
              - cell "$4M in FY2025-27 biennial budget" [ref=e229]
              - cell [ref=e230]:
                - text: Active; FY2025-27 cycle application deadline Feb 27 2026; award list
                - emphasis [ref=e231]: not found
              - cell [ref=e232]:
                - link "https://dnr.wisconsin.gov/aid/DamMunicipal.html" [ref=e233] [cursor=pointer]:
                  - /url: https://dnr.wisconsin.gov/aid/DamMunicipal.html
            - row [ref=e234]:
              - cell "13" [ref=e235]
              - cell "Dam Repair Assistance Grant (state) + HHPD pass-through" [ref=e236]
              - cell "South Carolina DES" [ref=e237]
              - cell "State grants for repair of regulated dams; sub-awards of FEMA HHPD money (43 dams eligible in FFY24)" [ref=e238]
              - cell "State grant match varies; HHPD 65/35" [ref=e239]
              - 'cell "State: $3M total appropriated through SFY2025-26 ($1.5M added May 2025); HHPD FY2024 $5.85M" [ref=e240]'
              - cell "Active" [ref=e241]
              - cell [ref=e242]:
                - link "https://www.des.sc.gov/programs/bureau-water/dams-reservoirs/dam-repair-assistance-grant" [ref=e243] [cursor=pointer]:
                  - /url: https://www.des.sc.gov/programs/bureau-water/dams-reservoirs/dam-repair-assistance-grant
            - row [ref=e244]:
              - cell "14" [ref=e245]
              - cell "State dam safety bonding (DNR Dam Safety Program)" [ref=e246]
              - cell "Minnesota DNR" [ref=e247]
              - cell "Repair/reconstruction of state- and locally-owned dams on biennial Dam Safety Project Priority List" [ref=e248]
              - cell "State bonds; local match for locally owned dams" [ref=e249]
              - cell "~$2M/yr historically; $10M dam-safety grant requested in 2025 bonding ($20M for Lake Bronson in 2020)" [ref=e250]
              - cell [ref=e251]:
                - text: 2025 enactment
                - emphasis [ref=e252]: not confirmed
                - text: ; 2026 request targets top 5 DNR + 6 local dams
              - cell [ref=e253]:
                - link "https://www.dnr.state.mn.us/waters/surfacewater_section/damsafety/index.html" [ref=e254] [cursor=pointer]:
                  - /url: https://www.dnr.state.mn.us/waters/surfacewater_section/damsafety/index.html
            - row [ref=e255]:
              - cell "15" [ref=e256]
              - cell "FERC Dam Safety Program (licensee-funded compliance)" [ref=e257]
              - cell "Federal Energy Regulatory Commission" [ref=e258]
              - 'cell "Not a funding source: FERC orders licensees to correct deficiencies (e.g., spillway capacity for PMF) at licensed hydro dams; owners self-fund (often rate-based)" [ref=e259]'
              - cell "100% owner" [ref=e260]
              - cell "Licensee dam-safety construction spending est. $1.5–2B/yr nationally" [ref=e261]
              - 'cell "Ongoing; examples: Anderson Dam ($2.8B, FERC-approved 2026), Tiger Creek spillway (~$50M), Hardy Dam ($350M, unfunded)" [ref=e262]'
              - cell [ref=e263]:
                - link "https://www.waterpowermagazine.com/analysis/spilling-the-beans-on-us-refurbishment/" [ref=e264] [cursor=pointer]:
                  - /url: https://www.waterpowermagazine.com/analysis/spilling-the-beans-on-us-refurbishment/
        - heading "Programs seen but not fully characterized" [level=2] [ref=e265]
        - list [ref=e266]:
          - listitem [ref=e267]:
            - strong [ref=e268]: Utah Division of Water Resources dam safety funding
            - text: – ~$3.8M/yr state appropriation plus $7.2M FEMA HHPD (FY2024); 107 of 227 high-hazard dams need rehab. Specific award list not found.
          - listitem [ref=e269]:
            - strong [ref=e270]: Oklahoma Water Resources Board dam grants
            - text: – $1M grant to OKC Water Utilities Trust for Lake Overholser design (2024); 2025 Comprehensive Water Plan recommends one-time $15M for watershed dam rehab (not appropriated).
          - listitem [ref=e271]:
            - strong [ref=e272]: Pennsylvania (DCNR state parks dams / H2O PA / Growing Greener)
            - text: – DCNR has 139 dams (46 high-hazard needing work) using ARPA and capital funds; H2O PA "High Hazard Unsafe Dams" grants (2019 list). No 2024–2026 program-level figures found.
          - listitem [ref=e273]:
            - strong [ref=e274]: Ohio ODNR dam rehabilitation (capital budget)
            - text: – $50M requested for FY2027–2032 incl. Buckeye Lake; appropriated amount not confirmed.
          - listitem [ref=e275]:
            - strong [ref=e276]: Connecticut DEEP
            - text: – $10M bond commission approval (2026) for state parks/trails/dams; HHPD FY2024 $3.04M; dam list not found.
          - listitem [ref=e277]:
            - strong [ref=e278]: Oregon
            - text: – No standing state program found; Wallowa Lake Dam funded ad hoc via lottery bonds, Business Oregon, OWRD, ODFW, NFWF and FY2022 HHPD.
  - contentinfo [ref=e279]:
    - generic [ref=e280]:
      - generic [ref=e281]:
        - strong [ref=e282]: DamHealth
        - paragraph [ref=e283]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e285]:
        - link "Methodology & limitations" [ref=e286] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e287] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e288] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e290]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
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