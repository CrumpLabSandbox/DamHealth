# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /states
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 55,
  "help": "Elements must meet minimum color contrast ratio thresholds"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 1948

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
+         "html": "<a href=\"/state/AL\" data-discover=\"true\">Alabama</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/AL\"]",
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
+         "html": "<a href=\"/state/AK\" data-discover=\"true\">Alaska</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/AK\"]",
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
+         "html": "<a href=\"/state/AZ\" data-discover=\"true\">Arizona</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/AZ\"]",
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
+         "html": "<a href=\"/state/AR\" data-discover=\"true\">Arkansas</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/AR\"]",
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
+         "html": "<a href=\"/state/CA\" data-discover=\"true\">California</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/CA\"]",
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
+         "html": "<a href=\"/state/CO\" data-discover=\"true\">Colorado</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/CO\"]",
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
+         "html": "<a href=\"/state/CT\" data-discover=\"true\">Connecticut</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/CT\"]",
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
+         "html": "<a href=\"/state/DE\" data-discover=\"true\">Delaware</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/DE\"]",
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
+         "html": "<a href=\"/state/FL\" data-discover=\"true\">Florida</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/FL\"]",
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
+         "html": "<a href=\"/state/GA\" data-discover=\"true\">Georgia</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/GA\"]",
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
+         "html": "<a href=\"/state/GU\" data-discover=\"true\">Guam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/GU\"]",
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
+         "html": "<a href=\"/state/HI\" data-discover=\"true\">Hawaii</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/HI\"]",
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
+         "html": "<a href=\"/state/ID\" data-discover=\"true\">Idaho</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/ID\"]",
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
+         "html": "<a href=\"/state/IL\" data-discover=\"true\">Illinois</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/IL\"]",
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
+         "html": "<a href=\"/state/IN\" data-discover=\"true\">Indiana</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/IN\"]",
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
+         "html": "<a href=\"/state/IA\" data-discover=\"true\">Iowa</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/IA\"]",
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
+         "html": "<a href=\"/state/KS\" data-discover=\"true\">Kansas</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/KS\"]",
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
+         "html": "<a href=\"/state/KY\" data-discover=\"true\">Kentucky</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/KY\"]",
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
+         "html": "<a href=\"/state/LA\" data-discover=\"true\">Louisiana</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/LA\"]",
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
+         "html": "<a href=\"/state/ME\" data-discover=\"true\">Maine</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/ME\"]",
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
+         "html": "<a href=\"/state/MD\" data-discover=\"true\">Maryland</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/MD\"]",
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
+         "html": "<a href=\"/state/MA\" data-discover=\"true\">Massachusetts</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/MA\"]",
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
+         "html": "<a href=\"/state/MN\" data-discover=\"true\">Minnesota</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/MN\"]",
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
+         "html": "<a href=\"/state/MS\" data-discover=\"true\">Mississippi</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/MS\"]",
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
+         "html": "<a href=\"/state/MO\" data-discover=\"true\">Missouri</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/MO\"]",
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
+         "html": "<a href=\"/state/MT\" data-discover=\"true\">Montana</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/MT\"]",
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
+         "html": "<a href=\"/state/NE\" data-discover=\"true\">Nebraska</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/NE\"]",
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
+         "html": "<a href=\"/state/NH\" data-discover=\"true\">New Hampshire</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/NH\"]",
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
+         "html": "<a href=\"/state/NJ\" data-discover=\"true\">New Jersey</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/NJ\"]",
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
+         "html": "<a href=\"/state/NM\" data-discover=\"true\">New Mexico</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/NM\"]",
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
+         "html": "<a href=\"/state/NY\" data-discover=\"true\">New York</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/NY\"]",
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
+         "html": "<a href=\"/state/NC\" data-discover=\"true\">North Carolina</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/NC\"]",
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
+         "html": "<a href=\"/state/ND\" data-discover=\"true\">North Dakota</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/ND\"]",
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
+         "html": "<a href=\"/state/OH\" data-discover=\"true\">Ohio</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/OH\"]",
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
+         "html": "<a href=\"/state/OK\" data-discover=\"true\">Oklahoma</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/OK\"]",
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
+         "html": "<a href=\"/state/OR\" data-discover=\"true\">Oregon</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/OR\"]",
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
+         "html": "<a href=\"/state/PA\" data-discover=\"true\">Pennsylvania</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/PA\"]",
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
+         "html": "<a href=\"/state/PR\" data-discover=\"true\">Puerto Rico</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/PR\"]",
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
+         "html": "<a href=\"/state/RI\" data-discover=\"true\">Rhode Island</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/RI\"]",
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
+         "html": "<a href=\"/state/SC\" data-discover=\"true\">South Carolina</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/SC\"]",
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
+         "html": "<a href=\"/state/SD\" data-discover=\"true\">South Dakota</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/SD\"]",
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
+         "html": "<a href=\"/state/TN\" data-discover=\"true\">Tennessee</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/TN\"]",
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
+         "html": "<a href=\"/state/TX\" data-discover=\"true\">Texas</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/TX\"]",
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
+         "html": "<a href=\"/state/UT\" data-discover=\"true\">Utah</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/UT\"]",
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
+         "html": "<a href=\"/state/VT\" data-discover=\"true\">Vermont</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/VT\"]",
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
+         "html": "<a href=\"/state/VA\" data-discover=\"true\">Virginia</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/VA\"]",
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
+         "html": "<a href=\"/state/WA\" data-discover=\"true\">Washington</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/WA\"]",
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
+         "html": "<a href=\"/state/WV\" data-discover=\"true\">West Virginia</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/WV\"]",
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
+         "html": "<a href=\"/state/WI\" data-discover=\"true\">Wisconsin</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/WI\"]",
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
+         "html": "<a href=\"/state/WY\" data-discover=\"true\">Wyoming</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/state/WY\"]",
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
      - heading "Dam health by state" [level=1] [ref=e30]
      - paragraph [ref=e31]: Every state runs its own dam safety program. The columns below count dams in the National Inventory, high-hazard dams (failure would likely cause loss of life), how many of those are rated Poor or Unsatisfactory, how many have no Emergency Action Plan, and the planning-level cost band to bring the state's dams up to standard.
      - table [ref=e33]:
        - rowgroup [ref=e34]:
          - row [ref=e35]:
            - columnheader "State" [ref=e36]
            - columnheader "Dams" [ref=e37]
            - columnheader "High hazard" [ref=e38]
            - columnheader "Poor / Unsat." [ref=e39]
            - columnheader "Not rated" [ref=e40]
            - columnheader "No EAP" [ref=e41]
            - columnheader "D & F grades" [ref=e42]
            - columnheader "Est. cost" [ref=e43]
        - rowgroup [ref=e44]:
          - row [ref=e45]:
            - cell [ref=e46]:
              - link "Alabama" [ref=e47] [cursor=pointer]:
                - /url: /state/AL
            - cell "2,263" [ref=e48]
            - cell "217" [ref=e49]
            - cell "2" [ref=e50]
            - cell "202" [ref=e51]
            - cell "178" [ref=e52]
            - cell "561" [ref=e53]
            - cell "$1.2B – $6.5B" [ref=e54]
          - row [ref=e55]:
            - cell [ref=e56]:
              - link "Alaska" [ref=e57] [cursor=pointer]:
                - /url: /state/AK
            - cell "105" [ref=e58]
            - cell "30" [ref=e59]
            - cell "4" [ref=e60]
            - cell "3" [ref=e61]
            - cell "3" [ref=e62]
            - cell "16" [ref=e63]
            - cell "$183M – $1B" [ref=e64]
          - row [ref=e65]:
            - cell [ref=e66]:
              - link "Arizona" [ref=e67] [cursor=pointer]:
                - /url: /state/AZ
            - cell "376" [ref=e68]
            - cell "164" [ref=e69]
            - cell "34" [ref=e70]
            - cell "31" [ref=e71]
            - cell "13" [ref=e72]
            - cell "36" [ref=e73]
            - cell "$1.6B – $9.2B" [ref=e74]
          - row [ref=e75]:
            - cell [ref=e76]:
              - link "Arkansas" [ref=e77] [cursor=pointer]:
                - /url: /state/AR
            - cell "1,257" [ref=e78]
            - cell "191" [ref=e79]
            - cell "22" [ref=e80]
            - cell "73" [ref=e81]
            - cell "9" [ref=e82]
            - cell "171" [ref=e83]
            - cell "$1.4B – $7.5B" [ref=e84]
          - row [ref=e85]:
            - cell [ref=e86]:
              - link "California" [ref=e87] [cursor=pointer]:
                - /url: /state/CA
            - cell "1,488" [ref=e88]
            - cell "856" [ref=e89]
            - cell "45" [ref=e90]
            - cell "121" [ref=e91]
            - cell "80" [ref=e92]
            - cell "86" [ref=e93]
            - cell "$5.4B – $31.6B" [ref=e94]
          - row [ref=e95]:
            - cell [ref=e96]:
              - link "Colorado" [ref=e97] [cursor=pointer]:
                - /url: /state/CO
            - cell "1,785" [ref=e98]
            - cell "459" [ref=e99]
            - cell "37" [ref=e100]
            - cell "68" [ref=e101]
            - cell "4" [ref=e102]
            - cell "81" [ref=e103]
            - cell "$2.7B – $14.9B" [ref=e104]
          - row [ref=e105]:
            - cell [ref=e106]:
              - link "Connecticut" [ref=e107] [cursor=pointer]:
                - /url: /state/CT
            - cell "784" [ref=e108]
            - cell "250" [ref=e109]
            - cell "17" [ref=e110]
            - cell "24" [ref=e111]
            - cell "21" [ref=e112]
            - cell "64" [ref=e113]
            - cell "$465M – $2.5B" [ref=e114]
          - row [ref=e115]:
            - cell [ref=e116]:
              - link "Delaware" [ref=e117] [cursor=pointer]:
                - /url: /state/DE
            - cell "83" [ref=e118]
            - cell "63" [ref=e119]
            - cell "3" [ref=e120]
            - cell "14" [ref=e121]
            - cell "4" [ref=e122]
            - cell "22" [ref=e123]
            - cell "$32M – $169M" [ref=e124]
          - row [ref=e125]:
            - cell [ref=e126]:
              - link "Florida" [ref=e127] [cursor=pointer]:
                - /url: /state/FL
            - cell "1,113" [ref=e128]
            - cell "116" [ref=e129]
            - cell "10" [ref=e130]
            - cell "48" [ref=e131]
            - cell "71" [ref=e132]
            - cell "246" [ref=e133]
            - cell "$1.1B – $5.9B" [ref=e134]
          - row [ref=e135]:
            - cell [ref=e136]:
              - link "Georgia" [ref=e137] [cursor=pointer]:
                - /url: /state/GA
            - cell "5,286" [ref=e138]
            - cell "667" [ref=e139]
            - cell "190" [ref=e140]
            - cell "177" [ref=e141]
            - cell "118" [ref=e142]
            - cell "324" [ref=e143]
            - cell "$2.6B – $13.4B" [ref=e144]
          - row [ref=e145]:
            - cell [ref=e146]:
              - link "Guam" [ref=e147] [cursor=pointer]:
                - /url: /state/GU
            - cell "1" [ref=e148]
            - cell "1" [ref=e149]
            - cell "0" [ref=e150]
            - cell "0" [ref=e151]
            - cell "0" [ref=e152]
            - cell "0" [ref=e153]
            - cell "$8M – $50M" [ref=e154]
          - row [ref=e155]:
            - cell [ref=e156]:
              - link "Hawaii" [ref=e157] [cursor=pointer]:
                - /url: /state/HI
            - cell "134" [ref=e158]
            - cell "126" [ref=e159]
            - cell "87" [ref=e160]
            - cell "11" [ref=e161]
            - cell "3" [ref=e162]
            - cell "89" [ref=e163]
            - cell "$218M – $1.1B" [ref=e164]
          - row [ref=e165]:
            - cell [ref=e166]:
              - link "Idaho" [ref=e167] [cursor=pointer]:
                - /url: /state/ID
            - cell "453" [ref=e168]
            - cell "99" [ref=e169]
            - cell "4" [ref=e170]
            - cell "21" [ref=e171]
            - cell "2" [ref=e172]
            - cell "37" [ref=e173]
            - cell "$1.3B – $7.5B" [ref=e174]
          - row [ref=e175]:
            - cell [ref=e176]:
              - link "Illinois" [ref=e177] [cursor=pointer]:
                - /url: /state/IL
            - cell "1,659" [ref=e178]
            - cell "257" [ref=e179]
            - cell "0" [ref=e180]
            - cell "254" [ref=e181]
            - cell "53" [ref=e182]
            - cell "95" [ref=e183]
            - cell "$1.1B – $5.7B" [ref=e184]
          - row [ref=e185]:
            - cell [ref=e186]:
              - link "Indiana" [ref=e187] [cursor=pointer]:
                - /url: /state/IN
            - cell "923" [ref=e188]
            - cell "286" [ref=e189]
            - cell "91" [ref=e190]
            - cell "39" [ref=e191]
            - cell "127" [ref=e192]
            - cell "167" [ref=e193]
            - cell "$749M – $3.9B" [ref=e194]
          - row [ref=e195]:
            - cell [ref=e196]:
              - link "Iowa" [ref=e197] [cursor=pointer]:
                - /url: /state/IA
            - cell "4,015" [ref=e198]
            - cell "96" [ref=e199]
            - cell "5" [ref=e200]
            - cell "11" [ref=e201]
            - cell "7" [ref=e202]
            - cell "7" [ref=e203]
            - cell "$2.1B – $10.6B" [ref=e204]
          - row [ref=e205]:
            - cell [ref=e206]:
              - link "Kansas" [ref=e207] [cursor=pointer]:
                - /url: /state/KS
            - cell "6,412" [ref=e208]
            - cell "332" [ref=e209]
            - cell "75" [ref=e210]
            - cell "65" [ref=e211]
            - cell "37" [ref=e212]
            - cell "109" [ref=e213]
            - cell "$3B – $15.3B" [ref=e214]
          - row [ref=e215]:
            - cell [ref=e216]:
              - link "Kentucky" [ref=e217] [cursor=pointer]:
                - /url: /state/KY
            - cell "1,093" [ref=e218]
            - cell "294" [ref=e219]
            - cell "102" [ref=e220]
            - cell "110" [ref=e221]
            - cell "15" [ref=e222]
            - cell "115" [ref=e223]
            - cell "$3.6B – $21B" [ref=e224]
          - row [ref=e225]:
            - cell [ref=e226]:
              - link "Louisiana" [ref=e227] [cursor=pointer]:
                - /url: /state/LA
            - cell "606" [ref=e228]
            - cell "45" [ref=e229]
            - cell "4" [ref=e230]
            - cell "6" [ref=e231]
            - cell "1" [ref=e232]
            - cell "13" [ref=e233]
            - cell "$300M – $1.6B" [ref=e234]
          - row [ref=e235]:
            - cell [ref=e236]:
              - link "Maine" [ref=e237] [cursor=pointer]:
                - /url: /state/ME
            - cell "558" [ref=e238]
            - cell "76" [ref=e239]
            - cell "18" [ref=e240]
            - cell "2" [ref=e241]
            - cell "0" [ref=e242]
            - cell "21" [ref=e243]
            - cell "$197M – $1B" [ref=e244]
          - row [ref=e245]:
            - cell [ref=e246]:
              - link "Maryland" [ref=e247] [cursor=pointer]:
                - /url: /state/MD
            - cell "426" [ref=e248]
            - cell "133" [ref=e249]
            - cell "33" [ref=e250]
            - cell "28" [ref=e251]
            - cell "70" [ref=e252]
            - cell "49" [ref=e253]
            - cell "$387M – $2.1B" [ref=e254]
          - row [ref=e255]:
            - cell [ref=e256]:
              - link "Massachusetts" [ref=e257] [cursor=pointer]:
                - /url: /state/MA
            - cell "1,282" [ref=e258]
            - cell "328" [ref=e259]
            - cell "47" [ref=e260]
            - cell "21" [ref=e261]
            - cell "3" [ref=e262]
            - cell "57" [ref=e263]
            - cell "$587M – $3.1B" [ref=e264]
          - row [ref=e265]:
            - cell [ref=e266]:
              - link "Michigan" [ref=e267] [cursor=pointer]:
                - /url: /state/MI
            - cell "1,035" [ref=e268]
            - cell "157" [ref=e269]
            - cell "18" [ref=e270]
            - cell "17" [ref=e271]
            - cell "5" [ref=e272]
            - cell "54" [ref=e273]
            - cell "$382M – $2B" [ref=e274]
          - row [ref=e275]:
            - cell [ref=e276]:
              - link "Minnesota" [ref=e277] [cursor=pointer]:
                - /url: /state/MN
            - cell "1,152" [ref=e278]
            - cell "47" [ref=e279]
            - cell "1" [ref=e280]
            - cell "22" [ref=e281]
            - cell "1" [ref=e282]
            - cell "11" [ref=e283]
            - cell "$662M – $3.5B" [ref=e284]
          - row [ref=e285]:
            - cell [ref=e286]:
              - link "Mississippi" [ref=e287] [cursor=pointer]:
                - /url: /state/MS
            - cell "6,088" [ref=e288]
            - cell "409" [ref=e289]
            - cell "140" [ref=e290]
            - cell "73" [ref=e291]
            - cell "77" [ref=e292]
            - cell "198" [ref=e293]
            - cell "$1.9B – $9.5B" [ref=e294]
          - row [ref=e295]:
            - cell [ref=e296]:
              - link "Missouri" [ref=e297] [cursor=pointer]:
                - /url: /state/MO
            - cell "5,410" [ref=e298]
            - cell "1,499" [ref=e299]
            - cell "35" [ref=e300]
            - cell "1,015" [ref=e301]
            - cell "55" [ref=e302]
            - cell "1,022" [ref=e303]
            - cell "$3.5B – $17.9B" [ref=e304]
          - row [ref=e305]:
            - cell [ref=e306]:
              - link "Montana" [ref=e307] [cursor=pointer]:
                - /url: /state/MT
            - cell "3,285" [ref=e308]
            - cell "216" [ref=e309]
            - cell "39" [ref=e310]
            - cell "60" [ref=e311]
            - cell "22" [ref=e312]
            - cell "83" [ref=e313]
            - cell "$2B – $11.2B" [ref=e314]
          - row [ref=e315]:
            - cell [ref=e316]:
              - link "Nebraska" [ref=e317] [cursor=pointer]:
                - /url: /state/NE
            - cell "2,998" [ref=e318]
            - cell "158" [ref=e319]
            - cell "12" [ref=e320]
            - cell "26" [ref=e321]
            - cell "1" [ref=e322]
            - cell "18" [ref=e323]
            - cell "$1.5B – $7.6B" [ref=e324]
          - row [ref=e325]:
            - cell [ref=e326]:
              - link "Nevada" [ref=e327] [cursor=pointer]:
                - /url: /state/NV
            - cell "529" [ref=e328]
            - cell "168" [ref=e329]
            - cell "26" [ref=e330]
            - cell "18" [ref=e331]
            - cell "4" [ref=e332]
            - cell "31" [ref=e333]
            - cell "$1B – $5.9B" [ref=e334]
          - row [ref=e335]:
            - cell [ref=e336]:
              - link "New Hampshire" [ref=e337] [cursor=pointer]:
                - /url: /state/NH
            - cell "650" [ref=e338]
            - cell "170" [ref=e339]
            - cell "57" [ref=e340]
            - cell "23" [ref=e341]
            - cell "4" [ref=e342]
            - cell "64" [ref=e343]
            - cell "$334M – $1.7B" [ref=e344]
          - row [ref=e345]:
            - cell [ref=e346]:
              - link "New Jersey" [ref=e347] [cursor=pointer]:
                - /url: /state/NJ
            - cell "834" [ref=e348]
            - cell "238" [ref=e349]
            - cell "56" [ref=e350]
            - cell "6" [ref=e351]
            - cell "1" [ref=e352]
            - cell "65" [ref=e353]
            - cell "$373M – $2B" [ref=e354]
          - row [ref=e355]:
            - cell [ref=e356]:
              - link "New Mexico" [ref=e357] [cursor=pointer]:
                - /url: /state/NM
            - cell "409" [ref=e358]
            - cell "230" [ref=e359]
            - cell "116" [ref=e360]
            - cell "30" [ref=e361]
            - cell "105" [ref=e362]
            - cell "136" [ref=e363]
            - cell "$1.3B – $7.6B" [ref=e364]
          - row [ref=e365]:
            - cell [ref=e366]:
              - link "New York" [ref=e367] [cursor=pointer]:
                - /url: /state/NY
            - cell "1,892" [ref=e368]
            - cell "427" [ref=e369]
            - cell "99" [ref=e370]
            - cell "69" [ref=e371]
            - cell "3" [ref=e372]
            - cell "160" [ref=e373]
            - cell "$1.2B – $6.4B" [ref=e374]
          - row [ref=e375]:
            - cell [ref=e376]:
              - link "North Carolina" [ref=e377] [cursor=pointer]:
                - /url: /state/NC
            - cell "3,490" [ref=e378]
            - cell "1,689" [ref=e379]
            - cell "235" [ref=e380]
            - cell "236" [ref=e381]
            - cell "690" [ref=e382]
            - cell "954" [ref=e383]
            - cell "$2.4B – $12.9B" [ref=e384]
          - row [ref=e385]:
            - cell [ref=e386]:
              - link "North Dakota" [ref=e387] [cursor=pointer]:
                - /url: /state/ND
            - cell "934" [ref=e388]
            - cell "54" [ref=e389]
            - cell "12" [ref=e390]
            - cell "13" [ref=e391]
            - cell "3" [ref=e392]
            - cell "21" [ref=e393]
            - cell "$391M – $2B" [ref=e394]
          - row [ref=e395]:
            - cell [ref=e396]:
              - link "Ohio" [ref=e397] [cursor=pointer]:
                - /url: /state/OH
            - cell "1,398" [ref=e398]
            - cell "423" [ref=e399]
            - cell "132" [ref=e400]
            - cell "64" [ref=e401]
            - cell "98" [ref=e402]
            - cell "177" [ref=e403]
            - cell "$1.3B – $7B" [ref=e404]
          - row [ref=e405]:
            - cell [ref=e406]:
              - link "Oklahoma" [ref=e407] [cursor=pointer]:
                - /url: /state/OK
            - cell "4,961" [ref=e408]
            - cell "428" [ref=e409]
            - cell "38" [ref=e410]
            - cell "74" [ref=e411]
            - cell "30" [ref=e412]
            - cell "69" [ref=e413]
            - cell "$3.1B – $15.9B" [ref=e414]
          - row [ref=e415]:
            - cell [ref=e416]:
              - link "Oregon" [ref=e417] [cursor=pointer]:
                - /url: /state/OR
            - cell "864" [ref=e418]
            - cell "162" [ref=e419]
            - cell "30" [ref=e420]
            - cell "54" [ref=e421]
            - cell "3" [ref=e422]
            - cell "41" [ref=e423]
            - cell "$2B – $11.5B" [ref=e424]
          - row [ref=e425]:
            - cell [ref=e426]:
              - link "Pennsylvania" [ref=e427] [cursor=pointer]:
                - /url: /state/PA
            - cell "1,510" [ref=e428]
            - cell "803" [ref=e429]
            - cell "145" [ref=e430]
            - cell "63" [ref=e431]
            - cell "43" [ref=e432]
            - cell "237" [ref=e433]
            - cell "$1.9B – $10.6B" [ref=e434]
          - row [ref=e435]:
            - cell [ref=e436]:
              - link "Puerto Rico" [ref=e437] [cursor=pointer]:
                - /url: /state/PR
            - cell "36" [ref=e438]
            - cell "36" [ref=e439]
            - cell "12" [ref=e440]
            - cell "0" [ref=e441]
            - cell "0" [ref=e442]
            - cell "12" [ref=e443]
            - cell "$323M – $1.9B" [ref=e444]
          - row [ref=e445]:
            - cell [ref=e446]:
              - link "Rhode Island" [ref=e447] [cursor=pointer]:
                - /url: /state/RI
            - cell "233" [ref=e448]
            - cell "96" [ref=e449]
            - cell "34" [ref=e450]
            - cell "6" [ref=e451]
            - cell "47" [ref=e452]
            - cell "87" [ref=e453]
            - cell "$107M – $563M" [ref=e454]
          - row [ref=e455]:
            - cell [ref=e456]:
              - link "South Carolina" [ref=e457] [cursor=pointer]:
                - /url: /state/SC
            - cell "2,928" [ref=e458]
            - cell "958" [ref=e459]
            - cell "156" [ref=e460]
            - cell "335" [ref=e461]
            - cell "251" [ref=e462]
            - cell "349" [ref=e463]
            - cell "$1.7B – $8.6B" [ref=e464]
          - row [ref=e465]:
            - cell [ref=e466]:
              - link "South Dakota" [ref=e467] [cursor=pointer]:
                - /url: /state/SD
            - cell "2,556" [ref=e468]
            - cell "87" [ref=e469]
            - cell "23" [ref=e470]
            - cell "22" [ref=e471]
            - cell "5" [ref=e472]
            - cell "29" [ref=e473]
            - cell "$1.2B – $6.2B" [ref=e474]
          - row [ref=e475]:
            - cell [ref=e476]:
              - link "Tennessee" [ref=e477] [cursor=pointer]:
                - /url: /state/TN
            - cell "1,217" [ref=e478]
            - cell "255" [ref=e479]
            - cell "3" [ref=e480]
            - cell "107" [ref=e481]
            - cell "0" [ref=e482]
            - cell "13" [ref=e483]
            - cell "$1.1B – $6.2B" [ref=e484]
          - row [ref=e485]:
            - cell [ref=e486]:
              - link "Texas" [ref=e487] [cursor=pointer]:
                - /url: /state/TX
            - cell "7,395" [ref=e488]
            - cell "1,605" [ref=e489]
            - cell "182" [ref=e490]
            - cell "574" [ref=e491]
            - cell "317" [ref=e492]
            - cell "436" [ref=e493]
            - cell "$4.7B – $24.7B" [ref=e494]
          - row [ref=e495]:
            - cell [ref=e496]:
              - link "Utah" [ref=e497] [cursor=pointer]:
                - /url: /state/UT
            - cell "856" [ref=e498]
            - cell "272" [ref=e499]
            - cell "12" [ref=e500]
            - cell "46" [ref=e501]
            - cell "4" [ref=e502]
            - cell "132" [ref=e503]
            - cell "$1.4B – $8B" [ref=e504]
          - row [ref=e505]:
            - cell [ref=e506]:
              - link "Vermont" [ref=e507] [cursor=pointer]:
                - /url: /state/VT
            - cell "360" [ref=e508]
            - cell "68" [ref=e509]
            - cell "20" [ref=e510]
            - cell "10" [ref=e511]
            - cell "0" [ref=e512]
            - cell "39" [ref=e513]
            - cell "$314M – $1.7B" [ref=e514]
          - row [ref=e515]:
            - cell [ref=e516]:
              - link "Virginia" [ref=e517] [cursor=pointer]:
                - /url: /state/VA
            - cell "2,786" [ref=e518]
            - cell "452" [ref=e519]
            - cell "52" [ref=e520]
            - cell "69" [ref=e521]
            - cell "45" [ref=e522]
            - cell "114" [ref=e523]
            - cell "$1.9B – $10.2B" [ref=e524]
          - row [ref=e525]:
            - cell [ref=e526]:
              - link "Washington" [ref=e527] [cursor=pointer]:
                - /url: /state/WA
            - cell "828" [ref=e528]
            - cell "426" [ref=e529]
            - cell "51" [ref=e530]
            - cell "57" [ref=e531]
            - cell "44" [ref=e532]
            - cell "102" [ref=e533]
            - cell "$2.2B – $13.1B" [ref=e534]
          - row [ref=e535]:
            - cell [ref=e536]:
              - link "West Virginia" [ref=e537] [cursor=pointer]:
                - /url: /state/WV
            - cell "614" [ref=e538]
            - cell "497" [ref=e539]
            - cell "42" [ref=e540]
            - cell "205" [ref=e541]
            - cell "120" [ref=e542]
            - cell "160" [ref=e543]
            - cell "$4.1B – $23.8B" [ref=e544]
          - row [ref=e545]:
            - cell [ref=e546]:
              - link "Wisconsin" [ref=e547] [cursor=pointer]:
                - /url: /state/WI
            - cell "1,044" [ref=e548]
            - cell "210" [ref=e549]
            - cell "6" [ref=e550]
            - cell "37" [ref=e551]
            - cell "17" [ref=e552]
            - cell "71" [ref=e553]
            - cell "$389M – $2B" [ref=e554]
          - row [ref=e555]:
            - cell [ref=e556]:
              - link "Wyoming" [ref=e557] [cursor=pointer]:
                - /url: /state/WY
            - cell "1,602" [ref=e558]
            - cell "104" [ref=e559]
            - cell "14" [ref=e560]
            - cell "41" [ref=e561]
            - cell "9" [ref=e562]
            - cell "30" [ref=e563]
            - cell "$1.5B – $8.3B" [ref=e564]
  - contentinfo [ref=e565]:
    - generic [ref=e566]:
      - generic [ref=e567]:
        - strong [ref=e568]: DamHealth
        - paragraph [ref=e569]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e571]:
        - link "Methodology & limitations" [ref=e572] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e573] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e574] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e576]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
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