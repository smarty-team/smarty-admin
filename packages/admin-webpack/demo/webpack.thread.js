const threadLoader = require("thread-loader");
threadLoader.warmup(
  {
    // 可传入上述 thread-loader 参数
    workers: 9,
    workerParallelJobs: 50,
  },
  [
    // 子进程中需要预加载的 node 模块
    "url-loader",
  ]
);

module.exports = (env, args) => {
  return {
    entry: "./src/index.js", // 打包入口
    mode: "production",
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          type: "asset/inline",
          use: [
            "thread-loader",
            {
              loader: "url-loader",
              options: {
                limit: 10 * 1000 * 1000, //图片大小
              },
            },
          ],
        },
      ],
    },
  };
};
