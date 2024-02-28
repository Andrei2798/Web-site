import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        enter: resolve(__dirname, "static/enter.html"),
        registration: resolve(__dirname, "static/registration.html"),
      },
    },
  },
});
