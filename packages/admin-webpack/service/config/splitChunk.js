
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = (base) => {

    // 入口优化
    // runtime
    base.entry = {
        index: { import: base.entry, runtime: "solid-runtime" }
        // import: base.entry,
        // runtime: "solid-runtime"
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
        splitChunks: {
            chunks: 'initial', // 从入口开始优化
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 2,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            // cacheGroups: {
            //   defaultVendors: {
            //     test: /[\\/]node_modules[\\/]/,
            //     priority: -10,
            //     reuseExistingChunk: true,
            //   },
            //   default: {
            //     minChunks: 2,
            //     priority: -20,
            //     reuseExistingChunk: true,
            //   },
            // },
        },

    }
    return base;
};
