const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = (base) => {

    // let loader = base.module.rules.find((v) => v.test.toString() === "/\\.css$/");
    // loader.use.unshift(MiniCssExtractPlugin.loader)

    base.optimization = {
        // usedExports: false,
        // concatenateModules: true,   // 打开ScopeHoisting
        // minimize: false,
        minimizer: [
            // JS压缩
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        arguments: true,
                        dead_code: true,
                        drop_console: true,
                        drop_debugger: false,
                        // 移除console，这块是关键
                        pure_funcs: ['console.log'],
                    },
                    toplevel: false,
                    keep_classnames: true,
                    keep_fnames: true,
                },
            }),
        ],
    };

};
