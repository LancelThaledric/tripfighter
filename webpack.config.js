var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'babel-polyfill',
        './src/js/main.jsx'
    ],
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style/main.css', {
            allChunks: true
        })
    ]
};