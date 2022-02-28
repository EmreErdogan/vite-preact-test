/// <reference types="vitest" />

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup-tests.ts",
  },
});
