"""Unit tests for issue detection, DHI, grade rules, plans and projections."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "pipeline"))
from plans import breach_estimate, build_plan, plan_status, projections  # noqa: E402
from scoring import ISSUES, detect_issues, score  # noqa: E402


def dam(**over):
    base = {
        "nid_id": "XX00001", "name": "Test", "state": "TX", "hazard": "High", "condition": "Satisfactory",
        "eap": "Yes", "inspection_date": "2025-06-01", "inspection_frequency_yrs": 1, "year_completed": 2000,
        "year_modified": None, "storage_acft": 500.0, "height_ft": 30.0, "spillway_type": "Uncontrolled",
        "owner_types": ["Local Government"], "state_regulated": True, "federal_roles": [], "status": "Normal Operations",
        "coverage": "both", "attr_date": "2026-03-15", "purposes": ["Recreation"], "county_pop_2023": 1000,
        "county_full_name": "Test County",
    }
    base.update(over)
    return base


def test_sound_high_hazard_dam_gets_a():
    s = score(dam())
    assert s["grade"] == "A" and s["issues"] == []


def test_unsatisfactory_high_is_f():
    s = score(dam(condition="Unsatisfactory"))
    assert s["grade"] == "F" and "COND_UNSAT" in s["issues"]


def test_poor_high_at_least_d():
    assert score(dam(condition="Poor"))["grade"] in ("D", "F")


def test_no_eap_high_at_least_c():
    s = score(dam(eap="No"))
    assert "NO_EAP" in s["issues"] and s["grade"] in ("C", "D", "F")


def test_low_hazard_unknown_capped_at_c():
    s = score(dam(hazard="Low", condition=None, coverage="2019", attr_date="2019-12-31", year_completed=1890,
                  inspection_date=None, eap="Not Required"))
    assert s["grade"] in ("B", "C") and s["confidence"] == "low"


def test_age_issues_respect_modification():
    assert "AGE_100" in detect_issues(dam(year_completed=1900))
    assert not any(i.startswith("AGE") for i in detect_issues(dam(year_completed=1900, year_modified=2015)))


def test_inspection_overdue_uses_snapshot_date():
    # 2019-only record inspected in 2017 with 5-yr frequency is not overdue at the 2019 snapshot.
    r = dam(coverage="2019", attr_date="2019-12-31", inspection_date="2017-03-01", inspection_frequency_yrs=5,
            condition=None, hazard="Low", eap="Not Required")
    assert "INSPECT_OVERDUE" not in detect_issues(r)
    r["inspection_date"] = "2010-03-01"
    assert "INSPECT_OVERDUE" in detect_issues(r)


def test_every_issue_has_plan_actions_and_copy():
    for code, meta in ISSUES.items():
        assert meta["plain"] and meta["eng"] and 1 <= meta["sev"] <= 5
        plan = build_plan(dam(), [code])
        assert any(plan[h] for h in ("year1", "year5", "year10")), code


def test_baseline_plan_when_no_issues():
    plan = build_plan(dam(), [])
    assert plan["year10"] and plan["year10"][0]["from"] == "BASELINE"


def test_plan_status_from_nid_status():
    assert plan_status(dam(status="Under Remediation"), None)["status"] == "under_construction"
    assert plan_status(dam(condition="Poor", status=None), None)["status"] == "no_public_plan"
    assert plan_status(dam(), {"status": "funded", "program": "FEMA HHPD"})["status"] == "funded"


def test_breach_estimate_scales():
    small = breach_estimate(dam(storage_acft=100, height_ft=20))
    big = breach_estimate(dam(storage_acft=1_000_000, height_ft=300))
    assert small["peak_discharge_cfs"] < big["peak_discharge_cfs"]
    assert breach_estimate(dam(storage_acft=None)) is None


def test_projections_have_region_and_outlook():
    p = projections(dam(), ["NO_EAP"], "C")
    assert p["climate_region"] == "Southern Great Plains" and p["climate_outlook"]
    assert any("no plan" in o for o in p["ten_year_outlook"])
