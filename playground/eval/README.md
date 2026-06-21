# Parsing-accuracy eval loop

A self-improving loop that keeps the project's Japanese-parsing quality
**quantifiable** and **trending up**. Each round samples grammar entries, has
independent judges cross-review them against [`rubric.md`](./rubric.md), records a
conformance score, and routes the findings into concrete fixes.

## The metric

`scoreboard.md` is the source of truth: one row per round, with the overall
**conformance** (mean item score / 12) and the six rubric dimensions D1–D6. Watch
the conformance column climb as fixes land — that is the positive feedback loop.

## One round

```
# 1. sample: K existing chapter examples + M fresh `annotate --dry-run` snippets
node scripts/eval-sample.mjs --round N --existing 5 --fresh 3 > /tmp/batch.json

# 2. cross-review: K independent judges per item + synthesis of routed fixes
#    (run via the Workflow tool; args = { round, rubric (rubric.md), items })
#    → result JSON

# 3. record: append to the scoreboard, archive history + findings
node scripts/eval-record.mjs <result.json>

# 4. apply high-confidence fixes (ts-def / prompt), gated:
node scripts/eval-gate.mjs    # verify-snippets + verify-vocab + typecheck
#    keep if PASS, revert if FAIL → log to findings
```

## Layout

- `rubric.md` — the standard (D1 POS, D2 decomposition, D3 particles, D4
  conjugation, D5 resolution, D6 idiom; 0/1/2 each).
- `sentences.txt` — the sentence pool the `annotate` arm rotates through.
- `review.workflow.js` — the cross-review Workflow (judges + synthesizer).
- `scoreboard.md` — the running metric (the eval mechanism).
- `history/round-NNN.json` — full per-round results.
- `findings/round-NNN.md` — per-item verdicts + routed fix proposals + outcomes.

## Routing fixes

Each proposal is tagged: **ts-def** (library type gap → edit `src/*.d.ts`),
**prompt** (guidance gap → edit `scripts/annotate.ts`), or **content** (one-off
authoring slip). Systemic ts-def/prompt fixes are preferred because they lift
many items at once. Every applied fix must pass `eval-gate.mjs` or be reverted.
