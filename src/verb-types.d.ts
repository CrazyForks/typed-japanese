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
  | "Masu" // Polite form
  | "Te" // Te form
  | "Ta" // Past form
  | "Nai" // Negative form
  | "Potential" // Potential form
  | "Passive" // Passive form
  | "Causative" // Causative form
  | "Volitional" // Volitional form
  | "Imperative" // Imperative form
  | "Conditional" // Conditional form
  | "Hypothetical"; // Hypothetical form

// Godan verb conjugation map - maps endings to their various conjugated forms
type GodanConjugationMap = {
  う: {
    Masu: "い";
    Te: "って";
    Ta: "った";
    Nai: "わ";
    Potential: "え";
    Passive: "わ";
    Causative: "わ";
    Volitional: "お";
    Imperative: "え";
    Conditional: "え";
    Hypothetical: "え";
  };
  く: {
    Masu: "き";
    Te: "いて";
    Ta: "いた";
    Nai: "か";
    Potential: "け";
    Passive: "か";
    Causative: "か";
    Volitional: "こ";
    Imperative: "け";
    Conditional: "け";
    Hypothetical: "け";
  };
  ぐ: {
    Masu: "ぎ";
    Te: "いで";
    Ta: "いだ";
    Nai: "が";
    Potential: "げ";
    Passive: "が";
    Causative: "が";
    Volitional: "ご";
    Imperative: "げ";
    Conditional: "げ";
    Hypothetical: "げ";
  };
  す: {
    Masu: "し";
    Te: "して";
    Ta: "した";
    Nai: "さ";
    Potential: "せ";
    Passive: "さ";
    Causative: "さ";
    Volitional: "そ";
    Imperative: "せ";
    Conditional: "せ";
    Hypothetical: "せ";
  };
  つ: {
    Masu: "ち";
    Te: "って";
    Ta: "った";
    Nai: "た";
    Potential: "て";
    Passive: "た";
    Causative: "た";
    Volitional: "と";
    Imperative: "て";
    Conditional: "て";
    Hypothetical: "て";
  };
  ぬ: {
    Masu: "に";
    Te: "んで";
    Ta: "んだ";
    Nai: "な";
    Potential: "ね";
    Passive: "な";
    Causative: "な";
    Volitional: "の";
    Imperative: "ね";
    Conditional: "ね";
    Hypothetical: "ね";
  };
  ぶ: {
    Masu: "び";
    Te: "んで";
    Ta: "んだ";
    Nai: "ば";
    Potential: "べ";
    Passive: "ば";
    Causative: "ば";
    Volitional: "ぼ";
    Imperative: "べ";
    Conditional: "べ";
    Hypothetical: "べ";
  };
  む: {
    Masu: "み";
    Te: "んで";
    Ta: "んだ";
    Nai: "ま";
    Potential: "め";
    Passive: "ま";
    Causative: "ま";
    Volitional: "も";
    Imperative: "め";
    Conditional: "め";
    Hypothetical: "め";
  };
  る: {
    Masu: "り";
    Te: "って";
    Ta: "った";
    Nai: "ら";
    Potential: "れ";
    Passive: "ら";
    Causative: "ら";
    Volitional: "ろ";
    Imperative: "れ";
    Conditional: "れ";
    Hypothetical: "れ";
  };
};

// Irregular verb conjugation map
type IrregularConjugationMap = {
  する: {
    Dictionary: "する";
    Masu: "し";
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
    Masu: "来";
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
    Masu: "き";
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

// Main conjugation type
export type ConjugateVerb<
  V extends Verb,
  F extends ConjugationForm
> = V extends GodanVerb
  ? F extends "Dictionary"
    ? `${V["stem"]}${V["ending"]}`
    : `${V["stem"]}${GetGodanConjugation<V["ending"], F>}`
  : V extends IchidanVerb
  ? F extends "Dictionary"
    ? `${V["stem"]}${V["ending"]}`
    : F extends "Masu"
    ? `${V["stem"]}`
    : F extends "Te"
    ? `${V["stem"]}て`
    : F extends "Ta"
    ? `${V["stem"]}た`
    : F extends "Nai"
    ? `${V["stem"]}`
    : F extends "Potential" | "Passive" | "Causative" | "Hypothetical" | "Conditional"
    ? `${V["stem"]}られ`
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
type 話すMasu = ConjugateVerb<話す, "Masu">; // Evaluates to "話し"
type 食べるTe = ConjugateVerb<食べる, "Te">; // Evaluates to "食べて"
type 勉強した = ConjugateVerb<勉強する, "Ta">; // Evaluates to "勉強した"
type するImperative = ConjugateVerb<する, "Imperative">; // Evaluates to "しろ"
