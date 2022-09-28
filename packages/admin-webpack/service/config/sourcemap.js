module.exports = (base) => {
  //   base.devtool = "source-map"; // 最佳效果
  //   base.devtool = false; //
  base.devtool = "eval"; //最佳性能
  return base;
};
