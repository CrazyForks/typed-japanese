/**
 * eval-codex.mjs — the HARD eval: run the REAL codex annotate pipeline on each
 * hard case and measure how often codex actually nails it.
 *
 *   node scripts/eval-codex.mjs --round N [--concurrency 4] [--cases eval/hard-cases.json]
 *
 * For every case it runs `bun scripts/annotate.ts "<jp>" --dry-run`, which calls
 * the real `codex exec`, then type-checks the result and verifies it resolves to
 * EXACTLY the target sentence (annotate's own verify()). A case "passes" iff
 * codex produced a snippet that type-checks and resolves byte-identically — a
 * far harder bar than scoring hand-written snippets.
 *
 * Emits JSON to stdout: {round, ran, passed, passRate, byCategory, items:[{id,
 * jp, category, modelability, passed, attempts, resolved, code, error}]}.
 * All progress logging goes to stderr so stdout stays pure JSON.
 */
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const PLAYGROUND = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const log = (...a) => console.error(...a);

const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : def;
};
const round = Number(arg("round", "1"));
const concurrency = Number(arg("concurrency", "4"));
const casesFile = path.resolve(PLAYGROUND, arg("cases", "eval/hard-cases.json"));

const cases = JSON.parse(fs.readFileSync(casesFile, "utf8")).cases;
log(`eval-codex round ${round}: ${cases.length} hard case(s), concurrency ${concurrency}`);

const stripAnsi = (s) => s.replace(/\x1b\[[0-9;]*m/g, "");

/** Run the real annotate→codex pipeline once for a sentence. */
function annotate(jp) {
  return new Promise((resolve) => {
    const child = spawn("bun", ["scripts/annotate.ts", jp, "--dry-run"], {
      cwd: PLAYGROUND,
      env: process.env,
    });
    let stdout = "";
    let stderr = "";
    const killer = setTimeout(() => child.kill("SIGKILL"), 240000);
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("error", (e) => {
      clearTimeout(killer);
      resolve({ code: 1, out: "", err: String(e) });
    });
    child.on("close", (code) => {
      clearTimeout(killer);
      resolve({ code: code ?? 1, out: stripAnsi(stdout), err: stripAnsi(stderr) });
    });
  });
}

function parseAttempts(out) {
  const m = out.match(/attempt (\d+)\/\d+/g);
  return m ? m.length : 1;
}
function parseResolved(out) {
  const m = out.match(/resolves to "([\s\S]*?)"/);
  return m ? m[1] : null;
}
function extractCode(out) {
  const idx = out.indexOf("import type");
  if (idx < 0) return null;
  // the snippet runs to the end of output (dry-run prints it last)
  return out.slice(idx).trim();
}

async function runCase(c) {
  const t0 = Date.now();
  const r = await annotate(c.jp);
  const passed = r.code === 0;
  const code = extractCode(r.out);
  const resolved = parseResolved(r.out);
  const attempts = parseAttempts(r.out);
  const secs = Math.round((Date.now() - t0) / 1000);
  log(`  ${passed ? "PASS" : "FAIL"} [${c.category}] ${c.jp}  (${attempts} attempt(s), ${secs}s)`);
  return {
    id: c.id,
    jp: c.jp,
    reading: c.reading,
    en: c.en,
    zh: c.zh,
    category: c.category,
    modelability: c.modelability,
    difficulty: c.difficulty,
    passed,
    attempts,
    resolved,
    code: passed ? code : null,
    error: passed ? null : (r.err.split("\n").find((l) => l.includes("error")) || "did not resolve").slice(0, 200),
  };
}

// bounded-concurrency pool
const results = new Array(cases.length);
let next = 0;
async function worker() {
  while (next < cases.length) {
    const i = next++;
    results[i] = await runCase(cases[i]);
  }
}
await Promise.all(Array.from({ length: Math.min(concurrency, cases.length) }, worker));

const passed = results.filter((r) => r.passed).length;
const byCategory = {};
for (const r of results) {
  byCategory[r.category] ??= { ran: 0, passed: 0 };
  byCategory[r.category].ran++;
  if (r.passed) byCategory[r.category].passed++;
}
const out = {
  round,
  ran: results.length,
  passed,
  passRate: results.length ? +(passed / results.length).toFixed(4) : 0,
  byCategory,
  items: results,
};
log(`\neval-codex round ${round}: ${passed}/${results.length} passed (${(out.passRate * 100).toFixed(1)}%)`);
process.stdout.write(JSON.stringify(out, null, 2));
