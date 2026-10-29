"""Steps 01–03: ingest the 2019 full NID and the 2026 high-hazard extract, merge them
into one canonical record per dam, and attach county population context.

Usage: python3 -I data/pipeline/build_dataset.py
Output: data/build/dams.json  (list of canonical records)
        data/build/merge_report.json
"""
from __future__ import annotations

import csv
import math
import re
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import (  # noqa: E402
    BUILD, CURATED, CORE_CONFIG, CORE_MATERIAL, DAM_FAMILY, DAM_TYPE, EAP, FOUNDATION_MATERIAL,
    HAZARD, HHPD2026_DATE, HHPD2026_GEOJSON, NID2019_CSV, NID2019_DATE, OWNER_TYPE, PURPOSES,
    SPILLWAY_TYPE, STATE_ABBR, STATE_FIPS, STATE_NAMES, dump_json, load_json, parse_date,
    parse_float, parse_int, title_case,
)


# --------------------------------------------------------------------------- 2019

def decode_dam_types(code: str) -> list[str]:
    code = (code or "").strip().upper()
    out = []
    for i in range(0, len(code) - 1, 2):
        label = DAM_TYPE.get(code[i:i + 2])
        if label and label not in out:
            out.append(label)
    return out


def decode_owner_types(code: str) -> list[str]:
    return [OWNER_TYPE[c] for c in (code or "").strip().upper() if c in OWNER_TYPE]


def decode_purposes(code: str) -> list[str]:
    return [PURPOSES[c] for c in (code or "").strip().upper() if c in PURPOSES]


def decode_core(code: str) -> str | None:
    code = (code or "").strip().upper()
    if not code:
        return None
    cfg = CORE_CONFIG.get(code[0])
    mat = CORE_MATERIAL.get(code[1]) if len(code) > 1 else None
    parts = [p for p in (cfg, mat) if p]
    return ", ".join(parts) if parts else None


def decode_foundation(code: str) -> str | None:
    code = (code or "").strip().upper()
    mats = [FOUNDATION_MATERIAL[c] for c in code if c in FOUNDATION_MATERIAL]
    return " / ".join(dict.fromkeys(mats)) if mats else None


def federal_roles(row: dict) -> list[str]:
    roles = []
    for key, label in (
        ("FED_FUNDING", "Funding"), ("FED_DESIGN", "Design"), ("FED_CONSTRUCTION", "Construction"),
        ("FED_REGULATORY", "Regulatory"), ("FED_INSPECTION", "Inspection"), ("FED_OPERATION", "Operation"),
        ("FED_OWNER", "Owner"), ("FED_OTHER", "Other"),
    ):
        agency = (row.get(key) or "").strip()
        if agency:
            roles.append(f"{label}: {agency}")
    return roles


def ingest_2019() -> dict[str, dict]:
    dams: dict[str, dict] = {}
    with open(NID2019_CSV, encoding="utf-8-sig", errors="replace", newline="") as f:
        for row in csv.DictReader(f):
            nid = (row.get("NIDID") or "").strip().upper()
            if not nid:
                continue
            state = (row.get("STATE") or "").strip().upper()
            lat, lon = parse_float(row.get("LATITUDE")), parse_float(row.get("LONGITUDE"))
            if lat is not None and lon is not None and not (-90 <= lat <= 90 and -180 <= lon <= 180):
                lat = lon = None
            insp_freq = parse_int(row.get("INSPECTION_FREQUENCY"))
            rec = {
                "nid_id": nid,
                "name": title_case(row.get("DAM_NAME")) or nid,
                "other_names": [n for n in (title_case(row.get("OTHER_DAM_NAME")), title_case(row.get("DAM_FORMER_NAME"))) if n],
                "state": state,
                "state_name": STATE_NAMES.get(state, state),
                "county": title_case(row.get("COUNTY")),
                "city": title_case(row.get("CITY")),
                "city_distance_mi": parse_float(row.get("DISTANCE")),
                "river": title_case(row.get("RIVER")),
                "lat": lat,
                "lon": lon,
                "owner_name": title_case(row.get("OWNER_NAME")),
                "owner_types": decode_owner_types(row.get("OWNER_TYPE")),
                "private_dam": (row.get("PRIVATE_DAM") or "").strip().upper() == "Y",
                "designer": title_case(row.get("DAM_DESIGNER")),
                "dam_types": decode_dam_types(row.get("DAM_TYPE")),
                "core": decode_core(row.get("CORE")),
                "foundation": decode_foundation(row.get("FOUNDATION")),
                "purposes": decode_purposes(row.get("PURPOSES")),
                "year_completed": parse_int(row.get("YEAR_COMPLETED")),
                "year_modified": parse_int(row.get("YEAR_MODIFIED")),
                "length_ft": parse_float(row.get("DAM_LENGTH")),
                "height_ft": parse_float(row.get("NID_HEIGHT")) or parse_float(row.get("DAM_HEIGHT")),
                "structural_height_ft": parse_float(row.get("STRUCTURAL_HEIGHT")),
                "hydraulic_height_ft": parse_float(row.get("HYDRAULIC_HEIGHT")),
                "max_discharge_cfs": parse_float(row.get("MAX_DISCHARGE")),
                "max_storage_acft": parse_float(row.get("MAX_STORAGE")),
                "normal_storage_acft": parse_float(row.get("NORMAL_STORAGE")),
                "nid_storage_acft": parse_float(row.get("NID_STORAGE")),
                "surface_area_ac": parse_float(row.get("SURFACE_AREA")),
                "drainage_area_sqmi": parse_float(row.get("DRAINAGE_AREA")),
                "hazard": HAZARD.get((row.get("HAZARD") or "").strip().upper(), "Not Available"),
                "condition": None,
                "condition_date": None,
                "eap": EAP.get((row.get("EAP") or "").strip().upper()),
                "eap_last_revision": parse_date(row.get("EAP_LAST_REV_DATE")),
                "inspection_date": parse_date(row.get("INSPECTION_DATE")),
                "inspection_frequency_yrs": insp_freq if insp_freq else None,
                "state_regulated": (row.get("STATE_REG_DAM") or "").strip().upper() == "Y",
                "state_reg_agency": title_case(row.get("STATE_REG_AGENCY")),
                "jurisdictional": (row.get("JURISDICTIONALDAM") or "").strip().upper() == "Y",
                "permitting_authority": (row.get("PERMITTINGAUTHORITY") or "").strip().upper() == "Y",
                "inspection_authority": (row.get("INSPECTIONAUTHORITY") or "").strip().upper() == "Y",
                "enforcement_authority": (row.get("ENFORCEMENTAUTHORITY") or "").strip().upper() == "Y",
                "spillway_type": SPILLWAY_TYPE.get((row.get("SPILLWAY_TYPE") or "").strip().upper()[:1]),
                "spillway_width_ft": parse_float(row.get("SPILLWAY_WIDTH")),
                "outlet_gates": title_case(row.get("OUTLET_GATES")),
                "volume_cy": parse_float(row.get("VOLUME")),
                "number_of_locks": parse_int(row.get("NUMBER_OF_LOCKS")) or None,
                "federal_roles": federal_roles(row),
                "source_agency": (row.get("SOURCE_AGENCY") or "").strip() or None,
                "url": (row.get("URL_ADDRESS") or "").strip() or None,
                "cong_district": (row.get("CONG_DIST") or "").strip() or None,
                "cong_rep_2019": (row.get("CONG_NAME") or "").strip() or None,
                "num_structures": parse_int(row.get("NUMSEPARATESTRUCTURES")),
                "status": None,
                "coverage": "2019",
                "attr_date": NID2019_DATE,
            }
            if rec["other_names"]:
                rec["other_names"] = list(dict.fromkeys(rec["other_names"]))
            dams[nid] = rec
    return dams


# --------------------------------------------------------------------------- 2026

def map_eap_2026(v: str) -> str | None:
    v = (v or "").strip().lower()
    if v.startswith("y"):
        return "Yes"
    if v.startswith("n") and "req" in v:
        return "Not Required"
    if v.startswith("n"):
        return "No"
    return None


def map_dam_types_2026(v: str) -> list[str]:
    v = (v or "").strip()
    if not v:
        return []
    out = []
    for part in re.split(r"[;,/]\s*", v):
        p = part.strip().title()
        p = {"Earth": "Earth", "Rockfill": "Rockfill", "Gravity": "Gravity", "Buttress": "Buttress", "Arch": "Arch",
             "Multi-Arch": "Multi-Arch", "Concrete": "Concrete", "Masonry": "Masonry", "Stone": "Stone",
             "Timber Crib": "Timber Crib", "Roller-Compacted Concrete": "Roller-Compacted Concrete",
             "Other": "Other"}.get(p, p)
        if p and p not in out:
            out.append(p)
    return out


def map_purposes_2026(v: str) -> list[str]:
    v = (v or "").strip()
    if not v:
        return []
    out = []
    v = re.sub(r"fire protection,\s*stock,?\s*or small (fish|farm) pond", "FIREPOND", v, flags=re.I)
    for part in re.split(r"[;,/]\s*", v):
        p = part.strip()
        if not p:
            continue
        if p == "FIREPOND":
            p = "Fire Protection, Stock, or Small Farm Pond"
        # Normalise to the 2019 vocabulary where wording differs.
        p = {"Flood Control": "Flood Risk Reduction", "Flood Risk Reduction": "Flood Risk Reduction",
             "Fire Protection, Stock, Or Small Farm Pond": "Fire Protection, Stock, or Small Farm Pond",
             "Fish And Wildlife Pond": "Fish and Wildlife Pond"}.get(p.title(), p)
        if p not in out:
            out.append(p)
    return out


def ingest_2026() -> dict[str, dict]:
    gj = load_json(HHPD2026_GEOJSON)
    dams: dict[str, dict] = {}
    for feat in gj["features"]:
        p = feat["properties"]
        nid = (p.get("id") or "").strip().upper()
        if not nid:
            continue
        coords = (feat.get("geometry") or {}).get("coordinates") or [None, None]
        lon, lat = coords[0], coords[1]
        state_name = (p.get("state") or "").strip()
        state = STATE_ABBR.get(state_name, state_name[:2].upper())
        cond = (p.get("condition") or "").strip() or None
        if cond and cond not in ("Satisfactory", "Fair", "Poor", "Unsatisfactory"):
            cond = "Not Rated"
        height = parse_float(p.get("height_ft"))
        storage = parse_float(p.get("storage_acft"))
        year = parse_int(p.get("year_completed"))
        rec = {
            "nid_id": nid,
            "name": title_case(p.get("name")) or nid,
            "state": state,
            "state_name": STATE_NAMES.get(state, state_name),
            "county": title_case(p.get("county")),
            "city": title_case(p.get("city")),
            "river": title_case(p.get("river")),
            "lat": lat,
            "lon": lon,
            "owner_name": title_case(p.get("owner")),
            "owner_types": [t.strip().title().replace("Local Government", "Local Government") for t in re.split(r"[;,/]\s*", p.get("owner_type") or "") if t.strip()],
            "dam_types": map_dam_types_2026(p.get("dam_type")),
            "purposes": map_purposes_2026(p.get("purpose")),
            "year_completed": year if year and year > 1500 else None,
            "height_ft": height if height and height > 0 else None,
            "max_storage_acft": storage if storage and storage > 0 else None,
            "hazard": "High",
            "condition": cond or "Not Rated",
            "condition_date": HHPD2026_DATE,
            "eap": map_eap_2026(p.get("eap")),
            "inspection_date": parse_date(p.get("last_inspection")),
            "status": (p.get("status") or "").strip() or None,
            "coverage": "2026",
            "attr_date": HHPD2026_DATE,
        }
        dams[nid] = rec
    return dams


# --------------------------------------------------------------------------- merge

# Fields where a 2026 value, when present, replaces the 2019 value.
OVERRIDE_2026 = [
    "name", "county", "city", "river", "lat", "lon", "owner_name", "owner_types", "dam_types", "purposes",
    "year_completed", "height_ft", "max_storage_acft", "hazard", "condition", "condition_date", "eap",
    "inspection_date", "status",
]


def _norm(s: str | None) -> str:
    return re.sub(r"[^a-z0-9]", "", re.sub(r"\b(dam|lake|reservoir|no|number)\b", "", (s or "").lower()))


def same_structure(a: dict, b: dict) -> bool:
    """NID re-keyed some multi-structure complexes between 2019 and 2026; a record whose
    name AND location both disagree is treated as a different structure."""
    na, nb = _norm(a.get("name")), _norm(b.get("name"))
    names_agree = na == nb or (na and nb and (na in nb or nb in na))
    if None in (a.get("lat"), a.get("lon"), b.get("lat"), b.get("lon")):
        return True
    km = math.hypot((a["lat"] - b["lat"]) * 111.0, (a["lon"] - b["lon"]) * 111.0 * math.cos(math.radians(a["lat"])))
    return names_agree or km <= 5.0


def merge(d19: dict[str, dict], d26: dict[str, dict]) -> tuple[list[dict], dict]:
    merged: dict[str, dict] = {}
    report = Counter()
    for nid, r in d19.items():
        merged[nid] = dict(r)
    for nid, r26 in d26.items():
        if nid in merged and not same_structure(merged[nid], r26):
            # Different structure under the same ID: trust the newer record only.
            r26 = dict(r26)
            r26["merge_note"] = f"2019 record under this ID ({merged[nid]['name']}) appears to be a different structure and was not merged."
            merged[nid] = r26
            report["2026_replaced_mismatch"] += 1
            continue
        if nid in merged:
            r = merged[nid]
            for k in OVERRIDE_2026:
                v = r26.get(k)
                if v not in (None, "", []):
                    r[k] = v
            r["coverage"] = "both"
            r["attr_date"] = HHPD2026_DATE
            report["both"] += 1
        else:
            merged[nid] = dict(r26)
            report["2026_only"] += 1
    report["2019_only"] = sum(1 for r in merged.values() if r["coverage"] == "2019")
    report["total"] = len(merged)

    # Derived fields common to every record.
    for r in merged.values():
        # NID uses 0 for "unknown" in most measurements.
        for k in ("length_ft", "height_ft", "structural_height_ft", "hydraulic_height_ft", "max_discharge_cfs",
                  "max_storage_acft", "normal_storage_acft", "nid_storage_acft", "surface_area_ac",
                  "drainage_area_sqmi", "spillway_width_ft", "volume_cy", "city_distance_mi"):
            if r.get(k) is not None and r[k] <= 0:
                r[k] = None
        if r.get("city") and re.fullmatch(r"[\d.\- ]+", r["city"]):
            r["city"] = None
        if r.get("year_completed") and not (1600 <= r["year_completed"] <= 2026):
            r["year_completed"] = None
        if r.get("year_modified") and not (1600 <= r["year_modified"] <= 2026):
            r["year_modified"] = None
        # High in 2019 but absent from the 2026 high-hazard extract: likely reclassified or removed.
        r["hazard_note"] = None
        if r["coverage"] == "2019" and r["hazard"] == "High":
            r["hazard_note"] = "Classified High in the 2019 inventory but not present in the March 2026 high-hazard extract; may have been reclassified, breached, or removed."
        r.setdefault("other_names", [])
        r.setdefault("merge_note", None)
        r.setdefault("federal_roles", [])
        r["family"] = DAM_FAMILY.get((r.get("dam_types") or ["Other"])[0], "other")
        r["storage_acft"] = r.get("max_storage_acft") or r.get("nid_storage_acft") or r.get("normal_storage_acft")
        if r.get("condition") is None:
            r["condition"] = "Not Rated" if r["hazard"] in ("High", "Significant") else None
        r["has_coords"] = r.get("lat") is not None and r.get("lon") is not None
    return sorted(merged.values(), key=lambda x: x["nid_id"]), dict(report)


# --------------------------------------------------------------------------- county population

def norm_county(name: str | None) -> str:
    if not name:
        return ""
    n = name.lower()
    n = re.sub(r"\b(county|parish|borough|census area|municipality|city and borough|municipio)\b", "", n)
    n = n.replace("st.", "saint").replace("ste.", "sainte")
    n = re.sub(r"[^a-z]", "", n)
    return n


def attach_population(dams: list[dict]) -> int:
    path = CURATED / "county_population.csv"
    if not path.exists():
        return 0
    lookup: dict[tuple[str, str], tuple[int, str]] = {}
    with open(path, encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            st = STATE_ABBR.get(row["state_name"])
            if not st:
                continue
            lookup[(st, norm_county(row["county_name"]))] = (int(row["pop_2023"]), row["county_name"])
    hits = 0
    for r in dams:
        key = (r["state"], norm_county(r.get("county")))
        hit = lookup.get(key)
        if hit:
            r["county_pop_2023"], r["county_full_name"] = hit
            hits += 1
        else:
            r["county_pop_2023"], r["county_full_name"] = None, None
    return hits


def main() -> None:
    d19 = ingest_2019()
    d26 = ingest_2026()
    dams, report = merge(d19, d26)
    report["county_pop_matched"] = attach_population(dams)
    report["with_coords"] = sum(1 for r in dams if r["has_coords"])
    report["hazard"] = dict(Counter(r["hazard"] for r in dams))
    report["condition"] = dict(Counter(r["condition"] or "None" for r in dams))
    report["coverage"] = dict(Counter(r["coverage"] for r in dams))
    BUILD.mkdir(parents=True, exist_ok=True)
    dump_json(BUILD / "dams.json", dams)
    dump_json(BUILD / "merge_report.json", report, compact=False)
    print(__import__("json").dumps(report, indent=2))


if __name__ == "__main__":
    main()
