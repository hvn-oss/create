# @hvn-oss/create

Curated Vite+ project templates from HVN OSS.

## Usage

Open the organization template picker:

```bash
vp create @hvn-oss
```

Create a React library directly:

```bash
vp create @hvn-oss:react-library
```

To inspect the available templates without prompting:

```bash
vp create @hvn-oss --no-interactive
```

## Development

Install dependencies:

```bash
vp install
```

Check, test, and build every bundled template:

```bash
vp run check
vp run test
vp run build
```

## Adding A Template

1. Add a self-contained project under `templates/<name>`.
2. Use concrete dependency versions; generated projects do not inherit this workspace's configuration.
3. Name scaffold dotfiles with an underscore, such as `_gitignore`. Vite+ restores the leading dot when it copies the template.
4. Register the template in `createConfig.templates` in the root `package.json`.
5. Run the validation commands above and inspect the package contents with `pnpm pack --dry-run`.

## Publishing

The npm package must be published publicly as `@hvn-oss/create`. Publishing is intentionally manual. Before publishing, confirm that the package archive contains the template sources and excludes generated `dist` and `node_modules` directories.

After publishing, verify the manifest and scaffold into a disposable directory:

```bash
vp create @hvn-oss --no-interactive
vp create @hvn-oss:react-library --no-interactive --directory /tmp/hvn-react-library
```
