var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var Config = require('./config.js');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/js/main.jsx'
    ],
    output: {
        path: './build',
        filename: 'app.bundle.js',
        publicPath: Config.baseURL  
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
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                query:{
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                query:{
                    name: 'resource/[name].[ext]'
                }
            },
            {
                test: /\.htaccess$/,
                loader: 'file-loader',
                query:{
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css', {
            allChunks: true
        }),
        new CopyWebpackPlugin([
            { from: 'src/media', to: './media/'},
            { from: 'src/resource/logo.svg', to: './resource/logo.svg'}
        ])
    ],
    resolve: {
        alias: {
            config$: require.resolve('./config.js')
        }
    }
};