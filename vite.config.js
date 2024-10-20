import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext", // Use modern JS syntax
    minify: "terser", // Use Terser for minification (better compression)
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor modules into separate chunks
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
