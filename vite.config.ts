import { fileURLToPath, URL } from "url";
import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  String(configEnv);

  const r: UserConfig = {
    plugins: [react()],
    base: "/digai-frontend-hiring-challenge/",

    build: {},

    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };

  return r;
});
