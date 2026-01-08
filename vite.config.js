import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // 👈 important line for GitHub Pages
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});