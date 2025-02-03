import { copyFileSync } from "node:fs";
import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { globbySync } from "globby";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import pkg from "./package.json";

/**
 * Vite configuration.
 */
const config = defineConfig({
  build: {
    target: "esnext",
    minify: false,
    sourcemap: true,
    lib: {
      entry: globbySync(["src/**/index.ts"]),
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.peerDependencies ?? {}),
        "react/jsx-runtime",
      ],
      output: [
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          entryFileNames: "[name].cjs",
          banner: (x) => renderBanner(x.fileName),
        },
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          entryFileNames: "[name].js",
          banner: (x) => renderBanner(x.fileName),
        },
      ],
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: "src",
      staticImport: true,
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
      afterBuild: () => {
        globbySync(["dist/**/*.d.ts", "dist/**.d.ts"]).map((file) => {
          copyFileSync(file, file.replace(/\.d\.ts$/, ".d.cts"));
        });
      },
    }),
  ],
});

const renderBanner = (fileName: string) => {
  const file = path.parse(fileName);

  if (isBarrelComponent(file) || isSpecialFile(file)) {
    return "";
  }

  return `'use client';`;
};

const isBarrelComponent = (file: path.ParsedPath) =>
  file.dir.endsWith(file.name);

const isSpecialFile = (file: path.ParsedPath) => ["index"].includes(file.name);

export default config;
