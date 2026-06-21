// Base verb types
export type GodanVerb = {
  type: "godan";
  stem: string;
  ending: "う" | "く" | "ぐ" | "す" | "つ" | "ぬ" | "ぶ" | "む" | "る";
};

export type IchidanVerb = {
  type: "ichidan";
  stem: string;
  ending: "る";
};

export type IrregularVerb = {
  type: "irregular";
  dictionary: "する" | "来る" | "くる";
};

export type SuruVerb<Noun extends string = string> = {
  type: "suru-verb";
  noun: Noun;
};

export type Verb = GodanVerb | IchidanVerb | IrregularVerb | SuruVerb;

// Conjugation forms
export type ConjugationForm =
  | "Dictionary" // Dictionary form
  | "MasuStem" // 連用形 — the bare polite/ます stem (話し, 食べ, し), a mount point for ます/たい/ましょう/…
  | "Masu" // Polite non-past — full ます surface (話します)
  | "MasuPast" // Polite past (話しました)
  | "Masen" // Polite negative (話しません)
  | "MasenDeshita" // Polite negative past (話しませんでした)
  | "Te" // Te form
  | "Ta" // Past form
  | "Nai" // Negative form
  | "Nakute" // Negative te-form (行かなくて, 食べなくて) — for 〜なくて(も)/〜なくては

  | "Potential" // Potential form (bare stem: 行け, いただけ, 食べられ)
  | "PotentialMasu" // Polite potential — full ます surface (行けます, いただけます)
  | "Passive" // Passive form
  | "Causative" // Causative form
  | "Volitional" // Volitional form
  | "Imperative" // Imperative form
  | "Conditional" // Conditional form
  | "Hypothetical"; // Hypothetical form

// Godan verb conjugation map - maps endings to their various conjugated forms
type GodanConjugationMap = {
  う: {
    MasuStem: "い";
    Te: "って";
    Ta: "った";
    Nai: "わ";
    Potential: "え";
    Passive: "わ";
    Causative: "わ";
    Volitional: "おう";
    Imperative: "え";
    Conditional: "え";
    Hypothetical: "え";
  };
  く: {
    MasuStem: "き";
    Te: "いて";
    Ta: "いた";
    Nai: "か";
    Potential: "け";
    Passive: "か";
    Causative: "か";
    Volitional: "こう";
    Imperative: "け";
    Conditional: "け";
    Hypothetical: "け";
  };
  ぐ: {
    MasuStem: "ぎ";
    Te: "いで";
    Ta: "いだ";
    Nai: "が";
    Potential: "げ";
    Passive: "が";
    Causative: "が";
    Volitional: "ごう";
    Imperative: "げ";
    Conditional: "げ";
    Hypothetical: "げ";
  };
  す: {
    MasuStem: "し";
    Te: "して";
    Ta: "した";
    Nai: "さ";
    Potential: "せ";
    Passive: "さ";
    Causative: "さ";
    Volitional: "そう";
    Imperative: "せ";
    Conditional: "せ";
    Hypothetical: "せ";
  };
  つ: {
    MasuStem: "ち";
    Te: "って";
    Ta: "った";
    Nai: "た";
    Potential: "て";
    Passive: "た";
    Causative: "た";
    Volitional: "とう";
    Imperative: "て";
    Conditional: "て";
    Hypothetical: "て";
  };
  ぬ: {
    MasuStem: "に";
    Te: "んで";
    Ta: "んだ";
    Nai: "な";
    Potential: "ね";
    Passive: "な";
    Causative: "な";
    Volitional: "のう";
    Imperative: "ね";
    Conditional: "ね";
    Hypothetical: "ね";
  };
  ぶ: {
    MasuStem: "び";
    Te: "んで";
    Ta: "んだ";
    Nai: "ば";
    Potential: "べ";
    Passive: "ば";
    Causative: "ば";
    Volitional: "ぼう";
    Imperative: "べ";
    Conditional: "べ";
    Hypothetical: "べ";
  };
  む: {
    MasuStem: "み";
    Te: "んで";
    Ta: "んだ";
    Nai: "ま";
    Potential: "め";
    Passive: "ま";
    Causative: "ま";
    Volitional: "もう";
    Imperative: "め";
    Conditional: "め";
    Hypothetical: "め";
  };
  る: {
    MasuStem: "り";
    Te: "って";
    Ta: "った";
    Nai: "ら";
    Potential: "れ";
    Passive: "ら";
    Causative: "ら";
    Volitional: "ろう";
    Imperative: "れ";
    Conditional: "れ";
    Hypothetical: "れ";
  };
};

// Irregular verb conjugation map
type IrregularConjugationMap = {
  する: {
    Dictionary: "する";
    MasuStem: "し";
    Te: "して";
    Ta: "した";
    Nai: "し";
    Potential: "でき";
    Passive: "され";
    Causative: "させ";
    Volitional: "しよう";
    Imperative: "しろ";
    Conditional: "すれ";
    Hypothetical: "すれ";
  };
  来る: {
    Dictionary: "来る";
    MasuStem: "来";
    Te: "来て";
    Ta: "来た";
    Nai: "来";
    Potential: "来られ";
    Passive: "来られ";
    Causative: "来させ";
    Volitional: "来よう";
    Imperative: "来い";
    Conditional: "来れ";
    Hypothetical: "来れ";
  };
  くる: {
    Dictionary: "くる";
    MasuStem: "き";
    Te: "きて";
    Ta: "きた";
    Nai: "こ";
    Potential: "こられ";
    Passive: "こられ";
    Causative: "こさせ";
    Volitional: "こよう";
    Imperative: "こい";
    Conditional: "くれ";
    Hypothetical: "くれ";
  };
};

// Helper type to ensure we get string literals from the maps
type StringLiteral<T> = T extends string ? T : never;

// Helper utility types for conjugation
type GetGodanConjugation<
  E extends GodanVerb["ending"],
  F extends ConjugationForm
> = F extends keyof GodanConjugationMap[E]
  ? StringLiteral<GodanConjugationMap[E][F]>
  : never;

type GetIrregularConjugation<
  V extends IrregularVerb,
  F extends ConjugationForm
> = V["dictionary"] extends keyof IrregularConjugationMap
  ? F extends keyof IrregularConjugationMap[V["dictionary"]]
    ? StringLiteral<IrregularConjugationMap[V["dictionary"]][F]>
    : never
  : never;

// 連用形 (masu-stem) for any verb — the mount point for the polite paradigm and
// for renyokei-attaching auxiliaries (ます, ました, たい, ながら, ましょう…).
type GetMasuStem<V extends Verb> = V extends GodanVerb
  ? `${V["stem"]}${GetGodanConjugation<V["ending"], "MasuStem">}`
  : V extends IchidanVerb
  ? `${V["stem"]}`
  : V extends IrregularVerb
  ? GetIrregularConjugation<V, "MasuStem">
  : V extends SuruVerb
  ? `${V["noun"]}${GetIrregularConjugation<{ type: "irregular"; dictionary: "する" }, "MasuStem">}`
  : never;

// Main conjugation type. The polite paradigm (MasuStem/Masu/MasuPast/Masen/
// MasenDeshita) is resolved uniformly from the 連用形 stem so EVERY verb class
// yields the full surface (話します, not just 話し); per-class branches below
// handle the remaining forms.
export type ConjugateVerb<
  V extends Verb,
  F extends ConjugationForm
> = F extends "MasuStem"
  ? GetMasuStem<V>
  : F extends "Masu"
  ? `${GetMasuStem<V>}ます`
  : F extends "MasuPast"
  ? `${GetMasuStem<V>}ました`
  : F extends "Masen"
  ? `${GetMasuStem<V>}ません`
  : F extends "MasenDeshita"
  ? `${GetMasuStem<V>}ませんでした`
  : F extends "PotentialMasu"
  ? `${ConjugateVerb<V, "Potential">}ます`
  : F extends "Nakute"
  ? `${ConjugateVerb<V, "Nai">}なくて`
  : V extends GodanVerb
  ? F extends "Dictionary"
    ? `${V["stem"]}${V["ending"]}`
    : // 行く/いく are irregular in ONLY their て/た forms (行って/行った, not the
      // regular く→いて the map would give); every other form stays regular.
      V extends { stem: "行" | "い"; ending: "く" }
      ? F extends "Te"
        ? `${V["stem"]}って`
        : F extends "Ta"
        ? `${V["stem"]}った`
        : `${V["stem"]}${GetGodanConjugation<V["ending"], F>}`
      : `${V["stem"]}${GetGodanConjugation<V["ending"], F>}`
  : V extends IchidanVerb
  ? F extends "Dictionary"
    ? `${V["stem"]}${V["ending"]}`
    : F extends "Te"
    ? `${V["stem"]}て`
    : F extends "Ta"
    ? `${V["stem"]}た`
    : F extends "Nai"
    ? `${V["stem"]}`
    : F extends "Potential" | "Passive"
    ? `${V["stem"]}られ`
    : F extends "Causative"
    ? `${V["stem"]}させ`
    : F extends "Hypothetical" | "Conditional"
    ? `${V["stem"]}れ`
    : F extends "Volitional"
    ? `${V["stem"]}よう`
    : F extends "Imperative"
    ? `${V["stem"]}ろ`
    : never
  : V extends IrregularVerb
  ? GetIrregularConjugation<V, F>
  : V extends SuruVerb
  ? F extends "Dictionary"
    ? `${V["noun"]}する`
    : `${V["noun"]}${GetIrregularConjugation<{ type: "irregular"; dictionary: "する" }, F>}`
  : never;

// Example usage (we keep this for documentation)
type 話す = GodanVerb & { stem: "話"; ending: "す" };
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };
type する = IrregularVerb & { dictionary: "する" };
type 勉強する = SuruVerb<"勉強">;

// Type-level conjugation tests
type 話すMasu = ConjugateVerb<話す, "Masu">; // Evaluates to "話します"
type 話すMasuStem = ConjugateVerb<話す, "MasuStem">; // Evaluates to "話し"
type 食べるMasuPast = ConjugateVerb<食べる, "MasuPast">; // Evaluates to "食べました"
type 食べるTe = ConjugateVerb<食べる, "Te">; // Evaluates to "食べて"
type 勉強した = ConjugateVerb<勉強する, "Ta">; // Evaluates to "勉強した"
type するImperative = ConjugateVerb<する, "Imperative">; // Evaluates to "しろ"
