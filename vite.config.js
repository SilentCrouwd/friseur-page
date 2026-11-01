import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/friseur-page/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        impressum: fileURLToPath(new URL("./impressum.html", import.meta.url)),
        datenschutz: fileURLToPath(
          new URL("./datenschutz.html", import.meta.url),
        ),
      },
    },
  },
});
