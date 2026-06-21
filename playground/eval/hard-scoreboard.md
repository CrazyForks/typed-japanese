# Hard eval scoreboard (real codex annotate pass-rate)

Each round runs the REAL `codex exec` annotate pipeline on every sentence in
`eval/hard-cases.json` (much harder than the fixed benchmark) and records how
often codex produces a snippet that **type-checks AND resolves byte-identically**
to the target. "modelable" = pass-rate excluding the classical-literal cases the
library cannot fully express.

| round | date | cases | pass | pass-rate | modelable | by-difficulty (hard / very-hard) |
|---|---|---|---|---|---|---|
| 001 | 2026-06-21 06:15 | 25 | 21 | **84.0%** | 86.4% | 90.9% / 78.6% |
| 002 | 2026-06-21 07:19 | 25 | 21 | **84.0%** | 86.4% | 81.8% / 85.7% |
| 003 | 2026-06-21 08:10 | 25 | 21 | **84.0%** | 90.9% | 81.8% / 85.7% |

## Round 003 by category

| category | pass |
|---|---|
| relative-clause | 2/2 |
| causative-passive-keigo | 3/3 |
| keigo-chains | 2/3 |
| nominalization-embedding | 2/2 |
| aux-verb-chains | 3/3 |
| conditional-concessive | 2/3 |
| quotation-modality | 3/3 |
| long-multiclause | 3/3 |
| classical-formal | 1/3 |
