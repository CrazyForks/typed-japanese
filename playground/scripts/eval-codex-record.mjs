/**
 * eval-codex-record.mjs — turn a hard-eval result (from eval-codex.mjs) into the
 * durable record + playground presets.
 *
 *   node scripts/eval-codex-record.mjs /tmp/hard_round1.json
 *
 * Writes:
 *   eval/history/hard-NNN.json     full per-case result (snapshot)
 *   eval/hard-scoreboard.md        the comparable KPI table (codex pass-rate)
 *   src/data/eval-presets.json     passing cases as playground Snippets, so each
 *                                  hard case is clickable in the Type Playground.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PLAYGROUND = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resultFile = process.argv[2];
if (!resultFile) {
  console.error("usage: node scripts/eval-codex-record.mjs <result.json>");
  process.exit(1);
}
const r = JSON.parse(fs.readFileSync(resultFile, "utf8"));
const round = r.round;
const pad = String(round).padStart(3, "0");

// 1. snapshot
const histDir = path.join(PLAYGROUND, "eval/history");
fs.mkdirSync(histDir, { recursive: true });
fs.writeFileSync(path.join(histDir, `hard-${pad}.json`), JSON.stringify(r, null, 2) + "\n");

// 2. scoreboard row
const CATS = [
  "relative-clause", "causative-passive-keigo", "keigo-chains",
  "nominalization-embedding", "aux-verb-chains", "conditional-concessive",
  "quotation-modality", "long-multiclause", "classical-formal",
];
const sbPath = path.join(PLAYGROUND, "eval/hard-scoreboard.md");
const header =
  `# Hard eval scoreboard (real codex annotate pass-rate)\n\n` +
  `Each round runs the REAL \`codex exec\` annotate pipeline on every sentence in\n` +
  `\`eval/hard-cases.json\` (much harder than the fixed benchmark) and records how\n` +
  `often codex produces a snippet that **type-checks AND resolves byte-identically**\n` +
  `to the target. "modelable" = pass-rate excluding the classical-literal cases the\n` +
  `library cannot fully express.\n\n` +
  `| round | date | cases | pass | pass-rate | modelable | by-difficulty (hard / very-hard) |\n` +
  `|---|---|---|---|---|---|---|\n`;
const date = new Date(fs.statSync(resultFile).mtime).toISOString().slice(0, 16).replace("T", " ");
const items = r.items;
const modelable = items.filter((x) => x.modelability !== "classical-literal");
const modelablePass = modelable.filter((x) => x.passed).length;
const hard = items.filter((x) => x.difficulty === "hard");
const vhard = items.filter((x) => x.difficulty === "very-hard");
const rate = (p, n) => (n ? `${((p / n) * 100).toFixed(1)}%` : "—");
const row =
  `| ${pad} | ${date} | ${r.ran} | ${r.passed} | **${(r.passRate * 100).toFixed(1)}%** | ` +
  `${rate(modelablePass, modelable.length)} | ` +
  `${rate(hard.filter((x) => x.passed).length, hard.length)} / ${rate(vhard.filter((x) => x.passed).length, vhard.length)} |\n`;
let sb = fs.existsSync(sbPath) ? fs.readFileSync(sbPath, "utf8") : header;
if (!sb.includes("| round |")) sb = header;
// replace an existing row for this round, else append
const rowRe = new RegExp(`^\\| ${pad} \\|.*$`, "m");
sb = rowRe.test(sb) ? sb.replace(rowRe, row.trimEnd()) : sb.trimEnd() + "\n" + row;
fs.writeFileSync(sbPath, sb.endsWith("\n") ? sb : sb + "\n");

// per-category breakdown block (overwrite a fenced section)
let breakdown = `\n## Round ${pad} by category\n\n| category | pass |\n|---|---|\n`;
for (const c of CATS) {
  const b = r.byCategory[c];
  if (b) breakdown += `| ${c} | ${b.passed}/${b.ran} |\n`;
}
const fence = /\n## Round \d+ by category[\s\S]*$/;
sb = fs.readFileSync(sbPath, "utf8");
sb = (fence.test(sb) ? sb.replace(fence, "") : sb).trimEnd() + "\n" + breakdown;
fs.writeFileSync(sbPath, sb);

// 3. playground presets — passing cases (they have valid, resolving code)
const presets = items
  .filter((x) => x.passed && x.code)
  .map((x) => ({
    id: `eval-${x.id}`,
    title: x.jp.length > 16 ? x.jp.slice(0, 15) + "…" : x.jp,
    jp: x.jp,
    en: x.en,
    code: x.code,
  }));
fs.writeFileSync(
  path.join(PLAYGROUND, "src/data/eval-presets.json"),
  JSON.stringify(presets, null, 2) + "\n"
);

console.error(
  `recorded hard-${pad}: ${r.passed}/${r.ran} passed (${(r.passRate * 100).toFixed(1)}%), ` +
  `${presets.length} preset(s) → src/data/eval-presets.json`
);
