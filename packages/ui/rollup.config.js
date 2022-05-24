// const vuePlugin = require("../../rollup-plugin-vue/index");
import babel from "@rollup/plugin-babel";
import vue from "rollup-plugin-vue";
import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import * as fs from "fs-extra";
import { resolve } from "path";

const extensions = [".js", ".ts", ".tsx"];
// const umd = {
//   input: "src/entry.ts",
//   output: {
//     file: "dist/smartyui.umd.js",
//     name: "SmartyUI",
//     format: "umd",
//     exports: "named",
//     globals: {
//       vue: "Vue",
//     },
//   },
//   extensions,
//   external: ["vue"],
//   plugins: [
//     vue({
//       css: true,
//     }),

//     babel({
//       exclude: "node_modules/**",
//       extensions,
//       plugins: [
//         [
//           "module-resolver",
//           {
//             extensions,
//             root: ["./src"],
//           },
//         ],
//       ],
//     }),
//     // 默认模块扩展名
//     resolve({
//       extensions,
//       modulesOnly: true,
//       preferredBuiltins: false,
//     }),
//     // vuePlugin({
//     //   css: true,
//     // }),
//   ],
// };
// export default [umd];
/**
 * 配置工厂
 * @param {*} format
 * @param {*} output
 */
function createConfig(output) {
  output = Object.assign(output);

  return {
    input: "src/entry.ts",
    output,
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
      nodeResolve({
        extensions,
        modulesOnly: true,
        preferredBuiltins: false,
      }),
      // vuePlugin({
      //   css: true,
      // }),
    ],
  };
}
/**
 * 压缩配置工厂
 * @param {*} output
 */
function createMinifiedConfig(output) {
  output.file = output.file.replace(/\.js$/, ".min.js");
  const config = createConfig(output);
  config.plugins.push(
    terser({
      module: /^esm/.test(output.format),
      compress: {
        ecma: 2015,
        pure_getters: true,
      },
      safari10: true,
    })
  );
  return config;
}

const outputs = ["esm", "cjs", "iife", "umd"].map((format) => ({
  file: `dist/smartyui.${format}.js`,
  name: "SmartyUI",
  format,
  exports: "named",
  globals: {
    vue: "Vue",
  },
}));

const packageConfigs = outputs
  .map((output) => createConfig(output))
  .concat(outputs.map((output) => createMinifiedConfig(output)));

function createPackageJSON() {
  const data = require("./package.json");
  (data.main = "dist/smartyui.cjs.js"), (data.module = "dist/smartui.esm.js");

  fs.outputFileSync(
    resolve("./dist", "package.json"),
    JSON.stringify(data, "\t", "\t"),
    "utf-8"
  );
}


function copyREADME() {
  fs.copyFileSync(resolve('./README.md'),resolve('./dist/README.md'))
}


createPackageJSON();
copyREADME()
export default packageConfigs;
