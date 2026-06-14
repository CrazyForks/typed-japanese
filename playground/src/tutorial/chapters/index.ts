import type { Chapter } from "../types";
import { LEVEL_ORDER } from "../levels";

// Auto-collect every chapter module in this folder. Robust to chapters being
// added or missing — each file default-exports a Chapter.
const modules = import.meta.glob<{ default: Chapter }>("./*.ts", {
  eager: true,
});

export const CHAPTERS: Chapter[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith("/index.ts"))
  .map(([, m]) => m.default)
  .filter((c): c is Chapter => Boolean(c && c.id && c.points))
  .sort(
    (a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level] || a.order - b.order
  );
