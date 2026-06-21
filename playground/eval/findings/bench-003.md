# Eval round 003 — findings (2026-06-21 02:15 UTC)

Conformance **89.8%** over 12/12 items.

## Per-item

- `b3-0` (benchmark e01) **conforms** 12/12 · 0 issue(s) — 私は学生です
- `b3-1` (benchmark i05) **conforms** 12/12 · 1 issue(s) — すぐ参ります
- `b3-2` (benchmark i14) **conforms** 11.67/12 · 2 issue(s) — 行きますが遅れます
- `b3-3` (benchmark e08) **conforms** 12/12 · 1 issue(s) — 昨日は寒かった
- `b3-4` (benchmark a12) **conforms** 12/12 · 0 issue(s) — 言語は文化である
- `b3-5` (benchmark e19) **conforms** 12/12 · 0 issue(s) — コーヒーを飲もう
- `b3-6` (benchmark i08) **needs-work** 7.67/12 · 10 issue(s) — 早く寝るようにしてください
- `b3-7` (benchmark i06) **conforms** 11.67/12 · 2 issue(s) — 読めば読むほど面白い
- `b3-8` (benchmark a03) **conforms** 11/12 · 5 issue(s) — 今日は休むわけにはいきません
- `b3-9` (benchmark e17) **needs-work** 6.33/12 · 12 issue(s) — 今日は来なくてもいいです
- `b3-10` (benchmark a12) **conforms** 11.33/12 · 5 issue(s) — 知らぬ人に声をかけられた
- `b3-11` (benchmark i10) **needs-work** 9.67/12 · 7 issue(s) — 本当のことを言うべきだ

## Proposed fixes (routed)

### [ts-def] Remove adjective 連用形 examples (早く/本当に/一緒に) from the Adverb doc comment  _(confidence: high, 1 items)_
- dimensions: D1, D2
- rationale: adverb-types.d.ts line 19 lists 早く, 本当に, 一緒に as Adverb examples, while adjective-types.d.ts already gives 早く as the IAdjective Adverbial (く) example. This contradictory guidance directly causes authors/annotator to type 早く as Adverb<"早く"> instead of ConjugateAdjective<早い,"Adverbial">, which the rubric explicitly forbids. Fixing the single source comment removes the root incentive for the most-repeated D1 error.
- change: Edit src/adverb-types.d.ts line ~19: change the example list to genuine lexical adverbs only (e.g. 毎日, すぐ, また, とても, ちょっと); delete 早く, 本当に, 一緒に since those are adjective/na-adjective 連用形 forms produced by ConjugateAdjective Adverbial / な-adj に.

### [prompt] Hard rule: 連用形 of i-/na-adjectives (早く/本当に/静かに) must use the conjugator, never Adverb  _(confidence: high, 1 items)_
- dimensions: D1, D2
- rationale: Reinforces the ts-def comment fix at generation time. Multiple judges flagged 早く as Adverb (high severity, D1). The annotate prompt should state that only genuine lexical adverbs use Adverb<>, and adjective 連用形 (く / に forms) must come from ConjugateAdjective<...,"Adverbial"> or the na-adjective adverbial に. Highest-frequency systemic error; a prompt rule generalizes beyond the one logged item.
- change: In playground/scripts/annotate.ts add a hard rule: 'Never tag 早く/速く/本当に/一緒に/静かに as Adverb. These are adjective 連用形; use ConjugateAdjective<Adj,"Adverbial"> for i-adjectives (く) and the adverbial に for na-adjectives. Adverb<> is only for true lexical 副詞 (毎日, すぐ, また).'

### [ts-def] Add negative-te / なくて derivation so negative te-forms and てもいい come from the conjugator  _(confidence: medium, 1 items)_
- dimensions: D2, D3, D4
- rationale: Item b3-9 (来なくてもいい) drew the largest cluster of high-severity D2/D3/D4 issues: ConjugateVerb<来る,"Nai"> returns bare stem 来, and なくても is a frozen literal burying the concessive particle も. The library has no Nakute (negative-te) form, so a teachable, fully-modellable pattern is forced into a literal. Adding a Nakute form lets authors write ${ConjugateVerb<V,"Nakute">} then attach も as a typed particle, fixing D2/D3/D4 together for a whole grammar family.
- change: In src/verb-types.d.ts add a "Nakute" (and ideally a full "Nai"→…ない) form to VerbConjugationForm and the resolver so godan/ichidan/irregular produce 未然形+なくて (来→来なくて, 食べ→食べなくて, 読ま→読まなくて).

### [ts-def] Add a Provisional (…ば) verb form so 読めば is conjugator-driven  _(confidence: medium, 1 items)_
- dimensions: D4
- rationale: b3-7 (読めば読むほど) emits ば as a raw literal because only the Hypothetical stem (め/け) exists with no bundled provisional form. A dedicated Provisional form (仮定形+ば) makes the conditional fully conjugator-driven (D4) instead of hand-glued. Lower frequency but a clean, contained library addition.
- change: In src/verb-types.d.ts add a "Provisional" form to VerbConjugationForm resolving to 仮定形+ば (godan 読→読めば, ichidan 食べ→食べれば, する→すれば, 来る→来れば).

### [prompt] Rule: stack particles via nested PhraseWithParticle so every 助詞 (には/ても/わけには) is a visible unit  _(confidence: medium, 4 items)_
- dimensions: D3
- rationale: Recurring low/high D3 issues across b3-2 (が), b3-8 (には), b3-9 (ても), b3-11 (の): particles are inlined as raw template literals because PhraseWithParticle takes only one particle, so double particles (に+は) and clause connectives get hardcoded. A prompt rule to chain PhraseWithParticle (or append ParticlePart) for each particle, including stacked ones, surfaces every 助詞 as a typed node with no library change.
- change: In annotate.ts add a rule: 'Every 助詞 must be a typed unit. For stacked particles (には, では, ても) nest PhraseWithParticle (e.g. PhraseWithParticle<PhraseWithParticle<X,"に">,"は">) or append ParticlePart; never write a bare particle literal between units. Surface clause connectives が/けど likewise.'

### [prompt] Rule: split modellable copula だ out of classical-auxiliary literals (べきだ → べき + Copula)  _(confidence: medium, 1 items)_
- dimensions: D2, D4
- rationale: b3-11 (言うべきだ) flagged high D3/D4: べきだ fuses the genuinely-unmodelable classical べき with the modern copula だ, which the library DOES model via Copula/ConjugateCopula<"Plain">. A prompt rule to never bundle a modellable copula into a classical-form literal surfaces だ as a typed unit and generalizes to other classical+copula tails.
- change: In annotate.ts add a rule: 'Classical auxiliaries (べき, ぬ, ざる) may stay as literals, but a following modern copula だ/です must be emitted separately via Copula<"Plain">/ConjugateCopula, e.g. べき${Copula<"Plain">}, not the literal べきだ.'

### [content] Fix b3-6: model 早く as ConjugateAdjective<早い,"Adverbial"> and surface に in ように  _(confidence: high, 1 items)_
- dimensions: D1, D2, D3
- rationale: Highest-severity single item, flagged repeatedly (D1 high, D2, D3). 早く must be the i-adjective 早い Adverbial, not Adverb<"早く">. Even after the systemic comment/prompt fixes, this already-authored snippet needs correcting; ください and よう are defensibly whole, but the 早く slip and buried に should be fixed.
- change: In the chapter file containing 早く寝るようにしてください, replace Adverb<"早く"> with ConjugateAdjective over IAdjective {stem:"早";ending:"い"} at "Adverbial"; optionally surface に as a ParticlePart within ように.


## Applied this round (gated → PASS, now incl. root-tsc `lib` check)
- ✅ **[ts-def] Godan Volitional migration** (飲も→飲もう): appended う to all 9 GodanConjugationMap Volitional rows + codemod'd the `Volitional">う` call sites (e19, a08). e19 コーヒーを飲もう **10 → 12**.
- ✅ **[content] 知らぬ人に声をかけられた**: literal かけられた → ConjugateVerb<かける(IchidanVerb),"Passive"> + た. a12 **7 → 11.3**.
- ✅ **[content] 早く寝るようにしてください**: 早く Adverb → ConjugateAdjective<早い,"Adverbial"> (i-adj 連用形); added 早い to dict. (Lands in bench-004.)
- ✅ **[ts-def doc] adverb-types.d.ts**: removed contradictory 早く/本当に/一緒に from the Adverb examples (they're adjective 連用形) — was steering authors/annotate wrong.
- ✅ **[infra] closed a gate blind spot**: eval-gate now also runs root `tsc -p ../tsconfig.json`, which type-checks src/examples. This caught a LATENT breakage the playground-only gate had missed — the round-4 Masu migration left example-verb.ts asserting 話す Masu = "話し"; fixed to "話します" + refreshed the stale form comments.

## Benchmark trend (FIXED set, comparable): 76.4 → 83.1 → **89.8**
D1 94 · D2 88 · D3 81 · D4 86 · D5 100 · D6 90. Every clean item now ≥11.

## Queue (remaining headroom — mostly one stubborn pattern + small ts-def)
- ⏸️ **[ts-def] negative-te (Nakute)** form so 〜なくても decomposes — e17 来なくてもいいです is the last low item (6.33), blocked by this gap.
- ⏸️ **[ts-def] Provisional (…ば)** + split ichidan Hypothetical out of the られ lump (読めば).
- ⏸️ **[prompt] particle stacking** (には/ても/の via nested PhraseWithParticle) and **[prompt] split modern copula だ out of classical べきだ** (→ べき + Copula<"Plain">).
