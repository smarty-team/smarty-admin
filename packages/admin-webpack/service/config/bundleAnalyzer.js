
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = (base) => {


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

    return base;
};
