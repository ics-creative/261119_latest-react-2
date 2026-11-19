import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "react-dom/client": "react-dom/profiling",
    },
  },
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rolldownOptions: {
      output: {
        keepNames: true,
      },
    },
  },
});
