// const HappyPack = require("happypack");

// module.exports = (base) => {
//   // 替换loader
//   let loader = base.module.rules.find((v) => v.test.toString() === "/\\.css$/");

//   Object.assign(loader, {
//     test: /\.css?$/,
//     use: "happypack/loader?id=css",
//   });

//   base.plugins.push(
//     new HappyPack({
//       id: "css",
//       loader: ["style-loader", "css-loader", "postcss-loader"],
//     })
//   );

//   return base;
// };

const HappyPack = require("happypack");

module.exports = (base) => {
  //   let loader = base.module.rules.find((v) => v.test.toString() === "/\\.css$/");

  //   Object.assign(loader, {
  //     test: /\.css?$/,
  //     exclude: /node_modules/,
  //     // 使用 `id` 参数标识该 Loader 对应的 HappyPack 插件示例
  //     use: "happypack/loader?id=css",
  //   });

  //   base.plugins.push(
  //     new HappyPack({
  //       // 注意这里要明确提供 id 属性
  //       id: "css",
  //       loaders: ["style-loader", "css-loader", "postcss-loader"],
  //     })
  //   );

  let loader = base.module.rules.find(
    (v) => v.test.toString() === "/\\.tsx?$/"
  );
  Object.assign(loader, {
    use: [
      "babel-loader",
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true, // 关闭项目运行时的类型检查
          appendTsSuffixTo: ["\\.vue$"], // 给 .vue文件添加个 .ts后缀用于编译。
          happyPackMode: true,
        },
      },
    ],
  });

  return base;
};
