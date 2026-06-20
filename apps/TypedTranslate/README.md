# TypedTranslate

A native macOS (SwiftUI) **dev tool** for exploring Japanese grammar with
[Typed Japanese](../../README.md). Paste a Japanese sentence and TypedTranslate:

1. **Annotates** it — generates Typed Japanese grammar-annotation TypeScript,
   verified against the real library by the TypeScript compiler.
2. **Renders the structure tree** — the composition of phrases, verbs,
   particles, etc., with the Japanese each subtree resolves to.
3. **Chats** about the sentence's grammar, with the verified annotation and its
   structure tree injected as context.

Annotation and chat are both powered by the **local** `codex exec` and
`claude -p` CLIs — nothing is sent to a hosted backend by this app.

> ⚠️ This is a developer tool, not a shipping product. It runs **from this repo
> checkout**: the bridge uses the repo's own `typescript` install and the live
> `typed-japanese` library under [`../../src`](../../src). See
> [Productionizing into a standalone `.app`](#productionizing-into-a-standalone-app)
> for what it would take to ship a self-contained bundle.

## Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│  TypedTranslate.app  (SwiftUI)                                         │
│                                                                        │
│   Sentence input ─┐     Structure tree view      Grammar chat          │
│                   │            ▲                       ▲                │
│                   ▼            │                       │                │
│             ┌───────────────────────────────────────────────┐         │
│             │ CLIService (Swift)                            │         │
│             │  • spawns /bin/zsh -lc "<cmd>"  (login PATH)  │         │
│             │  • sends JSON request on stdin               │         │
│             │  • reads ONE JSON object from stdout         │         │
│             └───────────────────────────────────────────────┘         │
└───────────────────────────────┬──────────────────────────────────────┘
                                 │  /bin/zsh -lc
                                 ▼
        cd $TYPEDTRANSLATE_REPO && bun $TYPEDTRANSLATE_BRIDGE <command>
                                 │
                ┌────────────────┴───────────────────┐
                ▼                                     ▼
   ┌────────────────────────┐            ┌──────────────────────────┐
   │  bun bridge            │            │  codex exec / claude -p   │
   │  (tt-bridge.ts)        │── prompt ─▶│  (local model CLIs)       │
   │                        │◀─ snippet ─│                          │
   │  Typed Japanese SDK:   │            └──────────────────────────┘
   │   • annotate pipeline  │
   │     (../../playground/ │
   │      scripts/annotate) │
   │   • structure parse    │
   │     (TS Compiler API)  │
   │   • verify vs ../../src │
   │     + TS type-checker  │
   └────────────────────────┘
```

Why the `/bin/zsh -lc` indirection: macOS GUI apps do **not** inherit your
interactive shell `PATH`, so `bun`, `codex`, and `claude` (typically under
`~/.bun/bin` etc.) would be invisible to a directly-spawned subprocess. Launching
through a **login** shell sources your profile and puts them on `PATH`. User text
(the sentence, the chat message, the snippet) is always passed on **stdin**, never
interpolated into the command string.

## Prerequisites

- **This repo, checked out** — TypedTranslate runs against
  `/Users/evan/code/typed-japanese` (the `typed-japanese` source under
  [`../../src`](../../src) and the bridge under [`bridge/`](bridge/)).
- **Xcode / Swift toolchain** — Swift 6.x (`swift --version`). Building targets
  recent macOS; SwiftUI is required.
- **`bun`** on PATH — runs the bridge and the annotate pipeline.
- **`codex`** (codex-cli) on PATH — the default annotation/chat engine.
- **`claude`** (Claude Code CLI) on PATH — the alternate engine.

All three CLIs must be resolvable from a **login** shell, i.e. on the `PATH` set
in your `~/.zprofile` / `~/.zshrc`. Verify with:

```sh
/bin/zsh -lc 'command -v bun codex claude'
```

## How to run

From this directory:

```sh
./run.ts            # or: bun run.ts
```

`run.ts` is a [Bun Shell](https://bun.sh/docs/runtime/shell) script (the
project's replacement for ad-hoc bash). It sets `TYPEDTRANSLATE_REPO` and
`TYPEDTRANSLATE_BRIDGE` to this checkout's paths, checks that
`bun`/`codex`/`claude` are reachable from a login shell (printing a friendly hint
if not), then `swift run`s the app.

Or run it directly with the Swift toolchain:

```sh
swift run
```

## Launching & testing

From the repo root:

```sh
bun macos        # just launch the app (no checks)
bun macos:test   # run the smoke checks (no launch)
```

`bun macos` is wired to `apps/TypedTranslate/run.ts` (sets the env vars and
`swift run`s the app). `bun macos:test` runs `apps/TypedTranslate/smoke.ts`, a
Bun Shell script that checks the whole stack — `bun`/`swift`/`codex`/`claude` on
the login PATH → `swift build` → a deterministic bridge `parse` (asserts a known
snippet resolves to `食べたよ`) → one live `annotate+parse`. A model that fails to
verify is a *soft* failure (the plumbing answered); a build or bridge error is a
hard failure. Extra flags pass through to the script:

```sh
bun macos:test            # default: codex, no launch
./smoke.ts --skip-live    # skip the codex/claude call (offline / fast)
./smoke.ts --engine claude --no-launch
```

It checks, in order: `bun`/`swift`/`codex`/`claude` on the login PATH → `swift
build` → a deterministic bridge `parse` (asserts a known snippet resolves to
`食べたよ`) → one live `annotate+parse`. A model that fails to verify is a *soft*
failure (the plumbing answered); a build or bridge error is a hard failure.

When you run `swift run` yourself, the app falls back to its built-in defaults
(repo = `/Users/evan/code/typed-japanese`, bridge =
`/Users/evan/code/typed-japanese/apps/TypedTranslate/bridge/tt-bridge.ts`). If
your checkout lives elsewhere, override them:

```sh
export TYPEDTRANSLATE_REPO=/path/to/typed-japanese
export TYPEDTRANSLATE_BRIDGE=$TYPEDTRANSLATE_REPO/apps/TypedTranslate/bridge/tt-bridge.ts
swift run
```

Both are read once at launch (in `CLIService`); configuration is env-var-only —
there is no in-app Settings panel. Launch via `./run.ts`, which exports them for
you.

## The bridge contract

The Swift app and the bridge communicate over a **stable JSON contract**. The
bridge is invoked as:

```sh
/bin/zsh -lc 'cd $TYPEDTRANSLATE_REPO && bun $TYPEDTRANSLATE_BRIDGE <command>'
```

with a JSON **request on stdin**. It prints **exactly one JSON object** to stdout
and exits `0` even on handled errors (it exits nonzero only on an actual crash).

### `annotate`

Generate a verified Typed Japanese snippet for a sentence.

```jsonc
// stdin
{ "sentence": "話して", "engine": "codex", "model": "...", "retries": 3 }
// stdout
{ "ok": true, "code": "type ...", "resolved": "話して", "errors": [] }
```

`engine` is `"codex"` or `"claude"`; `model` and `retries` are optional. The
pipeline builds a prompt from the live library API, asks the chosen model, then
**verifies** the result with the TypeScript compiler against
[`../../src`](../../src): it must type-check, its last `type` alias must resolve
to exactly the input sentence, and a structural audit rejects shortcuts that
hide particles/literals. On failure it feeds the diagnostics back and retries.

### `parse`

Build the structure tree from snippet source.

```jsonc
// stdin
{ "code": "type S = Sentence<[...]>" }
// stdout
{ "ok": true, "aliases": ["S"], "tree": { /* GrammarNode */ }, "errors": [] }
```

`parse` walks the snippet with the TypeScript Compiler API and resolves each
subtree's Japanese value through the type checker.

### `annotate+parse`

Convenience: annotate, then parse the winning code in one call. Same stdin shape
as `annotate`; stdout merges both:

```jsonc
{ "ok": true, "code": "type ...", "resolved": "話して", "tree": { /* GrammarNode */ }, "errors": [] }
```

### `GrammarNode`

The recursive tree shape both `parse` and `annotate+parse` return:

```ts
interface GrammarNode {
  id: string;              // stable id for the node
  label: string;           // display: alias name / constructor / quoted literal
  ctor: string | null;     // base constructor name, or null
  category: string;        // GrammarCategory (phrase|verb|noun|particle|...)
  text: string;            // exact source fragment for this node
  resolved: string | null; // Japanese this subtree evaluates to (via the checker)
  children: GrammarNode[];
}
```

`category` is one of the Typed Japanese grammar categories: `phrase`,
`conjugation`, `verb`, `adjective`, `noun`, `technical`, `whitespace`, `adverb`,
`particle`, `copula`, `suffix`, `punctuation`, `form`, `demonstrative`,
`interrogative`, `literal`, `other`.

## How chat injects grammar context

The grammar chat is the same `codex`/`claude` CLIs, but the prompt is seeded with
what the app already knows about the current sentence:

- the original Japanese sentence,
- the **verified annotation code** (the `type` aliases from `annotate`),
- the value it **resolves** to (the round-tripped Japanese), and
- a flattened view of the **structure tree** (each node's label, category, and
  resolved value).

So instead of guessing at the parse, the model discusses grammar grounded in the
compiler-verified structure. Each user turn is appended and the whole context is
re-sent on stdin (never string-interpolated), keeping the conversation anchored
to the same verified annotation.

## Productionizing into a standalone `.app`

Today TypedTranslate is wired to **this repo**: it shells out to your
login-shell `bun`/`codex`/`claude` and reads `typescript` + `../../src` straight
out of the checkout. To turn it into a distributable `.app`, you'd need to:

- **Bundle the bridge runtime.** Embed the `bun` binary, the bridge's
  `node_modules` (notably `typescript`), the `typed-japanese` `src/*.d.ts`, and
  `tt-bridge.ts` into the app's `Contents/Resources`. Resolve them relative to
  `Bundle.main` instead of `$TYPEDTRANSLATE_REPO`, and run the bridge with the
  bundled `bun` rather than the user's.
- **Stop depending on the login shell.** With everything bundled, spawn `bun`
  directly with an explicit `PATH`/cwd instead of `/bin/zsh -lc`, so the app no
  longer relies on the user's profile.
- **Decide on the model CLIs.** `codex` and `claude` are external tools with
  their own auth. A shipping app would either declare them as prerequisites
  (detect + guide install) or talk to the model providers directly instead of
  shelling out.
- **Add an Xcode app target.** Replace `swift run` of the SPM executable with a
  proper `.app` bundle (Info.plist, app icon, entitlements), built in Xcode or
  via `xcodebuild`.
- **Code-sign + notarize.** Sign the app *and* the embedded `bun` binary with a
  Developer ID, enable Hardened Runtime, and notarize so Gatekeeper allows it on
  other Macs.

Until then: check out the repo, make sure the three CLIs are on your login PATH,
and run `./run.ts`.
