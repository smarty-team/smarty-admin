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
