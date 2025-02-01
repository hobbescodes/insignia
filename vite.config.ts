import { resolve } from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

/**
 * Vite configuration.
 */
const config = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "insignia",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["@ark-ui/react", "react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          "@ark-ui/react": "@ark-ui/react",
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss(), dts({ rollupTypes: true })],
});

export default config;
