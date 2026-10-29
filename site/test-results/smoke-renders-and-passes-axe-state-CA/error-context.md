# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /state/CA
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 105,
  "help": "Elements must meet minimum color contrast ratio thresholds"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 3698

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
+         "html": "<a href=\"/states\" data-discover=\"true\">All states</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "p:nth-child(1) > a[href$=\"states\"][data-discover=\"true\"]",
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
+                   ".card:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.3 (foreground color: #2a78d6, background color: #fcfcfb, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/issues\" data-discover=\"true\">What these issues mean →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "p > a[href$=\"issues\"][data-discover=\"true\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01143\" data-discover=\"true\">Treatment Ponds</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01143\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00299\" data-discover=\"true\">North Fork</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00299\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00377\" data-discover=\"true\">Silver Lake</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00377\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00109\" data-discover=\"true\">Savage</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00109\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00110\" data-discover=\"true\">Morena</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00110\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00140\" data-discover=\"true\">Lake Curry</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00140\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00111\" data-discover=\"true\">El Capitan</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00111\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00555\" data-discover=\"true\">Rancho Rubini</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00555\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00598\" data-discover=\"true\">Giles</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00598\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00969\" data-discover=\"true\">Lakewood</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00969\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00294\" data-discover=\"true\">Anderson</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00294\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00357\" data-discover=\"true\">Lake Fordyce</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00357\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00390\" data-discover=\"true\">Relief</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00390\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01027\" data-discover=\"true\">Misselbeck</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01027\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA10423\" data-discover=\"true\">Peju Reservoir No. 2</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA10423\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00044\" data-discover=\"true\">Castaic</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00044\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00108\" data-discover=\"true\">Lake Hodges</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00108\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00383\" data-discover=\"true\">Tabeaud</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00383\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00453\" data-discover=\"true\">Gem Lake</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00453\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00089\" data-discover=\"true\">Grant Lake</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00089\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00289\" data-discover=\"true\">Almaden</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00289\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00290\" data-discover=\"true\">Guadalupe</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00290\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00312\" data-discover=\"true\">Matilija</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00312\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00346\" data-discover=\"true\">Round Valley</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00346\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00766\" data-discover=\"true\">Lee Lake</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00766\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00450\" data-discover=\"true\">Rush Meadows</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00450\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00084\" data-discover=\"true\">Tinemaha</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00084\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00288\" data-discover=\"true\">Calero</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00288\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00441\" data-discover=\"true\">Vermilion Valley</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00441\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00658\" data-discover=\"true\">Bear Gulch</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00658\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00144\" data-discover=\"true\">Swanzy Lake</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00144\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00128\" data-discover=\"true\">Pilarcitos</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00128\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00296\" data-discover=\"true\">Magalia</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00296\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00454\" data-discover=\"true\">Agnew Lake</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00454\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00620\" data-discover=\"true\">Salt Springs Valley</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00620\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00287\" data-discover=\"true\">Coyote</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00287\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00298\" data-discover=\"true\">Santiago Creek</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00298\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00445\" data-discover=\"true\">Thompson</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00445\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00805\" data-discover=\"true\">Santa Felicia</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00805\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00148\" data-discover=\"true\">St. Helena Lower</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00148\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00504\" data-discover=\"true\">Scotia Log Pond</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00504\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00812\" data-discover=\"true\">Nacimiento</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00812\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00362\" data-discover=\"true\">Lake Van Norden</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00362\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00740\" data-discover=\"true\">Century</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00740\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01060\" data-discover=\"true\">Lake Helen</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01060\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01599\" data-discover=\"true\">Kelley Hot Spring Fish</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01599\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01248\" data-discover=\"true\">Dove Canyon</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01248\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00754\" data-discover=\"true\">Glen Martin</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00754\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01237\" data-discover=\"true\">Sunnymead Ranch</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01237\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00337\" data-discover=\"true\">Crane Valley</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00337\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00388\" data-discover=\"true\">Strawberry</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00388\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00398\" data-discover=\"true\">Scott</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00398\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00433\" data-discover=\"true\">Florence Lake</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00433\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00434\" data-discover=\"true\">Big Creek Dam No. 1</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00434\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA10126\" data-discover=\"true\">Engineer</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA10126\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00327\" data-discover=\"true\">Lake Almanor</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00327\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01052\" data-discover=\"true\">Thurman</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01052\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01136\" data-discover=\"true\">El Centro Water Purification Plant</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01136\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00375\" data-discover=\"true\">El Dorado Forebay</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00375\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00399\" data-discover=\"true\">Cape Horn</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00399\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00547\" data-discover=\"true\">Quail Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00547\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00106\" data-discover=\"true\">Barrett</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00106\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00775\" data-discover=\"true\">Sweetwater Main</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00775\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01263\" data-discover=\"true\">Bradford</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01263\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00331\" data-discover=\"true\">Lower Bucks Lake</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00331\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00403\" data-discover=\"true\">Pit No. 5 Open Conduit</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00403\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00082\" data-discover=\"true\">Haiwee</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00082\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00268\" data-discover=\"true\">Lost Creek</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00268\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01474\" data-discover=\"true\">Lynch Canyon</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01474\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01606\" data-discover=\"true\">Browns Lane</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01606\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01133\" data-discover=\"true\">Yucaipa No 3</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01133\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01302\" data-discover=\"true\">Dunn Ranch</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01302\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01391\" data-discover=\"true\">Reclaimed Water Res</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01391\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01467\" data-discover=\"true\">San Vicente Storage Pond 3</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01467\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA10403\" data-discover=\"true\">Auberry Lumber Mill</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA10403\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00416\" data-discover=\"true\">McCloud</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00416\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00405\" data-discover=\"true\">Pit No. 1 Forebay</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00405\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00358\" data-discover=\"true\">Lake Spaulding No. 1</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00358\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00142\" data-discover=\"true\">Lake Frey</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00142\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01607\" data-discover=\"true\">Araujo Reservoir No. 1</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01607\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01608\" data-discover=\"true\">Araujo Reservoir No. 2</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01608\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00413\" data-discover=\"true\">Belden Forebay</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00413\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00005\" data-discover=\"true\">Henderson</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00005\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA10131\" data-discover=\"true\">Lake O'Neill Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA10131\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00088\" data-discover=\"true\">Bouquet Canyon</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00088\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA10388\" data-discover=\"true\">Lake Mary</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA10388\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00008\" data-discover=\"true\">Veterans Home</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00008\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00341\" data-discover=\"true\">Merced Falls</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00341\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00163\" data-discover=\"true\">Lafayette</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00163\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA10417\" data-discover=\"true\">McVicker Canyon Debris Basin</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA10417\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00035\" data-discover=\"true\">Parish Camp Saddle</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00035\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00077\" data-discover=\"true\">Drinkwater</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00077\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00227\" data-discover=\"true\">Camp Far West</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00227\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00240\" data-discover=\"true\">Exchequer Main</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00240\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00857\" data-discover=\"true\">Hell Hole</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00857\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA01107\" data-discover=\"true\">Indian Valley</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA01107\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00448\" data-discover=\"true\">Sabrina</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00448\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00249\" data-discover=\"true\">Lake Combie</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00249\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA10144\" data-discover=\"true\">Dorris Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA10144\"]",
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
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+   Element has insufficient color contrast of 4.1 (foreground color: #2a78d6, background color: #f6f7f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/dam/CA00263\" data-discover=\"true\">Beardsley</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/CA00263\"]",
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
      - paragraph [ref=e30]:
        - link "All states" [ref=e31] [cursor=pointer]:
          - /url: /states
      - heading "California" [level=1] [ref=e32]
      - paragraph [ref=e33]: 1,488 dams in the National Inventory, 856 of them high-hazard. 45 high-hazard dams are rated Poor or Unsatisfactory and 80 have no Emergency Action Plan.
      - generic [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]: "856"
          - generic [ref=e37]: High-hazard dams
        - generic [ref=e38]:
          - generic [ref=e39]: "45"
          - generic [ref=e40]: Poor or Unsatisfactory (high-hazard)
        - generic [ref=e41]:
          - generic [ref=e42]: "121"
          - generic [ref=e43]: High-hazard, not rated
        - generic [ref=e44]:
          - generic [ref=e45]: $5.4B–$31.6B
          - generic [ref=e46]: Planning-level rehabilitation cost
      - generic [ref=e47]:
        - generic [ref=e48]:
          - heading "Grades" [level=3] [ref=e49]
          - generic [ref=e50]:
            - 'img "Grade distribution: A 514, B 548, C 340, D 52, F 34" [ref=e51]':
              - 'generic "A: 514 dams" [ref=e52]':
                - generic [aria-hidden] [ref=e53]: A
                - generic [ref=e56]:
                  - strong [ref=e57]: "514"
                  - generic [ref=e58]: · 35%
              - 'generic "B: 548 dams" [ref=e59]':
                - generic [aria-hidden] [ref=e60]: B
                - generic [ref=e63]:
                  - strong [ref=e64]: "548"
                  - generic [ref=e65]: · 37%
              - 'generic "C: 340 dams" [ref=e66]':
                - generic [aria-hidden] [ref=e67]: C
                - generic [ref=e70]:
                  - strong [ref=e71]: "340"
                  - generic [ref=e72]: · 23%
              - 'generic "D: 52 dams" [ref=e73]':
                - generic [aria-hidden] [ref=e74]: D
                - generic [ref=e77]:
                  - strong [ref=e78]: "52"
                  - generic [ref=e79]: · 3%
              - 'generic "F: 34 dams" [ref=e80]':
                - generic [aria-hidden] [ref=e81]: F
                - generic [ref=e84]:
                  - strong [ref=e85]: "34"
                  - generic [ref=e86]: · 2%
            - button "Show as table" [ref=e87] [cursor=pointer]
        - generic [ref=e88]:
          - heading "Most common issues" [level=3] [ref=e89]
          - list [ref=e90]:
            - listitem [ref=e91]:
              - strong [ref=e92]: "559"
              - text: — Past typical design life
            - listitem [ref=e93]:
              - strong [ref=e94]: "387"
              - text: — Inspection overdue
            - listitem [ref=e95]:
              - strong [ref=e96]: "336"
              - text: — Over 100 years old
            - listitem [ref=e97]:
              - strong [ref=e98]: "275"
              - text: — Over 75 years old
            - listitem [ref=e99]:
              - strong [ref=e100]: "258"
              - text: — Very large reservoir or tall dam
            - listitem [ref=e101]:
              - strong [ref=e102]: "160"
              - text: — Condition not rated
          - paragraph [ref=e103]:
            - link "What these issues mean →" [ref=e104] [cursor=pointer]:
              - /url: /issues
      - heading "Dams in California" [level=2] [ref=e105]
      - generic [ref=e106]:
        - generic [ref=e107]:
          - checkbox "High-hazard only" [checked] [ref=e108]
          - text: High-hazard only
        - generic [ref=e109]:
          - text: Grade
          - combobox "Grade" [ref=e110]:
            - option "All" [selected]
            - option "F"
            - option "D"
            - option "C"
            - option "B"
            - option "A"
        - generic [ref=e111]:
          - text: Sort
          - combobox "Sort" [ref=e112]:
            - option "Worst first" [selected]
            - option "Largest first"
            - option "Oldest first"
            - option "Name"
        - generic [ref=e113]: 856 dams
      - table [ref=e115]:
        - rowgroup [ref=e116]:
          - row [ref=e117]:
            - columnheader "Grade" [ref=e118]
            - columnheader "Dam" [ref=e119]
            - columnheader "County" [ref=e120]
            - columnheader "Hazard" [ref=e121]
            - columnheader "Condition" [ref=e122]
            - columnheader "Built" [ref=e123]
            - columnheader "Storage (ac-ft)" [ref=e124]
            - columnheader "EAP" [ref=e125]
            - columnheader "Plan" [ref=e126]
        - rowgroup [ref=e127]:
          - row [ref=e128]:
            - cell [ref=e129]:
              - img "Grade F, Critical" [ref=e130]: F
            - cell [ref=e131]:
              - link "Treatment Ponds" [ref=e132] [cursor=pointer]:
                - /url: /dam/CA01143
            - cell "Shasta" [ref=e133]
            - cell "High" [ref=e134]
            - cell "Poor" [ref=e135]
            - cell "1975" [ref=e136]
            - cell "450" [ref=e137]
            - cell "No" [ref=e138]
            - cell "Repairs under way" [ref=e139]
          - row [ref=e140]:
            - cell [ref=e141]:
              - img "Grade F, Critical" [ref=e142]: F
            - cell [ref=e143]:
              - link "North Fork" [ref=e144] [cursor=pointer]:
                - /url: /dam/CA00299
            - cell "Santa Clara" [ref=e145]
            - cell "High" [ref=e146]
            - cell "Poor" [ref=e147]
            - cell "1939" [ref=e148]
            - cell "6,150" [ref=e149]
            - cell "No" [ref=e150]
            - cell "Study or design underway" [ref=e151]
          - row [ref=e152]:
            - cell [ref=e153]:
              - img "Grade F, Critical" [ref=e154]: F
            - cell [ref=e155]:
              - link "Silver Lake" [ref=e156] [cursor=pointer]:
                - /url: /dam/CA00377
            - cell "Amador" [ref=e157]
            - cell "High" [ref=e158]
            - cell "Poor" [ref=e159]
            - cell "1876" [ref=e160]
            - cell "13,130" [ref=e161]
            - cell "Yes" [ref=e162]
            - cell "Repairs under way" [ref=e163]
          - row [ref=e164]:
            - cell [ref=e165]:
              - img "Grade F, Critical" [ref=e166]: F
            - cell [ref=e167]:
              - link "Savage" [ref=e168] [cursor=pointer]:
                - /url: /dam/CA00109
            - cell "San Diego" [ref=e169]
            - cell "High" [ref=e170]
            - cell "Poor" [ref=e171]
            - cell "1919" [ref=e172]
            - cell "56,500" [ref=e173]
            - cell "Yes" [ref=e174]
            - cell "Study or design underway" [ref=e175]
          - row [ref=e176]:
            - cell [ref=e177]:
              - img "Grade F, Critical" [ref=e178]: F
            - cell [ref=e179]:
              - link "Morena" [ref=e180] [cursor=pointer]:
                - /url: /dam/CA00110
            - cell "San Diego" [ref=e181]
            - cell "High" [ref=e182]
            - cell "Poor" [ref=e183]
            - cell "1912" [ref=e184]
            - cell "50,206" [ref=e185]
            - cell "Yes" [ref=e186]
            - cell "Study or design underway" [ref=e187]
          - row [ref=e188]:
            - cell [ref=e189]:
              - img "Grade F, Critical" [ref=e190]: F
            - cell [ref=e191]:
              - link "Lake Curry" [ref=e192] [cursor=pointer]:
                - /url: /dam/CA00140
            - cell "Napa" [ref=e193]
            - cell "High" [ref=e194]
            - cell "Poor" [ref=e195]
            - cell "1926" [ref=e196]
            - cell "10,700" [ref=e197]
            - cell "Yes" [ref=e198]
            - cell "Study or design underway" [ref=e199]
          - row [ref=e200]:
            - cell [ref=e201]:
              - img "Grade F, Critical" [ref=e202]: F
            - cell [ref=e203]:
              - link "El Capitan" [ref=e204] [cursor=pointer]:
                - /url: /dam/CA00111
            - cell "San Diego" [ref=e205]
            - cell "High" [ref=e206]
            - cell "Poor" [ref=e207]
            - cell "1934" [ref=e208]
            - cell "112,800" [ref=e209]
            - cell "Yes" [ref=e210]
            - cell "Study or design underway" [ref=e211]
          - row [ref=e212]:
            - cell [ref=e213]:
              - img "Grade F, Critical" [ref=e214]: F
            - cell [ref=e215]:
              - link "Rancho Rubini" [ref=e216] [cursor=pointer]:
                - /url: /dam/CA00555
            - cell "Colusa" [ref=e217]
            - cell "High" [ref=e218]
            - cell "Poor" [ref=e219]
            - cell "1955" [ref=e220]
            - cell "106" [ref=e221]
            - cell "No" [ref=e222]
            - cell "No public plan found" [ref=e223]
          - row [ref=e224]:
            - cell [ref=e225]:
              - img "Grade F, Critical" [ref=e226]: F
            - cell [ref=e227]:
              - link "Giles" [ref=e228] [cursor=pointer]:
                - /url: /dam/CA00598
            - cell "Solano" [ref=e229]
            - cell "High" [ref=e230]
            - cell "Poor" [ref=e231]
            - cell "1965" [ref=e232]
            - cell "119" [ref=e233]
            - cell "No" [ref=e234]
            - cell "No public plan found" [ref=e235]
          - row [ref=e236]:
            - cell [ref=e237]:
              - img "Grade F, Critical" [ref=e238]: F
            - cell [ref=e239]:
              - link "Lakewood" [ref=e240] [cursor=pointer]:
                - /url: /dam/CA00969
            - cell "Placer" [ref=e241]
            - cell "High" [ref=e242]
            - cell "Poor" [ref=e243]
            - cell "1959" [ref=e244]
            - cell "152" [ref=e245]
            - cell "No" [ref=e246]
            - cell "Repairs under way" [ref=e247]
          - row [ref=e248]:
            - cell [ref=e249]:
              - img "Grade F, Critical" [ref=e250]: F
            - cell [ref=e251]:
              - link "Anderson" [ref=e252] [cursor=pointer]:
                - /url: /dam/CA00294
            - cell "Santa Clara" [ref=e253]
            - cell "High" [ref=e254]
            - cell "Unsatisfactory" [ref=e255]
            - cell "1950" [ref=e256]
            - cell "89,073" [ref=e257]
            - cell "Yes" [ref=e258]
            - cell "Funded project identified" [ref=e259]
          - row [ref=e260]:
            - cell [ref=e261]:
              - img "Grade F, Critical" [ref=e262]: F
            - cell [ref=e263]:
              - link "Lake Fordyce" [ref=e264] [cursor=pointer]:
                - /url: /dam/CA00357
            - cell "Nevada" [ref=e265]
            - cell "High" [ref=e266]
            - cell "Poor" [ref=e267]
            - cell "1873" [ref=e268]
            - cell "49,903" [ref=e269]
            - cell "Yes" [ref=e270]
            - cell "Repairs under way" [ref=e271]
          - row [ref=e272]:
            - cell [ref=e273]:
              - img "Grade F, Critical" [ref=e274]: F
            - cell [ref=e275]:
              - link "Relief" [ref=e276] [cursor=pointer]:
                - /url: /dam/CA00390
            - cell "Tuolumne" [ref=e277]
            - cell "High" [ref=e278]
            - cell "Poor" [ref=e279]
            - cell "1909" [ref=e280]
            - cell "15,600" [ref=e281]
            - cell "Yes" [ref=e282]
            - cell "Repairs under way" [ref=e283]
          - row [ref=e284]:
            - cell [ref=e285]:
              - img "Grade F, Critical" [ref=e286]: F
            - cell [ref=e287]:
              - link "Misselbeck" [ref=e288] [cursor=pointer]:
                - /url: /dam/CA01027
            - cell "Shasta" [ref=e289]
            - cell "High" [ref=e290]
            - cell "Poor" [ref=e291]
            - cell "1920" [ref=e292]
            - cell "3,600" [ref=e293]
            - cell "Yes" [ref=e294]
            - cell "Study or design underway" [ref=e295]
          - row [ref=e296]:
            - cell [ref=e297]:
              - img "Grade F, Critical" [ref=e298]: F
            - cell [ref=e299]:
              - link "Peju Reservoir No. 2" [ref=e300] [cursor=pointer]:
                - /url: /dam/CA10423
            - cell "Napa" [ref=e301]
            - cell "High" [ref=e302]
            - cell "Poor" [ref=e303]
            - cell "—" [ref=e304]
            - cell "96" [ref=e305]
            - cell "No" [ref=e306]
            - cell "Study or design underway" [ref=e307]
          - row [ref=e308]:
            - cell [ref=e309]:
              - img "Grade F, Critical" [ref=e310]: F
            - cell [ref=e311]:
              - link "Castaic" [ref=e312] [cursor=pointer]:
                - /url: /dam/CA00044
            - cell "Los Angeles" [ref=e313]
            - cell "High" [ref=e314]
            - cell "Poor" [ref=e315]
            - cell "1973" [ref=e316]
            - cell "323,700" [ref=e317]
            - cell "Yes" [ref=e318]
            - cell "Study or design underway" [ref=e319]
          - row [ref=e320]:
            - cell [ref=e321]:
              - img "Grade F, Critical" [ref=e322]: F
            - cell [ref=e323]:
              - link "Lake Hodges" [ref=e324] [cursor=pointer]:
                - /url: /dam/CA00108
            - cell "San Diego" [ref=e325]
            - cell "High" [ref=e326]
            - cell "Unsatisfactory" [ref=e327]
            - cell "1918" [ref=e328]
            - cell "37,700" [ref=e329]
            - cell "Yes" [ref=e330]
            - cell "Study or design underway" [ref=e331]
          - row [ref=e332]:
            - cell [ref=e333]:
              - img "Grade F, Critical" [ref=e334]: F
            - cell [ref=e335]:
              - link "Tabeaud" [ref=e336] [cursor=pointer]:
                - /url: /dam/CA00383
            - cell "Amador" [ref=e337]
            - cell "High" [ref=e338]
            - cell "Poor" [ref=e339]
            - cell "1901" [ref=e340]
            - cell "1,259" [ref=e341]
            - cell "Yes" [ref=e342]
            - cell "Study or design underway" [ref=e343]
          - row [ref=e344]:
            - cell [ref=e345]:
              - img "Grade F, Critical" [ref=e346]: F
            - cell [ref=e347]:
              - link "Gem Lake" [ref=e348] [cursor=pointer]:
                - /url: /dam/CA00453
            - cell "Mono" [ref=e349]
            - cell "High" [ref=e350]
            - cell "Poor" [ref=e351]
            - cell "1917" [ref=e352]
            - cell "17,228" [ref=e353]
            - cell "Yes" [ref=e354]
            - cell "Study or design underway" [ref=e355]
          - row [ref=e356]:
            - cell [ref=e357]:
              - img "Grade F, Critical" [ref=e358]: F
            - cell [ref=e359]:
              - link "Grant Lake" [ref=e360] [cursor=pointer]:
                - /url: /dam/CA00089
            - cell "Mono" [ref=e361]
            - cell "High" [ref=e362]
            - cell "Poor" [ref=e363]
            - cell "1940" [ref=e364]
            - cell "47,525" [ref=e365]
            - cell "Yes" [ref=e366]
            - cell "No public plan found" [ref=e367]
          - row [ref=e368]:
            - cell [ref=e369]:
              - img "Grade F, Critical" [ref=e370]: F
            - cell [ref=e371]:
              - link "Almaden" [ref=e372] [cursor=pointer]:
                - /url: /dam/CA00289
            - cell "Santa Clara" [ref=e373]
            - cell "High" [ref=e374]
            - cell "Poor" [ref=e375]
            - cell "1936" [ref=e376]
            - cell "2,000" [ref=e377]
            - cell "Yes" [ref=e378]
            - cell "Study or design underway" [ref=e379]
          - row [ref=e380]:
            - cell [ref=e381]:
              - img "Grade F, Critical" [ref=e382]: F
            - cell [ref=e383]:
              - link "Guadalupe" [ref=e384] [cursor=pointer]:
                - /url: /dam/CA00290
            - cell "Santa Clara" [ref=e385]
            - cell "High" [ref=e386]
            - cell "Poor" [ref=e387]
            - cell "1935" [ref=e388]
            - cell "3,460" [ref=e389]
            - cell "Yes" [ref=e390]
            - cell "Study or design underway" [ref=e391]
          - row [ref=e392]:
            - cell [ref=e393]:
              - img "Grade F, Critical" [ref=e394]: F
            - cell [ref=e395]:
              - link "Matilija" [ref=e396] [cursor=pointer]:
                - /url: /dam/CA00312
            - cell "Ventura" [ref=e397]
            - cell "High" [ref=e398]
            - cell "Poor" [ref=e399]
            - cell "1949" [ref=e400]
            - cell "1,800" [ref=e401]
            - cell "Yes" [ref=e402]
            - cell "Study or design underway" [ref=e403]
          - row [ref=e404]:
            - cell [ref=e405]:
              - img "Grade F, Critical" [ref=e406]: F
            - cell [ref=e407]:
              - link "Round Valley" [ref=e408] [cursor=pointer]:
                - /url: /dam/CA00346
            - cell "Butte" [ref=e409]
            - cell "High" [ref=e410]
            - cell "Unsatisfactory" [ref=e411]
            - cell "1877" [ref=e412]
            - cell "1,200" [ref=e413]
            - cell "Yes" [ref=e414]
            - cell "Study or design underway" [ref=e415]
          - row [ref=e416]:
            - cell [ref=e417]:
              - img "Grade F, Critical" [ref=e418]: F
            - cell [ref=e419]:
              - link "Lee Lake" [ref=e420] [cursor=pointer]:
                - /url: /dam/CA00766
            - cell "Riverside" [ref=e421]
            - cell "High" [ref=e422]
            - cell "Poor" [ref=e423]
            - cell "1893" [ref=e424]
            - cell "1,100" [ref=e425]
            - cell "Yes" [ref=e426]
            - cell "Study or design underway" [ref=e427]
          - row [ref=e428]:
            - cell [ref=e429]:
              - img "Grade F, Critical" [ref=e430]: F
            - cell [ref=e431]:
              - link "Rush Meadows" [ref=e432] [cursor=pointer]:
                - /url: /dam/CA00450
            - cell "Mono" [ref=e433]
            - cell "High" [ref=e434]
            - cell "Poor" [ref=e435]
            - cell "1925" [ref=e436]
            - cell "5,280" [ref=e437]
            - cell "Yes" [ref=e438]
            - cell "Study or design underway" [ref=e439]
          - row [ref=e440]:
            - cell [ref=e441]:
              - img "Grade F, Critical" [ref=e442]: F
            - cell [ref=e443]:
              - link "Tinemaha" [ref=e444] [cursor=pointer]:
                - /url: /dam/CA00084
            - cell "Inyo" [ref=e445]
            - cell "High" [ref=e446]
            - cell "Poor" [ref=e447]
            - cell "1928" [ref=e448]
            - cell "16,405" [ref=e449]
            - cell "Yes" [ref=e450]
            - cell "Study or design underway" [ref=e451]
          - row [ref=e452]:
            - cell [ref=e453]:
              - img "Grade F, Critical" [ref=e454]: F
            - cell [ref=e455]:
              - link "Calero" [ref=e456] [cursor=pointer]:
                - /url: /dam/CA00288
            - cell "Santa Clara" [ref=e457]
            - cell "High" [ref=e458]
            - cell "Poor" [ref=e459]
            - cell "1935" [ref=e460]
            - cell "9,850" [ref=e461]
            - cell "Yes" [ref=e462]
            - cell "Study or design underway" [ref=e463]
          - row [ref=e464]:
            - cell [ref=e465]:
              - img "Grade F, Critical" [ref=e466]: F
            - cell [ref=e467]:
              - link "Vermilion Valley" [ref=e468] [cursor=pointer]:
                - /url: /dam/CA00441
            - cell "Fresno" [ref=e469]
            - cell "High" [ref=e470]
            - cell "Poor" [ref=e471]
            - cell "1954" [ref=e472]
            - cell "140,000" [ref=e473]
            - cell "Yes" [ref=e474]
            - cell "Repairs under way" [ref=e475]
          - row [ref=e476]:
            - cell [ref=e477]:
              - img "Grade F, Critical" [ref=e478]: F
            - cell [ref=e479]:
              - link "Bear Gulch" [ref=e480] [cursor=pointer]:
                - /url: /dam/CA00658
            - cell "San Mateo" [ref=e481]
            - cell "High" [ref=e482]
            - cell "Poor" [ref=e483]
            - cell "1896" [ref=e484]
            - cell "725" [ref=e485]
            - cell "Yes" [ref=e486]
            - cell "Study or design underway" [ref=e487]
          - row [ref=e488]:
            - cell [ref=e489]:
              - img "Grade F, Critical" [ref=e490]: F
            - cell [ref=e491]:
              - link "Swanzy Lake" [ref=e492] [cursor=pointer]:
                - /url: /dam/CA00144
            - cell "Solano" [ref=e493]
            - cell "High" [ref=e494]
            - cell "Poor" [ref=e495]
            - cell "1931" [ref=e496]
            - cell "107" [ref=e497]
            - cell "Yes" [ref=e498]
            - cell "Study or design underway" [ref=e499]
          - row [ref=e500]:
            - cell [ref=e501]:
              - img "Grade F, Critical" [ref=e502]: F
            - cell [ref=e503]:
              - link "Pilarcitos" [ref=e504] [cursor=pointer]:
                - /url: /dam/CA00128
            - cell "San Mateo" [ref=e505]
            - cell "High" [ref=e506]
            - cell "Poor" [ref=e507]
            - cell "1866" [ref=e508]
            - cell "3,100" [ref=e509]
            - cell "Yes" [ref=e510]
            - cell "Study or design underway" [ref=e511]
          - row [ref=e512]:
            - cell [ref=e513]:
              - img "Grade F, Critical" [ref=e514]: F
            - cell [ref=e515]:
              - link "Magalia" [ref=e516] [cursor=pointer]:
                - /url: /dam/CA00296
            - cell "Butte" [ref=e517]
            - cell "High" [ref=e518]
            - cell "Poor" [ref=e519]
            - cell "1918" [ref=e520]
            - cell "2,900" [ref=e521]
            - cell "Yes" [ref=e522]
            - cell "Study or design underway" [ref=e523]
          - row [ref=e524]:
            - cell [ref=e525]:
              - img "Grade F, Critical" [ref=e526]: F
            - cell [ref=e527]:
              - link "Agnew Lake" [ref=e528] [cursor=pointer]:
                - /url: /dam/CA00454
            - cell "Mono" [ref=e529]
            - cell "High" [ref=e530]
            - cell "Poor" [ref=e531]
            - cell "1916" [ref=e532]
            - cell "810" [ref=e533]
            - cell "Yes" [ref=e534]
            - cell "Study or design underway" [ref=e535]
          - row [ref=e536]:
            - cell [ref=e537]:
              - img "Grade D, Serious" [ref=e538]: D
            - cell [ref=e539]:
              - link "Salt Springs Valley" [ref=e540] [cursor=pointer]:
                - /url: /dam/CA00620
            - cell "Calaveras" [ref=e541]
            - cell "High" [ref=e542]
            - cell "Poor" [ref=e543]
            - cell "1882" [ref=e544]
            - cell "10,900" [ref=e545]
            - cell "Yes" [ref=e546]
            - cell "Study or design underway" [ref=e547]
          - row [ref=e548]:
            - cell [ref=e549]:
              - img "Grade D, Serious" [ref=e550]: D
            - cell [ref=e551]:
              - link "Coyote" [ref=e552] [cursor=pointer]:
                - /url: /dam/CA00287
            - cell "Santa Clara" [ref=e553]
            - cell "High" [ref=e554]
            - cell "Poor" [ref=e555]
            - cell "1936" [ref=e556]
            - cell "22,541" [ref=e557]
            - cell "Yes" [ref=e558]
            - cell "Study or design underway" [ref=e559]
          - row [ref=e560]:
            - cell [ref=e561]:
              - img "Grade D, Serious" [ref=e562]: D
            - cell [ref=e563]:
              - link "Santiago Creek" [ref=e564] [cursor=pointer]:
                - /url: /dam/CA00298
            - cell "Orange" [ref=e565]
            - cell "High" [ref=e566]
            - cell "Poor" [ref=e567]
            - cell "1933" [ref=e568]
            - cell "25,000" [ref=e569]
            - cell "Yes" [ref=e570]
            - cell "Study or design underway" [ref=e571]
          - row [ref=e572]:
            - cell [ref=e573]:
              - img "Grade D, Serious" [ref=e574]: D
            - cell [ref=e575]:
              - link "Thompson" [ref=e576] [cursor=pointer]:
                - /url: /dam/CA00445
            - cell "Los Angeles" [ref=e577]
            - cell "High" [ref=e578]
            - cell "Not rated" [ref=e579]
            - cell "1925" [ref=e580]
            - cell "1,010" [ref=e581]
            - cell "No" [ref=e582]
            - cell "Unknown (2019 data only)" [ref=e583]
          - row [ref=e584]:
            - cell [ref=e585]:
              - img "Grade D, Serious" [ref=e586]: D
            - cell [ref=e587]:
              - link "Santa Felicia" [ref=e588] [cursor=pointer]:
                - /url: /dam/CA00805
            - cell "Ventura" [ref=e589]
            - cell "High" [ref=e590]
            - cell "Poor" [ref=e591]
            - cell "1955" [ref=e592]
            - cell "88,000" [ref=e593]
            - cell "Yes" [ref=e594]
            - cell "Repairs under way" [ref=e595]
          - row [ref=e596]:
            - cell [ref=e597]:
              - img "Grade D, Serious" [ref=e598]: D
            - cell [ref=e599]:
              - link "St. Helena Lower" [ref=e600] [cursor=pointer]:
                - /url: /dam/CA00148
            - cell "Napa" [ref=e601]
            - cell "High" [ref=e602]
            - cell "Poor" [ref=e603]
            - cell "1878" [ref=e604]
            - cell "210" [ref=e605]
            - cell "Yes" [ref=e606]
            - cell "Study or design underway" [ref=e607]
          - row [ref=e608]:
            - cell [ref=e609]:
              - img "Grade D, Serious" [ref=e610]: D
            - cell [ref=e611]:
              - link "Scotia Log Pond" [ref=e612] [cursor=pointer]:
                - /url: /dam/CA00504
            - cell "Humboldt" [ref=e613]
            - cell "High" [ref=e614]
            - cell "Poor" [ref=e615]
            - cell "1910" [ref=e616]
            - cell "210" [ref=e617]
            - cell "Yes" [ref=e618]
            - cell "Study or design underway" [ref=e619]
          - row [ref=e620]:
            - cell [ref=e621]:
              - img "Grade D, Serious" [ref=e622]: D
            - cell [ref=e623]:
              - link "Nacimiento" [ref=e624] [cursor=pointer]:
                - /url: /dam/CA00812
            - cell "San Luis Obispo" [ref=e625]
            - cell "High" [ref=e626]
            - cell "Poor" [ref=e627]
            - cell "1956" [ref=e628]
            - cell "470,000" [ref=e629]
            - cell "Yes" [ref=e630]
            - cell "Repairs under way" [ref=e631]
          - row [ref=e632]:
            - cell [ref=e633]:
              - img "Grade D, Serious" [ref=e634]: D
            - cell [ref=e635]:
              - link "Lake Van Norden" [ref=e636] [cursor=pointer]:
                - /url: /dam/CA00362
            - cell "Nevada" [ref=e637]
            - cell "High" [ref=e638]
            - cell "Not rated" [ref=e639]
            - cell "1916" [ref=e640]
            - cell "300" [ref=e641]
            - cell "No" [ref=e642]
            - cell "Unknown (2019 data only)" [ref=e643]
          - row [ref=e644]:
            - cell [ref=e645]:
              - img "Grade D, Serious" [ref=e646]: D
            - cell [ref=e647]:
              - link "Century" [ref=e648] [cursor=pointer]:
                - /url: /dam/CA00740
            - cell "Los Angeles" [ref=e649]
            - cell "High" [ref=e650]
            - cell "Not rated" [ref=e651]
            - cell "1913" [ref=e652]
            - cell "70" [ref=e653]
            - cell "No" [ref=e654]
            - cell "Unknown (2019 data only)" [ref=e655]
          - row [ref=e656]:
            - cell [ref=e657]:
              - img "Grade D, Serious" [ref=e658]: D
            - cell [ref=e659]:
              - link "Lake Helen" [ref=e660] [cursor=pointer]:
                - /url: /dam/CA01060
            - cell "Sonoma" [ref=e661]
            - cell "High" [ref=e662]
            - cell "Poor" [ref=e663]
            - cell "1966" [ref=e664]
            - cell "192" [ref=e665]
            - cell "Yes" [ref=e666]
            - cell "Study or design underway" [ref=e667]
          - row [ref=e668]:
            - cell [ref=e669]:
              - img "Grade D, Serious" [ref=e670]: D
            - cell [ref=e671]:
              - link "Kelley Hot Spring Fish" [ref=e672] [cursor=pointer]:
                - /url: /dam/CA01599
            - cell "Modoc" [ref=e673]
            - cell "High" [ref=e674]
            - cell "Not rated" [ref=e675]
            - cell "—" [ref=e676]
            - cell "300" [ref=e677]
            - cell "No" [ref=e678]
            - cell "Unknown (2019 data only)" [ref=e679]
          - row [ref=e680]:
            - cell [ref=e681]:
              - img "Grade D, Serious" [ref=e682]: D
            - cell [ref=e683]:
              - link "Dove Canyon" [ref=e684] [cursor=pointer]:
                - /url: /dam/CA01248
            - cell "Orange" [ref=e685]
            - cell "High" [ref=e686]
            - cell "Poor" [ref=e687]
            - cell "1989" [ref=e688]
            - cell "415" [ref=e689]
            - cell "Yes" [ref=e690]
            - cell "No public plan found" [ref=e691]
          - row [ref=e692]:
            - cell [ref=e693]:
              - img "Grade D, Serious" [ref=e694]: D
            - cell [ref=e695]:
              - link "Glen Martin" [ref=e696] [cursor=pointer]:
                - /url: /dam/CA00754
            - cell "San Bernardino" [ref=e697]
            - cell "High" [ref=e698]
            - cell "Fair" [ref=e699]
            - cell "1950" [ref=e700]
            - cell "33" [ref=e701]
            - cell "No" [ref=e702]
            - cell "Study or design underway" [ref=e703]
          - row [ref=e704]:
            - cell [ref=e705]:
              - img "Grade D, Serious" [ref=e706]: D
            - cell [ref=e707]:
              - link "Sunnymead Ranch" [ref=e708] [cursor=pointer]:
                - /url: /dam/CA01237
            - cell "Riverside" [ref=e709]
            - cell "High" [ref=e710]
            - cell "Poor" [ref=e711]
            - cell "1985" [ref=e712]
            - cell "400" [ref=e713]
            - cell "Yes" [ref=e714]
            - cell "Study or design underway" [ref=e715]
          - row [ref=e716]:
            - cell [ref=e717]:
              - img "Grade D, Serious" [ref=e718]: D
            - cell [ref=e719]:
              - link "Crane Valley" [ref=e720] [cursor=pointer]:
                - /url: /dam/CA00337
            - cell "Madera" [ref=e721]
            - cell "High" [ref=e722]
            - cell "Fair" [ref=e723]
            - cell "1910" [ref=e724]
            - cell "45,410" [ref=e725]
            - cell "Yes" [ref=e726]
            - cell "Repairs under way" [ref=e727]
          - row [ref=e728]:
            - cell [ref=e729]:
              - img "Grade D, Serious" [ref=e730]: D
            - cell [ref=e731]:
              - link "Strawberry" [ref=e732] [cursor=pointer]:
                - /url: /dam/CA00388
            - cell "Tuolumne" [ref=e733]
            - cell "High" [ref=e734]
            - cell "Fair" [ref=e735]
            - cell "1916" [ref=e736]
            - cell "19,000" [ref=e737]
            - cell "Yes" [ref=e738]
            - cell "Study or design underway" [ref=e739]
          - row [ref=e740]:
            - cell [ref=e741]:
              - img "Grade D, Serious" [ref=e742]: D
            - cell [ref=e743]:
              - link "Scott" [ref=e744] [cursor=pointer]:
                - /url: /dam/CA00398
            - cell "Lake" [ref=e745]
            - cell "High" [ref=e746]
            - cell "Fair" [ref=e747]
            - cell "1921" [ref=e748]
            - cell "80,600" [ref=e749]
            - cell "Yes" [ref=e750]
            - cell "Repairs under way" [ref=e751]
          - row [ref=e752]:
            - cell [ref=e753]:
              - img "Grade D, Serious" [ref=e754]: D
            - cell [ref=e755]:
              - link "Florence Lake" [ref=e756] [cursor=pointer]:
                - /url: /dam/CA00433
            - cell "Fresno" [ref=e757]
            - cell "High" [ref=e758]
            - cell "Fair" [ref=e759]
            - cell "1926" [ref=e760]
            - cell "68,000" [ref=e761]
            - cell "Yes" [ref=e762]
            - cell "Repairs under way" [ref=e763]
          - row [ref=e764]:
            - cell [ref=e765]:
              - img "Grade D, Serious" [ref=e766]: D
            - cell [ref=e767]:
              - link "Big Creek Dam No. 1" [ref=e768] [cursor=pointer]:
                - /url: /dam/CA00434
            - cell "Fresno" [ref=e769]
            - cell "High" [ref=e770]
            - cell "Fair" [ref=e771]
            - cell "1917" [ref=e772]
            - cell "89,800" [ref=e773]
            - cell "Yes" [ref=e774]
            - cell "Repairs under way" [ref=e775]
          - row [ref=e776]:
            - cell [ref=e777]:
              - img "Grade D, Serious" [ref=e778]: D
            - cell [ref=e779]:
              - link "Engineer" [ref=e780] [cursor=pointer]:
                - /url: /dam/CA10126
            - cell "Monterey" [ref=e781]
            - cell "High" [ref=e782]
            - cell "Poor" [ref=e783]
            - cell "1964" [ref=e784]
            - cell "50" [ref=e785]
            - cell "Yes" [ref=e786]
            - cell "No public plan found" [ref=e787]
          - row [ref=e788]:
            - cell [ref=e789]:
              - img "Grade D, Serious" [ref=e790]: D
            - cell [ref=e791]:
              - link "Lake Almanor" [ref=e792] [cursor=pointer]:
                - /url: /dam/CA00327
            - cell "Plumas" [ref=e793]
            - cell "High" [ref=e794]
            - cell "Fair" [ref=e795]
            - cell "1927" [ref=e796]
            - cell "1,142,964" [ref=e797]
            - cell "Yes" [ref=e798]
            - cell "Repairs under way" [ref=e799]
          - row [ref=e800]:
            - cell [ref=e801]:
              - img "Grade D, Serious" [ref=e802]: D
            - cell [ref=e803]:
              - link "Thurman" [ref=e804] [cursor=pointer]:
                - /url: /dam/CA01052
            - cell "Shasta" [ref=e805]
            - cell "High" [ref=e806]
            - cell "Not rated" [ref=e807]
            - cell "1966" [ref=e808]
            - cell "140" [ref=e809]
            - cell "No" [ref=e810]
            - cell "Unknown (2019 data only)" [ref=e811]
          - row [ref=e812]:
            - cell [ref=e813]:
              - img "Grade D, Serious" [ref=e814]: D
            - cell [ref=e815]:
              - link "El Centro Water Purification Plant" [ref=e816] [cursor=pointer]:
                - /url: /dam/CA01136
            - cell "Imperial" [ref=e817]
            - cell "High" [ref=e818]
            - cell "Not rated" [ref=e819]
            - cell "1956" [ref=e820]
            - cell "185" [ref=e821]
            - cell "No" [ref=e822]
            - cell "Unknown (2019 data only)" [ref=e823]
          - row [ref=e824]:
            - cell [ref=e825]:
              - img "Grade D, Serious" [ref=e826]: D
            - cell [ref=e827]:
              - link "El Dorado Forebay" [ref=e828] [cursor=pointer]:
                - /url: /dam/CA00375
            - cell "El Dorado" [ref=e829]
            - cell "High" [ref=e830]
            - cell "Fair" [ref=e831]
            - cell "1923" [ref=e832]
            - cell "356" [ref=e833]
            - cell "Yes" [ref=e834]
            - cell "Repairs under way" [ref=e835]
          - row [ref=e836]:
            - cell [ref=e837]:
              - img "Grade D, Serious" [ref=e838]: D
            - cell [ref=e839]:
              - link "Cape Horn" [ref=e840] [cursor=pointer]:
                - /url: /dam/CA00399
            - cell "Mendocino" [ref=e841]
            - cell "High" [ref=e842]
            - cell "Fair" [ref=e843]
            - cell "1907" [ref=e844]
            - cell "390" [ref=e845]
            - cell "Yes" [ref=e846]
            - cell "Repairs under way" [ref=e847]
          - row [ref=e848]:
            - cell [ref=e849]:
              - img "Grade D, Serious" [ref=e850]: D
            - cell [ref=e851]:
              - link "Quail Lake Dam" [ref=e852] [cursor=pointer]:
                - /url: /dam/CA00547
            - cell "Placer" [ref=e853]
            - cell "High" [ref=e854]
            - cell "Not rated" [ref=e855]
            - cell "1926" [ref=e856]
            - cell "215" [ref=e857]
            - cell "No" [ref=e858]
            - cell "No remediation reported" [ref=e859]
          - row [ref=e860]:
            - cell [ref=e861]:
              - img "Grade D, Serious" [ref=e862]: D
            - cell [ref=e863]:
              - link "Barrett" [ref=e864] [cursor=pointer]:
                - /url: /dam/CA00106
            - cell "San Diego" [ref=e865]
            - cell "High" [ref=e866]
            - cell "Fair" [ref=e867]
            - cell "1922" [ref=e868]
            - cell "44,755" [ref=e869]
            - cell "Yes" [ref=e870]
            - cell "Study or design underway" [ref=e871]
          - row [ref=e872]:
            - cell [ref=e873]:
              - img "Grade D, Serious" [ref=e874]: D
            - cell [ref=e875]:
              - link "Sweetwater Main" [ref=e876] [cursor=pointer]:
                - /url: /dam/CA00775
            - cell "San Diego" [ref=e877]
            - cell "High" [ref=e878]
            - cell "Fair" [ref=e879]
            - cell "1888" [ref=e880]
            - cell "27,689" [ref=e881]
            - cell "Yes" [ref=e882]
            - cell "Study or design underway" [ref=e883]
          - row [ref=e884]:
            - cell [ref=e885]:
              - img "Grade D, Serious" [ref=e886]: D
            - cell [ref=e887]:
              - link "Bradford" [ref=e888] [cursor=pointer]:
                - /url: /dam/CA01263
            - cell "Mendocino" [ref=e889]
            - cell "High" [ref=e890]
            - cell "Not rated" [ref=e891]
            - cell "1985" [ref=e892]
            - cell "440" [ref=e893]
            - cell "No" [ref=e894]
            - cell "Unknown (2019 data only)" [ref=e895]
          - row [ref=e896]:
            - cell [ref=e897]:
              - img "Grade D, Serious" [ref=e898]: D
            - cell [ref=e899]:
              - link "Lower Bucks Lake" [ref=e900] [cursor=pointer]:
                - /url: /dam/CA00331
            - cell "Plumas" [ref=e901]
            - cell "High" [ref=e902]
            - cell "Fair" [ref=e903]
            - cell "1928" [ref=e904]
            - cell "5,843" [ref=e905]
            - cell "Yes" [ref=e906]
            - cell "Repairs under way" [ref=e907]
          - row [ref=e908]:
            - cell [ref=e909]:
              - img "Grade D, Serious" [ref=e910]: D
            - cell [ref=e911]:
              - link "Pit No. 5 Open Conduit" [ref=e912] [cursor=pointer]:
                - /url: /dam/CA00403
            - cell "Shasta" [ref=e913]
            - cell "High" [ref=e914]
            - cell "Fair" [ref=e915]
            - cell "1944" [ref=e916]
            - cell "1,044" [ref=e917]
            - cell "Yes" [ref=e918]
            - cell "Repairs under way" [ref=e919]
          - row [ref=e920]:
            - cell [ref=e921]:
              - img "Grade D, Serious" [ref=e922]: D
            - cell [ref=e923]:
              - link "Haiwee" [ref=e924] [cursor=pointer]:
                - /url: /dam/CA00082
            - cell "Inyo" [ref=e925]
            - cell "High" [ref=e926]
            - cell "Fair" [ref=e927]
            - cell "1913" [ref=e928]
            - cell "60,600" [ref=e929]
            - cell "Yes" [ref=e930]
            - cell "Repairs under way" [ref=e931]
          - row [ref=e932]:
            - cell [ref=e933]:
              - img "Grade D, Serious" [ref=e934]: D
            - cell [ref=e935]:
              - link "Lost Creek" [ref=e936] [cursor=pointer]:
                - /url: /dam/CA00268
            - cell "Butte" [ref=e937]
            - cell "High" [ref=e938]
            - cell "Fair" [ref=e939]
            - cell "1924" [ref=e940]
            - cell "5,100" [ref=e941]
            - cell "Yes" [ref=e942]
            - cell "Repairs under way" [ref=e943]
          - row [ref=e944]:
            - cell [ref=e945]:
              - img "Grade D, Serious" [ref=e946]: D
            - cell [ref=e947]:
              - link "Lynch Canyon" [ref=e948] [cursor=pointer]:
                - /url: /dam/CA01474
            - cell "Solano" [ref=e949]
            - cell "High" [ref=e950]
            - cell "Fair" [ref=e951]
            - cell "—" [ref=e952]
            - cell "80" [ref=e953]
            - cell "No" [ref=e954]
            - cell "Study or design underway" [ref=e955]
          - row [ref=e956]:
            - cell [ref=e957]:
              - img "Grade D, Serious" [ref=e958]: D
            - cell [ref=e959]:
              - link "Browns Lane" [ref=e960] [cursor=pointer]:
                - /url: /dam/CA01606
            - cell "Sonoma" [ref=e961]
            - cell "High" [ref=e962]
            - cell "Fair" [ref=e963]
            - cell "—" [ref=e964]
            - cell "103" [ref=e965]
            - cell "No" [ref=e966]
            - cell "Study or design underway" [ref=e967]
          - row [ref=e968]:
            - cell [ref=e969]:
              - img "Grade D, Serious" [ref=e970]: D
            - cell [ref=e971]:
              - link "Yucaipa No 3" [ref=e972] [cursor=pointer]:
                - /url: /dam/CA01133
            - cell "San Bernardino" [ref=e973]
            - cell "High" [ref=e974]
            - cell "Not rated" [ref=e975]
            - cell "1978" [ref=e976]
            - cell "32" [ref=e977]
            - cell "No" [ref=e978]
            - cell "Unknown (2019 data only)" [ref=e979]
          - row [ref=e980]:
            - cell [ref=e981]:
              - img "Grade D, Serious" [ref=e982]: D
            - cell [ref=e983]:
              - link "Dunn Ranch" [ref=e984] [cursor=pointer]:
                - /url: /dam/CA01302
            - cell "Riverside" [ref=e985]
            - cell "High" [ref=e986]
            - cell "Not rated" [ref=e987]
            - cell "1987" [ref=e988]
            - cell "90" [ref=e989]
            - cell "No" [ref=e990]
            - cell "Unknown (2019 data only)" [ref=e991]
          - row [ref=e992]:
            - cell [ref=e993]:
              - img "Grade D, Serious" [ref=e994]: D
            - cell [ref=e995]:
              - link "Reclaimed Water Res" [ref=e996] [cursor=pointer]:
                - /url: /dam/CA01391
            - cell "Shasta" [ref=e997]
            - cell "High" [ref=e998]
            - cell "Not rated" [ref=e999]
            - cell "1995" [ref=e1000]
            - cell "370" [ref=e1001]
            - cell "No" [ref=e1002]
            - cell "Unknown (2019 data only)" [ref=e1003]
          - row [ref=e1004]:
            - cell [ref=e1005]:
              - img "Grade D, Serious" [ref=e1006]: D
            - cell [ref=e1007]:
              - link "San Vicente Storage Pond 3" [ref=e1008] [cursor=pointer]:
                - /url: /dam/CA01467
            - cell "San Diego" [ref=e1009]
            - cell "High" [ref=e1010]
            - cell "Not rated" [ref=e1011]
            - cell "2002" [ref=e1012]
            - cell "69" [ref=e1013]
            - cell "No" [ref=e1014]
            - cell "Unknown (2019 data only)" [ref=e1015]
          - row [ref=e1016]:
            - cell [ref=e1017]:
              - img "Grade D, Serious" [ref=e1018]: D
            - cell [ref=e1019]:
              - link "Auberry Lumber Mill" [ref=e1020] [cursor=pointer]:
                - /url: /dam/CA10403
            - cell "Fresno" [ref=e1021]
            - cell "High" [ref=e1022]
            - cell "Not rated" [ref=e1023]
            - cell "—" [ref=e1024]
            - cell "94" [ref=e1025]
            - cell "No" [ref=e1026]
            - cell "Unknown (2019 data only)" [ref=e1027]
          - row [ref=e1028]:
            - cell [ref=e1029]:
              - img "Grade D, Serious" [ref=e1030]: D
            - cell [ref=e1031]:
              - link "McCloud" [ref=e1032] [cursor=pointer]:
                - /url: /dam/CA00416
            - cell "Shasta" [ref=e1033]
            - cell "High" [ref=e1034]
            - cell "Fair" [ref=e1035]
            - cell "1965" [ref=e1036]
            - cell "35,234" [ref=e1037]
            - cell "Yes" [ref=e1038]
            - cell "Study or design underway" [ref=e1039]
          - row [ref=e1040]:
            - cell [ref=e1041]:
              - img "Grade D, Serious" [ref=e1042]: D
            - cell [ref=e1043]:
              - link "Pit No. 1 Forebay" [ref=e1044] [cursor=pointer]:
                - /url: /dam/CA00405
            - cell "Shasta" [ref=e1045]
            - cell "High" [ref=e1046]
            - cell "Fair" [ref=e1047]
            - cell "1947" [ref=e1048]
            - cell "3,212" [ref=e1049]
            - cell "Yes" [ref=e1050]
            - cell "Repairs under way" [ref=e1051]
          - row [ref=e1052]:
            - cell [ref=e1053]:
              - img "Grade D, Serious" [ref=e1054]: D
            - cell [ref=e1055]:
              - link "Lake Spaulding No. 1" [ref=e1056] [cursor=pointer]:
                - /url: /dam/CA00358
            - cell "Nevada" [ref=e1057]
            - cell "High" [ref=e1058]
            - cell "Fair" [ref=e1059]
            - cell "1912" [ref=e1060]
            - cell "74,773" [ref=e1061]
            - cell "Yes" [ref=e1062]
            - cell "Study or design underway" [ref=e1063]
          - row [ref=e1064]:
            - cell [ref=e1065]:
              - img "Grade D, Serious" [ref=e1066]: D
            - cell [ref=e1067]:
              - link "Lake Frey" [ref=e1068] [cursor=pointer]:
                - /url: /dam/CA00142
            - cell "Solano" [ref=e1069]
            - cell "High" [ref=e1070]
            - cell "Fair" [ref=e1071]
            - cell "1894" [ref=e1072]
            - cell "1,020" [ref=e1073]
            - cell "Yes" [ref=e1074]
            - cell "No remediation reported" [ref=e1075]
          - row [ref=e1076]:
            - cell [ref=e1077]:
              - img "Grade C, Concern" [ref=e1078]: C
            - cell [ref=e1079]:
              - link "Araujo Reservoir No. 1" [ref=e1080] [cursor=pointer]:
                - /url: /dam/CA01607
            - cell "Napa" [ref=e1081]
            - cell "High" [ref=e1082]
            - cell "Fair" [ref=e1083]
            - cell "1950" [ref=e1084]
            - cell "22" [ref=e1085]
            - cell "Yes" [ref=e1086]
            - cell "Study or design underway" [ref=e1087]
          - row [ref=e1088]:
            - cell [ref=e1089]:
              - img "Grade C, Concern" [ref=e1090]: C
            - cell [ref=e1091]:
              - link "Araujo Reservoir No. 2" [ref=e1092] [cursor=pointer]:
                - /url: /dam/CA01608
            - cell "Napa" [ref=e1093]
            - cell "High" [ref=e1094]
            - cell "Fair" [ref=e1095]
            - cell "1950" [ref=e1096]
            - cell "20" [ref=e1097]
            - cell "Yes" [ref=e1098]
            - cell "Study or design underway" [ref=e1099]
          - row [ref=e1100]:
            - cell [ref=e1101]:
              - img "Grade C, Concern" [ref=e1102]: C
            - cell [ref=e1103]:
              - link "Belden Forebay" [ref=e1104] [cursor=pointer]:
                - /url: /dam/CA00413
            - cell "Plumas" [ref=e1105]
            - cell "High" [ref=e1106]
            - cell "Fair" [ref=e1107]
            - cell "1958" [ref=e1108]
            - cell "2,480" [ref=e1109]
            - cell "Yes" [ref=e1110]
            - cell "Repairs under way" [ref=e1111]
          - row [ref=e1112]:
            - cell [ref=e1113]:
              - img "Grade C, Concern" [ref=e1114]: C
            - cell [ref=e1115]:
              - link "Henderson" [ref=e1116] [cursor=pointer]:
                - /url: /dam/CA00005
            - cell "Amador" [ref=e1117]
            - cell "High" [ref=e1118]
            - cell "Fair" [ref=e1119]
            - cell "1923" [ref=e1120]
            - cell "500" [ref=e1121]
            - cell "Yes" [ref=e1122]
            - cell "Study or design underway" [ref=e1123]
          - row [ref=e1124]:
            - cell [ref=e1125]:
              - img "Grade C, Concern" [ref=e1126]: C
            - cell [ref=e1127]:
              - link "Lake O'Neill Dam" [ref=e1128] [cursor=pointer]:
                - /url: /dam/CA10131
            - cell "San Diego" [ref=e1129]
            - cell "High" [ref=e1130]
            - cell "Fair" [ref=e1131]
            - cell "1883" [ref=e1132]
            - cell "1,395" [ref=e1133]
            - cell "Yes" [ref=e1134]
            - cell "No remediation reported" [ref=e1135]
          - row [ref=e1136]:
            - cell [ref=e1137]:
              - img "Grade C, Concern" [ref=e1138]: C
            - cell [ref=e1139]:
              - link "Bouquet Canyon" [ref=e1140] [cursor=pointer]:
                - /url: /dam/CA00088
            - cell "Los Angeles" [ref=e1141]
            - cell "High" [ref=e1142]
            - cell "Fair" [ref=e1143]
            - cell "1934" [ref=e1144]
            - cell "36,505" [ref=e1145]
            - cell "Yes" [ref=e1146]
            - cell "Study or design underway" [ref=e1147]
          - row [ref=e1148]:
            - cell [ref=e1149]:
              - img "Grade C, Concern" [ref=e1150]: C
            - cell [ref=e1151]:
              - link "Lake Mary" [ref=e1152] [cursor=pointer]:
                - /url: /dam/CA10388
            - cell "Mono" [ref=e1153]
            - cell "High" [ref=e1154]
            - cell "Not rated" [ref=e1155]
            - cell "1934" [ref=e1156]
            - cell "1,300" [ref=e1157]
            - cell "No" [ref=e1158]
            - cell "No remediation reported" [ref=e1159]
          - row [ref=e1160]:
            - cell [ref=e1161]:
              - img "Grade C, Concern" [ref=e1162]: C
            - cell [ref=e1163]:
              - link "Veterans Home" [ref=e1164] [cursor=pointer]:
                - /url: /dam/CA00008
            - cell "Napa" [ref=e1165]
            - cell "High" [ref=e1166]
            - cell "Fair" [ref=e1167]
            - cell "1908" [ref=e1168]
            - cell "39" [ref=e1169]
            - cell "Yes" [ref=e1170]
            - cell "Study or design underway" [ref=e1171]
          - row [ref=e1172]:
            - cell [ref=e1173]:
              - img "Grade C, Concern" [ref=e1174]: C
            - cell [ref=e1175]:
              - link "Merced Falls" [ref=e1176] [cursor=pointer]:
                - /url: /dam/CA00341
            - cell "Merced" [ref=e1177]
            - cell "High" [ref=e1178]
            - cell "Fair" [ref=e1179]
            - cell "1901" [ref=e1180]
            - cell "678" [ref=e1181]
            - cell "Yes" [ref=e1182]
            - cell "Repairs under way" [ref=e1183]
          - row [ref=e1184]:
            - cell [ref=e1185]:
              - img "Grade C, Concern" [ref=e1186]: C
            - cell [ref=e1187]:
              - link "Lafayette" [ref=e1188] [cursor=pointer]:
                - /url: /dam/CA00163
            - cell "Contra Costa" [ref=e1189]
            - cell "High" [ref=e1190]
            - cell "Fair" [ref=e1191]
            - cell "1929" [ref=e1192]
            - cell "4,250" [ref=e1193]
            - cell "Yes" [ref=e1194]
            - cell "Study or design underway" [ref=e1195]
          - row [ref=e1196]:
            - cell [ref=e1197]:
              - img "Grade C, Concern" [ref=e1198]: C
            - cell [ref=e1199]:
              - link "McVicker Canyon Debris Basin" [ref=e1200] [cursor=pointer]:
                - /url: /dam/CA10417
            - cell "Riverside" [ref=e1201]
            - cell "High" [ref=e1202]
            - cell "Fair" [ref=e1203]
            - cell "—" [ref=e1204]
            - cell "150" [ref=e1205]
            - cell "No" [ref=e1206]
            - cell "Study or design underway" [ref=e1207]
          - row [ref=e1208]:
            - cell [ref=e1209]:
              - img "Grade C, Concern" [ref=e1210]: C
            - cell [ref=e1211]:
              - link "Parish Camp Saddle" [ref=e1212] [cursor=pointer]:
                - /url: /dam/CA00035
            - cell "Butte" [ref=e1213]
            - cell "High" [ref=e1214]
            - cell "Fair" [ref=e1215]
            - cell "1968" [ref=e1216]
            - cell "3,540,000" [ref=e1217]
            - cell "Yes" [ref=e1218]
            - cell "Repairs under way" [ref=e1219]
          - row [ref=e1220]:
            - cell [ref=e1221]:
              - img "Grade C, Concern" [ref=e1222]: C
            - cell [ref=e1223]:
              - link "Drinkwater" [ref=e1224] [cursor=pointer]:
                - /url: /dam/CA00077
            - cell "Los Angeles" [ref=e1225]
            - cell "High" [ref=e1226]
            - cell "Not rated" [ref=e1227]
            - cell "1923" [ref=e1228]
            - cell "92" [ref=e1229]
            - cell "Yes" [ref=e1230]
            - cell "Unknown (2019 data only)" [ref=e1231]
          - row [ref=e1232]:
            - cell [ref=e1233]:
              - img "Grade C, Concern" [ref=e1234]: C
            - cell [ref=e1235]:
              - link "Camp Far West" [ref=e1236] [cursor=pointer]:
                - /url: /dam/CA00227
            - cell "Yuba" [ref=e1237]
            - cell "High" [ref=e1238]
            - cell "Fair" [ref=e1239]
            - cell "1963" [ref=e1240]
            - cell "137,280" [ref=e1241]
            - cell "Yes" [ref=e1242]
            - cell "Repairs under way" [ref=e1243]
          - row [ref=e1244]:
            - cell [ref=e1245]:
              - img "Grade C, Concern" [ref=e1246]: C
            - cell [ref=e1247]:
              - link "Exchequer Main" [ref=e1248] [cursor=pointer]:
                - /url: /dam/CA00240
            - cell "Mariposa" [ref=e1249]
            - cell "High" [ref=e1250]
            - cell "Fair" [ref=e1251]
            - cell "1966" [ref=e1252]
            - cell "1,100,000" [ref=e1253]
            - cell "Yes" [ref=e1254]
            - cell "Repairs under way" [ref=e1255]
          - row [ref=e1256]:
            - cell [ref=e1257]:
              - img "Grade C, Concern" [ref=e1258]: C
            - cell [ref=e1259]:
              - link "Hell Hole" [ref=e1260] [cursor=pointer]:
                - /url: /dam/CA00857
            - cell "Placer" [ref=e1261]
            - cell "High" [ref=e1262]
            - cell "Fair" [ref=e1263]
            - cell "1966" [ref=e1264]
            - cell "207,000" [ref=e1265]
            - cell "Yes" [ref=e1266]
            - cell "Study or design underway" [ref=e1267]
          - row [ref=e1268]:
            - cell [ref=e1269]:
              - img "Grade C, Concern" [ref=e1270]: C
            - cell [ref=e1271]:
              - link "Indian Valley" [ref=e1272] [cursor=pointer]:
                - /url: /dam/CA01107
            - cell "Lake" [ref=e1273]
            - cell "High" [ref=e1274]
            - cell "Fair" [ref=e1275]
            - cell "1975" [ref=e1276]
            - cell "359,000" [ref=e1277]
            - cell "Yes" [ref=e1278]
            - cell "Repairs under way" [ref=e1279]
          - row [ref=e1280]:
            - cell [ref=e1281]:
              - img "Grade C, Concern" [ref=e1282]: C
            - cell [ref=e1283]:
              - link "Sabrina" [ref=e1284] [cursor=pointer]:
                - /url: /dam/CA00448
            - cell "Inyo" [ref=e1285]
            - cell "High" [ref=e1286]
            - cell "Fair" [ref=e1287]
            - cell "1908" [ref=e1288]
            - cell "8,376" [ref=e1289]
            - cell "Yes" [ref=e1290]
            - cell "Study or design underway" [ref=e1291]
          - row [ref=e1292]:
            - cell [ref=e1293]:
              - img "Grade C, Concern" [ref=e1294]: C
            - cell [ref=e1295]:
              - link "Lake Combie" [ref=e1296] [cursor=pointer]:
                - /url: /dam/CA00249
            - cell "Nevada" [ref=e1297]
            - cell "High" [ref=e1298]
            - cell "Fair" [ref=e1299]
            - cell "1928" [ref=e1300]
            - cell "5,555" [ref=e1301]
            - cell "Yes" [ref=e1302]
            - cell "Repairs under way" [ref=e1303]
          - row [ref=e1304]:
            - cell [ref=e1305]:
              - img "Grade C, Concern" [ref=e1306]: C
            - cell [ref=e1307]:
              - link "Dorris Dam" [ref=e1308] [cursor=pointer]:
                - /url: /dam/CA10144
            - cell "Modoc" [ref=e1309]
            - cell "High" [ref=e1310]
            - cell "Fair" [ref=e1311]
            - cell "1930" [ref=e1312]
            - cell "33,000" [ref=e1313]
            - cell "Yes" [ref=e1314]
            - cell "No remediation reported" [ref=e1315]
          - row [ref=e1316]:
            - cell [ref=e1317]:
              - img "Grade C, Concern" [ref=e1318]: C
            - cell [ref=e1319]:
              - link "Beardsley" [ref=e1320] [cursor=pointer]:
                - /url: /dam/CA00263
            - cell "Tuolumne" [ref=e1321]
            - cell "High" [ref=e1322]
            - cell "Fair" [ref=e1323]
            - cell "1957" [ref=e1324]
            - cell "97,800" [ref=e1325]
            - cell "Yes" [ref=e1326]
            - cell "Repairs under way" [ref=e1327]
      - paragraph [ref=e1328]:
        - button "Show more" [ref=e1329] [cursor=pointer]
  - contentinfo [ref=e1330]:
    - generic [ref=e1331]:
      - generic [ref=e1332]:
        - strong [ref=e1333]: DamHealth
        - paragraph [ref=e1334]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e1336]:
        - link "Methodology & limitations" [ref=e1337] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e1338] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e1339] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e1341]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
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