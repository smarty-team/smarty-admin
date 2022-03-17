import { terser } from "rollup-plugin-terser";
export default {
  input: "./src/index.js",
  plugins: [terser()],
  output: [
    // {
    //   file: "./dist/my-lib-umd.js",
    //   format: "umd",
    //   name: "utils",
    // },
    {
      file: "./dist/es.min.js",
      format: "es",
    },
  ],
};
