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


import re


def norm_name(s: str | None) -> str:
    s = (s or "").lower()
    s = re.sub(r"\(.*?\)", " ", s)
    s = re.sub(r"\b(dam|lake|reservoir|the|no\.?|number|main|auxiliary|dike|levee|site)\b", " ", s)
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return " ".join(s.split())


def load_curated_plan_status(dams: list[dict]) -> tuple[dict[str, dict], list[str], list[dict]]:
    """Return {nid_id: row}, unmatched rows, and rows a person should verify.
    Rows with nid_id are pinned to that dam. Rows without one are matched by normalized
    name within state; when several dams match, the largest (by storage, then height) wins,
    and the row is listed for hand-checking because a renamed NID record can move it."""
    path = CURATED / "plan_status.csv"
    out: dict[str, dict] = {}
    unmatched: list[str] = []
    recheck: list[dict] = []
    if not path.exists():
        return out, unmatched, recheck
    known = {d["nid_id"]: d for d in dams}
    by_state: dict[str, dict[str, list[dict]]] = {}
    for d in dams:
        names = [d["name"]] + list(d.get("other_names") or [])
        for n in names:
            by_state.setdefault(d["state"], {}).setdefault(norm_name(n), []).append(d)
    with open(path, encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            nid = (row.get("nid_id") or "").strip().upper()
            label = f'{row.get("dam_name")} ({(row.get("state") or "").strip().upper()})'
            detail = {"status": row.get("status") or None, "program": row.get("program") or None,
                      "source_url": (row.get("source_url") or "").strip() or None}
            if nid and nid not in known:
                unmatched.append(f"{label} — pinned to {nid}, which is not in this NID snapshot")
                recheck.append({"row": label, "issue": "pinned NID ID missing from snapshot", "nid_id": nid, **detail})
                continue
            if not (row.get("source_url") or "").strip().startswith("http"):
                unmatched.append(f"{label} — dropped: no source_url")
                continue
            if not nid:
                st = (row.get("state") or "").strip().upper()
                key = norm_name(row.get("dam_name"))
                cands = by_state.get(st, {}).get(key, [])
                if not cands and key:
                    # Prefix match: "Lake Dunlap" vs "Dunlap Dam Spillway" etc.
                    # Both names need 5+ characters, or "Dam B" (normalized "b") would match any B-name.
                    cands = [d for k, lst in by_state.get(st, {}).items() if len(k) >= 5 and len(key) >= 5 and (k.startswith(key) or key.startswith(k)) for d in lst]
                if cands:
                    cands.sort(key=lambda d: ((d.get("storage_acft") or 0), (d.get("height_ft") or 0)), reverse=True)
                    nid = cands[0]["nid_id"]
                    row["match"] = "name+state"
                    recheck.append({"row": label, "issue": "matched by name only; verify and pin nid_id",
                                    "nid_id": nid, "matched_name": cands[0]["name"],
                                    "candidates": len({c["nid_id"] for c in cands}), **detail})
                else:
                    unmatched.append(label)
                    recheck.append({"row": label, "issue": "no dam in this NID snapshot matches the name", **detail})
                    continue
            out[nid] = row
    return out, unmatched, recheck


def main() -> None:
    dams = load_json(BUILD / "dams.json")
    curated, unmatched, recheck = load_curated_plan_status(dams)
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
        "curated_unmatched": unmatched,
        "cost_total_low_usd_billion": round(cost_lo / 1e9, 1),
        "cost_total_high_usd_billion": round(cost_hi / 1e9, 1),
        "high_hazard_grades": dict(sorted(Counter(r["grade"] for r in dams if r["hazard"] == "High").items())),
    }
    report["curated_recheck"] = recheck
    dump_json(BUILD / "dams_scored.json", dams)
    dump_json(BUILD / "score_report.json", report, compact=False)
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
