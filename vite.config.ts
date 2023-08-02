import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/assets/css", import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     "/auth": {
  //       target: process.env.VITE_API_AUTH,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/auth/, ""),
  //     },
  //     "/api": {
  //       target: process.env.VITE_API_URL,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //     // '/docs': {
  //     //   target: process.env.VITE_API_SWAGGER_EXEC,
  //     //   changeOrigin: true,
  //     //   rewrite: (path) => path.replace(/^\/docs/, '')
  //     // }
  //   },
  // },
});
