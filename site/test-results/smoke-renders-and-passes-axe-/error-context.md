# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> renders and passes axe: /
- Location: e2e/smoke.spec.ts:12:3

# Error details

```
Error: [
 {
  "id": "color-contrast",
  "nodes": 18,
  "help": "Elements must meet minimum color contrast ratio thresholds"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 653

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
+               "bgColor": "#2a78d6",
+               "contrastRatio": 3.33,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#cde2fb",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.33 (foreground color: #cde2fb, background color: #2a78d6, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a class=\"btn btn-primary\" href=\"/explore\" data-discover=\"true\">Explore the map</a>",
+                 "target": Array [
+                   ".btn-primary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.33 (foreground color: #cde2fb, background color: #2a78d6, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a class=\"btn btn-primary\" href=\"/explore\" data-discover=\"true\">Explore the map</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".btn-primary",
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
+         "html": "<a href=\"/methodology\" data-discover=\"true\">How grades are computed →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".section-title > a[href$=\"methodology\"][data-discover=\"true\"]",
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
+         "html": "<a href=\"/explore?grade=F\" data-discover=\"true\">All F-graded dams →</a>",
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
+         "html": "<a href=\"/dam/TX00181\" data-discover=\"true\">Caddo Creek Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/TX00181\"]",
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
+         "html": "<a href=\"/dam/MO30476\" data-discover=\"true\">Gun Club Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MO30476\"]",
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
+         "html": "<a href=\"/dam/TX02691\" data-discover=\"true\">Lake Bulger Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/TX02691\"]",
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
+         "html": "<a href=\"/dam/TX01182\" data-discover=\"true\">Meeker Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/TX01182\"]",
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
+         "html": "<a href=\"/dam/TX03739\" data-discover=\"true\">Lower Raintree Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/TX03739\"]",
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
+         "html": "<a href=\"/dam/TX03738\" data-discover=\"true\">Upper Raintree Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/TX03738\"]",
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
+         "html": "<a href=\"/dam/TX00926\" data-discover=\"true\">Garner Lake Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/TX00926\"]",
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
+         "html": "<a href=\"/dam/SD00967\" data-discover=\"true\">Wolf Creek</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/SD00967\"]",
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
+         "html": "<a href=\"/dam/MS01237\" data-discover=\"true\">Upper Yocona Watershed Structure Y-14-01 Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/MS01237\"]",
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
+         "html": "<a href=\"/dam/TX00373\" data-discover=\"true\">Indian Hills Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/TX00373\"]",
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
+         "html": "<a href=\"/dam/VA075004\" data-discover=\"true\">Killarney Dam</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/VA075004\"]",
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
+         "html": "<a href=\"/dam/NM00682\" data-discover=\"true\">Grady Hamilton</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"/dam/NM00682\"]",
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
    - generic [ref=e30]:
      - heading "America has 91,996 dams. 2,628 of the ones that could kill people are in poor or failing condition." [level=1] [ref=e31]
      - paragraph [ref=e32]: DamHealth shows you the dam upstream of your town, what is wrong with it, and what it would take to fix it — so communities can push for repairs before the next flood.
      - generic [ref=e34]:
        - generic [ref=e35]: Search dams
        - combobox "Search dams" [ref=e36]
      - generic [ref=e37]:
        - link "Explore the map" [ref=e38] [cursor=pointer]:
          - /url: /explore
        - link "Read the national plan" [ref=e39] [cursor=pointer]:
          - /url: /plan
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: 17,430
          - generic [ref=e43]: High-hazard dams — failure would likely cause loss of life
        - generic [ref=e44]:
          - generic [ref=e45]: 4,701
          - generic [ref=e46]: High-hazard dams with no published condition rating
        - generic [ref=e47]:
          - generic [ref=e48]: 2,823
          - generic [ref=e49]: High-hazard dams with no Emergency Action Plan
        - generic [ref=e50]:
          - generic [ref=e51]: $76.7B–$416B
          - generic [ref=e52]: Planning-level cost to bring every dam up to standard
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading "How the nation's dams grade out" [level=2] [ref=e55]
        - link "How grades are computed →" [ref=e56] [cursor=pointer]:
          - /url: /methodology
      - generic [ref=e57]:
        - generic [ref=e58]:
          - heading "All 91,996 dams" [level=3] [ref=e59]
          - generic [ref=e60]:
            - 'img "Grade distribution: A 4,638, B 53,108, C 26,969, D 5,374, F 1,907" [ref=e61]':
              - 'generic "A: 4,638 dams" [ref=e62]':
                - generic [aria-hidden] [ref=e63]: A
                - generic [ref=e66]:
                  - strong [ref=e67]: 4,638
                  - generic [ref=e68]: · 5%
              - 'generic "B: 53,108 dams" [ref=e69]':
                - generic [aria-hidden] [ref=e70]: B
                - generic [ref=e73]:
                  - strong [ref=e74]: 53,108
                  - generic [ref=e75]: · 58%
              - 'generic "C: 26,969 dams" [ref=e76]':
                - generic [aria-hidden] [ref=e77]: C
                - generic [ref=e80]:
                  - strong [ref=e81]: 26,969
                  - generic [ref=e82]: · 29%
              - 'generic "D: 5,374 dams" [ref=e83]':
                - generic [aria-hidden] [ref=e84]: D
                - generic [ref=e87]:
                  - strong [ref=e88]: 5,374
                  - generic [ref=e89]: · 6%
              - 'generic "F: 1,907 dams" [ref=e90]':
                - generic [aria-hidden] [ref=e91]: F
                - generic [ref=e94]:
                  - strong [ref=e95]: 1,907
                  - generic [ref=e96]: · 2%
            - button "Show as table" [ref=e97] [cursor=pointer]
          - paragraph [ref=e98]: "Most dams grade B only because little is on record for them: condition ratings exist only for high-hazard dams. A low-confidence B means \"nothing bad is published\", not \"safe\"."
        - generic [ref=e99]:
          - heading "Where the problems are" [level=3] [ref=e100]
          - generic [ref=e101]:
            - generic [ref=e102]:
              - generic [ref=e103]:
                - text: Show
                - combobox "Show" [ref=e104]:
                  - option "High-hazard dams in Poor/Unsatisfactory condition" [selected]
                  - option "High-hazard dams with no Emergency Action Plan"
                  - option "High-hazard dams with no condition rating"
                  - option "High-hazard dams"
                  - option "Share of high-hazard dams graded D or F"
              - button "Show as table" [ref=e105] [cursor=pointer]
            - img "Map of U.S. states shaded by High-hazard dams in Poor/Unsatisfactory condition. Use the table view for exact values." [ref=e106]:
              - 'generic "Alabama: 2" [ref=e107] [cursor=pointer]'
              - 'generic "Alaska: 4" [ref=e108] [cursor=pointer]'
              - 'generic "Arizona: 34" [ref=e109] [cursor=pointer]'
              - 'generic "Colorado: 37" [ref=e110] [cursor=pointer]'
              - 'generic "Florida: 10" [ref=e111] [cursor=pointer]'
              - 'generic "Georgia: 190" [ref=e112] [cursor=pointer]'
              - 'generic "Indiana: 91" [ref=e113] [cursor=pointer]'
              - 'generic "Kansas: 75" [ref=e114] [cursor=pointer]'
              - 'generic "Maine: 18" [ref=e115] [cursor=pointer]'
              - 'generic "Massachusetts: 47" [ref=e116] [cursor=pointer]'
              - 'generic "Minnesota: 1" [ref=e117] [cursor=pointer]'
              - 'generic "New Jersey: 56" [ref=e118] [cursor=pointer]'
              - 'generic "North Carolina: 235" [ref=e119] [cursor=pointer]'
              - 'generic "North Dakota: 12" [ref=e120] [cursor=pointer]'
              - 'generic "Oklahoma: 38" [ref=e121] [cursor=pointer]'
              - 'generic "Pennsylvania: 145" [ref=e122] [cursor=pointer]'
              - 'generic "South Dakota: 23" [ref=e123] [cursor=pointer]'
              - 'generic "Texas: 182" [ref=e124] [cursor=pointer]'
              - 'generic "Wyoming: 14" [ref=e125] [cursor=pointer]'
              - 'generic "Connecticut: 17" [ref=e126] [cursor=pointer]'
              - 'generic "Missouri: 35" [ref=e127] [cursor=pointer]'
              - 'generic "West Virginia: 42" [ref=e128] [cursor=pointer]'
              - 'generic "Illinois: 0" [ref=e129] [cursor=pointer]'
              - 'generic "New Mexico: 116" [ref=e130] [cursor=pointer]'
              - 'generic "Arkansas: 22" [ref=e131] [cursor=pointer]'
              - 'generic "California: 45" [ref=e132] [cursor=pointer]'
              - 'generic "Delaware: 3" [ref=e133] [cursor=pointer]'
              - generic [ref=e134] [cursor=pointer]
              - 'generic "Hawaii: 87" [ref=e135] [cursor=pointer]'
              - 'generic "Iowa: 5" [ref=e136] [cursor=pointer]'
              - 'generic "Kentucky: 102" [ref=e137] [cursor=pointer]'
              - 'generic "Maryland: 33" [ref=e138] [cursor=pointer]'
              - 'generic "Michigan: 18" [ref=e139] [cursor=pointer]'
              - 'generic "Mississippi: 140" [ref=e140] [cursor=pointer]'
              - 'generic "Montana: 39" [ref=e141] [cursor=pointer]'
              - 'generic "New Hampshire: 57" [ref=e142] [cursor=pointer]'
              - 'generic "New York: 99" [ref=e143] [cursor=pointer]'
              - 'generic "Ohio: 132" [ref=e144] [cursor=pointer]'
              - 'generic "Oregon: 30" [ref=e145] [cursor=pointer]'
              - 'generic "Tennessee: 3" [ref=e146] [cursor=pointer]'
              - 'generic "Utah: 12" [ref=e147] [cursor=pointer]'
              - 'generic "Virginia: 52" [ref=e148] [cursor=pointer]'
              - 'generic "Washington: 51" [ref=e149] [cursor=pointer]'
              - 'generic "Wisconsin: 6" [ref=e150] [cursor=pointer]'
              - 'generic "Nebraska: 12" [ref=e151] [cursor=pointer]'
              - 'generic "South Carolina: 156" [ref=e152] [cursor=pointer]'
              - 'generic "Puerto Rico: 12"'
              - 'generic "Idaho: 4" [ref=e153] [cursor=pointer]'
              - 'generic "Nevada: 26" [ref=e154] [cursor=pointer]'
              - 'generic "Vermont: 20" [ref=e155] [cursor=pointer]'
              - 'generic "Louisiana: 4" [ref=e156] [cursor=pointer]'
              - 'generic "Rhode Island: 34" [ref=e157] [cursor=pointer]'
            - generic [ref=e158]:
              - generic [ref=e159]: Hover or focus a state; click to open it.
              - generic [aria-hidden] [ref=e160]:
                - generic [ref=e161]: fewer
                - generic [ref=e169]: more
    - generic [ref=e170]:
      - generic [ref=e171]:
        - heading "Unsatisfactory, high-hazard, and large" [level=2] [ref=e172]
        - link "All F-graded dams →" [ref=e173] [cursor=pointer]:
          - /url: /explore?grade=F
      - paragraph [ref=e174]:
        - text: These dams carry an
        - strong [ref=e175]: Unsatisfactory
        - text: condition rating — a deficiency that regulators say needs immediate or emergency action — and a High hazard classification, ranked by the Dam Health Index and reservoir size.
      - table [ref=e177]:
        - rowgroup [ref=e178]:
          - row [ref=e179]:
            - columnheader "Grade" [ref=e180]
            - columnheader "Dam" [ref=e181]
            - columnheader "State" [ref=e182]
            - columnheader "Built" [ref=e183]
            - columnheader "Height (ft)" [ref=e184]
            - columnheader "Storage (ac-ft)" [ref=e185]
            - columnheader "Plan status" [ref=e186]
        - rowgroup [ref=e187]:
          - row [ref=e188]:
            - cell [ref=e189]:
              - img "Grade F, Critical" [ref=e190]: F
            - cell [ref=e191]:
              - link "Caddo Creek Lake Dam" [ref=e192] [cursor=pointer]:
                - /url: /dam/TX00181
            - cell "TX" [ref=e193]
            - cell "1962" [ref=e194]
            - cell "31" [ref=e195]
            - cell "9,342" [ref=e196]
            - cell "Problem identified, no funding" [ref=e197]
          - row [ref=e198]:
            - cell [ref=e199]:
              - img "Grade F, Critical" [ref=e200]: F
            - cell [ref=e201]:
              - link "Gun Club Lake Dam" [ref=e202] [cursor=pointer]:
                - /url: /dam/MO30476
            - cell "MO" [ref=e203]
            - cell "1962" [ref=e204]
            - cell "85" [ref=e205]
            - cell "1,400" [ref=e206]
            - cell "No public plan found" [ref=e207]
          - row [ref=e208]:
            - cell [ref=e209]:
              - img "Grade F, Critical" [ref=e210]: F
            - cell [ref=e211]:
              - link "Lake Bulger Dam" [ref=e212] [cursor=pointer]:
                - /url: /dam/TX02691
            - cell "TX" [ref=e213]
            - cell "1923" [ref=e214]
            - cell "22" [ref=e215]
            - cell "2,000" [ref=e216]
            - cell "Problem identified, no funding" [ref=e217]
          - row [ref=e218]:
            - cell [ref=e219]:
              - img "Grade F, Critical" [ref=e220]: F
            - cell [ref=e221]:
              - link "Meeker Lake Dam" [ref=e222] [cursor=pointer]:
                - /url: /dam/TX01182
            - cell "TX" [ref=e223]
            - cell "1959" [ref=e224]
            - cell "44" [ref=e225]
            - cell "980" [ref=e226]
            - cell "Problem identified, no funding" [ref=e227]
          - row [ref=e228]:
            - cell [ref=e229]:
              - img "Grade F, Critical" [ref=e230]: F
            - cell [ref=e231]:
              - link "Lower Raintree Lake Dam" [ref=e232] [cursor=pointer]:
                - /url: /dam/TX03739
            - cell "TX" [ref=e233]
            - cell "1970" [ref=e234]
            - cell "34" [ref=e235]
            - cell "846" [ref=e236]
            - cell "Problem identified, no funding" [ref=e237]
          - row [ref=e238]:
            - cell [ref=e239]:
              - img "Grade F, Critical" [ref=e240]: F
            - cell [ref=e241]:
              - link "Upper Raintree Lake Dam" [ref=e242] [cursor=pointer]:
                - /url: /dam/TX03738
            - cell "TX" [ref=e243]
            - cell "1970" [ref=e244]
            - cell "42" [ref=e245]
            - cell "720" [ref=e246]
            - cell "Problem identified, no funding" [ref=e247]
          - row [ref=e248]:
            - cell [ref=e249]:
              - img "Grade F, Critical" [ref=e250]: F
            - cell [ref=e251]:
              - link "Garner Lake Dam" [ref=e252] [cursor=pointer]:
                - /url: /dam/TX00926
            - cell "TX" [ref=e253]
            - cell "1945" [ref=e254]
            - cell "19" [ref=e255]
            - cell "514" [ref=e256]
            - cell "Problem identified, no funding" [ref=e257]
          - row [ref=e258]:
            - cell [ref=e259]:
              - img "Grade F, Critical" [ref=e260]: F
            - cell [ref=e261]:
              - link "Wolf Creek" [ref=e262] [cursor=pointer]:
                - /url: /dam/SD00967
            - cell "SD" [ref=e263]
            - cell "1965" [ref=e264]
            - cell "24" [ref=e265]
            - cell "371" [ref=e266]
            - cell "Problem identified, no funding" [ref=e267]
          - row [ref=e268]:
            - cell [ref=e269]:
              - img "Grade F, Critical" [ref=e270]: F
            - cell [ref=e271]:
              - link "Upper Yocona Watershed Structure Y-14-01 Dam" [ref=e272] [cursor=pointer]:
                - /url: /dam/MS01237
            - cell "MS" [ref=e273]
            - cell "1965" [ref=e274]
            - cell "28" [ref=e275]
            - cell "368" [ref=e276]
            - cell "Problem identified, no funding" [ref=e277]
          - row [ref=e278]:
            - cell [ref=e279]:
              - img "Grade F, Critical" [ref=e280]: F
            - cell [ref=e281]:
              - link "Indian Hills Dam" [ref=e282] [cursor=pointer]:
                - /url: /dam/TX00373
            - cell "TX" [ref=e283]
            - cell "1969" [ref=e284]
            - cell "20" [ref=e285]
            - cell "276" [ref=e286]
            - cell "Problem identified, no funding" [ref=e287]
          - row [ref=e288]:
            - cell [ref=e289]:
              - img "Grade F, Critical" [ref=e290]: F
            - cell [ref=e291]:
              - link "Killarney Dam" [ref=e292] [cursor=pointer]:
                - /url: /dam/VA075004
            - cell "VA" [ref=e293]
            - cell "1969" [ref=e294]
            - cell "24" [ref=e295]
            - cell "144" [ref=e296]
            - cell "Problem identified, no funding" [ref=e297]
          - row [ref=e298]:
            - cell [ref=e299]:
              - img "Grade F, Critical" [ref=e300]: F
            - cell [ref=e301]:
              - link "Grady Hamilton" [ref=e302] [cursor=pointer]:
                - /url: /dam/NM00682
            - cell "NM" [ref=e303]
            - cell "—" [ref=e304]
            - cell "24" [ref=e305]
            - cell "118" [ref=e306]
            - cell "Problem identified, no funding" [ref=e307]
    - generic [ref=e309]:
      - generic [ref=e310]:
        - heading "For communities" [level=2] [ref=e311]
        - paragraph [ref=e312]: Find your dam. Learn what its grade means, who owns it, who regulates it, and whether anyone has a plan to fix it. Then use our letter templates and meeting checklist to get it funded.
        - link "Community guide →" [ref=e313] [cursor=pointer]:
          - /url: /community
      - generic [ref=e314]:
        - heading "For engineers" [level=2] [ref=e315]
        - paragraph [ref=e316]: "Issue codes, trigger logic, failure-mode checklists, and work-breakdown plans by horizon for every dam — plus the open problems list: 4,701 high-hazard dams with no rating on record."
        - link "Engineering library →" [ref=e317] [cursor=pointer]:
          - /url: /engineering
  - contentinfo [ref=e318]:
    - generic [ref=e319]:
      - generic [ref=e320]:
        - strong [ref=e321]: DamHealth
        - paragraph [ref=e322]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - paragraph [ref=e324]:
        - link "Methodology & limitations" [ref=e325] [cursor=pointer]:
          - /url: /methodology
        - link "Take action" [ref=e326] [cursor=pointer]:
          - /url: /act
        - link "Official National Inventory of Dams" [ref=e327] [cursor=pointer]:
          - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e329]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
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