import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import postcssMixe from "postcss-mixins";
import postcssRem from "postcss-rem";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "doublek-ui",
      fileName: (format) => `doublek-ui.${format}.js`,
    },
  },
  css: {
    postcss: {
      plugins: [postcssMixe, postcssRem],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
