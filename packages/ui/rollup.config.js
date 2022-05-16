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

const name = "smartyui";
const outputConfigs = {
  cjs: {
    file: `dist/${name}.cjs.js`,
    format: `cjs`,
  },
  es: {
    file: `dist/${name}.es.js`,
    format: `es`,
  },
  iife: {
    file: `dist/${name}.iife.js`,
    format: `iife`,
  },
  umd: {
    file: `dist/${name}.umd.js`,
    format: `umd`,
  },
};

function createConfig(format, output) {
  output = Object.assign(
    {
      file: "dist/smartyui.umd.js",
      name: "SmartyUI",
      format: "umd",
      exports: "named",
      globals: {
        vue: "Vue",
      },
    },
    output
  );

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

function createMinifiedConfig(format) {
  const config = createConfig(format, {
    file: outputConfigs[format].file.replace(/\.js$/, ".min.js"),
    format: outputConfigs[format].format,
  });

  config.plugins.push(
    terser({
      module: /^esm/.test(format),
      compress: {
        ecma: 2015,
        pure_getters: true,
      },
      safari10: true,
    })
  );
  return config;
}

/**
 * 创建Package.json
 * @description 复制package.json 修改导出模块属性
 */
function createPackageJson() {
  const data = require("./package.json");
  console.log("json", data);
  data.main = "dist/smartyui.cjs.js";
  data.module = "dist/smartui.es.js";

  // 导出
  fs.outputFileSync(
    resolve("./dist", "package.json"),
    JSON.stringify(data, "\t", "\t"),
    "utf-8"
  );
}

createPackageJson();
copyReadme();
function copyReadme() {
  fs.copyFileSync(
    resolve("./", "README.md"),
    resolve("./dist/", "README.md")
  );
}

const packageConfigs = Object.keys(outputConfigs)
  .map((format) => createConfig(format, outputConfigs[format]))
  .concat(
    Object.keys(outputConfigs).map((format) => createMinifiedConfig(format))
  );

export default packageConfigs;
