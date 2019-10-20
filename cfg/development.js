'use strict';

const path = require('path');
const webpack = require('webpack');
const {getCommonModules, port, srcPath} = require('./defaults');

// Add needed plugins here
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        port,
        compress: true
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:' + port,
        'webpack/hot/only-dev-server',
        path.join(srcPath, 'index.js')
    ],
    cache: true,
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    module: getCommonModules(),
    mode: 'development'
};
