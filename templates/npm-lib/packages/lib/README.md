# @hvn-oss/lib

A TypeScript library built with Vite+ and Effect.

## Installation

```bash
pnpm add @hvn-oss/lib effect
```

## Usage

```ts
import { program } from "@hvn-oss/lib";
import { Effect } from "effect";

Effect.runSync(program);
```

Replace the starter export in `src/index.ts` with the library's public API and update this section
with real examples before publishing.

## Development

Run commands from `packages/lib`:

```bash
vp run dev
vp run test
vp run build
```

The ESM package is generated in `dist/`. Run `vp run ready` from the monorepo root before opening a
pull request or publishing a release.
