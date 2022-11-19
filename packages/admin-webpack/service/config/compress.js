const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = (base) => {

    // let loader = base.module.rules.find((v) => v.test.toString() === "/\\.css$/");
    // loader.use.unshift(MiniCssExtractPlugin.loader)

    base.optimization = {
        // usedExports: false,
        minimize: true,
        minimizer: [
            // JS压缩
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        arguments: true,
                        dead_code: true,
                    },
                    toplevel: false,
                    keep_classnames: true,
                    keep_fnames: true,
                },
            }),

            // // CSS压缩
            // new CssMinimizerPlugin()
        ],
    };

    // base.plugins.unshift(new MiniCssExtractPlugin())
};
