const ThreadLoader = require("thread-loader");
ThreadLoader.warmup(
  {
    // 可传入上述 thread-loader 参数
    workers: 4,
    workerParallelJobs: 50,
  },
  [
    // 子进程中需要预加载的 node 模块
    "vue-loader",
  ]
);
module.exports = (base) => {
  let loader = base.module.rules.find((v) => v.test.toString() === "/\\.vue$/");

  Object.assign(loader, {
    test: /\.vue$/,
    use: [
      //   {
      //     loader: "thread-loader",
      //   },
      "vue-loader",
    ],
  });

  return base;
};
