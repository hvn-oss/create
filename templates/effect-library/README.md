# Effect Library Starter

A minimal Effect library built with TypeScript, Vite+, tsdown, and `@effect/vitest`.

## Setup

The generated package starts as private to prevent accidental publication. Before publishing it:

1. Change `name`, `description`, and other package metadata in `package.json`.
2. Remove `"private": true`.

## Development

Install dependencies:

```bash
vp install
```

Check formatting, lint rules, and types:

```bash
vp check
```

Run the Effect-based unit tests:

```bash
vp test
```

Build the library:

```bash
vp pack
```

The public API is exported from `src/index.ts`. `vp pack` writes ESM and TypeScript declarations to `dist` while keeping Effect external for consumers.
