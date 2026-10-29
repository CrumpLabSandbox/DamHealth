"""Shared paths and NID code dictionaries for the DamHealth pipeline.

Code meanings follow the USACE National Inventory of Dams data dictionary.
Where the dictionary is ambiguous the raw code is preserved alongside the label.
"""
from __future__ import annotations

import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / "data" / "raw"
BUILD = ROOT / "data" / "build"
CURATED = ROOT / "data" / "curated"
SITE_DATA = ROOT / "site" / "public" / "data"

NID2019_CSV = RAW / "NID2019_U.csv"
HHPD2026_GEOJSON = RAW / "hhpd_2026.geojson"
HHPD2026_DATE = "2026-03-15"
NID2019_DATE = "2019-12-31"

# Provenance manifest: every published value traces to one of these.
SOURCES = {
    "nid2019": {
        "id": "nid2019", "name": "USACE National Inventory of Dams, full export",
        "publisher": "U.S. Army Corps of Engineers", "snapshot": "2019",
        "url": "https://nid.sec.usace.army.mil/",
        "mirror": "https://github.com/bcongdon/nid-data", "mirror_commit": "57e55c0b061f3f68e788f6d4e6f831bc0e023a18",
        "file": "NID2019_U.csv", "records": 91457,
    },
    "nid2026hh": {
        "id": "nid2026hh", "name": "USACE National Inventory of Dams, high-hazard-potential extract",
        "publisher": "U.S. Army Corps of Engineers", "snapshot": HHPD2026_DATE,
        "url": "https://nid.sec.usace.army.mil/",
        "mirror": "https://github.com/kalchikee/dam-failure-explorer", "mirror_commit": "b3a1251c6426a4b27520a545450fafbc2643d5ef",
        "file": "web/data/dams_national_highhazard.geojson", "records": 16805,
    },
    "census2023": {
        "id": "census2023", "name": "County Population Totals, Vintage 2023",
        "publisher": "U.S. Census Bureau", "snapshot": "2023",
        "url": "https://www.census.gov/data/tables/time-series/demo/popest/2020s-counties-total.html",
        "mirror": "https://github.com/NHagar/data-journalism-python", "mirror_commit": None,
        "file": "book/_static/census-estimates/*.csv", "records": 3143,
    },
    "curated": {
        "id": "curated", "name": "DamHealth curated research (plan status, case studies)",
        "publisher": "DamHealth, from cited public sources", "snapshot": "2026-10",
        "url": "https://github.com/CrumpLabSandbox/DamHealth/tree/main/data/curated",
        "mirror": None, "mirror_commit": None, "file": "data/curated/plan_status.csv", "records": None,
    },
    "computed": {
        "id": "computed", "name": "Computed by DamHealth (screening indicator, not a fact about the dam)",
        "publisher": "DamHealth", "snapshot": "build",
        "url": "https://github.com/CrumpLabSandbox/DamHealth/blob/main/data/methodology.md",
        "mirror": None, "mirror_commit": None, "file": "data/pipeline/scoring.py, plans.py", "records": None,
    },
}

# Which source each canonical field comes from, given coverage.
FIELDS_2026 = {"name", "county", "city", "river", "lat", "lon", "owner_name", "owner_types", "dam_types", "purposes",
               "year_completed", "height_ft", "max_storage_acft", "hazard", "condition", "condition_date", "eap",
               "inspection_date", "status"}
FIELDS_COMPUTED = {"family", "storage_acft", "hazard_note", "merge_note", "issues", "scores", "grade", "grade_rules",
                   "confidence", "cost", "plan", "projections", "coverage", "attr_date", "has_coords"}
FIELDS_CENSUS = {"county_pop_2023", "county_full_name"}


def field_source(field: str, coverage: str) -> str:
    if field in FIELDS_COMPUTED:
        return "computed"
    if field in FIELDS_CENSUS:
        return "census2023"
    if field == "plan_status":
        return "curated"
    if coverage == "2026":
        return "nid2026hh"
    if coverage == "both" and field in FIELDS_2026:
        return "nid2026hh"
    return "nid2019"


STATE_NAMES = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
    "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District of Columbia",
    "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois",
    "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana",
    "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota",
    "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada",
    "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York",
    "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon",
    "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota",
    "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia",
    "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming",
    "PR": "Puerto Rico", "GU": "Guam", "VI": "U.S. Virgin Islands", "AS": "American Samoa",
    "MP": "Northern Mariana Islands",
}
STATE_ABBR = {v: k for k, v in STATE_NAMES.items()}

STATE_FIPS = {
    "AL": "01", "AK": "02", "AZ": "04", "AR": "05", "CA": "06", "CO": "08", "CT": "09", "DE": "10",
    "DC": "11", "FL": "12", "GA": "13", "HI": "15", "ID": "16", "IL": "17", "IN": "18", "IA": "19",
    "KS": "20", "KY": "21", "LA": "22", "ME": "23", "MD": "24", "MA": "25", "MI": "26", "MN": "27",
    "MS": "28", "MO": "29", "MT": "30", "NE": "31", "NV": "32", "NH": "33", "NJ": "34", "NM": "35",
    "NY": "36", "NC": "37", "ND": "38", "OH": "39", "OK": "40", "OR": "41", "PA": "42", "RI": "44",
    "SC": "45", "SD": "46", "TN": "47", "TX": "48", "UT": "49", "VT": "50", "VA": "51", "WA": "53",
    "WV": "54", "WI": "55", "WY": "56", "PR": "72", "GU": "66", "VI": "78", "AS": "60", "MP": "69",
}

# Dam type: NID stores up to several two-letter codes, primary first.
DAM_TYPE = {
    "RE": "Earth", "ER": "Rockfill", "PG": "Gravity", "CB": "Buttress", "VA": "Arch",
    "MV": "Multi-Arch", "CN": "Concrete", "MS": "Masonry", "ST": "Stone", "TC": "Timber Crib",
    "RC": "Roller-Compacted Concrete", "OT": "Other",
}
# Structural family used by the schematic renderer.
DAM_FAMILY = {
    "Earth": "embankment", "Rockfill": "embankment", "Gravity": "gravity", "Buttress": "buttress",
    "Arch": "arch", "Multi-Arch": "arch", "Concrete": "gravity", "Masonry": "gravity",
    "Stone": "gravity", "Timber Crib": "other", "Roller-Compacted Concrete": "gravity", "Other": "other",
}

PURPOSES = {
    "C": "Flood Risk Reduction", "D": "Debris Control", "F": "Fish and Wildlife Pond",
    "G": "Grade Stabilization", "H": "Hydroelectric", "I": "Irrigation", "N": "Navigation",
    "O": "Other", "P": "Fire Protection, Stock, or Small Farm Pond", "R": "Recreation",
    "S": "Water Supply", "T": "Tailings",
}

OWNER_TYPE = {
    "F": "Federal", "S": "State", "L": "Local Government", "U": "Public Utility",
    "P": "Private", "X": "Not Listed",
}

HAZARD = {"L": "Low", "S": "Significant", "H": "High", "U": "Undetermined", "N": "Not Available"}

EAP = {"Y": "Yes", "N": "No", "NR": "Not Required"}

SPILLWAY_TYPE = {"C": "Controlled", "U": "Uncontrolled", "N": "None"}

# Foundation: first letters give material; trailing K/Z are NID sub-codes we do not interpret.
FOUNDATION_MATERIAL = {"R": "Rock", "S": "Soil", "U": "Unspecified"}

# Core: position 1 = configuration, 2 = material, 3 = sub-code (K/Z) not interpreted.
CORE_CONFIG = {"H": "Homogeneous", "I": "Impervious core", "U": "Upstream facing", "X": "No core / unknown"}
CORE_MATERIAL = {"E": "Earth", "C": "Concrete", "B": "Bituminous", "M": "Metal", "X": "None"}

CONDITIONS = ["Satisfactory", "Fair", "Poor", "Unsatisfactory", "Not Rated"]


def parse_float(v: str | None) -> float | None:
    if v is None:
        return None
    v = str(v).strip().replace(",", "")
    if v in ("", "N/A", "NA", "null", "None"):
        return None
    try:
        f = float(v)
    except ValueError:
        return None
    return f


def parse_int(v: str | None) -> int | None:
    f = parse_float(v)
    return int(f) if f is not None else None


def parse_date(v: str | None) -> str | None:
    """Return ISO date (YYYY-MM-DD) from the formats present in the inventories."""
    if not v:
        return None
    v = str(v).strip()
    if not v:
        return None
    from datetime import datetime

    for fmt in ("%m/%d/%Y", "%d-%b-%y", "%Y-%m-%d", "%m/%d/%y"):
        try:
            d = datetime.strptime(v, fmt)
            # two-digit years: NID submit dates are 2000s
            if d.year < 1950:
                d = d.replace(year=d.year + 100)
            return d.date().isoformat()
        except ValueError:
            continue
    return None


def title_case(s: str | None) -> str | None:
    if not s:
        return None
    s = s.strip()
    if not s or s.upper() in ("N/A", "NA", "NONE", "UNKNOWN"):
        return None
    small = {"of", "the", "and", "at", "on", "in", "for", "de", "la"}
    acronyms = {"usda", "nrcs", "usace", "usbr", "tva", "ferc", "llc", "inc", "co", "dnr", "dep", "deq", "dwr",
                "scs", "wma", "hoa", "poa", "ii", "iii", "iv", "us", "u.s.", "pg&e", "sce", "blm", "fws", "nps",
                "doe", "dod", "usaf", "bia", "ibwc", "mwd", "lcra", "sawpa", "tceq", "nycdep", "mdc", "hhpd"}
    words = []
    for i, w in enumerate(s.lower().split()):
        if w.strip("(),.") in acronyms:
            words.append(w.upper())
        elif w in small and i:
            words.append(w)
        elif w.startswith(("mc", "o'")) and len(w) > 2:
            words.append(w[:2].capitalize() + w[2:].capitalize())
        else:
            words.append(w.capitalize())
    return " ".join(words)


def dump_json(path: Path, obj, compact: bool = True) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        if compact:
            json.dump(obj, f, ensure_ascii=False, separators=(",", ":"))
        else:
            json.dump(obj, f, ensure_ascii=False, indent=2)


def load_json(path: Path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)
