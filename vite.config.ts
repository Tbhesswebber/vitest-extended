import { resolve } from "node:path";
import { defineConfig, UserConfig } from "vite";
import type { UserConfig as UserTestConfig } from "vitest/config";

const config: UserConfig & UserTestConfig = {
  build: {
    lib: {
      entry: {
        all: resolve(__dirname, "./src/all/index.js"),
        index: resolve(__dirname, "./src/index.js"),
      },
    },
    emptyOutDir: true,
  },
  test: {
    globals: true,
    include: ["./test/**/*"],
    exclude: ["./test/**/__snapshots__/*"],
  },
};

export default defineConfig(config);
