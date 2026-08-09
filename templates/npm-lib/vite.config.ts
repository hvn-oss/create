import { defineConfig } from "vite-plus";

const ignorePatterns = [
  "**/dist/**",
  "**/dist-ssr/**",
  "**/.output/**",
  "**/.nitro/**",
  "**/.tanstack/**",
  "**/.wrangler/**",
  "**/.source/**",
  "**/.vinxi/**",
  "**/coverage/**",
  "**/*.tsbuildinfo",
  "**/routeTree.gen.ts",
  "**/__unconfig*",
  "**/todos.json",
];

export default defineConfig({
  fmt: {
    proseWrap: "always",
    ignorePatterns,
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
    ignorePatterns,
  },
  run: {
    cache: true,
  },
});
