# DamHealth

**The health of every dam in the United States, one dam at a time.**

DamHealth is an open advocacy and engineering resource covering the ~92,000 dams in the U.S. National Inventory of Dams. For each dam it shows a transparent **Dam Health Index** and letter grade, the specific **issues** behind that grade, a **1 / 5 / 10-year rehabilitation plan**, whether a **public plan or funding** exists, projections for the downstream community, and a schematic drawing (plus a photo and history when Wikipedia has one). Every page can be read through a **Community** lens (plain language, how to act) or an **Engineering** lens (issue codes, failure modes, work breakdown).

Live site: https://crumplabsandbox.github.io/DamHealth/ (deployed from `main` by GitHub Actions).

## Verifiability

Every dam page ends with a **Sources & verification** panel that lists, field by field, where each value came from (the official NID record for that ID, the snapshot date and mirror commit, the Census vintage, or the cited URL for a curated plan-status row) and the exact inventory field that triggered each issue. Grades, scores, costs, breach estimates and plans are labelled *computed by DamHealth* and never presented as facts about the dam. The national `/dashboard` prints the same provenance manifest.

## Layout

```
PLAN.md                 the full implementation plan
data/
  pipeline/             Python: fetch_raw.sh → build_dataset.py → score_and_plan.py → publish.py
  curated/              hand-researched plan status, case studies, funding programs, county population
  tests/                pytest invariants for the dataset and scoring
  schema.md             field dictionary · methodology.md  scoring method and limitations
site/                   Vite + React + TypeScript static site (MapLibre, d3-geo, MiniSearch)
.github/workflows/      build pipeline + site and deploy to Pages
```

## Build locally

```bash
bash data/pipeline/fetch_raw.sh            # clones the two GitHub mirrors of NID data
python3 -I data/pipeline/build_dataset.py  # 91,996 canonical records → data/build/dams.json
python3 -I data/pipeline/score_and_plan.py # issues, DHI, grades, plans, projections
python3 -I data/pipeline/publish.py        # → site/public/data/ (index, summary, states, shards)
python3 -m pytest -q data/tests

cd site && npm ci && npm run dev           # http://localhost:5173
npm test                                   # vitest
npm run e2e                                # Playwright smoke + axe (needs a Chromium)
```

## Data sources

- USACE National Inventory of Dams — full 2019 export (mirror: `bcongdon/nid-data`) and the March 2026 high-hazard-potential extract (mirror: `kalchikee/dam-failure-explorer`). The official NID at nid.sec.usace.army.mil is the authority; set `data/raw/NID2019_U.csv` to a newer full export to refresh.
- U.S. Census Bureau county population estimates, Vintage 2023.
- ASDSO, ASCE, FEMA and USACE publications and press, cited in `data/curated/`.

## Caveat

The Dam Health Index is a screening indicator computed from public inventory data. It is not an engineering assessment and must not be used to make safety decisions about a specific dam. See `data/methodology.md`.
