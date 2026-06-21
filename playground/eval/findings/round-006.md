# Eval round 006 — findings (2026-06-20 17:09 UTC)

Conformance **69.4%** over 8/8 items.

## Per-item

- `r6-c0` (chapter i10) **needs-work** 8/12 · 10 issue(s) — 本当のことを言うべきだ
- `r6-c1` (chapter e08) **conforms** 12/12 · 1 issue(s) — 昨日は寒かった
- `r6-c2` (chapter a12) **needs-work** 7.33/12 · 12 issue(s) — 知らぬ人に声をかけられた
- `r6-c3` (chapter e17) **needs-work** 4.67/12 · 14 issue(s) — 今日は来なくてもいいです
- `r6-c4` (chapter a03) **needs-work** 3.33/12 · 13 issue(s) — 今日は休むわけにはいきません
- `r6-a0` (annotate) **conforms** 12/12 · 0 issue(s) — 水を飲みすぎた。
- `r6-a1` (annotate) **conforms** 12/12 · 0 issue(s) — 窓を開けてもいいですか。
- `r6-a2` (annotate) **needs-work** 7.33/12 · 10 issue(s) — 先生がおっしゃいました。

## Proposed fixes (routed)

### [ts-def] Add honorific irregular-aru verbs (おっしゃる/なさる/いらっしゃる/くださる/ござる) to the conjugation maps  _(confidence: medium, 1 items)_
- dimensions: D1, D4, D6
- rationale: The rubric's named D1 failure: おっしゃる is a godan honorific verb whose 連用形 softens irregularly to おっしゃい (not おっしゃり), so its ます形 is おっしゃいます. The library's IrregularConjugationMap is a closed set covering only する/来る/くる, and GodanVerb mechanically yields おっしゃります. With no honest way to model the verb, the annotate output (r6-a2) faked it as IchidanVerb{stem:'おっしゃい';ending:'る'} purely to force MasuPast=おっしゃいました — which simultaneously implies a bogus Dictionary form おっしゃいる. This same gap drives 6 of the 7 r6-a2 issues (D1/D4/D6) and recurs for the whole -aru honorific family taught in i04.ts/a01.ts.
- change: In <repo>/src/verb-types.d.ts add a HonorificAruVerb class (e.g. { type: 'honorific-aru'; dictionary: 'おっしゃる'|'なさる'|'いらっしゃる'|'くださる'|'ござる' }) plus a map giving each its irregular 連用形 (おっしゃい, なさい, いらっしゃい, ください, ござい) and dictionary/Te/Ta/Imperative forms, so GetMasuStem yields the い-stem and Masu/MasuPast resolve to おっしゃいます/おっしゃいました. Wire it into Verb and ConjugateVerb. Then update annotate's API_REFERENCE to list these dictionary keys.

### [prompt] Forbid faking verb class to force a surface; never reclassify a godan verb as ichidan  _(confidence: high, 1 items)_
- dimensions: D1, D6
- rationale: Independent of whether the -aru class is added, the annotate output committed a wrong-class error (modeling honorific godan おっしゃる as IchidanVerb so the surface coincidentally resolved). The rubric explicitly names this as a 0 on D1 even when the surface type-checks. The prompt has no rule against picking a verb class for its conjugation side-effect, and no documented honest fallback (a01.ts uses a raw literal おっしゃいました with an explanatory comment). A single hard rule prevents this whole category for any verb the conjugator cannot model.
- change: In annotate.ts Hard rules add: 'Choose a verb's class by its real conjugation type (godan/ichidan/irregular), NEVER by which class happens to make the target surface resolve. Reclassifying a godan verb as IchidanVerb (or vice versa) to force a form is a hard error even if it type-checks — verify the implied Dictionary form is a real word. If the library cannot produce a verb's correct surface (e.g. honorific -aru verbs whose 連用形 is irregular), declare the verb in its true class and write the unmodelable surface as a documented raw literal rather than faking the class.'

### [content] Decompose frozen predicate tails in chapter snippets (かけられた / なくてもいいです / わけにはいきません)  _(confidence: high, 3 items)_
- dimensions: D2, D3, D4, D1
- rationale: Three chapter snippets (r6-c2 a03, r6-c3 e08, r6-c4 i10) each dump a multi-morpheme predicate as one raw literal, hiding modellable verbs, particles, and conjugations — the single largest cluster of high-severity D2/D3/D4 issues (≈30 of 60). Each is fully expressible today: かけられた = VerbPart<かける(ichidan),'Passive'> + た literal; わけにはいきません = CommonNoun<'わけ'> + に + は + VerbPart<行く,'Masen'>; いいです = AdjectivePart<いい,'Polite'> with the も/て particles exposed. The conjugator already supports Masen, Passive, and polite adjective forms, so these are authoring slips, not library gaps.
- change: Edit a03.ts (知らぬ人に声をかけられた), e08.ts (今日は来なくてもいいです), and i10.ts (今日は休むわけにはいきません): rebuild each frozen tail as a Sentence/typed-part composition — declare かける as IchidanVerb and use ConjugateVerb Passive; declare 行く as GodanVerb and use Masen; expose わけ as CommonNoun and に/は/も/て as their own ParticlePart units; render いい via the irregular IAdjective Polite form. Keep only genuinely unmodelable bits (e.g. classical ぬ) as documented literals.

### [content] Split べきだ in 本当のことを言うべきだ into べき (literal) + Copula<"Plain">, and expose の  _(confidence: medium, 1 items)_
- dimensions: D2, D3, D4
- rationale: r6-c0 (a12) accounts for ~12 issues: the genitive の is buried in a template literal `${本当}の${こと}` (D3 high), and べきだ collapses the modellable copula だ with the unmodelable formal-noun べき (D2/D4/D6). The copula is expressible via Copula<'Plain'>=だ and の must be its own ParticlePart; only べき need remain a literal. This is a one-off authoring fix, not a library gap.
- change: Edit a12.ts: replace the `${本当}の${こと}` glue with CommonNoun<'本当'> + ParticlePart<'の'> + CommonNoun<'こと'>, keep を as a ParticlePart, model 言う as VerbPart, and split the tail into SuffixPart<'べき'> + CopulaPart<'Plain'> instead of the raw literal べきだ.

### [ts-def] Add a negative-auxiliary (ない) adjectival conjugation so なくて / なく is modellable  _(confidence: low, 1 items)_
- dimensions: D4, D6, D2
- rationale: Multiple r6-c3 issues (D6 high, D4/D6 ts-def) note that verb 'Nai' returns only the 未然形 stem (来/こ), forcing authors to bolt なくて on as a literal that splits one negative morpheme across a tag and a string. ない inflects like an i-adjective (なく/なくて/なかった), so a NegativeAuxiliary form would let なくてもいい and similar permission/obligation constructions be built honestly across many future sentences rather than frozen.
- change: In <repo>/src extend the conjugator so a verb's negative can yield i-adjective-like forms of ない: e.g. a 'NaiAdverbial' (来なく) and 'NaiTe' (来なくて), or expose ない as a conjugatable auxiliary i-adjective that mounts on the Nai-stem. Then document it in annotate's API_REFERENCE and reference it in the なくて hard rule.


## Applied this round (gated → PASS)
- ✅ **[ts-def, additive] `PronounPart` + `ProperNounPart`** (the standing freq-10 #1 item): the Sentence path now keeps the 代名詞 / 固有名詞 / 普通名詞 distinction instead of flattening everything to NounPart. Wired through phrase-types + PhrasePart union, parse.ts + bridge/tree.ts registries, vocab extract.ts (pronoun / proper-noun POS), and annotate API_REFERENCE + the demonstrative rule (ここで → `PronounPart<"ここ"> + ParticlePart<"で">`). Value-identical → resolution unchanged, gate green.
- ✅ **[prompt] No faking verb class**: choose a verb's class by its real conjugation type, never to force a surface; honorific -aru verbs (おっしゃる/いらっしゃる/なさる) declared in their true class with the irregular 連用形 surface as a documented literal. Targets the r6-a2 おっしゃる-as-ichidan error.

## Deferred / queued
- ⏸️ **[ts-def] HonorificAruVerb class** (おっしゃる/なさる/いらっしゃる/くださる/ござる, irregular 連用形 おっしゃい…): would let these conjugate honestly instead of a literal. Medium-confidence additive ts-def — candidate for a future round.
- ⏸️ **[content] Chapter tail-decomposition** (a03 かけられた, e08/e17 なくてもいいです, i10/a03 わけにはいきません, a12 べきだ): several hand-authored chapters use the older template-literal style that freezes multi-morpheme predicate tails as raw literals — the dominant issue cluster this round (~30 of 60). Each is expressible today (Passive, Masen, Polite adjective). A focused content pass (like the structural cleanup in earlier work) would lift them.

## Meta-pattern (emerging)
Across rounds, the low scorers are increasingly **hand-authored chapters in the template-literal style** (frozen tails, buried particles), while **parts-based `annotate` output scores high** (this round: 水を飲みすぎた 12/12, 窓を開けてもいいですか 12/12; 飲みすぎ used the new MasuStem, おっしゃいました is now a VerbPart not a CommonNoun literal). The remaining headroom is mostly a chapter-style migration question, not a library gap. n=8 variance remains large — round 6's 69% is four hard chapter draws, not a regression.
