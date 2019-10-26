const path = require('path');
const srcFolder = 'src';
const srcPath = path.join(__dirname, '/..', srcFolder);
const port = 3030;

const getCommonModules = () => ({
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                query: {
                    "presets": ["@babel/preset-env"]
                }
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        }
    ]
});

module.exports = {
    srcPath,
    port,
    getCommonModules
};
