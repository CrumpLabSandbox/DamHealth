# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /dam/NV10122?view=engineering
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 16,
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
+ Received  + 648

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
+         "html": "<a href=\"/state/NV\" data-discover=\"true\">Nevada</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/NV\"]",
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
+                 "html": "<div class=\"card\">",
+                 "target": Array [
+                   ".grid-2:nth-child(3) > .card:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/methodology\" data-discover=\"true\">Full methodology</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "li:nth-child(2) > a[href$=\"methodology\"][data-discover=\"true\"]",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://nid.sec.usace.army.mil/#/dams/system/NV10122/summary\" rel=\"noopener\">National Inventory of Dams: NV10122</a>",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/NV10161\" data-discover=\"true\">Hemenway Valley Flood Control Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NV10161\"]",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/NV10583\" data-discover=\"true\">Aaron Way Detention Basin Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NV10583\"]",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/NV10930\" data-discover=\"true\">Trail Head Detention Basin Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NV10930\"]",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/NV10647\" data-discover=\"true\">Bootleg Detention Basin Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NV10647\"]",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/NV10619\" data-discover=\"true\">North Railroad Detention Basin Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NV10619\"]",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/NV00220\" data-discover=\"true\">Boulder Wastewater Storage Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NV00220\"]",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/NV10528\" data-discover=\"true\">East C-1 Detention Basin Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NV10528\"]",
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
+                   ".grid-2:nth-child(8) > .card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/NV10516\" data-discover=\"true\">River Mountains Impoundment Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NV10516\"]",
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
+           "p > a[href$=\"methodology\"][data-discover=\"true\"]",
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
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 1: Inspection overdue\" style=\"cursor: pointer;\"><circle cx=\"84\" cy=\"70\" r=\"11\" fill=\"var(--sev-3)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"84\" y=\"74\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\" fill=\"#0b0b0b\">1</text></g>",
+                 "target": Array [
+                   "g[aria-label=\"Issue 1: Inspection overdue\"]",
+                 ],
+               },
+               Object {
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 2: Very large reservoir or tall dam\" style=\"cursor: pointer;\">",
+                 "target": Array [
+                   "g[role=\"button\"]:nth-child(18)",
+                 ],
+               },
+               Object {
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 3: Over 75 years old\" style=\"cursor: pointer;\"><circle cx=\"300\" cy=\"92\" r=\"11\" fill=\"var(--sev-2)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"300\" y=\"96\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\" fill=\"#fff\">3</text></g>",
+                 "target": Array [
+                   "g[aria-label=\"Issue 3: Over 75 years old\"]",
+                 ],
+               },
+               Object {
+                 "html": "<g tabindex=\"0\" role=\"button\" aria-label=\"Issue 4: Federal rating not published\" style=\"cursor: pointer;\">",
+                 "target": Array [
+                   "g[role=\"button\"]:nth-child(20)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has focusable descendants. Move them outside of the element, or remove them.",
+         "html": "<svg viewBox=\"0 0 600 270\" role=\"img\" aria-label=\"Schematic cross-section of a concrete dam, 730 feet high, reservoir on the left, downstream valley on the right. 4 issue callouts.\" style=\"width: 100%; height: auto;\">",
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
          - button "Community" [ref=e25] [cursor=pointer]
          - button "Engineering" [pressed] [ref=e26] [cursor=pointer]
        - button "Switch to dark theme" [ref=e27] [cursor=pointer]: ☾
  - main [active] [ref=e28]:
    - article [ref=e29]:
      - navigation "Breadcrumb" [ref=e30]:
        - link "States" [ref=e31] [cursor=pointer]:
          - /url: /states
        - text: ›
        - link "Nevada" [ref=e32] [cursor=pointer]:
          - /url: /state/NV
        - text: › Clark County
      - generic [ref=e33]:
        - generic [ref=e34]:
          - heading "Hoover Dam" [level=1] [ref=e35]
          - paragraph [ref=e36]: Colorado River · Clark County, Nevada · NID NV10122 · also known as Boulder
          - generic [ref=e37]:
            - img "Grade C, Concern" [ref=e38]: C
            - generic [ref=e39]:
              - generic [ref=e40]: Concern — Dam Health Index 32
              - generic [ref=e41]: "Known concerns: a fair rating, missing plans or inspections, or an undetermined hazard class."
              - generic [ref=e42]:
                - text: "Data confidence:"
                - strong [ref=e43]: medium
                - text: · includes March 2026 data
          - generic [ref=e44]:
            - generic [ref=e45]: "Hazard: High"
            - generic [ref=e46]: "Condition: Not Rated"
            - generic [ref=e47]: "EAP: Yes"
            - generic [ref=e48]: "Plan: No remediation reported"
        - generic [ref=e49]:
          - generic [ref=e50]: No photo found in public sources; see the schematic below.
          - generic [ref=e52]:
            - heading "History & background" [level=2] [ref=e53]
            - paragraph [ref=e54]: Hoover Dam is a concrete dam completed in 1935 on Colorado River in Clark County, Nevada. Its recorded purpose is hydroelectric. It stands 730 feet high and can store about 30,237,000 acre-feet of water. It is owned by Bureau of Reclamation.
      - generic [ref=e55]:
        - generic [ref=e56]:
          - heading "Index breakdown" [level=2] [ref=e57]
          - generic [ref=e58]:
            - img "Dam Health Index 32 of 100, grade C" [ref=e59]:
              - generic [ref=e66]: "32"
              - generic [ref=e67]: Dam Health Index · 0 best, 100 worst
              - generic [ref=e68]: "0"
              - generic [ref=e69]: "100"
            - generic [ref=e70]:
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - strong [ref=e74]: Condition
                  - generic [ref=e75]: · What inspectors found, plus age
                - generic [ref=e76]: "35"
              - generic [ref=e80]:
                - generic [ref=e81]:
                  - strong [ref=e82]: Readiness
                  - generic [ref=e83]: · Emergency plan, inspections, oversight
                - generic [ref=e84]: "25"
              - generic [ref=e88]:
                - generic [ref=e89]:
                  - strong [ref=e90]: Consequence
                  - generic [ref=e91]: · How bad a failure would be
                - generic [ref=e92]: "100"
          - list [ref=e95]:
            - listitem [ref=e96]: DHI = 0.70 × Condition × (0.5 + 0.5 × Consequence/100) + 0.30 × Readiness
            - listitem [ref=e97]:
              - link "Full methodology" [ref=e98] [cursor=pointer]:
                - /url: /methodology
        - generic [ref=e99]:
          - heading "Schematic section" [level=2] [ref=e100]
          - generic [ref=e101]:
            - img "Schematic cross-section of a concrete dam, 730 feet high, reservoir on the left, downstream valley on the right. 4 issue callouts." [ref=e102]:
              - generic [ref=e109]: gravity section
              - generic [ref=e121]: records & oversight
              - generic [ref=e124]: 730 ft
              - generic [ref=e126]: reservoir · 30,237,000 ac-ft
              - generic [ref=e127]: downstream
              - generic [ref=e128]: Concrete
              - 'button "Issue 1: Inspection overdue" [ref=e129] [cursor=pointer]':
                - generic [ref=e131]: "1"
              - 'button "Issue 2: Very large reservoir or tall dam" [ref=e132] [cursor=pointer]':
                - generic [ref=e134]: "2"
              - 'button "Issue 3: Over 75 years old" [ref=e135] [cursor=pointer]':
                - generic [ref=e137]: "3"
              - 'button "Issue 4: Federal rating not published" [ref=e138] [cursor=pointer]':
                - generic [ref=e140]: "4"
            - generic [ref=e141]: Numbered markers show where each issue sits on the dam. Hover or focus one to read it; click to jump to the details.
      - generic [ref=e142]:
        - generic [ref=e143]:
          - heading "Issues (4)" [level=2] [ref=e144]
          - link "About these issues" [ref=e145] [cursor=pointer]:
            - /url: /issues
        - list [ref=e146]:
          - listitem [ref=e147]:
            - generic [aria-hidden] [ref=e148]: "1"
            - generic [ref=e149]:
              - generic [ref=e150]:
                - strong [ref=e152]: Inspection overdue
                - generic [ref=e153]: Significant · sev 3 · INSPECT_OVERDUE
                - generic [ref=e154]: readiness
              - paragraph [ref=e155]: Last inspection date exceeds the required inspection frequency (or > 5 years where frequency unknown), measured at the snapshot date.
          - listitem [ref=e156]:
            - generic [aria-hidden] [ref=e157]: "2"
            - generic [ref=e158]:
              - generic [ref=e159]:
                - strong [ref=e161]: Very large reservoir or tall dam
                - generic [ref=e162]: Significant · sev 3 · HIGH_CONSEQUENCE
                - generic [ref=e163]: consequence
              - paragraph [ref=e164]: High hazard and (storage ≥ 50,000 ac-ft or height ≥ 100 ft). Breach outflow and inundation extent scale with head and volume.
          - listitem [ref=e165]:
            - generic [aria-hidden] [ref=e166]: "3"
            - generic [ref=e167]:
              - generic [ref=e168]:
                - strong [ref=e170]: Over 75 years old
                - generic [ref=e171]: Moderate · sev 2 · AGE_75
                - generic [ref=e172]: condition
              - paragraph [ref=e173]: Age ≥ 75 yrs and no YEAR_MODIFIED within 25 yrs.
          - listitem [ref=e174]:
            - generic [aria-hidden] [ref=e175]: "4"
            - generic [ref=e176]:
              - generic [ref=e177]:
                - strong [ref=e179]: Federal rating not published
                - generic [ref=e180]: Note · sev 1 · COND_FEDERAL_UNPUBLISHED
                - generic [ref=e181]: condition
              - paragraph [ref=e182]: Federally owned/regulated dam without an NID condition assessment. USACE (DSAC) and Reclamation (SOD) ratings are not reported to NID; see agency sources.
      - generic [ref=e183]:
        - generic [ref=e184]:
          - heading "Rehabilitation work plan" [level=2] [ref=e185]
          - generic [ref=e186]: No remediation reported
        - generic [ref=e187]:
          - paragraph [ref=e188]:
            - text: No remediation program is reported. The plan below is composed from the issues on record.
            - generic [ref=e189]: "Basis: NID 2026 status: not reported."
          - generic [ref=e190]:
            - generic [ref=e191]:
              - heading "Year 1" [level=3] [ref=e192]
              - generic [ref=e193]: Stabilize & know
              - list [ref=e194]:
                - listitem [ref=e195]:
                  - strong [ref=e196]: Publish the rating
                  - generic [ref=e197]: Report the agency's current risk classification (DSAC / SOD) and last periodic assessment date to NID.
                  - generic [ref=e198]: from COND_FEDERAL_UNPUBLISHED
                - listitem [ref=e199]:
                  - strong [ref=e200]: Inspect the dam
                  - generic [ref=e201]: Perform the required periodic inspection; document findings; update NID record.
                  - generic [ref=e202]: from INSPECT_OVERDUE
            - generic [ref=e203]:
              - heading "Years 2–5" [level=3] [ref=e204]
              - generic [ref=e205]: Fix the deficiencies
              - list [ref=e206]:
                - listitem [ref=e207]:
                  - strong [ref=e208]: Modern safety review
                  - generic [ref=e209]: Updated hydrology and stability analyses; evaluate filters and outlet works; schedule upgrades.
                  - generic [ref=e210]: from AGE_75
                - listitem [ref=e211]:
                  - strong [ref=e212]: Risk-informed review
                  - generic [ref=e213]: Semi-quantitative risk assessment; publish inundation maps to emergency managers; verify spillway and outlet reliability under PMF.
                  - generic [ref=e214]: from HIGH_CONSEQUENCE
            - generic [ref=e215]:
              - heading "Years 5–10" [level=3] [ref=e216]
              - generic [ref=e217]: Modernize & sustain
              - list [ref=e218]:
                - listitem [ref=e219]:
                  - strong [ref=e220]: Modern monitoring and alerts
                  - generic [ref=e221]: Automated instrumentation with telemetry; integrate with local warning systems (IPAWS/WEA); periodic EAP exercises.
                  - generic [ref=e222]: from HIGH_CONSEQUENCE
          - paragraph [ref=e223]:
            - text: "Planning-level cost band for a full rehabilitation:"
            - strong [ref=e224]: $96M – $576M
            - text: . Order-of-magnitude band from size × condition × hazard (ASDSO-style); not a project estimate.
      - generic [ref=e225]:
        - generic [ref=e226]:
          - heading "Consequence screening" [level=2] [ref=e227]
          - generic [ref=e228]:
            - 'img "Downstream consequence: hazard High. Loss of life likely." [ref=e229]':
              - generic [ref=e254]: High hazard — Loss of life likely
            - generic [ref=e255]:
              - generic [ref=e256]:
                - generic [ref=e257]: Hazard class
                - strong [ref=e258]: High
              - generic [ref=e259]:
                - generic [ref=e260]: Flood-wave screening
                - strong [ref=e261]: 22,934,300 cfs peak
              - generic [ref=e262]:
                - generic [ref=e263]: County population
                - strong [ref=e264]: 2,336,573
                - text: (context, not downstream count)
          - paragraph [ref=e265]: "Froehlich (1995) screening: peak breach discharge ≈ 22,934,300 cfs. Screening heuristic only; not a substitute for a breach/inundation study."
          - heading "The next ten years" [level=3] [ref=e266]
          - list [ref=e267]:
            - listitem [ref=e268]: Failure would likely cause loss of life downstream (High hazard classification).
            - listitem [ref=e269]: Without funded repairs, the identified deficiency will worsen; the next decade's extreme storms are the most likely trigger for a failure.
            - listitem [ref=e270]: This dam is managed under a federal risk program; the public record would be stronger if its classification were published.
            - listitem [ref=e271]: The dam predates modern flood and filter design criteria; expect a safety review to find upgrades needed.
            - listitem [ref=e272]: Losing or lowering this reservoir would affect electricity generation.
            - listitem [ref=e273]: 2,336,573 people live in Clark County (county population — the true downstream population is usually much smaller and depends on inundation mapping).
          - heading "Climate stress — Southwest" [level=3] [ref=e274]
          - paragraph [ref=e275]: Longer droughts punctuated by intense atmospheric-river and monsoon storms; sediment-laden runoff and post-wildfire debris flows reduce spillway capacity. Seismic hazard is significant for many dams.
        - generic [ref=e276]:
          - heading "Timeline" [level=2] [ref=e277]
          - 'img "Timeline: Built 1935; EAP revised 2017; Inspected 2023; Today; Yr 1 · stabilize; Yr 5 · fixed; Yr 10 · modern" [ref=e278]':
            - generic [ref=e280]: Built 1935
            - generic [ref=e283]: EAP revised 2017
            - generic [ref=e286]: Inspected 2023
            - generic [ref=e289]: Today
            - generic [ref=e292]: Yr 1 · stabilize
            - generic [ref=e295]: Yr 5 · fixed
            - generic [ref=e298]: Yr 10 · modern
            - generic [ref=e301]: "1935"
            - generic [ref=e302]: "2026"
            - generic [ref=e303]: "2036"
          - heading "Compared with Nevada and the nation" [level=3] [ref=e304]
          - generic [ref=e305]:
            - generic [ref=e306]:
              - generic [ref=e307]: Dam Health Index (0 best – 100 worst)
              - generic [ref=e308]:
                - generic [ref=e309]: This dam
                - generic [ref=e312]: "32"
              - generic [ref=e313]:
                - generic [ref=e314]: Nevada (typical)
                - generic [ref=e317]: "28"
              - generic [ref=e318]:
                - generic [ref=e319]: United States (typical)
                - generic [ref=e322]: "28"
            - generic [ref=e323]:
              - generic [ref=e324]: Age (years)
              - generic [ref=e325]:
                - generic [ref=e326]: This dam
                - generic [ref=e329]: "91"
              - generic [ref=e330]:
                - generic [ref=e331]: Nevada (typical)
                - generic [ref=e334]: "37"
              - generic [ref=e335]:
                - generic [ref=e336]: United States (typical)
                - generic [ref=e339]: "61"
      - generic [ref=e340]:
        - heading "Failure-mode checklist" [level=2] [ref=e341]
        - table [ref=e342]:
          - rowgroup [ref=e343]:
            - row [ref=e344]:
              - columnheader "Potential failure mode" [ref=e345]
              - columnheader "Screening relevance" [ref=e346]
              - columnheader "Why" [ref=e347]
          - rowgroup [ref=e348]:
            - row [ref=e349]:
              - cell "Overtopping (inadequate spillway capacity)" [ref=e350]
              - cell "▲ Elevated" [ref=e351]
              - cell "Hydrology predates current inflow design flood criteria." [ref=e353]
            - row [ref=e354]:
              - cell "Internal erosion / piping" [ref=e355]
              - cell "— N/A" [ref=e356]
              - cell "Not an embankment dam." [ref=e358]
            - row [ref=e359]:
              - cell "Slope instability" [ref=e360]
              - cell "— N/A" [ref=e361]
              - cell "Not an embankment dam." [ref=e363]
            - row [ref=e364]:
              - cell "Foundation seepage / karst" [ref=e365]
              - cell "▲ Elevated" [ref=e366]
              - 'cell "Foundation: Rock." [ref=e368]'
            - row [ref=e369]:
              - cell "Structural (concrete) distress" [ref=e370]
              - cell "▲ Elevated" [ref=e371]
              - cell "Alkali-silica reaction, freeze-thaw, uplift and sliding stability." [ref=e373]
            - row [ref=e374]:
              - cell "Gates / outlet works malfunction" [ref=e375]
              - cell "▲ Elevated" [ref=e376]
              - 'cell "Gated spillway: mechanical and power reliability matter." [ref=e378]'
            - row [ref=e379]:
              - cell "Seismic" [ref=e380]
              - cell "▲ Elevated" [ref=e381]
              - cell "Based on state-level seismic hazard; site-specific analysis required." [ref=e383]
      - generic [ref=e384]:
        - generic [ref=e385]:
          - heading "NID attributes" [level=2] [ref=e386]
          - generic [ref=e387]:
            - generic [ref=e388]:
              - term [ref=e389]: Type
              - definition [ref=e390]: Concrete
            - generic [ref=e391]:
              - term [ref=e392]: Purposes
              - definition [ref=e393]: Hydroelectric
            - generic [ref=e394]:
              - term [ref=e395]: Completed
              - definition [ref=e396]: "1935"
            - generic [ref=e397]:
              - term [ref=e398]: Modified
              - definition [ref=e399]: —
            - generic [ref=e400]:
              - term [ref=e401]: Height
              - definition [ref=e402]: 730 ft
            - generic [ref=e403]:
              - term [ref=e404]: Length
              - definition [ref=e405]: 1,244 ft
            - generic [ref=e406]:
              - term [ref=e407]: Max storage
              - definition [ref=e408]: 30,237,000 acre-feet
            - generic [ref=e409]:
              - term [ref=e410]: Normal storage
              - definition [ref=e411]: 28,255,000 acre-feet
            - generic [ref=e412]:
              - term [ref=e413]: Surface area
              - definition [ref=e414]: 156,800 acres
            - generic [ref=e415]:
              - term [ref=e416]: Drainage area
              - definition [ref=e417]: 167,800 sq mi
            - generic [ref=e418]:
              - term [ref=e419]: Spillway
              - definition [ref=e420]: Controlled, 400 ft wide
            - generic [ref=e421]:
              - term [ref=e422]: Max discharge
              - definition [ref=e423]: 200,000 cfs
            - generic [ref=e424]:
              - term [ref=e425]: Core
              - definition [ref=e426]: —
            - generic [ref=e427]:
              - term [ref=e428]: Foundation
              - definition [ref=e429]: Rock
            - generic [ref=e430]:
              - term [ref=e431]: Hazard potential
              - definition [ref=e432]: High
            - generic [ref=e433]:
              - term [ref=e434]: Condition
              - definition [ref=e435]: Not Rated (as of Mar 15, 2026)
            - generic [ref=e436]:
              - term [ref=e437]: Emergency Action Plan
              - definition [ref=e438]: Yes, revised Aug 9, 2017
            - generic [ref=e439]:
              - term [ref=e440]: Last inspection
              - definition [ref=e441]: Feb 9, 2023 (every 1 yr)
            - generic [ref=e442]:
              - term [ref=e443]: Nearest city
              - definition [ref=e444]: Laughlin, 70 mi
            - generic [ref=e445]:
              - term [ref=e446]: County population (2023)
              - definition [ref=e447]: 2,336,573
            - generic [ref=e448]:
              - term [ref=e449]: Coordinates
              - definition [ref=e450]: 36.0163, -114.7374
            - generic [ref=e451]:
              - term [ref=e452]: Record provenance
              - definition [ref=e453]: 2019 inventory + 2026 high-hazard extract (as of 2026-03-15)
          - paragraph [ref=e454]:
            - text: "Cost to rehabilitate (planning-level band):"
            - strong [ref=e455]: $96M – $576M
            - text: "· basis: height 730 ft. Age: 91 years."
        - generic [ref=e456]:
          - heading "Who is responsible" [level=2] [ref=e457]
          - generic [ref=e458]:
            - term [ref=e459]: Owner
            - definition [ref=e460]:
              - text: Bureau of Reclamation
              - generic [ref=e461]: (Federal)
            - term [ref=e462]: State regulator
            - definition [ref=e463]: Not recorded
            - term [ref=e464]: Federal roles
            - definition [ref=e465]: "Funding: DOI BR; Regulatory: DOI BR; Inspection: DOI BR; Operation: DOI BR; Owner: DOI BR; Other: DOI BR"
            - term [ref=e466]: Congressional district (2019)
            - definition [ref=e467]: NV03 · Susie Lee (D) at the time
            - term [ref=e468]: Official record
            - definition [ref=e469]:
              - 'link "National Inventory of Dams: NV10122" [ref=e470] [cursor=pointer]':
                - /url: https://nid.sec.usace.army.mil/#/dams/system/NV10122/summary
          - generic [ref=e471]:
            - heading "Nearby dams" [level=3] [ref=e472]
            - list [ref=e473]:
              - listitem [ref=e474]:
                - img "Grade B, Watch" [ref=e475]: B
                - link "Hemenway Valley Flood Control Dam" [ref=e476] [cursor=pointer]:
                  - /url: /dam/NV10161
                - generic [ref=e477]: 5 mi
              - listitem [ref=e478]:
                - img "Grade B, Watch" [ref=e479]: B
                - link "Aaron Way Detention Basin Dam" [ref=e480] [cursor=pointer]:
                  - /url: /dam/NV10583
                - generic [ref=e481]: 6 mi
              - listitem [ref=e482]:
                - img "Grade C, Concern" [ref=e483]: C
                - link "Trail Head Detention Basin Dam" [ref=e484] [cursor=pointer]:
                  - /url: /dam/NV10930
                - generic [ref=e485]: 6 mi
              - listitem [ref=e486]:
                - img "Grade B, Watch" [ref=e487]: B
                - link "Bootleg Detention Basin Dam" [ref=e488] [cursor=pointer]:
                  - /url: /dam/NV10647
                - generic [ref=e489]: 7 mi
              - listitem [ref=e490]:
                - img "Grade B, Watch" [ref=e491]: B
                - link "North Railroad Detention Basin Dam" [ref=e492] [cursor=pointer]:
                  - /url: /dam/NV10619
                - generic [ref=e493]: 8 mi
              - listitem [ref=e494]:
                - img "Grade B, Watch" [ref=e495]: B
                - link "Boulder Wastewater Storage Dam" [ref=e496] [cursor=pointer]:
                  - /url: /dam/NV00220
                - generic [ref=e497]: 9 mi
              - listitem [ref=e498]:
                - img "Grade B, Watch" [ref=e499]: B
                - link "East C-1 Detention Basin Dam" [ref=e500] [cursor=pointer]:
                  - /url: /dam/NV10528
                - generic [ref=e501]: 9 mi
              - listitem [ref=e502]:
                - img "Grade B, Watch" [ref=e503]: B
                - link "River Mountains Impoundment Dam" [ref=e504] [cursor=pointer]:
                  - /url: /dam/NV10516
                - generic [ref=e505]: 11 mi
  - contentinfo [ref=e506]:
    - generic [ref=e507]:
      - generic [ref=e508]:
        - strong [ref=e509]: DamHealth
        - paragraph [ref=e510]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e512]:
        - link "Methodology & limitations" [ref=e513] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e514] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e515] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e517]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
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