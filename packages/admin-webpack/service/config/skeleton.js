

const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require('fs')
module.exports = (base) => {
    const { plugins } = base
    const i = plugins.findIndex((v) => v instanceof HtmlWebpackPlugin)
    const shell = fs.readFileSync('./public/shell.html')
    plugins.splice(i, 1, new HtmlWebpackPlugin({
        template: './public/template.ejs',
        templateParameters: { shell }
    }))

};
