import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { configDefaults } from "vitest/config";

const SRC_DIR = resolve(__dirname, "./src");
const PACKAGE_NAME = "web-components-test-repro";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag === "hello-world",
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      minify: false,
      sourcemap: true,
      lib: {
        entry: SRC_DIR + "/entry.ts",
        name: PACKAGE_NAME,
        fileName: PACKAGE_NAME,
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath(new URL("./", import.meta.url)),
    },
  };
});
