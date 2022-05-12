// const vuePlugin = require("../../rollup-plugin-vue/index");
import babel from "@rollup/plugin-babel";
import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
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
      resolve({
        extensions,
        modulesOnly: true,
        preferredBuiltins: false,
      }),
      // vuePlugin({
      //   css: true,
      // }),
      // terser({
      //   module: /^esm/.test(format),

      //   compress: {
      //     ecma: 2015,
      //     pure_getters: true,
      //   },
      //   safari10: true,
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

const packageConfigs = ["es", "cjs", "iife", "umd"]
  .map((format) => createConfig(format, outputConfigs[format]))
  .concat(
    ["es", "cjs", "iife", "umd"].map((format) => createMinifiedConfig(format))
  );
console.log("packageConfigs", packageConfigs);
export default packageConfigs;

// export default [umd];
