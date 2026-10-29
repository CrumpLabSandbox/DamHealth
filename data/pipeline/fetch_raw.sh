#!/usr/bin/env bash
# Fetch the raw inventory mirrors into data/raw/ (used locally and in CI).
#  - bcongdon/nid-data:               full NID export, 2019 (NID2019_U.csv)
#  - kalchikee/dam-failure-explorer:  NID high-hazard extract, March 2026 (GeoJSON)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
RAW="$ROOT/data/raw"
TMP="${TMPDIR:-/tmp}/damhealth-raw"
mkdir -p "$RAW" "$TMP"

if [ ! -f "$RAW/NID2019_U.csv" ]; then
  if [ ! -d "$TMP/nid-data/.git" ]; then
    # Root-level files are included in a sparse clone, so no sparse-checkout path is needed.
    GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 --filter=blob:none --sparse https://github.com/bcongdon/nid-data "$TMP/nid-data"
  fi
  cp "$TMP/nid-data/NID2019_U.csv" "$RAW/NID2019_U.csv"
fi

if [ ! -f "$RAW/hhpd_2026.geojson" ]; then
  if [ ! -d "$TMP/dam-failure-explorer/.git" ]; then
    GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 --filter=blob:none --sparse https://github.com/kalchikee/dam-failure-explorer "$TMP/dam-failure-explorer"
    git -C "$TMP/dam-failure-explorer" sparse-checkout set web/data
  fi
  cp "$TMP/dam-failure-explorer/web/data/dams_national_highhazard.geojson" "$RAW/hhpd_2026.geojson"
fi

ls -la "$RAW"
