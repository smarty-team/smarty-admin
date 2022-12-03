
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require('path')
module.exports = (base) => {

    // 入口优化
    // runtime
    // base.entry = {
    //     index: { import: base.entry, runtime: "solid-runtime" }
    //     // import: base.entry,
    //     // runtime: "solid-runtime"
    // }

    base.entry = {
        index: {
            import: path.resolve(__dirname, "../../src/main.ts"),
            // runtime: "solid-runtime" 
        },
        // login: { import: path.resolve(__dirname, "../../src/login.ts"), runtime: "solid-runtime" },
    }


    // 文件名
    base.output.filename = "[name].[chunkhash:8].js"


    base.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: "127.0.0.1",
        analyzerPort: 8889,
        reportFilename: "report.html",
        defaultSizes: "parsed",
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: "stats.json",
        statsOptions: null,
        logLevel: "info",
    }))

    base.optimization = {
        // splitChunks: false,
        splitChunks: {
            chunks: 'all', // 从入口开始优化
            minSize: 500 * 1000, // 小于这个尺寸的 Chunk 才会正式被分包
            maxSize: 2000 * 1000, //超过这个尺寸的 Chunk 会尝试继续做分包
            maxAsyncSize: 2000 * 1000,  //与 maxSize 功能类似，但只对异步引入的模块生效
            minRemainingSize: 100 * 1000,
            minChunks: 1,
            maxAsyncRequests: 2,
            maxInitialRequests: 30,
            // enforceSizeThreshold: 500 * 1000,
        }
    }
    return base;
};
