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
  "id": "target-size",
  "nodes": 19,
  "help": "All touch targets must be 24px large, or leave sufficient space"
 }
]

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 816

- Array []
+ Array [
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
        - link "Dashboard" [ref=e12] [cursor=pointer]:
          - /url: /dashboard
        - link "Explore" [ref=e13] [cursor=pointer]:
          - /url: /explore
        - link "States" [ref=e14] [cursor=pointer]:
          - /url: /states
        - link "Issues" [ref=e15] [cursor=pointer]:
          - /url: /issues
        - link "The Plan" [ref=e16] [cursor=pointer]:
          - /url: /plan
        - link "Case Studies" [ref=e17] [cursor=pointer]:
          - /url: /case-studies
        - link "Community" [ref=e18] [cursor=pointer]:
          - /url: /community
        - link "Engineering" [ref=e19] [cursor=pointer]:
          - /url: /engineering
      - generic [ref=e20]:
        - generic [ref=e22]:
          - generic [ref=e23]: Search dams
          - combobox "Search dams" [ref=e24]
        - group "Choose how information is presented" [ref=e25]:
          - button "Community" [pressed] [ref=e26] [cursor=pointer]
          - button "Engineering" [ref=e27] [cursor=pointer]
        - button "Switch to dark theme" [ref=e28] [cursor=pointer]: ☾
  - main [active] [ref=e29]:
    - generic [ref=e30]:
      - heading "The issues, explained" [level=1] [ref=e31]
      - paragraph [ref=e32]: "Every dam's grade is built from a short list of yes/no flags read from public inventory data. Here is each one: what it means, why it matters, how it is fixed, and how many dams carry it today."
      - generic [ref=e33]:
        - generic [ref=e34]:
          - generic [ref=e35]:
            - heading "Rated Unsatisfactory" [level=2] [ref=e37]
            - generic [ref=e38]: Critical
          - paragraph [ref=e39]:
            - text: condition ·
            - strong [ref=e40]: "456"
            - text: dams
          - paragraph [ref=e41]: Inspectors found a safety deficiency that needs immediate or emergency action.
          - group [ref=e42]:
            - generic "How it gets fixed" [ref=e43] [cursor=pointer]
          - paragraph [ref=e44]:
            - link "See dams on the map →" [ref=e45] [cursor=pointer]:
              - /url: /explore?grade=F
        - generic [ref=e46]:
          - generic [ref=e47]:
            - heading "No Emergency Action Plan" [level=2] [ref=e49]
            - generic [ref=e50]: Serious
          - paragraph [ref=e51]:
            - text: readiness ·
            - strong [ref=e52]: 2,823
            - text: dams
          - paragraph [ref=e53]: There is no written plan for warning and evacuating people downstream if the dam fails.
          - group [ref=e54]:
            - generic "How it gets fixed" [ref=e55] [cursor=pointer]
          - paragraph [ref=e56]:
            - link "See dams on the map →" [ref=e57] [cursor=pointer]:
              - /url: /explore?hz=H
        - generic [ref=e58]:
          - generic [ref=e59]:
            - heading "Rated Poor" [level=2] [ref=e61]
            - generic [ref=e62]: Serious
          - paragraph [ref=e63]:
            - text: condition ·
            - strong [ref=e64]: 2,172
            - text: dams
          - paragraph [ref=e65]: A safety deficiency has been found for conditions that can realistically happen. Repairs are needed.
          - group [ref=e66]:
            - generic "How it gets fixed" [ref=e67] [cursor=pointer]
          - paragraph [ref=e68]:
            - link "See dams on the map →" [ref=e69] [cursor=pointer]:
              - /url: /explore?grade=D
        - generic [ref=e70]:
          - generic [ref=e71]:
            - heading "Inspection overdue" [level=2] [ref=e73]
            - generic [ref=e74]: Significant
          - paragraph [ref=e75]:
            - text: readiness ·
            - strong [ref=e76]: 20,078
            - text: dams
          - paragraph [ref=e77]: The last recorded inspection is older than the required inspection interval.
          - group [ref=e78]:
            - generic "How it gets fixed" [ref=e79] [cursor=pointer]
          - paragraph [ref=e80]:
            - link "See dams on the map →" [ref=e81] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e82]:
          - generic [ref=e83]:
            - heading "Condition not rated" [level=2] [ref=e85]
            - generic [ref=e86]: Significant
          - paragraph [ref=e87]:
            - text: condition ·
            - strong [ref=e88]: 13,247
            - text: dams
          - paragraph [ref=e89]: This dam could cause loss of life or serious damage if it failed, yet no condition rating is published.
          - group [ref=e90]:
            - generic "How it gets fixed" [ref=e91] [cursor=pointer]
          - paragraph [ref=e92]:
            - link "See dams on the map →" [ref=e93] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e94]:
          - generic [ref=e95]:
            - heading "Over 100 years old" [level=2] [ref=e97]
            - generic [ref=e98]: Significant
          - paragraph [ref=e99]:
            - text: condition ·
            - strong [ref=e100]: 7,140
            - text: dams
          - paragraph [ref=e101]: Built more than a century ago, before modern design standards, with no recorded major modification in the last 25 years.
          - group [ref=e102]:
            - generic "How it gets fixed" [ref=e103] [cursor=pointer]
          - paragraph [ref=e104]:
            - link "See dams on the map →" [ref=e105] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e106]:
          - generic [ref=e107]:
            - heading "No inspection on record" [level=2] [ref=e109]
            - generic [ref=e110]: Significant
          - paragraph [ref=e111]:
            - text: readiness ·
            - strong [ref=e112]: 3,365
            - text: dams
          - paragraph [ref=e113]: No inspection date is recorded for a dam whose failure could hurt people.
          - group [ref=e114]:
            - generic "How it gets fixed" [ref=e115] [cursor=pointer]
          - paragraph [ref=e116]:
            - link "See dams on the map →" [ref=e117] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e118]:
          - generic [ref=e119]:
            - heading "No Emergency Action Plan" [level=2] [ref=e121]
            - generic [ref=e122]: Significant
          - paragraph [ref=e123]:
            - text: readiness ·
            - strong [ref=e124]: 2,824
            - text: dams
          - paragraph [ref=e125]: There is no written plan for warning people downstream if the dam fails.
          - group [ref=e126]:
            - generic "How it gets fixed" [ref=e127] [cursor=pointer]
          - paragraph [ref=e128]:
            - link "See dams on the map →" [ref=e129] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e130]:
          - generic [ref=e131]:
            - heading "No regulating agency recorded" [level=2] [ref=e133]
            - generic [ref=e134]: Significant
          - paragraph [ref=e135]:
            - text: readiness ·
            - strong [ref=e136]: 2,823
            - text: dams
          - paragraph [ref=e137]: No state or federal agency is recorded as regulating this dam.
          - group [ref=e138]:
            - generic "How it gets fixed" [ref=e139] [cursor=pointer]
          - paragraph [ref=e140]:
            - link "See dams on the map →" [ref=e141] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e142]:
          - generic [ref=e143]:
            - heading "Very large reservoir or tall dam" [level=2] [ref=e145]
            - generic [ref=e146]: Significant
          - paragraph [ref=e147]:
            - text: consequence ·
            - strong [ref=e148]: 1,832
            - text: dams
          - paragraph [ref=e149]: This is a large dam; a failure would release a very large volume of water.
          - group [ref=e150]:
            - generic "How it gets fixed" [ref=e151] [cursor=pointer]
          - paragraph [ref=e152]:
            - link "See dams on the map →" [ref=e153] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e154]:
          - generic [ref=e155]:
            - heading "Under enforcement action" [level=2] [ref=e157]
            - generic [ref=e158]: Significant
          - paragraph [ref=e159]:
            - text: readiness ·
            - strong [ref=e160]: "400"
            - text: dams
          - paragraph [ref=e161]: Regulators have an enforcement action pending or ongoing against the owner.
          - group [ref=e162]:
            - generic "How it gets fixed" [ref=e163] [cursor=pointer]
          - paragraph [ref=e164]:
            - link "See dams on the map →" [ref=e165] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e166]:
          - generic [ref=e167]:
            - heading "Over 75 years old" [level=2] [ref=e169]
            - generic [ref=e170]: Moderate
          - paragraph [ref=e171]:
            - text: condition ·
            - strong [ref=e172]: 10,793
            - text: dams
          - paragraph [ref=e173]: Older than 75 years with no recorded major modification in the last 25 years.
          - group [ref=e174]:
            - generic "How it gets fixed" [ref=e175] [cursor=pointer]
          - paragraph [ref=e176]:
            - link "See dams on the map →" [ref=e177] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e178]:
          - generic [ref=e179]:
            - heading "Hazard class undetermined" [level=2] [ref=e181]
            - generic [ref=e182]: Moderate
          - paragraph [ref=e183]:
            - text: readiness ·
            - strong [ref=e184]: 10,430
            - text: dams
          - paragraph [ref=e185]: Nobody has determined what would happen downstream if this dam failed.
          - group [ref=e186]:
            - generic "How it gets fixed" [ref=e187] [cursor=pointer]
          - paragraph [ref=e188]:
            - link "See dams on the map →" [ref=e189] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e190]:
          - generic [ref=e191]:
            - heading "Rated Fair" [level=2] [ref=e193]
            - generic [ref=e194]: Moderate
          - paragraph [ref=e195]:
            - text: condition ·
            - strong [ref=e196]: 4,963
            - text: dams
          - paragraph [ref=e197]: No problems under normal conditions, but a rare flood or earthquake could cause one.
          - group [ref=e198]:
            - generic "How it gets fixed" [ref=e199] [cursor=pointer]
          - paragraph [ref=e200]:
            - link "See dams on the map →" [ref=e201] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e202]:
          - generic [ref=e203]:
            - heading "Privately owned, needs work" [level=2] [ref=e205]
            - generic [ref=e206]: Moderate
          - paragraph [ref=e207]:
            - text: readiness ·
            - strong [ref=e208]: 3,578
            - text: dams
          - paragraph [ref=e209]: A private owner must pay for repairs on a dam that could endanger others, and private owners often lack the funds.
          - group [ref=e210]:
            - generic "How it gets fixed" [ref=e211] [cursor=pointer]
          - paragraph [ref=e212]:
            - link "See dams on the map →" [ref=e213] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e214]:
          - generic [ref=e215]:
            - heading "Only 2019 data available" [level=2] [ref=e217]
            - generic [ref=e218]: Note
          - paragraph [ref=e219]:
            - text: readiness ·
            - strong [ref=e220]: 75,672
            - text: dams
          - paragraph [ref=e221]: Our most recent record for this dam is from 2019.
          - group [ref=e222]:
            - generic "How it gets fixed" [ref=e223] [cursor=pointer]
          - paragraph [ref=e224]:
            - link "See dams on the map →" [ref=e225] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e226]:
          - generic [ref=e227]:
            - heading "Past typical design life" [level=2] [ref=e229]
            - generic [ref=e230]: Note
          - paragraph [ref=e231]:
            - text: condition ·
            - strong [ref=e232]: 39,398
            - text: dams
          - paragraph [ref=e233]: Older than 50 years — the typical design life — with no recorded major modification.
          - group [ref=e234]:
            - generic "How it gets fixed" [ref=e235] [cursor=pointer]
          - paragraph [ref=e236]:
            - link "See dams on the map →" [ref=e237] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e238]:
          - generic [ref=e239]:
            - heading "Spillway type unknown" [level=2] [ref=e241]
            - generic [ref=e242]: Note
          - paragraph [ref=e243]:
            - text: condition ·
            - strong [ref=e244]: 5,596
            - text: dams
          - paragraph [ref=e245]: The inventory does not record how this dam passes floodwater.
          - group [ref=e246]:
            - generic "How it gets fixed" [ref=e247] [cursor=pointer]
          - paragraph [ref=e248]:
            - link "See dams on the map →" [ref=e249] [cursor=pointer]:
              - /url: /explore
        - generic [ref=e250]:
          - generic [ref=e251]:
            - heading "Federal rating not published" [level=2] [ref=e253]
            - generic [ref=e254]: Note
          - paragraph [ref=e255]:
            - text: condition ·
            - strong [ref=e256]: 1,591
            - text: dams
          - paragraph [ref=e257]: Federal dams are assessed under their own agency's risk program, but the rating is not published in the National Inventory.
          - group [ref=e258]:
            - generic "How it gets fixed" [ref=e259] [cursor=pointer]
          - paragraph [ref=e260]:
            - link "See dams on the map →" [ref=e261] [cursor=pointer]:
              - /url: /explore
  - contentinfo [ref=e262]:
    - generic [ref=e263]:
      - generic [ref=e264]:
        - strong [ref=e265]: DamHealth
        - paragraph [ref=e266]: "An independent advocacy project. Data: U.S. Army Corps of Engineers National Inventory of Dams (2019 full inventory; March 2026 high-hazard extract), U.S. Census Bureau, and cited public sources."
      - list [ref=e268]:
        - listitem [ref=e269]:
          - link "Methodology & limitations" [ref=e270] [cursor=pointer]:
            - /url: /methodology
        - listitem [ref=e271]:
          - link "National dashboard" [ref=e272] [cursor=pointer]:
            - /url: /dashboard
        - listitem [ref=e273]:
          - link "Take action" [ref=e274] [cursor=pointer]:
            - /url: /act
        - listitem [ref=e275]:
          - link "Official National Inventory of Dams" [ref=e276] [cursor=pointer]:
            - /url: https://nid.sec.usace.army.mil/
      - paragraph [ref=e278]: The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam.
```

# Test source

```ts
  1  | import AxeBuilder from '@axe-core/playwright'
  2  | import { expect, test } from '@playwright/test'
  3  | 
  4  | const ROUTES = ['/', '/dashboard', '/dam/MI00549', '/dam/NV10122?view=engineering', '/state/CA', '/states', '/issues', '/plan', '/community', '/engineering', '/act?dam=MI00549', '/methodology']
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