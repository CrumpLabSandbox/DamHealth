"""Steps 04–05 runner: add issues, scores, grade, cost, plan, plan status and projections
to every record in data/build/dams.json → data/build/dams_scored.json.

Usage: python3 -I data/pipeline/score_and_plan.py
"""
from __future__ import annotations

import csv
import json
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import BUILD, CURATED, dump_json, load_json  # noqa: E402
from plans import build_plan, plan_status, projections  # noqa: E402
from scoring import score  # noqa: E402


def load_curated_plan_status() -> dict[str, dict]:
    path = CURATED / "plan_status.csv"
    out: dict[str, dict] = {}
    if not path.exists():
        return out
    with open(path, encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            nid = (row.get("nid_id") or "").strip().upper()
            if nid:
                out[nid] = row
    return out


def main() -> None:
    dams = load_json(BUILD / "dams.json")
    curated = load_curated_plan_status()
    grades, dhi_sum = Counter(), 0.0
    cost_lo = cost_hi = 0.0
    for r in dams:
        sc = score(r)
        r.update(sc)
        r["plan"] = build_plan(r, sc["issues"])
        r["plan_status"] = plan_status(r, curated.get(r["nid_id"]))
        r["projections"] = projections(r, sc["issues"], sc["grade"])
        grades[sc["grade"]] += 1
        dhi_sum += sc["scores"]["dhi"]
        if sc["cost"]:
            cost_lo += sc["cost"]["low_usd"]
            cost_hi += sc["cost"]["high_usd"]
    report = {
        "grades": dict(sorted(grades.items())),
        "mean_dhi": round(dhi_sum / len(dams), 1),
        "issues": dict(Counter(i for r in dams for i in r["issues"]).most_common()),
        "plan_status": dict(Counter(r["plan_status"]["status"] for r in dams)),
        "curated_plan_rows_matched": sum(1 for r in dams if r["plan_status"].get("basis") == "curated research"),
        "cost_total_low_usd_billion": round(cost_lo / 1e9, 1),
        "cost_total_high_usd_billion": round(cost_hi / 1e9, 1),
        "high_hazard_grades": dict(sorted(Counter(r["grade"] for r in dams if r["hazard"] == "High").items())),
    }
    dump_json(BUILD / "dams_scored.json", dams)
    dump_json(BUILD / "score_report.json", report, compact=False)
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
