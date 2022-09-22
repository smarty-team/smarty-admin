const TerserPlugin = require("terser-webpack-plugin");

// 获取cpu
const os = require("os");
const cpuNum = os.cpus().length;
module.exports = (base) => {
  base.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: cpuNum, // number | boolean
      }),
    ],
  };
  return base;
};
