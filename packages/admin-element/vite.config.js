import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [vue()],
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
  });
