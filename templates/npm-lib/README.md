# npm Library Monorepo

A Vite+ monorepo for developing, documenting, and publishing a TypeScript library to npm.

## Quick Start

```bash
vp install
vpx changeset init
vp run dev
```

The development server starts the documentation site at `http://localhost:3000`.

## Workspace

- `packages/lib` contains the publishable library.
- `apps/docs` contains the TanStack Start and Fumadocs documentation site.
- `.changeset` contains release notes and versioning configuration after Changesets is initialized.

## Commands

| Command            | Description                                        |
| ------------------ | -------------------------------------------------- |
| `vp run dev`       | Start the documentation development server         |
| `vp run build`     | Build every package and application                |
| `vp run test`      | Run root and workspace tests                       |
| `vp run typecheck` | Type-check every workspace                         |
| `vp run ready`     | Fix checks, build the workspace, and run all tests |
| `vp run clean`     | Remove dependencies and generated output           |

## Releases

Create a changeset for each user-facing library change:

```bash
vpx changeset
```

Before the first release, replace the placeholder package metadata in
`packages/lib/package.json` and update the package documentation. Changesets can then apply version
updates and publish packages:

```bash
vpx changeset version
vpx changeset publish
```
