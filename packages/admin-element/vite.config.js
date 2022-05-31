import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathRoot = path.resolve(__dirname, "./");
const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "vue-router"],

        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
          }),
        ],

        dts: path.resolve(pathSrc, "auto-imports.d.ts"),
      }),

      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"],
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],

        dts: path.resolve(pathSrc, "components.d.ts"),
      }),

      Icons({
        autoInstall: true,
      }),
    ],
    resolve: {
      alias: {
        "~": pathRoot,
        "@": pathSrc,
      },
    },
    base:
      mode == "development"
        ? "./"
        : mode == "beta"
        ? "//s.xxx.com/beta/yyy"
        : "//s.xxx.com/release/yyy", // 静态资源路径配置
    server: {
      proxy: {
        "/api": {
          target: "http://121.36.13.39:28019/manage-api/v1", // 凡是遇到 /api 路径的请求，都映射到 target 属性
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""), // 重写 api 为 空，就是去掉它
        },
      },
    },
  });
