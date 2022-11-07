const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({
  // 设置进程池大小
  size: os.cpus().length - 1,
});
module.exports = (env, args) => {
  return {
    entry: "./src/index.js", // 打包入口
    mode: "production",
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          // type: "asset/inline",
          // use: [
          //   {
          //     loader: "url-loader",
          //     options: {
          //       limit: 10 * 1000 * 1000, //图片大小
          //     },
          //   },
          // ],
          use: "happypack/loader?id=img",
        },
      ],
    },

    plugins: [
      new HappyPack({
        // 注意这里要明确提供 id 属性
        threadPool: happyThreadPool,
        id: "img",
        loaders: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000 * 1000, //图片大小
            },
          },
        ],
      }),
    ],
  };
};
