# Eval round 005 — findings (2026-06-20 16:40 UTC)

Conformance **83.0%** over 8/8 items.

## Per-item

- `r5-c0` (chapter i06) **conforms** 11.33/12 · 2 issue(s) — 読めば読むほど面白い
- `r5-c1` (chapter a12) **conforms** 12/12 · 0 issue(s) — 言語は文化である
- `r5-c2` (chapter i05) **conforms** 12/12 · 0 issue(s) — すぐ参ります
- `r5-c3` (chapter a03) **needs-work** 5/12 · 15 issue(s) — ここで諦めるわけにはいかない
- `r5-c4` (chapter e01) **conforms** 12/12 · 0 issue(s) — 私は学生です
- `r5-a0` (annotate) **conforms** 11.33/12 · 3 issue(s) — 寿司を食べたことがあります。
- `r5-a1` (annotate) **conforms** 10.67/12 · 6 issue(s) — 子供の頃はよくここで遊んだ。
- `r5-a2` (annotate) **needs-work** 5.33/12 · 14 issue(s) — 行かざるを得ない。

## Proposed fixes (routed)

### [ts-def] Make NounPart carry a noun subclass (common/proper/pronoun) instead of a bare string  _(confidence: high, 10 items)_
- dimensions: D1, D6
- rationale: The single most frequent systemic issue: ~10 of 40 issues (r5-a0, r5-a1) are D1/D6 flags that NounPart<N extends string> erases the noun subclass. The library already defines value-identical CommonNoun/ProperNoun/Pronoun aliases, but NounPart only accepts a string, so a pronoun like ここ and formal noun こと are filed as generic nouns and the POS distinction is lost in the type. Fixing the constructor lifts every annotate item containing a pronoun or non-default noun at once.
- change: In /Users/evan/code/typed-japanese/src/phrase-types.d.ts, add a subclass tag to NounPart, e.g. NounPart<N extends string = string, Sub extends "common"|"proper"|"pronoun"|"formal" = "common"> with a nounClass: Sub field (value stays N). Optionally add a dedicated PronounPart alias for ここ/これ/私. Keep value identical so resolution (D5) is unaffected.

### [prompt] Forbid burying demonstrative+particle and わけにはいかない grammar in raw literals  _(confidence: high, 13 items)_
- dimensions: D2, D3, D6
- rationale: r5-c3 (ここで諦めるわけにはいかない) generated ~13 high-severity D2/D3/D6 flags from ONE snippet: ここで collapses ここ+で, and わけにはいかない collapses わけ+に+は+いかない with three particles buried. The pattern (demonstrative + で, formal noun わけ + particles + 行く negative) recurs, so an explicit prompt rule prevents the model from emitting opaque leaves instead of fixing each chapter individually.
- change: In playground/scripts/annotate.ts hard rules, add: demonstrative pronouns (ここ/そこ/あそこ) followed by a particle MUST split into a Pronoun NounPart + ParticlePart (ここで → ここ + で). Formal-noun patterns like わけ/はず/つもり + に/は MUST expose the formal noun and each particle as separate parts; never freeze わけにはいかない as one literal. Extend the existing buried-particle validator to fire on で/に/は after a kana demonstrative.

### [prompt] Never bury a modellable head verb inside a SuffixPart; route ない/ません through the conjugator  _(confidence: high, 12 items)_
- dimensions: D1, D2, D4, D6
- rationale: r5-a2 (行かざるを得ない) produced ~12 high-severity D1/D2/D4/D6 flags because SuffixPart<"行かざる"> hides godan verb 行く (whose 未然形 行か the conjugator produces via Nai), and 得ない is split as VerbPart<得る,"MasuStem"> + SuffixPart<"ない"> instead of ConjugateVerb<得る,"Nai">. Same class as the retired trailing-ます error: a verb the library CAN conjugate must come from VerbPart, with only the genuinely unsupported classical ず/ざる as a residual suffix.
- change: In annotate.ts hard rules, add: a SuffixPart string must NEVER contain kanji belonging to a conjugatable verb stem. Negation ない and polite negation come from ConjugateVerb<V,"Nai">/"Masen", not a trailing literal — use VerbPart<得る,"Nai"> for 得ない. Only the classical ず/ざる (and other unmodeled bound auxiliaries) may be a SuffixPart, attached AFTER a VerbPart<V,"Nai"> that exposes the lexical verb.

### [ts-def] Add a classical negative auxiliary (ず / 連体形 ざる) conjugation form  _(confidence: low, 2 items)_
- dimensions: D4
- rationale: Minor: a few r5-a2 D4 notes correctly observe the classical negative ず (連体形 ざる) attaching to 未然形 has no constructor, so ざる legitimately falls back to a SuffixPart. A genuine but narrow gap (古文 negatives); the bigger win is not burying 行く with it (covered above). Worth a small ts-def addition only if classical forms recur.
- change: In /Users/evan/code/typed-japanese/src/verb-types.d.ts, add a classical-negative form (e.g. "ZaruAttributive") mapping the Nai stem + ざる (行か→行かざる), so ざるを得ない can use VerbPart<行く,"ZaruAttributive"> instead of a literal. Lower priority than the constructor and prompt fixes.

### [content] Use ParticlePart<"ほど"> for the 〜ば〜ほど construction in r5-c0  _(confidence: medium, 1 items)_
- dimensions: D3, D6
- rationale: r5-c0 (読めば読むほど面白い): low-severity D3/D6 — ほど is a 副助詞 already in the Particle union and ParticlePart but is left as a raw literal. One-off authoring fix; low impact but trivial and honest.
- change: In the chapter snippet for 読めば読むほど面白い, replace the raw ほど literal with ParticlePart<"ほど">. The bare ば after the Hypothetical stem may stay.


## Round-4 Masu migration: MEASURED PAYOFF ✓
- The "ます/ました is a raw literal" finding that dominated rounds 1–3 (~13 flags in round 3 alone) is **GONE** — zero this round.
- All three polite-register items scored **12/12**: すぐ参ります, 私は学生です, 言語は文化である. すぐ参ります now resolves with NO trailing ます literal (`ConjugateVerb<参る,"Masu">` = 参ります).
- D4 (conjugation) held at 87.5%; the migration did exactly what it was meant to.
- Headline conformance (83.0%) was pulled down by two hard idiom OUTLIERS, not regression: ここで諦めるわけにはいかない (5/12, chapter template-literal style) and 行かざるを得ない (5.3/12, annotate buried 行く in SuffixPart). Without those two, the sample is ~94%.

## Applied this round (gated → PASS)
- ✅ **[prompt] No conjugatable verb inside a SuffixPart**: ない / polite-negative come from the conjugator (得ない = `VerbPart<得る,"Nai">`); only unmodeled bound auxiliaries (classical ざる) may trail as a SuffixPart after the VerbPart. Targets the r5-a2 行かざるを得ない failure class.
- ✅ **[prompt] Demonstrative + particle and formal-noun grammar must split**: ここで → `NounPart<"ここ"> + ParticlePart<"で">`; わけ/はず/つもり/こと + 助詞 expose the formal noun + each particle, never one frozen literal. Targets the r5-c3 class for future generation.
- ⏭️ **Skipped** the ほど→ParticlePart content nit (low severity; would require converting an established template-literal snippet to the Sentence-parts path — disproportionate).

## New #1 systemic item (queued)
- ⏸️ **[ts-def] Noun subclass in the Sentence path** (freq 10, now the top recurring): `NounPart<N extends string>` erases common/proper/pronoun (ここ, こと, 私 all flatten to generic noun). Next systemic pick — add `PronounPart`/`ProperNounPart` (keep `NounPart` as common-noun default) via the same additive pipeline used for AdnominalPart/CounterPart, then point the prompt's demonstrative rule at `PronounPart`.
