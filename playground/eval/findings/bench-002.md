# Eval round 002 — findings (2026-06-21 01:42 UTC)

Conformance **83.1%** over 12/12 items.

## Per-item

- `b2-0` (benchmark e01) **conforms** 12/12 · 1 issue(s) — 私は学生です
- `b2-1` (benchmark i05) **conforms** 12/12 · 0 issue(s) — すぐ参ります
- `b2-2` (benchmark i14) **needs-work** 9.67/12 · 6 issue(s) — 行きますが遅れます
- `b2-3` (benchmark e08) **conforms** 12/12 · 3 issue(s) — 昨日は寒かった
- `b2-4` (benchmark a12) **conforms** 12/12 · 0 issue(s) — 言語は文化である
- `b2-5` (benchmark e19) **conforms** 10/12 · 6 issue(s) — コーヒーを飲もう
- `b2-6` (benchmark i08) **needs-work** 8/12 · 12 issue(s) — 早く寝るようにしてください
- `b2-7` (benchmark i06) **conforms** 12/12 · 5 issue(s) — 読めば読むほど面白い
- `b2-8` (benchmark a03) **conforms** 9.33/12 · 8 issue(s) — 今日は休むわけにはいきません
- `b2-9` (benchmark e17) **needs-work** 6.33/12 · 13 issue(s) — 今日は来なくてもいいです
- `b2-10` (benchmark a12) **needs-work** 7/12 · 12 issue(s) — 知らぬ人に声をかけられた
- `b2-11` (benchmark i10) **conforms** 9.33/12 · 10 issue(s) — 本当のことを言うべきだ

## Proposed fixes (routed)

### [ts-def] Complete the Godan Volitional rows to include trailing う (飲も → 飲もう)  _(confidence: high, 6 items)_
- dimensions: D4, D6
- rationale: GodanConjugationMap returns only the お-row mora (む→も, う→お, く→こ, …) for Volitional, while the combine logic at verb-types.d.ts:264 is plain `${stem}${conjugation}`. So ConjugateVerb<飲む,'Volitional'> = 飲も, not 飲もう, forcing every godan volitional to hand-append a raw literal う. The ichidan branch (よう) and irregular map (しよう/来よう/こよう) ARE complete, so the godan path is the inconsistent outlier. This is the single highest-frequency ts-def gap: it breaks D4 (conjugator must produce the full 意向形) and D6 (forces 飲も+う mis-segmentation) for EVERY godan volitional, not just b2-5.
- change: In src/verb-types.d.ts GodanConjugationMap, append う to every Volitional value: う→"おう", く→"こう", ぐ→"ごう", す→"そう", つ→"とう", ぬ→"のう", ぶ→"ぼう", む→"もう", る→"ろう". No change to the combine logic needed; ConjugateVerb<飲む,'Volitional'> then resolves to 飲もう directly. Update the example comment at example-verb.ts:45 (買うVolitional) accordingly.

### [prompt] Stop listing 早く / 本当に as Adverb examples; route adjective 連用形 to Adverbial conjugation  _(confidence: high, 4 items)_
- dimensions: D1, D4, D6
- rationale: annotate.ts:133 gives `Adverb<Word> // 副詞: 毎日, 早く, すぐ, また, 本当に` — but 早く is the 連用形 (く) of i-adjective 早い and 本当に is the に form of na-adjective 本当, so the prompt is actively teaching the model to lexicalize inflected adjectives as base adverbs. This directly causes the D1 POS error and D4 violation flagged on b2-6, and a chapter survey shows the same mistake recurring (早く×4, よく×1, 本当に×1, 一緒に×2 wrapped in Adverb). The library already exposes ConjugateAdjective Adverbial (い→く, な→に), so these are fully modellable and should be derived.
- change: In annotate.ts API_REFERENCE line 133, change the Adverb examples to genuine lexical adverbs only (e.g. 毎日, すぐ, また, とても, ずっと) and DROP 早く/本当に. Add one hard rule under # Hard rules: 'An adjective in its 連用形 (i-adj く: 早く/高く/よく; na-adj に: 本当に/上手に/静かに) is NOT a lexical 副詞 — model it as AdjectivePart<A,"Adverbial">, never AdverbPart. Reserve Adverb/AdverbPart for words with no adjective base (毎日, すぐ, また).'

### [ts-def] Add a negative te-form (Nakute) so 〜なくて(も) is conjugator-derived, not a literal  _(confidence: medium, 3 items)_
- dimensions: D2, D3, D4
- rationale: ConjugateVerb has no negative-te form. For 来なくてもいい (b2-9) ConjugateVerb<来る,'Nai'> returns only the bare 未然形 stem 来, so the author must hand-write the literal なくても — collapsing three morphemes (なく/て/も) into one leaf and burying the permission-construction particle も. This breaks D2, D3, and D4 simultaneously and recurs in any 〜なくてもいい / 〜なくては / 〜なければ permission/obligation pattern. A first-class Nakute form lets 来なくて be a single VerbPart, exposing も as its own ParticlePart.
- change: In src/verb-types.d.ts: add "Nakute" to ConjugationForm; in ConjugateVerb resolve it as `${ConjugateVerb<V,"Nai">}なくて` for godan/ichidan/irregular (note ichidan/irregular 'Nai' already returns the bare stem 来/食べ, so 来 + なくて = 来なくて; godan 'Nai' returns the あ-row stem 行か, so 行か + なくて needs the い→ない→なくて path, i.e. append ない's なくて as `${naiStem}なくて`). Then update the prompt to use VerbPart<V,"Nakute"> + ParticlePart<"も"> for the 〜なくてもいい pattern.

### [ts-def] Complete Godan/Ichidan Hypothetical to the え+ば conditional form (読め → 読めば)  _(confidence: medium, 1 items)_
- dimensions: D3, D4
- rationale: Hypothetical returns only the bare 仮定形 stem (godan え-row 読め; ichidan 読められ is also off — see note), so 読めば (b2-7) must hand-append the literal ば. Parallel to the Volitional gap: the conjugator stops one mora short of the real inflected surface, forcing a raw-literal particle that should be a typed unit. Lower frequency than Volitional but the same class of fix.
- change: In src/verb-types.d.ts, change the godan Hypothetical row values from the bare え-row mora to include ば (う→"えば", く→"けば", ぐ→"げば", す→"せば", つ→"てば", ぬ→"ねば", ぶ→"べば", む→"めば", る→"れば"); for ichidan set Hypothetical to `${stem}れば`; for irregular set すれ→"すれば", 来れ→"来れば", くれ→"くれば". (Note: the current ichidan branch lumps Hypothetical with Potential/Passive as ${stem}られ, which is wrong even ignoring ば — split it out.)

### [content] Fix b2-2 行きますが遅れます: expose the contrastive が as a particle, not a literal  _(confidence: medium, 1 items)_
- dimensions: D3, D6
- rationale: The 接続助詞 が ('but') is hardcoded as a literal between two ConjugateVerb results (D3 high). が is already in the Particle union, so even without a clause-joining type it can be a visible ParticlePart. Multiple judges split on whether the deeper gap (no clause-conjunction construct) is ts-def, but the immediate, safe fix is content: make が a ParticlePart so particle integrity is restored.
- change: Rewrite the b2-2 snippet as Sentence<[VerbPart<行く,"Masu">, ParticlePart<"が">, VerbPart<遅れる,"Masu">]> so the contrastive が is its own ParticlePart instead of raw template-literal glue. (Optional follow-up: a clause-conjunction type in ts-def, but not required for this fix.)

### [content] Fix b2-10 知らぬ人に声をかけられた: derive the passive past from the conjugator  _(confidence: high, 1 items)_
- dimensions: D2, D4, D1
- rationale: かけられた is a flat literal hiding stem+passive+past (かけ/られ/た) — the grammatical focus of the sentence — even though かける is a plain ichidan verb the library fully supports (Passive = ${stem}られ). This is a clear authoring miss (D2/D4 high), not a library gap; the classical ぬ on 知らぬ is correctly left literal per the rubric allowance.
- change: In the b2-10 snippet declare かける as IchidanVerb & { stem:"かけ"; ending:"る" } and replace the literal かけられた with VerbPart<かける,"Passive"> + SuffixPart<"た"> (or a Passive+Ta path), so the passive and past are conjugator-derived and かける gets a visible verb-class assertion.

### [content] Fix b2-11 本当のことを言うべきだ: surface の as a ParticlePart and だ as a CopulaPart  _(confidence: high, 1 items)_
- dimensions: D3, D4, D2
- rationale: The linking 助詞 の is buried in `${本当}の${こと}` (D3 high) and the copula だ is folded into the べきだ literal (D4). Both are modellable: の is in the Particle union and だ has Copula<"Plain">. Only the classical べき (連体形 of べし) legitimately stays a literal per the rubric. Pure content fix.
- change: Rewrite b2-11 as Sentence<[NounPart<"本当">, ParticlePart<"の">, NounPart<"こと">, ParticlePart<"を">, VerbPart<言う,"Dictionary">, SuffixPart<"べき">, CopulaPart<"Plain">]> so の is a ParticlePart, だ is a CopulaPart, and only べき remains a (sanctioned classical) SuffixPart.


## The corrected loop is working — FIRST comparable gain
On the FIXED benchmark (same 12 items, deterministic): **bench-001 76.4% → bench-002 83.1% (+6.7 pts, real signal).**
Driven by this round's content fixes:
- ✅ **a03 今日は休むわけにはいきません ~3 → 9.33**: decomposed the frozen わけにはいきません tail → わけ (CommonNoun) + に + は + ConjugateVerb<いく,"Masen"> (exposes the verb + Masen form). Added わけ/いく to the dict.
- ✅ **e17 今日は来なくてもいいです ~5 → 6.33**: いいです now ConjugateAdjective<いい,"Polite"> instead of a literal (partial — the なくても negative-te is a genuine ts-def gap, see below).
- ✅ **[prompt] adverb vs 連用形**: dropped 早く/本当に from the Adverb examples and added a hard rule routing i-adj く / na-adj に through AdjectivePart<A,"Adverbial"> (the library has the Adverbial form). Stops the model lexicalizing inflected adjectives as adverbs (freq-4).

Gate: snippets ✓ vocab ✓ typecheck ✓ annotate ✓ → PASS.

## Next, in priority order (queued)
- ⏸️ **[ts-def] Godan Volitional incomplete** (飲も vs 飲もう, freq 6 — new #1): GodanConjugationMap Volitional gives only the お-row mora, so every godan volitional hand-appends a literal う. Fix = append う to all 9 Volitional rows + codemod the `Volitional">う` call sites (coordinated migration, like Masu — the gate will catch doubled う). Highest-frequency remaining ts-def gap.
- ⏸️ **[ts-def] Negative te-form (Nakute)** so 〜なくても decomposes (freq 3): add a "Nakute" form (Nai-stem + なくて) so 来なくて is one VerbPart and も becomes a visible ParticlePart.
- ⏸️ **[ts-def] Hypothetical → え+ば** (読め vs 読めば) + split ichidan Hypothetical out of the られ lump.
- ⏸️ **[content] b2-10 かけられた** → VerbPart<かける,"Passive"> + た; **b2-2 が** → ParticlePart; **b2-11 の/だ** → ParticlePart/CopulaPart.
