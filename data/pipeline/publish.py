"""Step 06: emit static site data from data/build/dams_scored.json.

site/public/data/
  index.json          compact national index for map + search
  summary.json        national and per-state rollups, leaderboards
  catalog.json        issue / action / climate / status vocabularies (single source of truth)
  states/{ST}.json    per-state list (compact rows + state rollup)
  dams/{ST}/{NNN}.json shards of full records, NNN = int(id digits) // SHARD
"""
from __future__ import annotations

import re
import shutil
import sys
from collections import Counter, defaultdict
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import BUILD, FIELDS_2026, FIELDS_CENSUS, FIELDS_COMPUTED, ROOT, SITE_DATA, SOURCES, STATE_NAMES, dump_json, field_source, load_json  # noqa: E402
from plans import ACTIONS, BASELINE, CLIMATE_OUTLOOK, CLIMATE_REGION  # noqa: E402
from scoring import GRADE_BOUNDS, ISSUES  # noqa: E402

SHARD = 250
HZ = {"High": "H", "Significant": "S", "Low": "L", "Undetermined": "U", "Not Available": "N"}
COND = {"Satisfactory": "S", "Fair": "F", "Poor": "P", "Unsatisfactory": "U", "Not Rated": "N", None: ""}

PLAN_STATUS_LABELS = {
    "funded": "Funded project identified",
    "study_or_design": "Study or design underway",
    "under_construction": "Repairs under way",
    "completed": "Rehabilitation completed",
    "unfunded_identified": "Problem identified, no funding",
    "no_public_plan": "No public plan found",
    "none_needed_or_unknown": "No remediation reported",
    "unknown": "Unknown (no current status data)",
}


def shard_of(nid: str) -> str:
    digits = re.sub(r"\D", "", nid) or "0"
    return f"{int(digits) // SHARD:04d}"


def index_row(r: dict) -> list:
    """Minimal row for the national map and name search."""
    return [
        r["nid_id"], r["name"], r["state"],
        round(r["lat"], 4) if r["has_coords"] else None,
        round(r["lon"], 4) if r["has_coords"] else None,
        HZ.get(r["hazard"], "N"), COND.get(r.get("condition"), ""), r["grade"], r["scores"]["dhi"],
    ]


INDEX_COLUMNS = ["id", "name", "st", "lat", "lon", "hz", "cond", "grade", "dhi"]


def compact_row(r: dict) -> list:
    """Row for state lists and leaderboards."""
    return index_row(r) + [
        r.get("year_completed"), r.get("height_ft"), r.get("storage_acft"),
        r.get("county"), r.get("river"), len(r["issues"]), r["plan_status"]["status"], r.get("eap"),
    ]


ROW_COLUMNS = INDEX_COLUMNS + ["year", "height_ft", "storage_acft", "county", "river", "n_issues", "plan_status", "eap"]


def sources_for(r: dict) -> dict:
    """Field → source id, plus the official record link, for the per-dam Sources panel."""
    fields = {k: field_source(k, r["coverage"]) for k in r if k not in ("plan", "sources")}
    return {
        "fields": fields,
        "official_url": f"https://nid.sec.usace.army.mil/#/dams/system/{r['nid_id']}/summary",
        "plan_source_url": (r.get("plan_status") or {}).get("source_url"),
    }


def slim_record(r: dict) -> dict:
    """Full record minus text that the client reconstructs from catalog.json."""
    out = dict(r)
    out["plan_source_url"] = (r.get("plan_status") or {}).get("source_url")
    out.pop("plan", None)  # rebuilt client-side from issues + catalog
    out.pop("has_coords", None)
    proj = dict(out.get("projections") or {})
    proj.pop("climate_outlook", None)
    out["projections"] = proj
    return out


def rollup(rows: list[dict]) -> dict:
    g = Counter(r["grade"] for r in rows)
    hz = Counter(r["hazard"] for r in rows)
    cond = Counter(r.get("condition") or "None" for r in rows)
    issues = Counter(i for r in rows for i in r["issues"])
    ps = Counter(r["plan_status"]["status"] for r in rows)
    high = [r for r in rows if r["hazard"] == "High"]
    years = [r["year_completed"] for r in rows if r.get("year_completed")]
    decades = Counter((y // 10) * 10 for y in years)
    owners = Counter((r.get("owner_types") or ["Not Listed"])[0] for r in rows)
    owners_high_bad = Counter((r.get("owner_types") or ["Not Listed"])[0] for r in high if r.get("condition") in ("Poor", "Unsatisfactory"))
    federal = [r for r in rows if "Federal" in (r.get("owner_types") or [])]
    matrix = Counter((r["hazard"], r.get("condition") or "None") for r in rows)
    purposes = Counter(p for r in rows for p in (r.get("purposes") or []))
    return {
        "grades_high": {k: Counter(r["grade"] for r in high).get(k, 0) for k in "ABCDF"},
        "decades": {str(k): v for k, v in sorted(decades.items())},
        "owners": dict(owners.most_common()),
        "owners_high_poor_unsat": dict(owners_high_bad.most_common()),
        "federal": len(federal),
        "federal_high": sum(1 for r in federal if r["hazard"] == "High"),
        "hazard_condition": {f"{h}|{c}": n for (h, c), n in matrix.items()},
        "purposes": dict(purposes.most_common(8)),
        "eap_high": dict(Counter(r.get("eap") or "Unknown" for r in high)),
        "dhi_hist": dict(Counter(min(9, int(r["scores"]["dhi"] // 10)) * 10 for r in rows)),
        "dams": len(rows),
        "grades": {k: g.get(k, 0) for k in "ABCDF"},
        "hazard": dict(hz),
        "condition": dict(cond),
        "high_hazard": len(high),
        "high_poor_unsat": sum(1 for r in high if r.get("condition") in ("Poor", "Unsatisfactory")),
        "high_not_rated": sum(1 for r in high if r.get("condition") in (None, "Not Rated")),
        "high_no_eap": sum(1 for r in high if r.get("eap") == "No"),
        "issues": dict(issues.most_common()),
        "plan_status": dict(ps),
        "mean_dhi": round(sum(r["scores"]["dhi"] for r in rows) / len(rows), 1) if rows else None,
        "median_year": sorted(years)[len(years) // 2] if years else None,
        "cost_low_usd": sum((r["cost"] or {}).get("low_usd", 0) for r in rows),
        "cost_high_usd": sum((r["cost"] or {}).get("high_usd", 0) for r in rows),
        "storage_acft": sum(r.get("storage_acft") or 0 for r in rows),
    }


def worst(rows: list[dict], n: int) -> list[list]:
    ranked = sorted(rows, key=lambda r: (-r["scores"]["dhi"], -(r.get("storage_acft") or 0)))
    return [compact_row(r) for r in ranked[:n]]


def sources_used(dams: list[dict]) -> tuple[dict, dict]:
    """Provenance manifest limited to the sources this build actually read, with the
    current NID snapshot date and record count filled in from the build."""
    report = load_json(BUILD / "merge_report.json")
    sources = {k: dict(v) for k, v in SOURCES.items()}
    if report.get("source") == "nidcurrent":
        sources["nidcurrent"]["snapshot"] = report["snapshot"]
        sources["nidcurrent"]["records"] = len(dams)
        sources.pop("nid2019", None)
        sources.pop("nid2026hh", None)
        dates = {"nid": report["snapshot"], "census": "2023"}
    else:
        sources.pop("nidcurrent", None)
        dates = {"nid": "2019 + 2026-03-15 (high hazard)", "census": "2023"}
    return sources, dates


def main() -> None:
    dams = load_json(BUILD / "dams_scored.json")
    SITE_DATA.mkdir(parents=True, exist_ok=True)
    sources, snapshot_dates = sources_used(dams)

    # index
    dump_json(SITE_DATA / "index.json", {"columns": INDEX_COLUMNS, "rows": [index_row(r) for r in dams]})

    # catalog
    dump_json(SITE_DATA / "catalog.json", {
        "issues": ISSUES,
        "actions": {k: [{"horizon": h, "title": t, "plain": p, "eng": e} for h, t, p, e in v] for k, v in ACTIONS.items()},
        "baseline": [{"horizon": h, "title": t, "plain": p, "eng": e} for h, t, p, e in BASELINE],
        "climate_region": CLIMATE_REGION,
        "climate_outlook": CLIMATE_OUTLOOK,
        "plan_status_labels": PLAN_STATUS_LABELS,
        "grade_bounds": GRADE_BOUNDS,
        "state_names": STATE_NAMES,
        "snapshot_dates": snapshot_dates,
        "sources": sources,
        "field_sources": {"nid2026hh": sorted(FIELDS_2026), "census2023": sorted(FIELDS_CENSUS), "computed": sorted(FIELDS_COMPUTED)},
        "built": __import__("datetime").date.today().isoformat(),
    }, compact=False)

    # shards
    by_shard: dict[tuple[str, str], list[dict]] = defaultdict(list)
    for r in dams:
        by_shard[(r["state"], shard_of(r["nid_id"]))].append(slim_record(r))
    for (st, sh), rows in by_shard.items():
        dump_json(SITE_DATA / "dams" / st / f"{sh}.json", {r["nid_id"]: r for r in rows})

    # states + summary
    by_state: dict[str, list[dict]] = defaultdict(list)
    for r in dams:
        by_state[r["state"]].append(r)
    state_summaries = {}
    for st, rows in sorted(by_state.items()):
        ru = rollup(rows)
        state_summaries[st] = {"name": STATE_NAMES.get(st, st), **ru}
        dump_json(SITE_DATA / "states" / f"{st}.json", {
            "state": st, "name": STATE_NAMES.get(st, st), "rollup": ru, "columns": ROW_COLUMNS,
            "worst": worst(rows, 25),
            "rows": [compact_row(r) for r in rows],
        })
    national = rollup(dams)
    dump_json(SITE_DATA / "summary.json", {
        "national": national,
        "states": state_summaries,
        "worst_national": worst(dams, 50),
        "worst_high_hazard_unsat": worst([r for r in dams if r.get("condition") == "Unsatisfactory" and r["hazard"] == "High"], 50),
        "largest_no_eap": [compact_row(r) for r in sorted([r for r in dams if "NO_EAP" in r["issues"]], key=lambda r: -(r.get("storage_acft") or 0))[:25]],
        "shard_size": SHARD,
        "columns": ROW_COLUMNS,
    })
    # Markdown content rendered by the site.
    content = SITE_DATA.parent / "content"
    content.mkdir(parents=True, exist_ok=True)
    for src in (ROOT / "data" / "methodology.md", ROOT / "data" / "schema.md",
                ROOT / "data" / "curated" / "case_studies.md", ROOT / "data" / "curated" / "funding_programs.md"):
        if src.exists():
            shutil.copyfile(src, content / src.name)

    n_files = sum(1 for _ in (SITE_DATA / "dams").rglob("*.json"))
    size_mb = sum(p.stat().st_size for p in SITE_DATA.rglob("*.json")) / 1e6
    print(f"published {len(dams)} dams, {n_files} shards, {size_mb:.1f} MB total; index {((SITE_DATA / 'index.json').stat().st_size / 1e6):.1f} MB")


if __name__ == "__main__":
    main()
