"""Unit tests for reading the current official NID export (nation.csv) without the full file."""
import csv
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "data" / "pipeline"))
from build_dataset import finalize, ingest_current, read_current_snapshot_date  # noqa: E402

COLUMNS = [
    "Dam Name", "Other Names", "Former Names", "NID ID", "Owner Names", "Owner Types", "Primary Owner Type",
    "Number of Associated Structures", "Is Associated Structure?", "Designer Names", "Primary Purpose", "Purposes",
    "Source Agency", "Latitude", "Longitude", "State", "County", "City", "Distance to Nearest City (Miles)",
    "River or Stream Name", "Congressional District", "State Regulated Dam", "State Jurisdictional Dam",
    "State Regulatory Agency", "State Permitting Authority", "State Inspection Authority", "State Enforcement Authority",
    "Federally Regulated Dam", "Federal Agency Owners", "Federal Agency Involvement Regulatory", "Primary Dam Type",
    "Dam Types", "Core Types", "Foundation", "Dam Height (Ft)", "NID Height (Ft)", "Dam Length (Ft)", "Year Completed",
    "Years Modified", "NID Storage (Acre-Ft)", "Max Storage (Acre-Ft)", "Spillway Type", "Data Last Updated",
    "Last Inspection Date", "Inspection Frequency", "Hazard Potential Classification", "Condition Assessment",
    "Condition Assessment Date", "Operational Status", "EAP Prepared", "Website URL",
]

BASE = {
    "Dam Name": "TEST LAKE DAM", "NID ID": "TX99999", "Owner Names": "CITY OF TESTVILLE;TEST WCID",
    "Owner Types": "Local Government;Private", "Primary Owner Type": "Local Government",
    "Is Associated Structure?": "No", "Primary Purpose": "Water Supply",
    "Purposes": "Water Supply;Fire Protection, Stock, Or Small Fish Pond;-1", "Latitude": "31.5", "Longitude": "-97.1",
    "State": "Texas", "County": "McLennan", "City": "Waco", "State Regulated Dam": "Yes",
    "Federally Regulated Dam": "No", "Primary Dam Type": "Earth", "Dam Types": "Earth;Gravity",
    "Core Types": "Earth;Unlisted/Unknown", "Foundation": "Rock and Soil", "NID Height (Ft)": "40",
    "Dam Length (Ft)": "0", "Year Completed": "1955", "Years Modified": "1962O;1971H;2014F",
    "NID Storage (Acre-Ft)": "1200", "Spillway Type": "Uncontrolled", "Data Last Updated": "03/01/2018",
    "Last Inspection Date": "06/22/2024", "Inspection Frequency": "0.5", "Hazard Potential Classification": "High",
    "Condition Assessment": "Poor", "Condition Assessment Date": "06/22/2024", "Operational Status": "Under Remediation",
    "EAP Prepared": "Yes",
}


def write_fixture(path: Path, rows: list[dict]) -> Path:
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write("Data Last Updated:,2026-10-27\n")
        w = csv.DictWriter(f, fieldnames=COLUMNS)
        w.writeheader()
        for r in rows:
            w.writerow({c: r.get(c, "") for c in COLUMNS})
    return path


def test_snapshot_date_from_first_line(tmp_path):
    assert read_current_snapshot_date(write_fixture(tmp_path / "nation.csv", [BASE])) == "2026-10-27"


def test_record_mapping(tmp_path):
    recs, report = ingest_current(write_fixture(tmp_path / "nation.csv", [BASE]))
    (r,) = finalize(recs)
    assert report["snapshot"] == "2026-10-27" and report["source"] == "nidcurrent"
    assert r["coverage"] == "current" and r["attr_date"] == "2026-10-27" and r["record_updated"] == "2018-03-01"
    assert r["name"] == "Test Lake Dam" and r["state"] == "TX"
    assert r["owner_types"] == ["Local Government", "Private"] and r["private_dam"] is False
    assert r["purposes"] == ["Water Supply", "Fire Protection, Stock, or Small Farm Pond"]
    assert r["dam_types"] == ["Earth", "Gravity"] and r["family"] == "embankment"
    assert r["core"] == "Earth" and r["foundation"] == "Rock / Soil"
    assert r["year_modified"] == 2014 and r["length_ft"] is None
    assert r["hazard"] == "High" and r["condition"] == "Poor" and r["condition_date"] == "2024-06-22"
    assert r["inspection_frequency_yrs"] == 0.5 and r["status"] == "Under Remediation"


def test_associated_structure_folded_into_main_dam(tmp_path):
    dike = dict(BASE, **{"Dam Name": "TEST LAKE DIKE", "Is Associated Structure?": "Yes", "NID Storage (Acre-Ft)": "9999"})
    recs, report = ingest_current(write_fixture(tmp_path / "nation.csv", [dike, BASE]))
    assert len(recs) == 1 and recs[0]["name"] == "Test Lake Dam"
    assert report["associated_rows_folded"] == 1


def test_blank_condition_and_federal_regulation(tmp_path):
    row = dict(BASE, **{"Condition Assessment": "Not Available", "Federally Regulated Dam": "Yes",
                        "Federal Agency Involvement Regulatory": "Federal Energy Regulatory Commission"})
    blank = dict(BASE, **{"NID ID": "TX99998", "Condition Assessment": "", "Hazard Potential Classification": "Low"})
    recs = {r["nid_id"]: r for r in finalize(ingest_current(write_fixture(tmp_path / "nation.csv", [row, blank]))[0])}
    assert recs["TX99999"]["condition"] == "Not Rated"
    assert recs["TX99999"]["federal_roles"] == ["Regulatory: Federal Energy Regulatory Commission"]
    assert recs["TX99998"]["condition"] is None
