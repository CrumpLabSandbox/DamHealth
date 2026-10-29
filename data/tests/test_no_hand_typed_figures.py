"""Keep the site reproducible: inventory figures must come from the build, not be typed by hand.

Scans site source and the Markdown pages that the build fills in. A comma- or underscore-grouped
number (91,907 / 585_000_000) or a year used in arithmetic (2026 - year, ref = 2026) is flagged.
Put real data in the pipeline output, external figures in data/curated/external_facts.json, and
Markdown counts in {{placeholders}}. A line that must keep a literal (a unit conversion, a scoring
threshold) says why with the marker "recheck-ok"; RECHECK.md lists what to review by hand.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
FILES = [p for p in (ROOT / "site" / "src").rglob("*") if p.suffix in (".ts", ".tsx") and ".test." not in p.name]
FILES += [ROOT / "data" / "methodology.md", ROOT / "data" / "schema.md"]

GROUPED = re.compile(r"(?<![\w.#/-])\d{1,3}(?:[,_]\d{3})+(?![\w])")
# A year followed by - or + and an operand (not an ISO date like 2026-03-15), or assigned (= 2026).
YEAR_MATH = re.compile(r"(?:\b20[1-3]\d(?!-\d\d-\d\d)\s*[-+]\s*[\w(])|(?:[=:]\s*20[1-3]\d\b(?!\s*[-/]))")


def offending_lines():
    for path in FILES:
        for i, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            if "recheck-ok" in line:
                continue
            code = re.sub(r"\{\{[^{}]*\}\}", "", line)  # placeholders are fine
            if GROUPED.search(code) or YEAR_MATH.search(code):
                yield f"{path.relative_to(ROOT)}:{i}: {line.strip()[:140]}"


def test_no_hand_typed_figures():
    hits = list(offending_lines())
    assert not hits, "Hand-typed figures found; compute them or mark 'recheck-ok' with a reason:\n" + "\n".join(hits)
