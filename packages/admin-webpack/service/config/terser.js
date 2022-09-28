const TerserPlugin = require("terser-webpack-plugin");
const os = require("os");

module.exports = (base) => {
  base.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: os.cpus().length - 1,
        terserOptions: {
          compress: {
            arguments: true,
            dead_code: true,
          },
          toplevel: false,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  };
};
