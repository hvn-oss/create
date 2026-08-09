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
      check: {
        command: "vp check",
      },
      test: {
        command: ["vp run test:node-lib", "vp run test:npm-lib"],
        cache: false,
      },
      "test:node-lib": {
        command: "pnpm exec vp run test",
        cwd: "templates/node-lib",
        cache: false,
      },
      "test:npm-lib": {
        command: "pnpm exec vp run test",
        cwd: "templates/npm-lib",
        cache: false,
      },
      build: {
        command: ["vp run build:node-lib", "vp run build:npm-lib"],
        cache: false,
      },
      "build:node-lib": {
        command: "pnpm exec vp run build",
        cwd: "templates/node-lib",
        cache: false,
      },
      "build:npm-lib": {
        command: "pnpm exec vp run build",
        cwd: "templates/npm-lib",
        cache: false,
      },
      ready: {
        command: ["vp run ready:npm-lib"],
        cache: false,
      },
      "ready:npm-lib": {
        command: "pnpm exec vp run ready",
        cwd: "templates/npm-lib",
        cache: false,
      },
      clean: {
        command: ["vp run clean:node-lib", "vp run clean:npm-lib", "vp run clean:root"],
        cache: false,
      },
      "clean:node-lib": {
        command: "sh -c 'vp run clean'",
        cwd: "templates/node-lib",
        cache: false,
      },
      "clean:npm-lib": {
        command: "sh -c 'vp run clean'",
        cwd: "templates/npm-lib",
        cache: false,
      },
      "clean:root": {
        command: "git clean -fdx node_modules dist .output",
        cache: false,
      },
      "templates:install": {
        command: ["vp run templates:install:node-lib", "vp run templates:install:npm-lib"],
        cache: false,
      },
      "templates:install:node-lib": {
        command: "vp install",
        cwd: "templates/node-lib",
        cache: false,
      },
      "templates:install:npm-lib": {
        command: "vp install",
        cwd: "templates/npm-lib",
        cache: false,
      },
    },
  },
});
