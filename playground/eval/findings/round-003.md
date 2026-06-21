# Eval round 003 — findings (2026-06-20 15:44 UTC)

Conformance **91.3%** over 8/8 items.

## Per-item

- `r3-c0` (chapter i11) **conforms** 11.67/12 · 6 issue(s) — 靴を履いたまま入りました
- `r3-c1` (chapter e07) **conforms** 10/12 · 7 issue(s) — 私は勉強しませんでした
- `r3-c2` (chapter i14) **conforms** 12/12 · 3 issue(s) — 行きますが遅れます
- `r3-c3` (chapter e10) **conforms** 11.33/12 · 6 issue(s) — 手を洗ってから、食べます
- `r3-c4` (chapter e10) **conforms** 12/12 · 0 issue(s) — 飲んで
- `r3-a0` (annotate) **conforms** 11.33/12 · 5 issue(s) — すぐに来てください。
- `r3-a1` (annotate) **needs-work** 8.33/12 · 9 issue(s) — 日本語が上手になりたい。
- `r3-a2` (annotate) **conforms** 11/12 · 3 issue(s) — それは私の趣味です。

## Proposed fixes (routed)

### [ts-def] Add polite-suffix conjugation forms (Masu/MasuPast/Masen/MasenDeshita) so ます/ました/ません(でした) stop being raw literals  _(confidence: high, 13 items)_
- dimensions: D4, D2, D6
- rationale: By far the most frequent issue in the sample: 4 distinct chapter items (r3-c0, r3-c1, r3-c2, r3-c3) and ~13 duplicate judge notes flag that ConjugateVerb<V,'Masu'> yields only the 連用形 stem (行き, 食べ, 入り, し), forcing the polite endings ます/ました/ませんでした to be appended as raw string literals. This is a genuine library gap, not authoring error. 'Masu' is also mislabelled (returns the stem, not the polite surface), which lets it be abused elsewhere (r3-a1 grabs the なり stem for たい). Fixing this raises D4 (and some D2/D6) across the entire polite-register corpus at once.
- change: In src/verb-types.d.ts extend ConjugationForm and the Godan/Ichidan/Irregular conjugation maps so the polite paradigm is fully expressible: keep a stem-only 連用形 form (e.g. add 'Renyoukei') and add fully-realized polite forms 'Masu' -> stem+ます, 'MasuPast' -> stem+ました, 'Masen' -> stem+ません, 'MasenDeshita' -> stem+ませんでした (plus the する/来る rows in IrregularConjugationMap: します etc.). Update the conjugation resolvers so VerbPart<V,'MasuPast'> resolves to e.g. 入りました with no trailing literal.

### [prompt] Forbid SuffixPart for content words (な-adjectives, common nouns); reserve it for bound grammatical morphemes only  _(confidence: high, 4 items)_
- dimensions: D1
- rationale: Two HIGH-severity D1 misclassifications stem from SuffixPart being used as a catch-all: 上手 (a 形容動詞/な-adjective) tagged SuffixPart<'上手'> in r3-a1 (flagged by 3 judges), plus the SuffixPart fallback for ください. The library already has AdjectivePart<NaAdjective,...>, so 上手 as a suffix is a pure guidance failure. The current SuffixPart gloss ('auxiliaries/endings/formal nouns not otherwise modeled, e.g. た, まま, どおり') invites this drift. A sharpened rule prevents the whole class.
- change: In playground/scripts/annotate.ts tighten the SuffixPart line (~157) and hard rule (~197): SuffixPart is ONLY for bound/grammatical morphemes with no other constructor (た, まま, どおり, ～的, ～化) and NEVER for a free content word. Add: 'A な-adjective (上手, 便利, 静か) is NEVER SuffixPart — use AdjectivePart<NaAdjective{stem:...},"Basic">. A common noun is NEVER SuffixPart.'

### [prompt] Require SuruVerb for サ変 compounds (勉強する) instead of CommonNoun + bare する  _(confidence: high, 1 items)_
- dimensions: D1, D6
- rationale: r3-c1 (私は勉強しませんでした) was flagged HIGH D1 plus several D6 notes: 勉強する was modeled as CommonNoun<'勉強'> + separate IrregularVerb する, losing the single サ変-verb analysis even though SuruVerb<'勉強'> exists and is documented. The prompt mentions SuruVerb<'起動'> only in passing (rule ~190) without enforcing it, so the model defaults to splitting. Cheap systemic fix for every verbal-noun sentence.
- change: In annotate.ts hard rules, upgrade the SuruVerb mention (~190) to an imperative: 'Any noun+する compound (勉強する, 起動する, 確認する) MUST be a single SuruVerb<"勉強"> inside one VerbPart — never split into CommonNoun + IrregularVerb する.'

### [ts-def] Add an adverbial/連用形 (に) form for な-adjectives so 上手に / 静かに is conjugable  _(confidence: medium, 1 items)_
- dimensions: D4, D6, D3
- rationale: r3-a1 (日本語が上手になりたい) drew multiple D4/D6/D3 notes: AdjectiveConjugationForm has only Basic/Polite/Past/Negative/Te (confirmed in src/adjective-types.d.ts), with no adverbial 連用形 'に' form. This forces 上手 + に to be split with に mislabelled as a ParticlePart (D3 misanalysis) rather than expressed as an inflection. な-adjective + に + なる/する is a common pattern, so this lifts many future items.
- change: In src/adjective-types.d.ts add 'Adverbial' to AdjectiveConjugationForm and map it for NaAdjective to stem+に (上手 -> 上手に, 静か -> 静かに) and for IAdjective to the く form (早 -> 早く) to keep the union total. Then AdjectivePart<上手, 'Adverbial'> resolves to 上手に without a separate ParticlePart.

### [ts-def] Add noun-subclass-preserving parts (PronounPart / CommonNounPart / ProperNounPart) so the Sentence path keeps 代名詞 vs 普通名詞  _(confidence: medium, 1 items)_
- dimensions: D1
- rationale: r3-a2 (それは私の趣味です) drew 3 D1 notes: the author correctly declared Pronoun<'それ'>, Pronoun<'私'>, CommonNoun<'趣味'> but had to wrap them in the POS-agnostic NounPart<N extends string>, which stores only a bare string and erases the pronoun/common-noun distinction. The rubric explicitly calls this a ts-def rootCause. Low severity but recurs whenever pronouns/proper nouns appear in the Sentence path.
- change: In src/phrase-types.d.ts make NounPart carry the subclass — either make it generic over the Noun union (NounPart<N extends Noun>) or add CommonNounPart/ProperNounPart/PronounPart members to PhrasePart that store the subclass tag while keeping value=string. Surface them in the annotate API_REFERENCE so それ -> PronounPart, 趣味 -> CommonNounPart.

### [prompt] Keep clause-connecting から (and other 接続助詞 after Te-form) as a visible ParticlePart instead of gluing it into a literal  _(confidence: medium, 2 items)_
- dimensions: D3
- rationale: r3-c3 (手を洗ってから、食べます) drew several D3 notes: the connective 接続助詞 から is hard-coded as a raw template literal (ConjugateVerb<洗う,'Te'> + から), burying a 助詞. から is already in the Particle union, so this is a content/guidance slip, not a true ts-def gap — the cheap fix is a prompt rule. (The deeper ください/補助動詞 gap in r3-a0 is a separate, lower-priority ts-def item.)
- change: In annotate.ts hard rules add: 'A clause-connecting particle after a Te-form (から in 洗ってから, けど, ので) MUST be its own ParticlePart — never glued into a template literal after ConjugateVerb<V,"Te">.' Optionally, separately, add an AuxiliaryVerbPart (補助動詞) construct in src/phrase-types.d.ts for くださる/ください after a Te-form.


## Applied this round (gated → PASS)
- ✅ **[ts-def, additive] na-adjective `Adverbial` (連用形) form**: `AdjectiveConjugationForm += "Adverbial"` (i-adj → く: 早く; na-adj → に: 上手に). `AdjectivePart<上手,"Adverbial">` now yields 上手に through the conjugator instead of splitting に off as a particle. Closes the worst item this round (r3-a1 上手になりたい).
- ✅ **[prompt] SuffixPart discipline**: SuffixPart restricted to bound grammatical morphemes — a な-adjective/common noun is NEVER SuffixPart (kills the 上手-as-`SuffixPart` D1 mislabel, the freq-4 high-severity cluster).
- ✅ **[prompt] SuruVerb mandatory** for サ変 compounds (勉強する → one `SuruVerb<"勉強">`, never CommonNoun + bare する) — fixes the r3-c1 high-D1 split.
- ✅ **[prompt] 接続助詞 から** after a Te-form must be its own ParticlePart, not glued into a literal (r3-c3).
- ✅ **[infra] Hardened the eval-gate + fixed a self-inflicted break**: round-2's API_REFERENCE edit had put literal backticks/`${}` inside annotate.ts's prompt template literal, breaking `bun annotate` (the gate hadn't covered it, so it passed). The round-3 sampler surfaced it; I repaired the line AND added `bun scripts/annotate.ts --help` to `eval-gate.mjs` so prompt-template breakage is now a gate failure.

## Deferred — Masu migration (now data-backed)
- ⏸️ **[ts-def] `ConjugateVerb<V,"Masu">` → full ます polite paradigm** (freq-13, #1 for THREE rounds). Measured blast radius this round: **108 call sites across 23 files**, and the migration is context-sensitive (Masu-as-stem vs Masu-as-polite-ending). Too large + delicate for an incidental round. Needs a **dedicated session**: add a `MasuStem` (連用形) form, repoint `Masu`→stem+ます, add `MasuPast`/`Masen`/`MasenDeshita`, then a purpose-built codemod over all 108 sites + the annotate `SuffixPart<"ます">` convention, iterating `verify-snippets` to green. This is the clear next dedicated effort.

## Trend
Conformance 84.7% → 83.0% → **91.3%**. Round 2 was a variance dip on a hard disjoint sample; round 3 confirms the upward direction. D1 dipped to 75% only because of the now-fixed 上手-SuffixPart slip — expect it to recover next round.
