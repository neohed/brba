const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const {getCommonModules, srcPath} = require('./defaults');

module.exports = {
    entry: path.join(srcPath, 'index.js'),
    // Output
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: getCommonModules(),
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: "./index.html",
            hash: true
        })
    ]
};
