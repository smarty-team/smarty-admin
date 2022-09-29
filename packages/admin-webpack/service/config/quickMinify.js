const TerserPlugin = require("terser-webpack-plugin");
module.exports = (base) => {
  base.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // test: /\.js(\?.*)?$/i,
        // minify: TerserPlugin.terserMinify,
        // minify: TerserPlugin.uglifyJsMinify,
        minify: TerserPlugin.swcMinify,
        // minify: TerserPlugin.esbuildMinify,
        terserOptions: {},
      }),
    ],
  };
};
