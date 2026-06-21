# Typed Japanese parsing — eval scoreboard

Quantifiable parsing-conformance metric over time. Each round samples chapter
examples + fresh `annotate` output and cross-reviews them against `rubric.md`
with independent judges. **Conformance** = mean item score / 12. Dimensions
D1–D6 are normalized 0–100%. Higher = closer to correct, idiomatic analysis.

| round | date (UTC) | n | conformance | D1 POS | D2 decomp | D3 particle | D4 conj | D5 resolve | D6 idiom | proposals |
|------:|-----------|--:|------------:|-------:|----------:|------------:|--------:|-----------:|---------:|----------:|
| 001 | 2026-06-20 14:34 | 8 | **84.7%** | 83.3% | 87.5% | 95.8% | 77.1% | 100.0% | 64.6% | 7 |
| 002 | 2026-06-20 15:10 | 8 | **83.0%** | 83.3% | 77.1% | 77.1% | 87.5% | 100.0% | 72.9% | 6 |
| 003 | 2026-06-20 15:44 | 8 | **91.3%** | 75.0% | 97.9% | 95.8% | 91.7% | 100.0% | 87.5% | 6 |

> **Round 004** — dedicated `Masu` polite-paradigm migration (ts-def + 108-site codemod), no sample. Impact measured in round 005. See findings/round-004.md.
| 005 | 2026-06-20 16:40 | 8 | **83.0%** | 70.8% | 75.0% | 85.4% | 87.5% | 100.0% | 77.1% | 5 |
| 006 | 2026-06-20 17:09 | 8 | **69.4%** | 66.7% | 58.3% | 68.8% | 68.8% | 100.0% | 52.1% | 5 |

> **Rounds 1–6 are NOT comparable** — each sampled a different random 8 items over a bimodal corpus. An A/B on a fixed benchmark (REGRESSION-CHECK.md) shows current 76.4% vs pre-loop main 37.5% (+39 pts, 0 regressions). The loop is replaced below with a FIXED-benchmark KPI for a comparable trend.
