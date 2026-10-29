#!/usr/bin/env bash
# Fetch raw inventory data into data/raw/ (used locally and in CI).
#
# Preferred: the current full national NID export from the official site
#   https://nid.sec.usace.army.mil/api/nation/csv  ->  data/raw/nation.csv
# Its first line is "Data Last Updated:,YYYY-MM-DD"; the pipeline dates every record from it.
#
# Fallback, only if that download fails (the build then labels records 2019 / March 2026):
#  - bcongdon/nid-data:               full NID export, 2019 (NID2019_U.csv)
#  - kalchikee/dam-failure-explorer:  NID high-hazard extract, March 2026 (GeoJSON)
#
# Set NID_REFRESH=1 to re-download nation.csv even if a copy exists.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
RAW="$ROOT/data/raw"
TMP="${TMPDIR:-/tmp}/damhealth-raw"
NID_URL="https://nid.sec.usace.army.mil/api/nation/csv"
mkdir -p "$RAW" "$TMP"

warn() {
  if [ -n "${GITHUB_ACTIONS:-}" ]; then echo "::warning::$*"; else echo "WARNING: $*" >&2; fi
}

fetch_current() {
  local part="$RAW/nation.csv.part"
  echo "Downloading current NID export from $NID_URL"
  if curl -fsSL --retry 4 --retry-delay 15 --retry-all-errors --connect-timeout 30 --max-time 900 \
       -o "$part" "$NID_URL" \
     && head -1 "$part" | grep -qi "Data Last Updated" \
     && [ "$(wc -l < "$part")" -gt 50000 ]; then
    mv "$part" "$RAW/nation.csv"
    echo "Got $(head -1 "$RAW/nation.csv" | tr -d '\r') ($(wc -l < "$RAW/nation.csv") lines)"
    return 0
  fi
  rm -f "$part"
  return 1
}

fetch_legacy() {
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
}

if [ -f "$RAW/nation.csv" ] && [ -z "${NID_REFRESH:-}" ]; then
  echo "Using existing $RAW/nation.csv ($(head -1 "$RAW/nation.csv" | tr -d '\r')); set NID_REFRESH=1 to re-download"
elif ! fetch_current; then
  warn "Could not download the current NID export; building from the 2019 export + March 2026 high-hazard extract instead."
  fetch_legacy
fi

ls -la "$RAW"
