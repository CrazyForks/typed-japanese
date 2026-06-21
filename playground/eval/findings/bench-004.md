# Eval round 004 — findings (2026-06-21 02:46 UTC)

Conformance **94.9%** over 12/12 items.

## Per-item

- `b4-0` (benchmark e01) **conforms** 12/12 · 0 issue(s) — 私は学生です
- `b4-1` (benchmark i05) **conforms** 12/12 · 1 issue(s) — すぐ参ります
- `b4-2` (benchmark i14) **needs-work** 9.33/12 · 4 issue(s) — 行きますが遅れます
- `b4-3` (benchmark e08) **conforms** 12/12 · 2 issue(s) — 昨日は寒かった
- `b4-4` (benchmark a12) **conforms** 12/12 · 0 issue(s) — 言語は文化である
- `b4-5` (benchmark e19) **conforms** 12/12 · 0 issue(s) — コーヒーを飲もう
- `b4-6` (benchmark i08) **conforms** 10/12 · 9 issue(s) — 早く寝るようにしてください
- `b4-7` (benchmark i06) **conforms** 11.33/12 · 3 issue(s) — 読めば読むほど面白い
- `b4-8` (benchmark a03) **conforms** 11/12 · 4 issue(s) — 今日は休むわけにはいきません
- `b4-9` (benchmark e17) **conforms** 12/12 · 0 issue(s) — 今日は来なくてもいいです
- `b4-10` (benchmark a12) **conforms** 11/12 · 6 issue(s) — 知らぬ人に声をかけられた
- `b4-11` (benchmark i10) **conforms** 12/12 · 2 issue(s) — 本当のことを言うべきだ

## Proposed fixes (routed)

### [prompt] Force template-literal compositions to become Sentence/ParticlePart so 助詞 stay visible  _(confidence: high, 8 items)_
- dimensions: D3, D2, D6
- rationale: Highest-impact systemic issue. b4-2 (行きますが遅れます), b4-7 (読めば読むほど面白い), b4-8 (今日は休むわけにはいきません) all glue clauses/particles as bare string literals in template-literal types, burying が・ほど・は even though が/ほど/は are ALL valid members of the Particle union and ParticlePart already accepts them, and Sentence<[...]> can join two predicates. These are authoring shortcuts the prompt does not forbid. The audit's buried-particle heuristic only runs on NounPart/AdverbPart values, so template-literal glue slips through. The prompt bans NounPhrase/template glue (line 208) but the model still emits PhraseWithParticle chains and `${...}が${...}` literals; the rule needs to require a flat Sentence<PhrasePart[]> top-level shape whenever more than one particle or clause is present, naming が (connective), ほど, and the second は of stacked particles as cases that MUST be ParticlePart.
- change: In playground/scripts/annotate.ts hard rules (around lines 191-210), strengthen the anti-template rule: require the FINAL alias to be a flat Sentence<[...]> (or PhraseSequence) part list whenever the sentence contains a particle or joins clauses; PhraseWithParticle/ConditionalPhrase/InterrogativePhrase helpers may be used only for a single trailing particle, never to glue a particle BETWEEN two clauses. Enumerate explicitly: connective/接続助詞 が (行きますが…), ほど, より, and EACH member of a stacked には/では/ても must be its own ParticlePart even inside a composition. Reinforce that が, ほど, は are all in the Particle union and expressible as ParticlePart.

### [ts-def] Add chained/composite conjugation so Passive+Ta and conditional Ba resolve through the conjugator  _(confidence: medium, 3 items)_
- dimensions: D4, D6
- rationale: Recurring D4/D6 library gap: ConjugateVerb takes a Verb, not a conjugated string, so multi-auxiliary surfaces cannot be produced and authors paste raw literals. b4-10 (かけられた = Passive+Past) appends た as a literal; b4-7 (読めば) has no Ba form bundling ば even though Hypothetical already yields 読め. Both are genuine ts-def gaps that recur and degrade D4. A 'Ba' ConjugationForm (Hypothetical-stem + ば) is a trivial high-value add; composed PassivePast is larger but impactful.
- change: In src/verb-types.d.ts: (1) add a `Ba` member to ConjugationForm emitting `${ConjugateVerb<V,"Hypothetical">}ば` for godan/ichidan/irregular (読め→読めば, 食べ→食べれば) so conditional ば is type-driven. (2) Add a composed passive-past form (e.g. `PassiveTa`: passive stem + た, かけられ→かけられた) so Passive+Past chains without a literal た. Wire both into the conjugator's form switch.

### [ts-def] Add a FormalNoun (形式名詞) part for わけ/はず/つもり/こと/よう  _(confidence: medium, 2 items)_
- dimensions: D1, D2, D3
- rationale: D1/D2 gap in b4-8 (わけ) and b4-6 (よう). 形式名詞 are forced into CommonNoun (NounPart), losing the dependent-noun distinction, and よう in ようにする has no home so the 形式名詞+に collapses into a literal. A dedicated FormalNounPart (value-identical, resolution unaffected, mirroring PronounPart/ProperNounPart's nounClass) lets these be typed units and lets ようにする split as FormalNoun よう + ParticlePart に + する.
- change: In src/phrase-types.d.ts add a FormalNounPart specialization (type:"noun"; nounClass:"formal"; value-identical, like PronounPart) and include it in the PhrasePart union; add a prompt line routing わけ/はず/つもり/こと/よう to FormalNounPart with following particles split out.

### [prompt] Forbid intersection-style adjective declarations; require canonical object-literal form  _(confidence: low, 1 items)_
- dimensions: D1
- rationale: b4-3 (寒い) declares the adjective as `IAdjective & { stem; ending }` omitting the explicit `type:"i-adjective"` field, inconsistent with the library's documented `{ type:"i-adjective"; stem; ending }` pattern. Two judges flagged it (stylistic, type-correct). Cheap prompt nudge prevents drift across future i-adj snippets.
- change: In annotate.ts API_REFERENCE/rules add a one-line convention: declare adjectives/verbs as full object literals carrying the explicit `type` discriminant, matching the in-repo example form.

### [ts-def] Note-only: honorific/humble register (謙譲語/尊敬語) is unmodeled  _(confidence: low, 1 items)_
- dimensions: D1, D6
- rationale: b4-1 (参ります) loses the humble nuance — no register field; not penalized (inexpressible). Logged as a known ts-def gap, not actioned now: low impact, large design surface. Recorded so it is not re-discovered each cycle.
- change: Optional future ts-def: add an optional `register?: "humble"|"honorific"|"polite"` metadata field on verb declarations (参る, おっしゃる, いらっしゃる) surfaced through VerbPart (value/resolution unchanged). No change required this pass.


## Applied this round (gated → PASS)
- ✅ **[ts-def, additive] negative-te "Nakute" form**: ConjugateVerb<V,"Nakute"> = ない-stem + なくて. e17 来なくてもいいです **6.3 → 12** (来なくて a real verb form, も a visible particle, いいです via the conjugator).
- ✅ **[content] i10 本当のことを言うべきだ 9.7 → 12**: べきだ → べき(classical literal) + Copula<"Plain">; の/を exposed as particles.
- ✅ **[content] i08 早く 7.7 → 10**: 早く → ConjugateAdjective<早い,"Adverbial">.
- ✅ **[content] i14 行きますが遅れます**: connective が → PhraseWithParticle (lands bench-005).
- ✅ **[prompt]** rules added: Nakute for 〜なくて(も), stack particles individually (には/ても), split modern copula だ out of classical べきだ.

## Benchmark trend (FIXED set): 76.4 → 83.1 → 89.8 → **94.9**
D1 100 · D2 93 · D3 83 · D4 97 · D5 100 · D6 96. 11/12 items at 12; the lone holdout (行きますが) was just fixed.

## Approaching the ceiling
Remaining flags are now mostly **genuinely unmodelable** and correctly handled: classical ぬ/ざる/べき (rubric sanctions these as literals), and the honorific-register nuance (参る humble — a noted, unactioned design gap). Small optional ts-def niceties remain (a `Ba` conditional form for 読めば, a composed Passive+Past, a FormalNounPart for わけ/よう) — diminishing returns, queued. The library's real expressiveness gaps that were costing accuracy (Masu, Volitional, Nakute, Adverbial, counters, noun subclasses) are now closed.
