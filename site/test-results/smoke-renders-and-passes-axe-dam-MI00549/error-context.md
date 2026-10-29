# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /dam/MI00549
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 17,
  "help": "Elements must meet minimum color contrast ratio thresholds"
 },
 {
  "id": "nested-interactive",
  "nodes": 1,
  "help": "Interactive controls must not be nested"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 689

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
+               "bgColor": "#f6f7f5",
+               "contrastRatio": 4.1,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#2a78d6",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/states\" data-discover=\"true\">States</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "nav[aria-label=\"Breadcrumb\"] > a[href$=\"states\"][data-discover=\"true\"]",
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
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/state/MI\" data-discover=\"true\">Michigan</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/MI\"]",
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
+                 "html": "<section class=\"card\" style=\"margin-top: 16px;\">",
+                 "target": Array [
+                   "section:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a class=\"small\" href=\"/issues\" data-discover=\"true\">About these issues</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".section-title > a[href$=\"issues\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://nid.sec.usace.army.mil/#/dams/system/MI00549/summary\" rel=\"noopener\">National Inventory of Dams: MI00549</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "dd:nth-child(10) > a[rel=\"noopener\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://www.four-lakes-taskforce-mi.com/document-library-21/2024-four-year-progress-report\" rel=\"noopener\">State of Michigan appropriations + special assessment + bond (Four Lakes Task Force)</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "dd:nth-child(12) > a[rel=\"noopener\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#2a78d6",
+               "contrastRatio": 4.41,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.41 (foreground color: #ffffff, background color: #2a78d6, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a class=\"btn btn-primary\" href=\"/act?dam=MI00549\" data-discover=\"true\">Take action for this dam</a>",
+                 "target": Array [
+                   ".btn",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.41 (foreground color: #ffffff, background color: #2a78d6, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a class=\"btn btn-primary\" href=\"/act?dam=MI00549\" data-discover=\"true\">Take action for this dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".btn",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/MI00376\" data-discover=\"true\">Kawkawlin Flooding Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MI00376\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/MI00524\" data-discover=\"true\">Beaverton</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MI00524\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/MI00550\" data-discover=\"true\">Sanford Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MI00550\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/MI00461\" data-discover=\"true\">Robert Dulude Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MI00461\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/MI00548\" data-discover=\"true\">Smallwood Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MI00548\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/MI00208\" data-discover=\"true\">Heil Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MI00208\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/MI00656\" data-discover=\"true\">Scottish Hills Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MI00656\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(7) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/MI00414\" data-discover=\"true\">Kerswill Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MI00414\"]",
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
+           "p > a[rel=\"noopener\"]",
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
+   Object {
+     "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
+     "help": "Interactive controls must not be nested",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright",
+     "id": "nested-interactive",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "no-focusable-content",
+             "impact": "serious",
+             "message": "Element has focusable descendants. Move them outside of the element, or remove them.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 1: Rated Unsatisfactory\" style=\"cursor: pointer;\">",
+                 "target": Array [
+                   "g[aria-label=\"Issue 1: Rated Unsatisfactory\"]",
+                 ],
+               },
+               Object {
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 2: Inspection overdue\" style=\"cursor: pointer;\"><circle cx=\"84\" cy=\"70\" r=\"11\" fill=\"var(--sev-3)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"84\" y=\"74\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\" fill=\"#0b0b0b\">2</text></g>",
+                 "target": Array [
+                   "g[aria-label=\"Issue 2: Inspection overdue\"]",
+                 ],
+               },
+               Object {
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 3: Over 100 years old\" style=\"cursor: pointer;\"><circle cx=\"300\" cy=\"92\" r=\"11\" fill=\"var(--sev-3)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"300\" y=\"96\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\" fill=\"#0b0b0b\">3</text></g>",
+                 "target": Array [
+                   "g[aria-label=\"Issue 3: Over 100 years old\"]",
+                 ],
+               },
+               Object {
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 4: Very large reservoir or tall dam\" style=\"cursor: pointer;\">",
+                 "target": Array [
+                   "g[role=\"button\"]:nth-child(20)",
+                 ],
+               },
+               Object {
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 5: Privately owned, needs work\" style=\"cursor: pointer;\">",
+                 "target": Array [
+                   "g[role=\"button\"]:nth-child(21)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has focusable descendants. Move them outside of the element, or remove them.",
+         "html": "<svg viewBox=\"0 0 600 270\" role=\"img\" aria-label=\"Schematic cross-section of a earth dam, 54 feet high, reservoir on the left, downstream valley on the right. 5 issue callouts.\" style=\"width: 100%; height: auto;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "svg[viewBox=\"0 0 600 270\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "wcag2a",
+       "wcag412",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "RGAAv4",
+       "RGAA-7.1.1",
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
    - article [ref=e29]:
      - navigation "Breadcrumb" [ref=e30]:
        - link "States" [ref=e31] [cursor=pointer]:
          - /url: /states
        - text: ›
        - link "Michigan" [ref=e32] [cursor=pointer]:
          - /url: /state/MI
        - text: › Gladwin County
      - generic [ref=e33]:
        - generic [ref=e34]:
          - heading "Edenville Dam" [level=1] [ref=e35]
          - paragraph [ref=e36]: Tittabawassee River · Gladwin County, Michigan · NID MI00549
          - generic [ref=e37]:
            - img "Grade F, Critical" [ref=e38]: F
            - generic [ref=e39]:
              - generic [ref=e40]: Critical — Dam Health Index 76.8
              - generic [ref=e41]: A critical safety deficiency on a dam that could cause loss of life. Urgent action is needed.
              - generic [ref=e42]:
                - text: "Data confidence:"
                - strong [ref=e43]: high
                - text: · includes March 2026 data
          - generic [ref=e44]:
            - generic [ref=e45]: "Hazard: High"
            - generic [ref=e46]: "Condition: Unsatisfactory"
            - generic [ref=e47]: "EAP: Yes"
            - generic [ref=e48]: "Plan: Repairs under way"
        - generic [ref=e49]:
          - generic [ref=e50]: No photo found in public sources; see the schematic below.
          - generic [ref=e52]:
            - heading "History & background" [level=2] [ref=e53]
            - paragraph [ref=e54]: Edenville Dam is a earth dam completed in 1924 on Tittabawassee River in Gladwin County, Michigan. Its recorded purpose is recreation. It stands 54 feet high and can store about 66,200 acre-feet of water. It is owned by Boyce Hydro Power, LLC.
      - generic [ref=e55]:
        - generic [ref=e56]:
          - heading "What the grade means" [level=2] [ref=e57]
          - generic [ref=e58]:
            - img "Dam Health Index 76.8 of 100, grade F" [ref=e59]:
              - generic [ref=e66]: "77"
              - generic [ref=e67]: Dam Health Index · 0 best, 100 worst
              - generic [ref=e68]: "0"
              - generic [ref=e69]: "100"
            - generic [ref=e70]:
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - strong [ref=e74]: Condition
                  - generic [ref=e75]: · What inspectors found, plus age
                - generic [ref=e76]: "100"
              - generic [ref=e80]:
                - generic [ref=e81]:
                  - strong [ref=e82]: Readiness
                  - generic [ref=e83]: · Emergency plan, inspections, oversight
                - generic [ref=e84]: "40"
              - generic [ref=e88]:
                - generic [ref=e89]:
                  - strong [ref=e90]: Consequence
                  - generic [ref=e91]: · How bad a failure would be
                - generic [ref=e92]: "85"
          - paragraph [ref=e95]: If this dam failed, people downstream would likely die. Inspectors have found a deficiency that needs immediate or emergency action.
        - generic [ref=e96]:
          - heading "The dam, drawn" [level=2] [ref=e97]
          - generic [ref=e98]:
            - img "Schematic cross-section of a earth dam, 54 feet high, reservoir on the left, downstream valley on the right. 5 issue callouts." [ref=e99]:
              - generic [ref=e117]: records & oversight
              - generic [ref=e120]: 54 ft
              - generic [ref=e122]: reservoir · 66,200 ac-ft
              - generic [ref=e123]: downstream
              - generic [ref=e124]: Earth
              - 'button "Issue 1: Rated Unsatisfactory" [ref=e125] [cursor=pointer]':
                - generic [ref=e127]: "1"
              - 'button "Issue 2: Inspection overdue" [ref=e128] [cursor=pointer]':
                - generic [ref=e130]: "2"
              - 'button "Issue 3: Over 100 years old" [ref=e131] [cursor=pointer]':
                - generic [ref=e133]: "3"
              - 'button "Issue 4: Very large reservoir or tall dam" [ref=e134] [cursor=pointer]':
                - generic [ref=e136]: "4"
              - 'button "Issue 5: Privately owned, needs work" [ref=e137] [cursor=pointer]':
                - generic [ref=e139]: "5"
            - generic [ref=e140]: Numbered markers show where each issue sits on the dam. Hover or focus one to read it; click to jump to the details.
      - generic [ref=e141]:
        - generic [ref=e142]:
          - heading "Pressing issues" [level=2] [ref=e143]
          - link "About these issues" [ref=e144] [cursor=pointer]:
            - /url: /issues
        - list [ref=e145]:
          - listitem [ref=e146]:
            - generic [aria-hidden] [ref=e147]: "1"
            - generic [ref=e148]:
              - generic [ref=e149]:
                - strong [ref=e151]: Rated Unsatisfactory
                - generic [ref=e152]: Critical
                - generic [ref=e153]: condition
              - paragraph [ref=e154]: Inspectors found a safety deficiency that needs immediate or emergency action.
          - listitem [ref=e155]:
            - generic [aria-hidden] [ref=e156]: "2"
            - generic [ref=e157]:
              - generic [ref=e158]:
                - strong [ref=e160]: Inspection overdue
                - generic [ref=e161]: Significant
                - generic [ref=e162]: readiness
              - paragraph [ref=e163]: The last recorded inspection is older than the required inspection interval.
          - listitem [ref=e164]:
            - generic [aria-hidden] [ref=e165]: "3"
            - generic [ref=e166]:
              - generic [ref=e167]:
                - strong [ref=e169]: Over 100 years old
                - generic [ref=e170]: Significant
                - generic [ref=e171]: condition
              - paragraph [ref=e172]: Built more than a century ago, before modern design standards, with no recorded major modification in the last 25 years.
          - listitem [ref=e173]:
            - generic [aria-hidden] [ref=e174]: "4"
            - generic [ref=e175]:
              - generic [ref=e176]:
                - strong [ref=e178]: Very large reservoir or tall dam
                - generic [ref=e179]: Significant
                - generic [ref=e180]: consequence
              - paragraph [ref=e181]: This is a large dam; a failure would release a very large volume of water.
          - listitem [ref=e182]:
            - generic [aria-hidden] [ref=e183]: "5"
            - generic [ref=e184]:
              - generic [ref=e185]:
                - strong [ref=e187]: Privately owned, needs work
                - generic [ref=e188]: Moderate
                - generic [ref=e189]: readiness
              - paragraph [ref=e190]: A private owner must pay for repairs on a dam that could endanger others, and private owners often lack the funds.
      - generic [ref=e191]:
        - generic [ref=e192]:
          - heading "What should happen, and when" [level=2] [ref=e193]
          - generic [ref=e194]: Repairs under way
        - generic [ref=e195]:
          - paragraph [ref=e196]: "Good news: repairs are reported to be under way. The plan below is what a complete program looks like; check the owner or regulator for the actual scope."
          - generic [ref=e197]:
            - generic [ref=e198]:
              - heading "Year 1" [level=3] [ref=e199]
              - generic [ref=e200]: Stabilize & know
              - list [ref=e201]:
                - listitem [ref=e202]:
                  - strong [ref=e203]: Reduce the risk right now
                  - generic [ref=e204]: Lower the reservoir level, add 24/7 monitoring, and make sure people downstream know the warning signs.
                - listitem [ref=e205]:
                  - strong [ref=e206]: Confirm what is wrong
                  - generic [ref=e207]: Bring in engineers to pin down the exact problem and design a fix.
                - listitem [ref=e208]:
                  - strong [ref=e209]: Inspect the dam
                  - generic [ref=e210]: An inspection is overdue; schedule one this year.
                - listitem [ref=e211]:
                  - strong [ref=e212]: Line up funding
                  - generic [ref=e213]: Private owners can apply for state or FEMA rehabilitation grants; the community can help make the case.
            - generic [ref=e214]:
              - heading "Years 2–5" [level=3] [ref=e215]
              - generic [ref=e216]: Fix the deficiencies
              - list [ref=e217]:
                - listitem [ref=e218]:
                  - strong [ref=e219]: Fix the deficiency
                  - generic [ref=e220]: Carry out the repair — this is the top priority project for the dam.
                - listitem [ref=e221]:
                  - strong [ref=e222]: Full modern safety review
                  - generic [ref=e223]: A century-old dam should be fully checked against today's standards.
                - listitem [ref=e224]:
                  - strong [ref=e225]: Risk-informed review
                  - generic [ref=e226]: A large dam deserves a deeper, risk-based review and public inundation maps.
            - generic [ref=e227]:
              - heading "Years 5–10" [level=3] [ref=e228]
              - generic [ref=e229]: Modernize & sustain
              - list [ref=e230]:
                - listitem [ref=e231]:
                  - strong [ref=e232]: Modernize or retire
                  - generic [ref=e233]: Decide whether to rebuild the dam to modern standards or remove it.
                - listitem [ref=e234]:
                  - strong [ref=e235]: Modern monitoring and alerts
                  - generic [ref=e236]: Install automated monitoring that can alert downstream communities.
          - paragraph [ref=e237]:
            - text: "Planning-level cost band for a full rehabilitation:"
            - strong [ref=e238]: $5M – $27M
            - text: ". Typical funding: FEMA’s High Hazard Potential Dam grant (65% federal share), state dam-safety loans and grants, and the owner."
      - generic [ref=e239]:
        - generic [ref=e240]:
          - heading "What a failure would mean downstream" [level=2] [ref=e241]
          - generic [ref=e242]:
            - 'img "Downstream consequence: hazard High. Loss of life likely." [ref=e243]':
              - generic [ref=e268]: High hazard — Loss of life likely
            - generic [ref=e269]:
              - generic [ref=e270]:
                - generic [ref=e271]: Hazard class
                - strong [ref=e272]: High
              - generic [ref=e273]:
                - generic [ref=e274]: Flood-wave screening
                - strong [ref=e275]: 149,100 cfs peak
              - generic [ref=e276]:
                - generic [ref=e277]: County population
                - strong [ref=e278]: 25,853
                - text: (context, not downstream count)
          - paragraph [ref=e279]: Destructive flood wave for many miles downstream. The reservoir holds enough water to fill the Superdome 23 times.
          - heading "The next ten years" [level=3] [ref=e280]
          - list [ref=e281]:
            - listitem [ref=e282]: Failure would likely cause loss of life downstream (High hazard classification).
            - listitem [ref=e283]: Without funded repairs, the identified deficiency will worsen; the next decade's extreme storms are the most likely trigger for a failure.
            - listitem [ref=e284]: The dam predates modern flood and filter design criteria; expect a safety review to find upgrades needed.
            - listitem [ref=e285]: Losing or lowering this reservoir would affect a lake used for recreation and property values around it.
            - listitem [ref=e286]: 25,853 people live in Gladwin County (county population — the true downstream population is usually much smaller and depends on inundation mapping).
          - heading "Climate stress — Midwest" [level=3] [ref=e287]
          - paragraph [ref=e288]: Spring and summer extreme rainfall is increasing, with repeated record floods (2008, 2019, 2024). Many small earthen dams and aging mill dams face overtopping and internal-erosion risk.
        - generic [ref=e289]:
          - heading "Timeline" [level=2] [ref=e290]
          - 'img "Timeline: Built 1924; EAP revised 2008; Inspected 2020; Today; Yr 1 · stabilize; Yr 5 · fixed; Yr 10 · modern" [ref=e291]':
            - generic [ref=e293]: Built 1924
            - generic [ref=e296]: EAP revised 2008
            - generic [ref=e299]: Inspected 2020
            - generic [ref=e302]: Today
            - generic [ref=e305]: Yr 1 · stabilize
            - generic [ref=e308]: Yr 5 · fixed
            - generic [ref=e311]: Yr 10 · modern
            - generic [ref=e314]: "1924"
            - generic [ref=e315]: "2026"
            - generic [ref=e316]: "2036"
          - heading "Compared with Michigan and the nation" [level=3] [ref=e317]
          - generic [ref=e318]:
            - generic [ref=e319]:
              - generic [ref=e320]: Dam Health Index (0 best – 100 worst)
              - generic [ref=e321]:
                - generic [ref=e322]: This dam
                - generic [ref=e325]: "77"
              - generic [ref=e326]:
                - generic [ref=e327]: Michigan (typical)
                - generic [ref=e330]: "28"
              - generic [ref=e331]:
                - generic [ref=e332]: United States (typical)
                - generic [ref=e335]: "28"
            - generic [ref=e336]:
              - generic [ref=e337]: Age (years)
              - generic [ref=e338]:
                - generic [ref=e339]: This dam
                - generic [ref=e342]: "102"
              - generic [ref=e343]:
                - generic [ref=e344]: Michigan (typical)
                - generic [ref=e347]: "69"
              - generic [ref=e348]:
                - generic [ref=e349]: United States (typical)
                - generic [ref=e352]: "61"
      - generic [ref=e353]:
        - generic [ref=e354]:
          - heading "Facts about this dam" [level=2] [ref=e355]
          - generic [ref=e356]:
            - generic [ref=e357]:
              - term [ref=e358]: Type
              - definition [ref=e359]: Earth
            - generic [ref=e360]:
              - term [ref=e361]: Purposes
              - definition [ref=e362]: Recreation
            - generic [ref=e363]:
              - term [ref=e364]: Completed
              - definition [ref=e365]: "1924"
            - generic [ref=e366]:
              - term [ref=e367]: Modified
              - definition [ref=e368]: —
            - generic [ref=e369]:
              - term [ref=e370]: Height
              - definition [ref=e371]: 54 ft
            - generic [ref=e372]:
              - term [ref=e373]: Length
              - definition [ref=e374]: —
            - generic [ref=e375]:
              - term [ref=e376]: Max storage
              - definition [ref=e377]: 66,200 acre-feet
            - generic [ref=e378]:
              - term [ref=e379]: Normal storage
              - definition [ref=e380]: 36,000 acre-feet
            - generic [ref=e381]:
              - term [ref=e382]: Surface area
              - definition [ref=e383]: 2,600 acres
            - generic [ref=e384]:
              - term [ref=e385]: Drainage area
              - definition [ref=e386]: 985 sq mi
            - generic [ref=e387]:
              - term [ref=e388]: Spillway
              - definition [ref=e389]: Controlled
            - generic [ref=e390]:
              - term [ref=e391]: Hazard potential
              - definition [ref=e392]: High
            - generic [ref=e393]:
              - term [ref=e394]: Condition
              - definition [ref=e395]: Unsatisfactory (as of Mar 15, 2026)
            - generic [ref=e396]:
              - term [ref=e397]: Emergency Action Plan
              - definition [ref=e398]: Yes, revised Jul 25, 2008
            - generic [ref=e399]:
              - term [ref=e400]: Last inspection
              - definition [ref=e401]: Mar 1, 2020 (every 1 yr)
            - generic [ref=e402]:
              - term [ref=e403]: Nearest city
              - definition [ref=e404]: Edenville, 10 mi
            - generic [ref=e405]:
              - term [ref=e406]: County population (2023)
              - definition [ref=e407]: 25,853
          - paragraph [ref=e408]:
            - text: "Cost to rehabilitate (planning-level band):"
            - strong [ref=e409]: $5M – $27M
            - text: "· basis: height 54 ft. Age: 102 years."
        - generic [ref=e410]:
          - heading "Who is responsible" [level=2] [ref=e411]
          - generic [ref=e412]:
            - term [ref=e413]: Owner
            - definition [ref=e414]:
              - text: Boyce Hydro Power, LLC
              - generic [ref=e415]: (Private)
            - term [ref=e416]: State regulator
            - definition [ref=e417]: Not recorded
            - term [ref=e418]: Federal roles
            - definition [ref=e419]: "Regulatory: FERC; Inspection: FERC"
            - term [ref=e420]: Congressional district (2019)
            - definition [ref=e421]: MI04 · John R. Moolenaar (R) at the time
            - term [ref=e422]: Official record
            - definition [ref=e423]:
              - 'link "National Inventory of Dams: MI00549" [ref=e424] [cursor=pointer]':
                - /url: https://nid.sec.usace.army.mil/#/dams/system/MI00549/summary
            - term [ref=e425]: Plan source
            - definition [ref=e426]:
              - link "State of Michigan appropriations + special assessment + bond (Four Lakes Task Force)" [ref=e427] [cursor=pointer]:
                - /url: https://www.four-lakes-taskforce-mi.com/document-library-21/2024-four-year-progress-report
              - generic [ref=e428]: Failed May 2020; EGLE permit Mar 2025; tentative completion fall 2027 (Wixom Lake refill ~2028). ~$200M state funds overall + $80M bond for four dams.
          - paragraph [ref=e429]:
            - link "Take action for this dam" [ref=e430] [cursor=pointer]:
              - /url: /act?dam=MI00549
          - generic [ref=e431]:
            - heading "Nearby dams" [level=3] [ref=e432]
            - list [ref=e433]:
              - listitem [ref=e434]:
                - img "Grade B, Watch" [ref=e435]: B
                - link "Kawkawlin Flooding Dam" [ref=e436] [cursor=pointer]:
                  - /url: /dam/MI00376
                - generic [ref=e437]: 6 mi
              - listitem [ref=e438]:
                - img "Grade B, Watch" [ref=e439]: B
                - link "Beaverton" [ref=e440] [cursor=pointer]:
                  - /url: /dam/MI00524
                - generic [ref=e441]: 7 mi
              - listitem [ref=e442]:
                - img "Grade F, Critical" [ref=e443]: F
                - link "Sanford Dam" [ref=e444] [cursor=pointer]:
                  - /url: /dam/MI00550
                - generic [ref=e445]: 10 mi
              - listitem [ref=e446]:
                - img "Grade C, Concern" [ref=e447]: C
                - link "Robert Dulude Dam" [ref=e448] [cursor=pointer]:
                  - /url: /dam/MI00461
                - generic [ref=e449]: 10 mi
              - listitem [ref=e450]:
                - img "Grade F, Critical" [ref=e451]: F
                - link "Smallwood Dam" [ref=e452] [cursor=pointer]:
                  - /url: /dam/MI00548
                - generic [ref=e453]: 10 mi
              - listitem [ref=e454]:
                - img "Grade B, Watch" [ref=e455]: B
                - link "Heil Dam" [ref=e456] [cursor=pointer]:
                  - /url: /dam/MI00208
                - generic [ref=e457]: 11 mi
              - listitem [ref=e458]:
                - img "Grade B, Watch" [ref=e459]: B
                - link "Scottish Hills Lake Dam" [ref=e460] [cursor=pointer]:
                  - /url: /dam/MI00656
                - generic [ref=e461]: 13 mi
              - listitem [ref=e462]:
                - img "Grade B, Watch" [ref=e463]: B
                - link "Kerswill Lake Dam" [ref=e464] [cursor=pointer]:
                  - /url: /dam/MI00414
                - generic [ref=e465]: 13 mi
  - contentinfo [ref=e466]:
    - generic [ref=e467]:
      - generic [ref=e468]:
        - strong [ref=e469]: DamHealth
        - paragraph [ref=e470]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e472]:
        - link "Methodology & limitations" [ref=e473] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e474] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e475] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e477]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
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