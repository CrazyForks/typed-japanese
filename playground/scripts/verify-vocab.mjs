/**
 * Guarantee that every content word used in the tutorial's Typed Japanese
 * snippets indexes into the maintained vocabulary table. This is the compiler-
 * checked link between the course and src/vocab.
 *
 *   node scripts/verify-vocab.mjs            # summary, exits non-zero on gaps
 *   node scripts/verify-vocab.mjs --json     # { missing: [...] }
 *
 * Words come from scripts/extract-words.mjs (parsed via the TS compiler). The
 * vocabulary keys come from src/vocab/function-words.ts + src/vocab/entries/*.ts.
 */
import ts from "typescript";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PLAYGROUND = path.resolve(__dirname, "..");
const VOCAB_DIR = path.join(PLAYGROUND, "src/vocab");

function evalModule(file) {
  const src = fs.readFileSync(file, "utf8");
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const mod = { exports: {} };
  new Function("module", "exports", "require", js)(mod, mod.exports, () => ({}));
  return mod.exports;
}

// --- collect vocabulary keys ---
const keys = new Set();
const addEntries = (arr) => {
  for (const e of arr || []) if (e?.word) keys.add(e.word);
};
addEntries(evalModule(path.join(VOCAB_DIR, "function-words.ts")).FUNCTION_WORDS);

const entriesDir = path.join(VOCAB_DIR, "entries");
if (fs.existsSync(entriesDir)) {
  for (const f of fs.readdirSync(entriesDir).filter((f) => f.endsWith(".ts"))) {
    const mod = evalModule(path.join(entriesDir, f));
    addEntries(mod.default || mod.entries);
  }
}

// --- collect required words ---
const extracted = JSON.parse(
  execSync(`node ${path.join(__dirname, "extract-words.mjs")} --json`, { encoding: "utf8" })
);
const required = extracted.words; // [{ word, pos }]

const missing = required.filter((w) => !keys.has(w.word));

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ totalRequired: required.length, vocabKeys: keys.size, missing }, null, 2));
} else {
  console.log(`Vocabulary keys: ${keys.size} | words used by course: ${required.length}`);
  if (missing.length === 0) {
    console.log("✓ Every course word is indexed in the vocabulary table.");
  } else {
    console.log(`✗ ${missing.length} word(s) missing from the table:\n`);
    for (const m of missing) console.log(`  ${m.word}  (${m.pos})`);
  }
}

process.exit(missing.length === 0 ? 0 : 1);
