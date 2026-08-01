import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp run check --fix",
  },
});
