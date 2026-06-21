# Eval round 004 — DEDICATED MIGRATION (no sample/review)

Round 4 was spent clearing the standing #1 backlog item (top issue rounds 1–3):
the polite-form (`ます`) library gap. No fresh sample/review this round — round 5
measures the impact on D4/D6.

## Done: `ConjugateVerb` polite-paradigm migration (ts-def + 108-site codemod)
- **[ts-def] src/verb-types.d.ts**: renamed the map key `Masu`→`MasuStem` (連用形),
  added `GetMasuStem<V>`, and made the polite paradigm resolve uniformly for every
  verb class:
  - `MasuStem` → 話し / 食べ / し (bare 連用形, the mount point)
  - `Masu` → 話します (was 話し — now the FULL polite surface)
  - `MasuPast` → 話しました · `Masen` → 話しません · `MasenDeshita` → 話しませんでした
- **Codemod** over all call sites (21 chapter files + examples + generated):
  - `ConjugateVerb<V,"Masu">ます` → `…"Masu">` (ます now built-in)
  - `…"Masu">ました/ません/ませんでした` → `MasuPast`/`Masen`/`MasenDeshita`
  - `…"Masu">` used as a bare stem (before たい/ましょう/つつ/お〜する/お〜になる/
    いただく/ください) → `MasuStem`
  - parts path: `VerbPart<V,"Masu"> + SuffixPart<"ます">` → `VerbPart<V,"Masu">`
  - iterated `verify-snippets --json` to **0/384 failures** (caught 9 stem-before-
    honorific sites: お読みになる, お持ちする, 〜つつ — repaired to `MasuStem`).
- **[prompt] annotate.ts**: exposed the new forms; ます/ました/ません(でした) now come
  from the form itself (never `VerbPart<Masu>` + `SuffixPart<"ます">`), `MasuStem`
  only for stem-mounting.

## Gate
verify-snippets ✓ (0/384) · verify-vocab ✓ · typecheck ✓ · annotate ✓ → PASS.
This should lift D4 (conjugation) and D2/D6 across the polite-register corpus —
round 5 will quantify it.
