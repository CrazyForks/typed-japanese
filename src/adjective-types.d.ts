import type { ConjugateCopula } from "./copula-types";

// Adjective types
export type IAdjective = {
  type: "i-adjective";
  stem: string;
  ending: "い";
  irregular?: boolean;
};

export type NaAdjective = {
  type: "na-adjective";
  stem: string;
};

export type Adjective = IAdjective | NaAdjective;

// Adjective conjugation forms
export type AdjectiveConjugationForm =
  | "Basic" // Basic form
  | "Polite" // Polite form
  | "Past" // Past form
  | "Negative" // Negative form
  | "Te"; // Connective form

// I-adjective conjugation mapping
type IAdjectiveConjugationMap = {
  い: {
    Basic: "い";
    Polite: "いです";
    Past: "かった";
    Negative: "くない";
    Te: "くて";
  };
};

// Special case for いい
type IrregularAdjectiveMap = {
  い: {
    Past: "よかった";
    Negative: "よくない";
    Te: "よくて";
    Polite: "いいです";
  };
};

// Helper for I-adjective conjugation
type GetIAdjectiveConjugation<F extends AdjectiveConjugationForm> =
  F extends keyof IAdjectiveConjugationMap["い"]
    ? IAdjectiveConjugationMap["い"][F]
    : never;

// Helper for irregular いい conjugation
type GetIrregularAdjectiveConjugation<
  Stem extends string,
  F extends AdjectiveConjugationForm
> = Stem extends "い"
  ? F extends keyof IrregularAdjectiveMap["い"]
    ? IrregularAdjectiveMap["い"][F]
    : F extends keyof IAdjectiveConjugationMap["い"]
    ? IAdjectiveConjugationMap["い"][F]
    : never
  : never;

// Adjective conjugation type
export type ConjugateAdjective<
  A extends Adjective,
  F extends AdjectiveConjugationForm
> = A extends IAdjective
  ? A extends { irregular: true }
    ? F extends "Basic"
      ? `${A["stem"]}${A["ending"]}`
      : `${GetIrregularAdjectiveConjugation<A["stem"], F>}`
    : F extends "Basic"
    ? `${A["stem"]}${A["ending"]}`
    : `${A["stem"]}${GetIAdjectiveConjugation<F>}`
  : A extends NaAdjective
  ? // A na-adjective inflects through the copula for です / でした / ではない / で.
    // Its Basic (attributive) な is 形容動詞-specific — it is NOT a generic copula
    // form (a plain noun takes の, not な), so it stays a literal here.
    F extends "Basic"
    ? `${A["stem"]}な`
    : F extends "Polite"
    ? ConjugateCopula<A["stem"], "Polite">
    : F extends "Past"
    ? ConjugateCopula<A["stem"], "PolitePast">
    : F extends "Negative"
    ? ConjugateCopula<A["stem"], "Negative">
    : F extends "Te"
    ? ConjugateCopula<A["stem"], "Te">
    : never
  : never;

// Example usage
type いいBasic = ConjugateAdjective<
  { type: "i-adjective"; stem: "い"; ending: "い"; irregular: true },
  "Basic"
>; // "いい"
// na-adjective
type 綺麗Basic = ConjugateAdjective<
  { type: "na-adjective"; stem: "綺麗" },
  "Basic"
>; // "綺麗な"
// 綺麗なPolite
type 綺麗Polite = ConjugateAdjective<
  { type: "na-adjective"; stem: "綺麗" },
  "Polite"
>; // "綺麗です"
