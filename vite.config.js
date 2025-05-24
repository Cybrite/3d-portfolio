import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@sections": resolve(__dirname, "src/sections"),
      "@content": resolve(__dirname, "src/content"),
      "@assets": resolve(__dirname, "public/assets"),
    },
  },
  build: {
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          "gsap-vendor": ["gsap", "@gsap/react"],
        },
      },
    },
  },
});
