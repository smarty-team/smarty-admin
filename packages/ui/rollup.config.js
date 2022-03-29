// const vuePlugin = require("../../rollup-plugin-vue/index");
import babel from "@rollup/plugin-babel";
const resolve = require("@rollup/plugin-node-resolve");

const extensions = [".js", ".ts", ".tsx"];
const umd = {
  input: "src/entry.ts",
  output: {
    file: "dist/smartyui.umd.js",
    name: "SmartyUI",
    format: "iife",
    globals: {
      vue: "Vue",
    },
  },
  extensions,
  external: ["vue"],
  plugins: [
    // rollupTypescript(),
    babel({
      exclude: "node_modules/**",
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      plugins: [
        [
          "module-resolver",
          {
            extensions: [".ts", "tsx", "js", "jsx", ".json"],
            root: ["./src"],
          },
        ],
      ],
    }),
    // 默认模块扩展名
    resolve.default({
      extensions: [".js", ".ts", ".json"],
      modulesOnly: true,
      preferredBuiltins: false,
    }),
    // vuePlugin({
    //   css: true,
    // }),
  ],
};

export default [umd];
