const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

// threadLoader.warmup(
//   {
//     // 可传入上述 thread-loader 参数
//     workers: 4,
//     workerParallelJobs: 50,
//   },
//   [
//     // 子进程中需要预加载的 node 模块
//     "vue-loader",
//   ]
// );

module.exports = {
  profile: true,
  // cache: {
  //   type: "filesystem",
  // },

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       parallel: 4, // number | boolean
  //     }),
  //   ],
  // },

  mode: "development", // 环境模式
  entry: path.resolve(__dirname, "../../src/main.ts"), // 打包入口
  output: {
    path: path.resolve(__dirname, "../../dist"), // 打包出口
    filename: "js/[name][chunkhash:8].js", // 打包完的静态资源文件名
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          // {
          //   loader: "thread-loader",
          // },

          "vue-loader",
        ],
      },
      // { test: /\.ts$/, use: ["ts-loader"] },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true, // 关闭项目运行时的类型检查
              appendTsSuffixTo: ["\\.vue$"], // 给 .vue文件添加个 .ts后缀用于编译。
              //   happyPackMode: true,
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        // use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024 // 4kb
          }
        },
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            urlFilter: (attribute, value, resourcePath) => {
              if (/example\.pdf$/.test(value)) {
                return false;
              }

              return true;
            },
          },
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // 支持history 模式
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Webpack App</title>
        </head>
        <body>
          <div id="app" >
          </div>
        </body>
      </html>
          `,
    }),
    new DashboardPlugin(),
  ],
};
