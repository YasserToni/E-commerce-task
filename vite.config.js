// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vite.dev/config/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  // base: "/E-commerce-task/",
  // build: {
  //   outDir: "dist", // Output directory
  // },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
