import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      redux: path.resolve(__dirname, "src/redux"),
      i18n: path.resolve(__dirname, "src/i18n"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      locales: path.resolve(__dirname, "src/locales"),
      json: path.resolve(__dirname, "src/json")
    }
  }
});
