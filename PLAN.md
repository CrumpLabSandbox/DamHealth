# DamHealth — Implementation Plan

A public, accessible advocacy website covering every dam in the U.S. National Inventory of Dams (NID), scoring each one's health, visualizing its issues, and prescribing 1-, 5-, and 10-year improvement plans.

---

## 0. What the environment discovery found

| Finding | Consequence |
|---|---|
| This cloud session can reach **only GitHub and npm**. `nid.sec.usace.army.mil`, data.gov, HIFLD/ArcGIS, FEMA, ASDSO, Wikipedia, OSM tiles are all blocked. | Raw NID cannot be pulled directly here. Must source data from GitHub mirrors (done — see below) or have the NID host allow-listed. |
| `kalchikee/dam-failure-explorer` (GitHub) holds a **March 15, 2026 NID extract of all 16,805 high-hazard-potential dams** with condition assessment, EAP status, last inspection date, owner, type, purpose, height, storage, year, coordinates. | Gives us *current* condition data for exactly the dams that matter most. |
| `bcongdon/nid-data` (GitHub) holds the **full 2019 NID: 91,457 dams, 70 columns**, 91,223 with coordinates, all hazard classes (L 54,463 / H 14,254 / S 10,741 / N 7,193 / U 4,806). No condition column populated. | Gives full national coverage for the map, search and per-dam pages. Attributes are 2019-vintage for non-high-hazard dams and are labelled as such. |
| WebSearch works (routes outside the proxy), WebFetch is blocked for non-GitHub hosts. | Case-study research and policy facts come via WebSearch; cite sources inline. |
| Node 22, Python 3.13, Playwright/Chromium available. `us-atlas` and `topojson-client` on npm give offline US state/county shapes. | Static-site stack is fully buildable here. Map tiles won't render in dev screenshots; an SVG choropleth fallback will. |

**Decision for the user:** allow `nid.sec.usace.army.mil` in this environment's network settings (or paste the CSV into the repo) and Phase 1 refreshes *all* 92k dams to the 2026 snapshot. Without it, the merged 2019 + 2026-HHPD dataset is the baseline and every field carries a `source_year` so the UI can say "last confirmed 2019".

---

## 0.5 Direction from the owner (added after review)

1. **Deploy target:** GitHub Pages via GitHub Actions is enabled on `CrumpLabSandbox/DamHealth`.
2. **Browse dams one at a time on a U.S. map.** Explorer view: map on one side, the selected dam's full profile on the other; next/previous, "random dam", "dams near me", and deep links so every dam has a shareable URL.
3. **Maximum information per dam**: a real photo when one exists, otherwise a graphical representation; historical background; pressing issues; whether a plan to address them exists in the next 5–10 years; projections of what the dam will need to address for its local community.
4. **Two sides of the site** — a **Community** side (activism: understand the issues, rally support to fix the dam) and an **Engineering** side (civil-engineering detail and actionable structural plans). Same data, two lenses.

### How each lands in the design

**Photos & history (runtime enrichment).** The build machine cannot reach Wikipedia/Wikimedia, but the *visitor's browser* can. Each dam page calls the public Wikipedia/Wikimedia APIs (CORS-enabled, no key) with the dam name + state (+ reservoir/river aliases from NID `OTHER_DAM_NAME`), and shows the lead image, caption/attribution, and the article summary as "History & background", with a link to the full article. Match confidence is scored (name similarity, state, "dam"/"reservoir"/"lake" tokens); low-confidence matches are shown as "possibly related" or suppressed. When nothing is found the SVG schematic becomes the hero image and history is reconstructed from NID facts (built year, modified year, designer, purposes, owner, federal roles). The ~20 case-study dams get hand-researched histories at build time via web search. A small build-time cache (`site/public/data/enrich/{NIDID}.json`) stores anything I can verify during development so famous dams render instantly.

**"Is there a plan?" (plan status).** NID does not record rehabilitation plans, so the dam page carries an explicit **Plan status** field: `Funded project identified` / `Study or design underway` / `No public plan found` / `Unknown`, with a source link when known. Sources: FEMA HHPD grant award lists, USACE/USBR dam-safety modification program lists, state dam-safety press, and case-study research — collected via web search into `data/curated/plan_status.csv`. For the vast majority the honest answer is "No public plan found", which is itself the advocacy message, immediately followed by the prescribed 1/5/10-year plan.

**Local-community projections.** Per dam: (a) downstream consequence estimate — hazard class, storage, and a Froehlich (1995) breach peak-discharge screening estimate with a plain-English reach band; (b) people potentially affected — county population from a bundled Census dataset as an upper-bound context figure (clearly labelled, since real inundation mapping is not public for most dams); (c) climate stress — regional extreme-precipitation trend from the Fifth National Climate Assessment mapped to the dam's region, flagged when spillway capacity/type is unknown; (d) service at stake — what the community loses if the dam is lost or lowered (water supply, flood control, hydropower, recreation from NID purposes); (e) a 10-year "what to expect" summary generated from the above.

**Community vs Engineering lens.** A persistent toggle (header switch, URL param `?view=community|engineering`, remembered in `localStorage`). It does not hide data; it changes ordering, language and which panels open by default.

| Panel | Community lens | Engineering lens |
|---|---|---|
| Hero | Photo/schematic, grade letter, one-sentence "what this means for you" | Photo/schematic, DHI sub-scores, NID ID, hazard/condition codes |
| Issues | Plain-language cards, "why it matters", severity in words | Issue code, trigger logic, NID fields involved, reference standard (FEMA P-93, USACE ER 1110-2-1156, state regs) |
| Plan | "What should happen and when", cost in round numbers, who pays, how to ask for it | Work-breakdown by horizon: investigations, analyses (hydrologic/hydraulic, seepage, stability, seismic), design, construction packages, instrumentation; planning-level cost bands with ASDSO method; deliverables and typical durations |
| Community | Downstream people/services, climate outlook, legislators & regulator contacts, share/letter templates, local meeting checklist | Owner, regulator, inspection authority, EAP revision date, federal roles, data provenance |
| Visuals | Schematic with callouts, consequence strip, timeline | Schematic + dimensioned section (height, crest length, storage, drainage area), comparison bars vs. state/nation, failure-mode checklist (overtopping, internal erosion, slope instability, foundation, structural, gates/outlets) |

Site-level, the two lenses also have home pages: `/community` (how to organize, letter templates, funding programs, success stories) and `/engineering` (methodology, failure-mode library, standards references, data downloads, open problems list — e.g. the 2,200+ Not-Rated high-hazard dams).

### Added after Phase 4 review

5. **National dashboard** (`/dashboard`): a "State of the Nation's Dams" page for residents, federal agencies and lawmakers. Headline KPIs (dams, high-hazard, Poor/Unsatisfactory, no EAP, not rated, 2019-only data, cost band vs. federal funding available); grade and condition mix; hazard × condition matrix; ownership breakdown (who holds the problem dams); age-by-decade histogram; plan-status funnel (identified → studied → funded → under construction → complete); state leaderboard sortable by every metric; federal-vs-non-federal split; "what would it take" scenarios (cost bands per horizon); and a one-paragraph verdict that updates from the data. Every chart has a table view and a download link.
6. **Verifiability** is a hard requirement: nothing stated about an individual dam may be unsourced.
   - Every dam page carries a **Sources** panel listing, field by field, where each value came from: the NID record (linked to the official USACE page for that NID ID), the snapshot date, the mirror repository and commit hash the snapshot was read from, the Census vintage for county population, the curated plan-status row with its source URL, and the Wikipedia article (if shown) with its revision link.
   - Issues state the **exact field and value** that triggered them (e.g. "EAP = No — NID, 2026-03-15"). Scores, grades, cost bands, breach estimates and projections are labelled **computed by DamHealth** with a link to the method, never presented as facts about the dam.
   - Curated rows (plan status, case studies) are only published with a `source_url`; rows without one are dropped at build time and reported.
   - `catalog.json` records the provenance manifest (source, URL, commit, date, record count) and the dashboard and methodology pages print it.

## 1. Product scope

### Audiences
1. **General public** — "Is the dam upstream of my town OK?" Plain language, no jargon without a tooltip, WCAG 2.2 AA.
2. **Advocates / journalists / local officials** — state and congressional-district rollups, shareable dam pages, downloadable data, cost estimates and a policy agenda.
3. **Engineers / dam-safety staff** — raw NID attributes, methodology, limitations, links to the official NID record.

### Core pages
| Route | Purpose |
|---|---|
| `/` | National picture: headline stats, grade distribution, map, "worst 25", state leaderboard, call to action. |
| `/explore` | **Dam Explorer**: U.S. map of ~92k dams (clustered) on one side, selected dam's full profile on the other. Next/previous, random dam, dams near me, filters by hazard, condition, grade, state, owner type, age, EAP. URL syncs to the selected dam. |
| `/community`, `/engineering` | Lens home pages (see §0.5). |
| `/dam/:nidId` | **Dam detail**: photo (Wikipedia/Wikimedia at runtime) or schematic, health grade, history & background, issue list with severity, plan status, renovation plan (1/5/10 yr) with cost range, local-community projections, key attributes, nearby dams, official record link — rendered through the Community or Engineering lens. |
| `/state/:st` | State report card: counts, grade histogram, worst dams, regulatory-program facts, cost to fix, legislators table. |
| `/issues` | Explainer: each issue type (what it is, why it matters, how it's fixed, which dams have it). |
| `/plan` | National 1-5-10 year agenda (policy + funding), and how the per-dam plans roll up. |
| `/case-studies` | ~20 researched narratives (Oroville 2017, Edenville/Sanford 2020, Spencer 2019, Rapidan 2024, Lake Dunlap 2019, plus living high-risk examples like Isabella, Anderson, Herbert Hoover Dike, Wolf Creek, Addicks/Barker, Prado...). |
| `/methodology` | Scoring formulas, data provenance, limitations, glossary, download links. |
| `/about` / `/act` | Advocacy: contact-your-rep template, ASDSO/FEMA HHPD grant links, share tools. |

---

## 2. Data pipeline (`data/`)

Python, run once, outputs committed static JSON so the site is fully static.

```
data/
  raw/            # git-ignored; cloned mirrors + any CSV the user supplies
  pipeline/
    01_ingest_nid2019.py        # normalize 70 cols → canonical schema
    02_ingest_hhpd2026.py       # 16,805 high-hazard dams, 2026 fields
    03_merge.py                 # join on NID ID; 2026 wins; field-level source_year
    04_score.py                 # issues + Dam Health Index + grade
    05_plans.py                 # renovation plan templates + cost bands per dam
    06_publish.py               # emit site data (below)
  curated/
    plan_status.csv             # NIDID, status, source URL, note (hand-researched)
    case_studies/*.md           # narratives with citations
    county_population.csv       # Census county population (bundled)
  schema.md                     # canonical field dictionary
site/public/data/
  index.json                    # 92k × {id, name, st, lat, lon, hazard, grade, score} (~5 MB, gz ~1.2 MB) for map/search
  states/{ST}.json              # full records per state (lazy-loaded)
  dams/{NIDID}.json             # per-dam record incl. issues + plan (prerendered pages read these)
  summary.json                  # national + state rollups
  case_studies.json             # hand-researched narratives
```

Canonical record (abridged): `nid_id, name, other_names, state, county, city, river, lat, lon, owner_name, owner_type, dam_type, core, foundation, purposes[], year_completed, year_modified, height_ft, length_ft, max_storage_acft, normal_storage_acft, surface_area_ac, drainage_area_sqmi, hazard, condition, condition_date, eap, inspection_date, inspection_frequency_yrs, spillway_type, spillway_width_ft, outlet_gates, regulatory_agency, federal_roles[], cong_district, source_year{field: 2019|2026}`.

Merging rule: a dam present in the 2026 HHPD set gets 2026 values for all overlapping fields; the 2019 file supplies fields the 2026 extract lacks (spillway, foundation, drainage area, congressional district, etc.). Dams only in 2019 are kept and flagged `coverage: "2019 only"`. 2026 HHPD dams absent from 2019 (newly classified / built) are kept as 2026-only.

---

## 3. Health rating system

Three sub-scores (0–100, higher = worse) feed a **Dam Health Index** and a letter grade. Each triggered issue has a fixed severity tier so the UI can show "why".

### Issue catalogue (severity 1 = note … 5 = critical)
| Code | Trigger | Sev | Sub-score |
|---|---|---|---|
| `COND_UNSAT` | condition = Unsatisfactory | 5 | Condition |
| `COND_POOR` | condition = Poor | 4 | Condition |
| `COND_FAIR` | condition = Fair | 2 | Condition |
| `COND_UNKNOWN` | Not Rated / blank, and hazard High or Significant | 3 | Condition (data gap) |
| `NO_EAP` | hazard High/Significant and EAP ≠ Yes | 4 (High) / 3 (Sig) | Readiness |
| `INSPECT_OVERDUE` | last inspection older than frequency (or > 5 yr if unknown) | 3 | Readiness |
| `INSPECT_NEVER` | no inspection date, hazard High/Significant | 3 | Readiness |
| `AGE_100` / `AGE_75` / `AGE_50` | age ≥ 100 / 75 / 50, no `year_modified` within 25 yrs | 3 / 2 / 1 | Condition |
| `HAZARD_UNDET` | hazard = Undetermined | 2 | Readiness |
| `HIGH_CONSEQUENCE` | hazard High **and** (storage ≥ 50k ac-ft or height ≥ 100 ft) | 3 | Consequence |
| `SPILLWAY_UNKNOWN` | spillway type unknown, hazard High | 1 | Condition (data gap) |
| `PRIVATE_HIGH` | owner_type Private, hazard High, condition ≤ Fair | 2 | Readiness (funding risk) |
| `UNREGULATED` | no state/federal regulatory agency, hazard High/Significant | 3 | Readiness |

### Index and grade
```
Condition  = max(cond issue) scaled 0–100 + age bonus (cap 100)
Readiness  = sum of readiness sev × 12 (cap 100)
Consequence= hazard base (High 70, Sig 40, Low 10, Undet 30) + storage/height bumps (cap 100)
DHI        = 0.45·Condition + 0.25·Readiness + 0.30·Consequence
Grade: A < 20, B 20–35, C 35–50, D 50–65, F ≥ 65
```
Hard rules: Unsatisfactory → at least D; Unsatisfactory + High hazard → F; High hazard + Poor → at least D. Low-hazard dams with no data cap at C (we don't fail dams we know little about). Every page states this is a **screening indicator from public inventory data, not an engineering assessment**, and links to the official record.

---

## 4. Dam visualizers (`site/src/viz/`)

All inline SVG, themed for light/dark, keyboard-navigable, with text equivalents.

1. **Dam cross-section schematic** — chooses template by `dam_type` (earth/rockfill embankment, concrete gravity, arch, buttress, other). Draws crest, upstream/downstream slopes, reservoir level, spillway, outlet. Triggered issues attach as numbered callouts at the relevant component (spillway for overtopping-related, embankment for condition/age, downstream valley for EAP/consequence). Hovering/focusing a callout highlights the issue card.
2. **Health gauge** — DHI arc with grade letter and the three sub-score bars.
3. **Downstream consequence strip** — small valley graphic scaled by hazard class and storage, with plain text ("A failure would likely cause loss of life").
4. **Timeline** — built, modified, last inspection, EAP revision, "today", plus the 1/5/10-year plan milestones.
5. **State choropleth** (us-atlas) — works offline; metric switcher (grade mix, % high-hazard poor, cost).
6. **Interactive national map** — MapLibre GL + Supercluster over `index.json`; raster basemap (OSM/CARTO) loads in the user's browser. Falls back to the choropleth when tiles fail.
7. **Comparison bars** — this dam vs state vs nation (age, height, storage, grade).

---

## 5. Renovation plans (1 / 5 / 10 years)

`05_plans.py` composes a plan from issue → action templates, ordered by severity, with cost bands derived from ASDSO's 2023/2025 cost-of-rehab methodology (height × storage × type × condition → $ range; labelled "planning-level estimate").

| Horizon | Typical actions (chosen per issue set) |
|---|---|
| **Year 1 — Stabilize & know** | Emergency/interim risk-reduction (lower pool, monitoring) for Unsatisfactory; commission condition assessment where Not Rated; write/update EAP and run tabletop exercise; overdue inspection; install instrumentation; apply for FEMA HHPD / state revolving funds. |
| **Years 2–5 — Fix the deficiencies** | Spillway capacity upgrade/armoring; seepage control (filters, drains, cutoff); slope stabilization; outlet works rehab; seismic retrofit where applicable; dam removal study if no longer serving purpose. |
| **Years 5–10 — Modernize & sustain** | Full rehabilitation to current hydrologic (PMF) standards; automated monitoring and public alert integration; inundation mapping public release; owner financial assurance; re-classification review; or decommissioning. |

Plus a **national agenda** page: reauthorize/fund HHPD rehabilitation grants, fully fund the National Dam Safety Program, close the private-owner funding gap, mandatory EAPs for all high-hazard dams, public inundation maps, state program staffing — each with the dataset numbers that justify it (e.g. "2,470 high-hazard dams have no EAP").

---

## 6. Case studies & research (WebSearch-driven)

Hand-written, cited narratives for ~20 dams: what happened or is at risk, cost, what fixed it or hasn't. Each links to its dam page. Candidate list: Oroville (CA 2017), Edenville & Sanford (MI 2020), Spencer (NE 2019), Rapidan (MN 2024), Lake Dunlap (TX 2019), Whaley Bridge is UK → excluded; Herbert Hoover Dike (FL), Isabella (CA), Anderson (CA), Wolf Creek (KY), Center Hill (TN), Addicks/Barker (TX), Prado (CA), Lewisville (TX), Mosquito Creek (OH), Bluestone (WV), Lake Delhi (IA 2010), Taum Sauk (MO 2005), Ka Loko (HI 2006), Guajataca (PR 2017). Also pull national facts: ASCE 2025 grade D+, ASDSO $165.2B / $37.4B HHPD cost, FEMA HHPD $585M IIJA.

---

## 7. Tech stack

- **Vite + React 18 + TypeScript**, React Router, TanStack Query for lazy data, Zustand for filters.
- **MapLibre GL JS** + Supercluster; **d3-geo/us-atlas** for SVG maps; **d3-scale** for charts (dataviz skill palette, light/dark tokens).
- **Prerendering**: a build step renders `/dam/:id` and `/state/:st` to static HTML for SEO/shareability (vite-plugin-ssr or a Playwright snapshot pass over the top ~20k dams + all states; the rest render client-side from JSON).
- **Search**: MiniSearch over name/state/county/river in `index.json`.
- **Accessibility**: semantic HTML, skip links, focus management on route change, reduced-motion support, color never the sole channel (grade letter + pattern), tested with axe-core in CI.
- **Tests**: Python pytest for pipeline (schema, merge counts, scoring invariants); Vitest for scoring/formatting utilities; Playwright smoke + axe.
- **Deploy**: GitHub Pages via Actions on push to `main` (Pages already enabled with the Actions source); `npm run build` also runs the pipeline check. Client-side routing uses hash-free URLs with a `404.html` fallback so `/dam/CA00232` deep links work on Pages.
- **Runtime data**: Wikipedia REST + Wikimedia Commons APIs (CORS, no key) for photos/history; Census county population bundled at build time; everything else static JSON.

---

## 8. Phases and deliverables

| Phase | Work | Verify |
|---|---|---|
| **1. Data** (first) | Scaffold repo on `main`, pipeline 01–03, canonical dataset, `schema.md`, provenance counts, bundled Census county population. | pytest: 91k+ records, 16,805 with 2026 condition, no duplicate IDs, coord sanity. |
| **2. Scoring, plans, projections** | 04–05, issue catalogue, DHI, grades, cost bands, 1/5/10-yr plan templates (community + engineering wording), plan-status table, breach-discharge & community projections; `methodology.md`. | Invariants (Unsat+High ⇒ F), distribution review, spot-check 20 famous dams. |
| **3. Site core** | Vite app, routing (`/`, `/explore`, `/dam/:id`, `/state/:st`, lens pages), data loading, search, Community/Engineering lens toggle, Pages 404 fallback. | Vitest, Playwright smoke, axe clean. |
| **4. Explorer & visualizers** | Map-plus-profile explorer (next/prev/random/near-me), cross-section schematic with callouts, gauge, consequence strip, timeline, choropleth, comparison bars, failure-mode checklist. | Screenshot review in both themes; keyboard-only run. |
| **5. Enrichment & content** | Runtime Wikipedia/Wikimedia photo + history with confidence matching and schematic fallback; case studies, plan-status research, issues explainer, national agenda, community organizing kit, engineering library, about/act. | Every claim cited; enrichment degrades gracefully offline. |
| **5b. Dashboard & provenance** | `/dashboard` national page with KPIs, matrices, funnel, leaderboard and verdict; provenance manifest; per-dam Sources panel; issue trigger facts; curated rows require `source_url`. | Every number on the dashboard is reproducible from `summary.json`; every dam page lists a source per field. |
| **6. Ship** | Prerender top dams + states, GitHub Actions → Pages workflow, README, data download page. | Live Pages URL loads; Lighthouse a11y ≥ 95. |

Each phase ends with a commit; I'll report counts/screenshots as I go.

---

## 9. Known limitations (will be stated on the site)
- Attributes come from the current official NID export at build time; some states have not updated individual records in years, which the site flags.
- NID condition ratings are self-reported by states/agencies and ~2,200 high-hazard dams are "Not Rated".
- Cost estimates are planning-level bands (ASDSO methodology), not project estimates.
- The Dam Health Index is a transparent screening tool, not a substitute for a dam-safety engineer's judgment.
