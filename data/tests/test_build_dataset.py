"""Invariants for the merged canonical dataset (run build_dataset.py first)."""
import json
import sys
from collections import Counter
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "data" / "pipeline"))
from common import BUILD, CONDITIONS, HAZARD, STATE_NAMES  # noqa: E402


@pytest.fixture(scope="module")
def dams():
    path = BUILD / "dams.json"
    if not path.exists():
        pytest.skip("run data/pipeline/build_dataset.py first")
    return json.load(open(path))


def test_record_count(dams):
    assert 91_000 <= len(dams) <= 95_000


def test_unique_ids(dams):
    ids = [d["nid_id"] for d in dams]
    assert len(ids) == len(set(ids))


def test_2026_condition_coverage(dams):
    with_2026 = [d for d in dams if d["coverage"] in ("both", "2026")]
    assert len(with_2026) == 16_324 or 16_000 <= len(with_2026) <= 17_000
    assert all(d["condition"] in CONDITIONS for d in with_2026)
    assert all(d["hazard"] == "High" for d in with_2026)
    assert all(d["condition_date"] == "2026-03-15" for d in with_2026)


def test_coordinates_sane(dams):
    bad = [d for d in dams if d["has_coords"] and not (-90 <= d["lat"] <= 90 and -180 <= d["lon"] <= 180)]
    assert not bad
    geocoded = sum(1 for d in dams if d["has_coords"])
    assert geocoded / len(dams) > 0.99


def test_vocabularies(dams):
    assert set(d["hazard"] for d in dams) <= set(HAZARD.values())
    assert set(d["condition"] for d in dams) <= set(CONDITIONS) | {None}
    assert set(d["eap"] for d in dams) <= {"Yes", "No", "Not Required", None}
    assert set(d["state"] for d in dams) <= set(STATE_NAMES)
    assert set(d["family"] for d in dams) <= {"embankment", "gravity", "arch", "buttress", "other"}


def test_no_zero_measurements(dams):
    for k in ("height_ft", "storage_acft", "length_ft"):
        assert all(d.get(k) is None or d[k] > 0 for d in dams), k


def test_years_plausible(dams):
    assert all(d["year_completed"] is None or 1600 <= d["year_completed"] <= 2026 for d in dams)


def test_purposes_not_fragmented(dams):
    purposes = Counter(p for d in dams for p in d["purposes"])
    assert "Stock" not in purposes
    assert "Or Small Fish Pond" not in purposes


def test_county_population_coverage(dams):
    matched = sum(1 for d in dams if d.get("county_pop_2023"))
    assert matched / len(dams) > 0.95
