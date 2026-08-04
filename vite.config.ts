import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  pack: {
    dts: {
      tsgo: true,
    },
    exports: true,
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {},
  run: {
    tasks: {
      build: {
        command: ["cd templates/node-lib", "pnpm run build"],
      },
      clean: {
        command: [
          "cd templates/node-lib",
          "git clean -fdx node_modules dist .output",
          "cd ../..",
          "git clean -fdx node_modules dist .output",
        ],
      },
      "templates:install": {
        command: ["cd templates/node-lib", "vp install"],
      },
    },
  },
});
