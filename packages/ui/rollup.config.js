// const vuePlugin = require("../../rollup-plugin-vue/index");
import babel from "@rollup/plugin-babel";
import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js", ".ts", ".tsx"];
const umd = {
  input: "src/entry.ts",
  output: {
    file: "dist/smartyui.umd.js",
    name: "SmartyUI",
    format: "umd",
    exports: "named",
    globals: {
      vue: "Vue",
    },
  },
  extensions,
  external: ["vue"],
  plugins: [
    vue({
      css: true,
    }),

    babel({
      exclude: "node_modules/**",
      extensions,
      plugins: [
        [
          "module-resolver",
          {
            extensions,
            root: ["./src"],
          },
        ],
      ],
    }),
    // 默认模块扩展名
    resolve({
      extensions,
      modulesOnly: true,
      preferredBuiltins: false,
    }),
    // vuePlugin({
    //   css: true,
    // }),
  ],
};

export default [umd];
