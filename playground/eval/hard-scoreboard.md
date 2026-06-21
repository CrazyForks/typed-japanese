# Hard eval scoreboard (real codex annotate pass-rate)

Each round runs the REAL `codex exec` annotate pipeline on every sentence in
`eval/hard-cases.json` (much harder than the fixed benchmark) and records how
often codex produces a snippet that **type-checks AND resolves byte-identically**
to the target. "modelable" = pass-rate excluding the classical-literal cases the
library cannot fully express.

| round | date | cases | pass | pass-rate | modelable | by-difficulty (hard / very-hard) |
|---|---|---|---|---|---|---|
| 001 | 2026-06-21 05:54 | 25 | 21 | **84.0%** | 86.4% | 100.0% / 71.4% |

## Round 001 by category

| category | pass |
|---|---|
| relative-clause | 2/2 |
| causative-passive-keigo | 2/3 |
| keigo-chains | 2/3 |
| nominalization-embedding | 2/2 |
| aux-verb-chains | 2/3 |
| conditional-concessive | 3/3 |
| quotation-modality | 3/3 |
| long-multiclause | 3/3 |
| classical-formal | 2/3 |
