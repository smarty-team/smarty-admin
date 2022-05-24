import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./"),
        "@": path.resolve(__dirname, "src"),
      },
    },
    base:
      mode == "development"
        ? "./"
        : mode == "beta"
        ? "//s.xxx.com/beta/yyy"
        : "//s.xxx.com/release/yyy", // 静态资源路径配置
    proxy: {
      "/api": {
        target: "http://backend-api-beta.xxx.com/manage-api/v1", // 凡是遇到 /api 路径的请求，都映射到 target 属性
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写 api 为 空，就是去掉它
      },
    },
  });
