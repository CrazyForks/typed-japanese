# Typed Japanese parsing — eval scoreboard

Quantifiable parsing-conformance metric over time. Each round samples chapter
examples + fresh `annotate` output and cross-reviews them against `rubric.md`
with independent judges. **Conformance** = mean item score / 12. Dimensions
D1–D6 are normalized 0–100%. Higher = closer to correct, idiomatic analysis.

| round | date (UTC) | n | conformance | D1 POS | D2 decomp | D3 particle | D4 conj | D5 resolve | D6 idiom | proposals |
|------:|-----------|--:|------------:|-------:|----------:|------------:|--------:|-----------:|---------:|----------:|
| 001 | 2026-06-21 01:12 | 12 | **76.4%** | — | — | — | — | — | — | 0 |
| 002 | 2026-06-21 01:42 | 12 | **83.1%** | 91.7% | 81.9% | 75.0% | 75.0% | 100.0% | 75.0% | 7 |
| 003 | 2026-06-21 02:15 | 12 | **89.8%** | 94.4% | 87.5% | 80.6% | 86.1% | 100.0% | 90.3% | 7 |
| 004 | 2026-06-21 02:46 | 12 | **94.9%** | 100.0% | 93.1% | 83.3% | 97.2% | 100.0% | 95.8% | 5 |
