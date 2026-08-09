# Node Library

A minimal TypeScript library for Node.js, powered by [Vite+](https://viteplus.dev/).

## Quick Start

```bash
vp install
vp run dev
```

Edit `src/index.ts` to build your public API. Tests live in `tests/` and run with Vitest through
Vite+.

## Commands

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `vp run dev`   | Build the library in watch mode          |
| `vp run build` | Create the production build in `dist/`   |
| `vp run test`  | Run the test suite                       |
| `vp run check` | Format, lint, and type-check the project |
| `vp run clean` | Remove dependencies and build output     |

## Publishing

Before publishing, update the package name, description, author, repository, and other metadata in
`package.json`. The package exports the ESM bundle generated at `dist/index.mjs`.
