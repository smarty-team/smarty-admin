module.exports = (base) => {
  base.optimization = {
    removeAvailableModules: false,
    removeEmptyChunks: false, //
    splitChunks: false, // 代码分包
    minimize: false, //代码压缩
    concatenateModules: false,
    usedExports: false, // Treeshaking
  };
};
