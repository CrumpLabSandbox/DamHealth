# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /issues
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 22,
  "help": "Elements must meet minimum color contrast ratio thresholds"
 },
 {
  "id": "target-size",
  "nodes": 19,
  "help": "All touch targets must be 24px large, or leave sufficient space"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 1607

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
+                 "html": "<div class=\"card\" id=\"COND_UNSAT\">",
+                 "target": Array [
+                   "#COND_UNSAT",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore?grade=F\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/explore?grade=F\"]",
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
+                 "html": "<div class=\"card\" id=\"NO_EAP\">",
+                 "target": Array [
+                   "#NO_EAP",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore?hz=H\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/explore?hz=H\"]",
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
+                 "html": "<div class=\"card\" id=\"COND_POOR\">",
+                 "target": Array [
+                   "#COND_POOR",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore?grade=D\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/explore?grade=D\"]",
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
+                 "html": "<div class=\"card\" id=\"INSPECT_OVERDUE\">",
+                 "target": Array [
+                   "#INSPECT_OVERDUE",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#INSPECT_OVERDUE > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"COND_UNKNOWN\">",
+                 "target": Array [
+                   "#COND_UNKNOWN",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#COND_UNKNOWN > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"AGE_100\">",
+                 "target": Array [
+                   "#AGE_100",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#AGE_100 > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"INSPECT_NEVER\">",
+                 "target": Array [
+                   "#INSPECT_NEVER",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#INSPECT_NEVER > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"NO_EAP_SIG\">",
+                 "target": Array [
+                   "#NO_EAP_SIG",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#NO_EAP_SIG > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"UNREGULATED\">",
+                 "target": Array [
+                   "#UNREGULATED",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#UNREGULATED > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"HIGH_CONSEQUENCE\">",
+                 "target": Array [
+                   "#HIGH_CONSEQUENCE",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#HIGH_CONSEQUENCE > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"ENFORCEMENT\">",
+                 "target": Array [
+                   "#ENFORCEMENT",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#ENFORCEMENT > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"AGE_75\">",
+                 "target": Array [
+                   "#AGE_75",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#AGE_75 > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"HAZARD_UNDET\">",
+                 "target": Array [
+                   "#HAZARD_UNDET",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#HAZARD_UNDET > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"COND_FAIR\">",
+                 "target": Array [
+                   "#COND_FAIR",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#COND_FAIR > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"PRIVATE_HIGH\">",
+                 "target": Array [
+                   "#PRIVATE_HIGH",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#PRIVATE_HIGH > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"STALE_DATA\">",
+                 "target": Array [
+                   "#STALE_DATA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#STALE_DATA > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"AGE_50\">",
+                 "target": Array [
+                   "#AGE_50",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#AGE_50 > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"SPILLWAY_UNKNOWN\">",
+                 "target": Array [
+                   "#SPILLWAY_UNKNOWN",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#SPILLWAY_UNKNOWN > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+                 "html": "<div class=\"card\" id=\"COND_FEDERAL_UNPUBLISHED\">",
+                 "target": Array [
+                   "#COND_FEDERAL_UNPUBLISHED",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#COND_FEDERAL_UNPUBLISHED > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
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
+   Object {
+     "description": "Ensure touch targets have sufficient size and space",
+     "help": "All touch targets must be 24px large, or leave sufficient space",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/target-size?application=playwright",
+     "id": "target-size",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#COND_UNSAT > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore?grade=F\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/explore?grade=F\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#NO_EAP > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore?hz=H\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/explore?hz=H\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#COND_POOR > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore?grade=D\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/explore?grade=D\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#INSPECT_OVERDUE > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#INSPECT_OVERDUE > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#COND_UNKNOWN > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#COND_UNKNOWN > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#AGE_100 > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#AGE_100 > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#INSPECT_NEVER > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#INSPECT_NEVER > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#NO_EAP_SIG > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#NO_EAP_SIG > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#UNREGULATED > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#UNREGULATED > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#HIGH_CONSEQUENCE > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#HIGH_CONSEQUENCE > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#ENFORCEMENT > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#ENFORCEMENT > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#AGE_75 > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#AGE_75 > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#HAZARD_UNDET > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#HAZARD_UNDET > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#COND_FAIR > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#COND_FAIR > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#PRIVATE_HIGH > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#PRIVATE_HIGH > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#STALE_DATA > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#STALE_DATA > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#AGE_50 > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#AGE_50 > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#SPILLWAY_UNKNOWN > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#SPILLWAY_UNKNOWN > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "height": 17,
+               "minSize": 24,
+               "width": 160.8,
+             },
+             "id": "target-size",
+             "impact": "serious",
+             "message": "Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "closestOffset": 21,
+               "minOffset": 24,
+             },
+             "id": "target-offset",
+             "impact": "serious",
+             "message": "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<summary>How it gets fixed</summary>",
+                 "target": Array [
+                   "#COND_FEDERAL_UNPUBLISHED > details > summary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Target has insufficient size (160.8px by 17px, should be at least 24px by 24px)
+   Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 21px instead of at least 24px.",
+         "html": "<a href=\"/explore\" data-discover=\"true\">See dams on the map →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#COND_FEDERAL_UNPUBLISHED > .small:nth-child(5) > a[href$=\"explore\"][data-discover=\"true\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.sensory-and-visual-cues",
+       "wcag22aa",
+       "wcag258",
+       "EN-301-549v4",
+       "EN-9.2.5.8",
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
      - heading "The issues, explained" [level=1] [ref=e30]
      - paragraph [ref=e31]: "Every dam's grade is built from a short list of yes/no flags read from public inventory data. Here is each one: what it means, why it matters, how it is fixed, and how many dams carry it today."
      - generic [ref=e32]:
        - generic [ref=e33]:
          - generic [ref=e34]:
            - heading "Rated Unsatisfactory" [level=2] [ref=e36]
            - generic [ref=e37]: Critical
          - paragraph [ref=e38]:
            - text: condition ·
            - strong [ref=e39]: "456"
            - text: dams
          - paragraph [ref=e40]: Inspectors found a safety deficiency that needs immediate or emergency action.
          - group [ref=e41]:
            - generic "How it gets fixed" [ref=e42]
          - paragraph [ref=e43]:
            - link "See dams on the map →" [ref=e44] [cursor=pointer]:
              - /url: /explore?grade=F
        - generic [ref=e45]:
          - generic [ref=e46]:
            - heading "No Emergency Action Plan" [level=2] [ref=e48]
            - generic [ref=e49]: Serious
          - paragraph [ref=e50]:
            - text: readiness ·
            - strong [ref=e51]: 2,823
            - text: dams
          - paragraph [ref=e52]: There is no written plan for warning and evacuating people downstream if the dam fails.
          - group [ref=e53]:
            - generic "How it gets fixed" [ref=e54]
          - paragraph [ref=e55]:
            - link "See dams on the map →" [ref=e56] [cursor=pointer]:
              - /url: /explore?hz=H
        - generic [ref=e57]:
          - generic [ref=e58]:
            - heading "Rated Poor" [level=2] [ref=e60]
            - generic [ref=e61]: Serious
          - paragraph [ref=e62]:
            - text: condition ·
            - strong [ref=e63]: 2,172
            - text: dams
          - paragraph [ref=e64]: A safety deficiency has been found for conditions that can realistically happen. Repairs are needed.
          - group [ref=e65]:
            - generic "How it gets fixed" [ref=e66]
          - paragraph [ref=e67]:
            - link "See dams on the map →" [ref=e68] [cursor=pointer]:
              - /url: /explore?grade=D
        - generic [ref=e69]:
          - generic [ref=e70]:
            - heading "Inspection overdue" [level=2] [ref=e72]
            - generic [ref=e73]: Significant
          - paragraph [ref=e74]:
            - text: readiness ·
            - strong [ref=e75]: 20,078
            - text: dams
          - paragraph [ref=e76]: The last recorded inspection is older than the required inspection interval.
          - group [ref=e77]:
            - generic "How it gets fixed" [ref=e78]
          - paragraph [ref=e79]:
            - link "See dams on the map →" [ref=e80] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e81]:
          - generic [ref=e82]:
            - heading "Condition not rated" [level=2] [ref=e84]
            - generic [ref=e85]: Significant
          - paragraph [ref=e86]:
            - text: condition ·
            - strong [ref=e87]: 13,247
            - text: dams
          - paragraph [ref=e88]: This dam could cause loss of life or serious damage if it failed, yet no condition rating is published.
          - group [ref=e89]:
            - generic "How it gets fixed" [ref=e90]
          - paragraph [ref=e91]:
            - link "See dams on the map →" [ref=e92] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e93]:
          - generic [ref=e94]:
            - heading "Over 100 years old" [level=2] [ref=e96]
            - generic [ref=e97]: Significant
          - paragraph [ref=e98]:
            - text: condition ·
            - strong [ref=e99]: 7,140
            - text: dams
          - paragraph [ref=e100]: Built more than a century ago, before modern design standards, with no recorded major modification in the last 25 years.
          - group [ref=e101]:
            - generic "How it gets fixed" [ref=e102]
          - paragraph [ref=e103]:
            - link "See dams on the map →" [ref=e104] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e105]:
          - generic [ref=e106]:
            - heading "No inspection on record" [level=2] [ref=e108]
            - generic [ref=e109]: Significant
          - paragraph [ref=e110]:
            - text: readiness ·
            - strong [ref=e111]: 3,365
            - text: dams
          - paragraph [ref=e112]: No inspection date is recorded for a dam whose failure could hurt people.
          - group [ref=e113]:
            - generic "How it gets fixed" [ref=e114]
          - paragraph [ref=e115]:
            - link "See dams on the map →" [ref=e116] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e117]:
          - generic [ref=e118]:
            - heading "No Emergency Action Plan" [level=2] [ref=e120]
            - generic [ref=e121]: Significant
          - paragraph [ref=e122]:
            - text: readiness ·
            - strong [ref=e123]: 2,824
            - text: dams
          - paragraph [ref=e124]: There is no written plan for warning people downstream if the dam fails.
          - group [ref=e125]:
            - generic "How it gets fixed" [ref=e126]
          - paragraph [ref=e127]:
            - link "See dams on the map →" [ref=e128] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e129]:
          - generic [ref=e130]:
            - heading "No regulating agency recorded" [level=2] [ref=e132]
            - generic [ref=e133]: Significant
          - paragraph [ref=e134]:
            - text: readiness ·
            - strong [ref=e135]: 2,823
            - text: dams
          - paragraph [ref=e136]: No state or federal agency is recorded as regulating this dam.
          - group [ref=e137]:
            - generic "How it gets fixed" [ref=e138]
          - paragraph [ref=e139]:
            - link "See dams on the map →" [ref=e140] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e141]:
          - generic [ref=e142]:
            - heading "Very large reservoir or tall dam" [level=2] [ref=e144]
            - generic [ref=e145]: Significant
          - paragraph [ref=e146]:
            - text: consequence ·
            - strong [ref=e147]: 1,832
            - text: dams
          - paragraph [ref=e148]: This is a large dam; a failure would release a very large volume of water.
          - group [ref=e149]:
            - generic "How it gets fixed" [ref=e150]
          - paragraph [ref=e151]:
            - link "See dams on the map →" [ref=e152] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e153]:
          - generic [ref=e154]:
            - heading "Under enforcement action" [level=2] [ref=e156]
            - generic [ref=e157]: Significant
          - paragraph [ref=e158]:
            - text: readiness ·
            - strong [ref=e159]: "400"
            - text: dams
          - paragraph [ref=e160]: Regulators have an enforcement action pending or ongoing against the owner.
          - group [ref=e161]:
            - generic "How it gets fixed" [ref=e162]
          - paragraph [ref=e163]:
            - link "See dams on the map →" [ref=e164] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e165]:
          - generic [ref=e166]:
            - heading "Over 75 years old" [level=2] [ref=e168]
            - generic [ref=e169]: Moderate
          - paragraph [ref=e170]:
            - text: condition ·
            - strong [ref=e171]: 10,793
            - text: dams
          - paragraph [ref=e172]: Older than 75 years with no recorded major modification in the last 25 years.
          - group [ref=e173]:
            - generic "How it gets fixed" [ref=e174]
          - paragraph [ref=e175]:
            - link "See dams on the map →" [ref=e176] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e177]:
          - generic [ref=e178]:
            - heading "Hazard class undetermined" [level=2] [ref=e180]
            - generic [ref=e181]: Moderate
          - paragraph [ref=e182]:
            - text: readiness ·
            - strong [ref=e183]: 10,430
            - text: dams
          - paragraph [ref=e184]: Nobody has determined what would happen downstream if this dam failed.
          - group [ref=e185]:
            - generic "How it gets fixed" [ref=e186]
          - paragraph [ref=e187]:
            - link "See dams on the map →" [ref=e188] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e189]:
          - generic [ref=e190]:
            - heading "Rated Fair" [level=2] [ref=e192]
            - generic [ref=e193]: Moderate
          - paragraph [ref=e194]:
            - text: condition ·
            - strong [ref=e195]: 4,963
            - text: dams
          - paragraph [ref=e196]: No problems under normal conditions, but a rare flood or earthquake could cause one.
          - group [ref=e197]:
            - generic "How it gets fixed" [ref=e198]
          - paragraph [ref=e199]:
            - link "See dams on the map →" [ref=e200] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e201]:
          - generic [ref=e202]:
            - heading "Privately owned, needs work" [level=2] [ref=e204]
            - generic [ref=e205]: Moderate
          - paragraph [ref=e206]:
            - text: readiness ·
            - strong [ref=e207]: 3,578
            - text: dams
          - paragraph [ref=e208]: A private owner must pay for repairs on a dam that could endanger others, and private owners often lack the funds.
          - group [ref=e209]:
            - generic "How it gets fixed" [ref=e210]
          - paragraph [ref=e211]:
            - link "See dams on the map →" [ref=e212] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e213]:
          - generic [ref=e214]:
            - heading "Only 2019 data available" [level=2] [ref=e216]
            - generic [ref=e217]: Note
          - paragraph [ref=e218]:
            - text: readiness ·
            - strong [ref=e219]: 75,672
            - text: dams
          - paragraph [ref=e220]: Our most recent record for this dam is from 2019.
          - group [ref=e221]:
            - generic "How it gets fixed" [ref=e222]
          - paragraph [ref=e223]:
            - link "See dams on the map →" [ref=e224] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e225]:
          - generic [ref=e226]:
            - heading "Past typical design life" [level=2] [ref=e228]
            - generic [ref=e229]: Note
          - paragraph [ref=e230]:
            - text: condition ·
            - strong [ref=e231]: 39,398
            - text: dams
          - paragraph [ref=e232]: Older than 50 years — the typical design life — with no recorded major modification.
          - group [ref=e233]:
            - generic "How it gets fixed" [ref=e234]
          - paragraph [ref=e235]:
            - link "See dams on the map →" [ref=e236] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e237]:
          - generic [ref=e238]:
            - heading "Spillway type unknown" [level=2] [ref=e240]
            - generic [ref=e241]: Note
          - paragraph [ref=e242]:
            - text: condition ·
            - strong [ref=e243]: 5,596
            - text: dams
          - paragraph [ref=e244]: The inventory does not record how this dam passes floodwater.
          - group [ref=e245]:
            - generic "How it gets fixed" [ref=e246]
          - paragraph [ref=e247]:
            - link "See dams on the map →" [ref=e248] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e249]:
          - generic [ref=e250]:
            - heading "Federal rating not published" [level=2] [ref=e252]
            - generic [ref=e253]: Note
          - paragraph [ref=e254]:
            - text: condition ·
            - strong [ref=e255]: 1,591
            - text: dams
          - paragraph [ref=e256]: Federal dams are assessed under their own agency's risk program, but the rating is not published in the National Inventory.
          - group [ref=e257]:
            - generic "How it gets fixed" [ref=e258]
          - paragraph [ref=e259]:
            - link "See dams on the map →" [ref=e260] [cursor=pointer]:
              - /url: /explore
  - contentinfo [ref=e261]:
    - generic [ref=e262]:
      - generic [ref=e263]:
        - strong [ref=e264]: DamHealth
        - paragraph [ref=e265]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e267]:
        - link "Methodology & limitations" [ref=e268] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e269] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e270] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e272]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
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