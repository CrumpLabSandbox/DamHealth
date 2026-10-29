# What to recheck by hand

Every count, grade, map and chart on the site is recomputed from the official National Inventory of Dams (NID) export on each build. The figures that come from that file are never typed by hand. A test (`data/tests/test_no_hand_typed_figures.py`) fails if a comma-grouped number or a hard-coded year appears in the site code or in `data/methodology.md` and `data/schema.md`.

Some things cannot be computed from the inventory. They are listed here with what to check. Each build also writes `data/build/recheck_report.json`, prints the urgent items as warnings in the GitHub Actions log, and keeps the report with the exact input file as a workflow artifact for 90 days.

## Each build: read the warnings

| Warning | What it means | What to do |
|---|---|---|
| `Research row: … no dam in this NID snapshot matches the name` | A row in `data/curated/plan_status.csv` attaches to no dam, so its plan status is not shown anywhere. | Find the dam's NID ID and put it in the row's `nid_id` column. |
| `Research row: … pinned to XX00000, which is not in this NID snapshot` | The NID removed or renumbered that dam. | Look up the new ID or remove the row. |
| `N research rows are matched to dams by name only` | These rows were attached by name and state. A renamed NID record can silently move a row to the wrong dam. This happened once with Forest Lake Dam, Michigan. | Work through `curated_plan_rows` in the report. Confirm each `matched_name`, then pin its `nid_id`. Rows with `candidates` above 1 come first. |
| `External fact: … last checked …` | A figure in `data/curated/external_facts.json` has not been checked in 180 days. | Open its `url`, confirm or update `value`, and set `checked` to today. |

## Periodically: sources outside the inventory

- **`data/curated/external_facts.json`** holds the ASDSO rehabilitation cost estimates, the FEMA HHPD grant totals and federal share, and the ASCE Report Card grade. The dashboard, the plan page and the methodology read them from there. Update `value`, `as_of` and `checked` when a new report or grant round is published.
- **`data/curated/plan_status.csv`** holds funded and completed rehabilitation projects found by research. Each row needs a `source_url`, and rows without one are dropped. Statuses go out of date as projects move from study to construction to completion.
- **`data/curated/case_studies.md` and `funding_programs.md`** are cited research text with dated figures, statuses and dollar amounts. They cannot be recomputed. Re-read them when a case's status changes or a program's funding round closes. If a sentence states a dam's current NID value, write it as a placeholder such as `{{dam:CA00035.condition}}` so the build fills it in.
- **`data/curated/county_population.csv`** holds Census county populations, Vintage 2023. Replace it when a newer vintage is published, and update the `census2023` entry in `data/pipeline/common.py`.
- **Scoring and plan rules** live in `data/pipeline/scoring.py` and `plans.py`. They include issue thresholds, weights, cost bands following ASDSO's method, and climate-region text based on the Fifth National Climate Assessment. These are methodology choices, not data. Review them when the underlying guidance changes, and keep `data/methodology.md` in step.
- **The failure-mode note "~34% of failures"** in `site/src/lib/plan.ts` is a general statistic about overtopping. Confirm it against a current ASDSO failure summary.
- **Advocacy text** includes the policy asks on the plan page, such as "at least $1 billion a year", and the letter templates on the Community page. These are positions, not measurements. Review the wording when the program landscape changes.
- **Wikipedia photos and history** are matched at runtime by dam name and state. They can attach to the wrong article; the page shows the article title so readers can tell.

## Reproducing a build

1. Check out the commit shown in the site's "This build" panel, on the Dashboard or the Methodology page.
2. Use the NID file with the SHA-256 shown in that panel. Download it from that run's workflow artifact if it is still kept; the live official file changes over time.
3. Put the file at `data/raw/nation.csv`, then run the pipeline commands in the README. `fetch_raw.sh` keeps an existing file unless `NID_REFRESH=1` is set.
