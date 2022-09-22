const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
module.exports = (base) => {
  // 屏蔽VueLoader与speedMeasure不兼容的问题
  loader = base.plugins[0];
  base.plugins.shift();
  base = smp.wrap(base);
  base.plugins.unshift(loader);
  return base;
};
