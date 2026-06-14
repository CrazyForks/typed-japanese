import type { Level } from "./types";

export const LEVEL_ORDER: Record<Level, number> = {
  elementary: 0,
  intermediate: 1,
  advanced: 2,
};

export const LEVEL_META: Record<
  Level,
  { en: string; zh: string; jp: string; emoji: string }
> = {
  elementary: { en: "Elementary", zh: "初级", jp: "初級", emoji: "🌱" },
  intermediate: { en: "Intermediate", zh: "中级", jp: "中級", emoji: "🌿" },
  advanced: { en: "Advanced", zh: "高级", jp: "上級", emoji: "🌳" },
};
