# 🌸 Typed Japanese Playground

**[Open the live playground →](https://typedgrammar.github.io/typed-japanese/)**

An interactive tool for the [Typed Japanese](../README.md) type-level grammar
library, with two parts:

- **📖 Grammar Course** — a bilingual (English / 简体中文) Japanese grammar
  course spanning **47 chapters** from elementary to advanced (loosely following
  the 《新标准日本语》 progression). Every example sentence is backed by a
  self-contained Typed Japanese snippet; click any sentence to open it in the
  analyzer and see its grammatical structure. All 380+ snippets are verified to
  type-check **and** resolve to exactly the sentence shown
  (`pnpm verify:snippets`).
- **🧪 Playground** — write a Japanese sentence as a TypeScript type and watch
  how it's composed, node by node.

![editor + composition tree](../images/demo.png)

## The analyzer

The analyzer screen has two halves:

- **A real TypeScript editor** (Monaco) with the library's `.d.ts` files loaded.
  It genuinely runs the TypeScript language service — full type-checking, errors,
  and hover. Monaco and its workers are **bundled locally** (not loaded from a
  CDN), so type-checking works in every browser.
- **A sentence-structure tree.** The editor's source is parsed with the
  TypeScript Compiler API into an AST, and the chosen type alias is rendered as
  an indented tree of grammar nodes — `ConditionalPhrase`, `DemonstrativeAction`,
  `ConjugateVerb`, `ProperNoun`, particles, conjugation forms… Each node shows
  the Japanese value of its sub-expression, **computed by the TypeScript compiler
  itself** (resolved through Monaco's worker). Click any node to highlight the
  source it came from.

So `ConditionalPhrase<ヒンメル, "なら", DemonstrativeAction<"そう", する, "た形">>`
becomes a tree you can read top-down to understand exactly how the sentence
`ヒンメルならそうした` is built.

## How the visualization works

1. **Parse** — `src/analysis/parse.ts` runs `ts.createSourceFile` on the editor
   text and walks the type nodes of the selected alias, following local alias
   references and expanding the grammar's compositional constructors into a
   `CompositionNode` tree.
2. **Resolve** — `src/analysis/resolve.ts` evaluates each node by appending a
   throwaway `type __TJ_n = <fragment>;` to a hidden model and reading its
   resolved type from Monaco's TypeScript worker. The compiler reports the
   instantiated string literal (e.g. `"そうした"`) — the real type-level result.
3. **Render** — `src/components/CompositionTree.tsx` draws the indented,
   color-coded tree; selecting a node maps its source span back into the editor.

## Development

```bash
pnpm install
pnpm dev          # Vite dev server
pnpm build        # type-check + production build to dist/
pnpm typecheck
```

## Tech

Vite · React 18 · TypeScript (strict) · `monaco-editor` (self-hosted) ·
`typescript` (in-browser parsing) · CSS Modules.
