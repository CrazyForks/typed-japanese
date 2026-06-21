# Eval round 002 — findings (2026-06-20 15:10 UTC)

Conformance **83.0%** over 8/8 items.

## Per-item

- `r2-c0` (chapter i14) **needs-work** 9/12 · 8 issue(s) — 行きますが遅れます
- `r2-c1` (chapter i05) **conforms** 11.67/12 · 4 issue(s) — 私がいたします
- `r2-c2` (chapter e14) **needs-work** 5.33/12 · 12 issue(s) — ここに入ってはいけません
- `r2-c3` (chapter a01) **needs-work** 9.67/12 · 7 issue(s) — 社長が本をお読みになります
- `r2-c4` (chapter e13) **conforms** 12/12 · 0 issue(s) — 友達とお茶を飲んだ
- `r2-a0` (annotate) **conforms** 12/12 · 2 issue(s) — 彼は有名な先生です。
- `r2-a1` (annotate) **needs-work** 9.33/12 · 9 issue(s) — りんごを三つください。
- `r2-a2` (annotate) **conforms** 10.67/12 · 5 issue(s) — 二人で映画を見ました。

## Proposed fixes (routed)

### [ts-def] Make ConjugateVerb<V,"Masu"> emit the full polite ます form, not just the 連用形 stem  _(confidence: high, 11 items)_
- dimensions: D4, D6, D3, D2
- rationale: By far the most frequent systemic complaint (~10 issues across r2-c0, r2-c1, r2-c3, plus the いけません negative-polite tail in r2-c2). The form is documented as the 'Polite form' yet every branch (Godan stem + map, Ichidan `${stem}`, irregular, Suru) returns only the 連用形 masu-stem (行き / いたし / なり / 食べ). Authors are forced to hand-spell ます as a raw literal, which cascades into D3 (connective が buried in `ますが`), D2 (clause structure flattened into one template literal), and D6 failures. Fixing the conjugator to append ます removes the root cause of the largest issue cluster at once.
- change: In src/verb-types.d.ts, change the Masu branches in ConjugateVerb so Masu resolves to stem+ます: Godan `${V["stem"]}${GetGodanConjugation<...,"Masu">}ます`, Ichidan `${V["stem"]}ます`, Suru/irregular append ます to the masu-stem. If existing snippets rely on the bare stem, instead ADD a new form (e.g. "MasuStem" for the 連用形 and keep/repoint "Masu" to the full polite form), and update the ConjugationForm union + GodanConjugationMap comments accordingly. Then update line 269's doc test expectation (話すMasu → "話します").

### [ts-def] Add NumeralPart / CounterPart so counter expressions (三つ, 二人) aren't hidden in NounPart  _(confidence: high, 7 items)_
- dimensions: D1, D2, D6
- rationale: Second-largest cluster (~7 issues, r2-a1 三つ and r2-a2 二人), all flagged ts-def by the rubric NOTE: NounPart is POS-agnostic, so native numeral+counter words are indistinguishable from plain 普通名詞, losing their 数詞 status. The Sentence<[...]> path has no way to express a numeral/counter, so this misrepresentation is currently unavoidable. A dedicated part type lets the annotator tag these correctly.
- change: In src/phrase-types.d.ts add NumeralPart<N extends string> (type:"numeral") and CounterPart<Num extends string, Counter extends string> (value = `${Num}${Counter}`, type:"counter"), include them in the PhrasePart union, then add both to the API_REFERENCE parts list and allow-list in playground/scripts/annotate.ts with a hard rule: native counter expressions (三つ, 二人, 一冊…) MUST be CounterPart, never NounPart.

### [ts-def] Preserve noun subclass in the Sentence path (CommonNounPart / ProperNounPart / PronounPart)  _(confidence: medium, 4 items)_
- dimensions: D1
- rationale: Recurring ts-def cluster (~4 issues: r2-a0 彼/先生, r2-a1 りんご, r2-a2 映画). NounPart<N extends string> erases the common/proper/pronoun distinction — Pronoun<"彼"> and CommonNoun<"先生"> both flatten to {type:"noun"}, with intent surviving only in alias names. The library exposes CommonNoun/ProperNoun/Pronoun constructors but no part-level wrapper that records which one, so the subclass cannot be expressed in the Sentence path.
- change: In src/phrase-types.d.ts either add a `subclass` discriminant to NounPart (NounPart<N, Sub extends "common"|"proper"|"pronoun" = "common">) or add CommonNounPart/ProperNounPart/PronounPart wrappers (value = the noun string). Update the PhrasePart union, then update API_REFERENCE in annotate.ts to direct names→ProperNounPart, これ/私/彼→PronounPart, ordinary nouns→CommonNounPart.

### [prompt] Forbid template-literal/concatenation snippets; require the Sentence<[...]> parts path  _(confidence: high, 2 items)_
- dimensions: D3, D2, D1
- rationale: Two chapter snippets (r2-c0 行きますが遅れます, r2-c2 ここに入ってはいけません) compose by raw template-literal concatenation instead of Sentence<[...parts]>, burying particles (が, に, は) inside literals (D3 high) and collapsing clause/morpheme structure (D2 high), and embedding ここ as a literal instead of Pronoun (D1). The annotate prompt already discourages NounPhrase/template glue and the validator rejects it for generated output, but chapter content predates/bypasses this. Strengthening the prompt rule (and noting it applies to authored chapters) raises both items and prevents regressions.
- change: In playground/scripts/annotate.ts hard rules, tighten the existing rule to: every input particle (は,が,を,に,…) AND demonstrative pronoun (ここ/そこ/これ) must surface as its own typed part; never bury a particle or pronoun inside a multi-character literal or template string. Add an explicit example: ここに入ってはいけません → PronounPart<"ここ">, ParticlePart<"に">, VerbPart<入る,"Te">, ParticlePart<"は">, SuffixPart<"いけません">.

### [ts-def] Add a conjunctive/contrastive が to the Particle union (or document the connective-が path)  _(confidence: medium, 1 items)_
- dimensions: D3, D2
- rationale: r2-c0 (行きますが遅れます): the clause-connecting 接続助詞 が is buried as a raw literal because the Particle union defines が only as the subject marker; there is no typed unit for connective が (the union has けど/のに but not connective が). Lower frequency than the Masu/numeral clusters but a real D3 gap once snippets move to the parts path.
- change: が is already in the Particle union (src/phrase-types.d.ts line 24) so it CAN be emitted as ParticlePart<"が">; the gap is guidance. Update the comment for が to note it covers both subject-marker and contrastive/clause-connective uses, and add a prompt note that clause-joining が must be ParticlePart<"が">, not a literal. No new union member needed.

### [content] Rewrite the two literal-string chapter snippets to the parts path  _(confidence: medium, 2 items)_
- dimensions: D3, D2, D6
- rationale: Concrete one-off fixes that, combined with the prompt rule above, close the D3/D2/D6 failures in r2-c0 and r2-c2 immediately rather than waiting on regeneration. Depends on the Masu ts-def fix (for ます) and connective-が guidance for the cleanest result.
- change: Locate the snippets for 行きますが遅れます and ここに入ってはいけません under playground/src/tutorial/chapters/ and rewrite each as Sentence<[...]>: clause1 VerbPart<行く,"Masu"> + ParticlePart<"が"> + VerbPart<遅れる,"Masu">; and PronounPart/NounPart<"ここ"> path + ParticlePart<"に"> + VerbPart<入る,"Te"> + ParticlePart<"は"> + SuffixPart<"いけません"> (or modelled いける negative-polite once available).


## Applied this round (gated by verify suite → PASS)
- ✅ **[ts-def] Add `NumeralPart` + `CounterPart`** (#2, additive, freq 7): counter expressions (三つ, 二人, 一冊) and bare numerals are now 数詞 parts instead of being hidden in POS-agnostic `NounPart`. Full pipeline wired: phrase-types + PhrasePart union, parse.ts + bridge/tree.ts registries, vocab extract.ts + extract-words.mjs (→ counter / number POS), CompositionTree + theme.css + Swift `numeral` category, and an annotate hard rule (三つ → `CounterPart<"三","つ">`). Lifts future D1 on counter sentences.

## Deferred
- ⏸️ **[ts-def] #1 — `ConjugateVerb<V,"Masu">` should emit the full ます form (freq 11 — now the TOP recurring issue across rounds 1–2).** Correct and dominant (cascades into D2/D3 because authors hand-spell ます), but flipping Masu to append ます breaks every existing `Masu">ます` call site AND the annotate `SuffixPart<"ます">` convention. Needs a **dedicated coordinated migration round**: add a `MasuStem` (連用形) form, repoint `Masu`→full polite, codemod all call sites, re-gate. This is the next big systemic win.
- ⏸️ **[ts-def] #3 — noun-subclass parts** (CommonNounPart/PronounPart): low-severity D1 loss in the Sentence path; additive but adds surface — queued.
- ℹ️ #4 (forbid template-literal) mainly targets hand-authored chapter style, not annotate (already parts-based); #5 connective-が needs no new type (が already in the union — guidance only); #6 content rewrites are coupled to the #1 Masu migration.

## Metric note
Conformance moved 84.7% → 83.0% on a harder, disjoint 8-item sample (`ここに入ってはいけません` @ 5.3/12). With n=8/round there is real sampling variance — the **per-dimension** columns and the multi-round trend are the reliable signals, not a single round's headline number.
