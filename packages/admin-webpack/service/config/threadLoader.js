const ThreadLoader = require("thread-loader");

ThreadLoader.warmup({
  workers: 4,
  workerParalleJobs: 10,
});

module.exports = (base) => {
  let loader = base.module.rules.find((v) => v.test.toString() === "/\\.vue$/");
  Object.assign(loader, {
    use: ["thread-loader", "vue-loader"],
  });
};
