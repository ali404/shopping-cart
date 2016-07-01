// const path = require('path')
// const webpack = require('webpack')
//
// module.exports = {
//     devtool: 'eval-source-map',
//     entry: [
//         './src/entry'
//     ],
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     }
//     module: {
//         loaders: [
//             {
//                 test: /\.js?$/,
//                 loader: 'babel-loader',
//                 exclude: path.join(__dirname, 'node_modules')
//             },
//             {
//                 test: /\.sass?$/,
//                 loader: 'style!css!sass',
//                 include: path.join(__dirname, 'src')
//             },
//             {
//                 test: /\.png$/,
//                 loader: 'file'
//             },
//             {
//                 test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
//                 loader: 'file'
//             }
//         ]
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoErrorsPlugin()
//     ]
// }

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
    app: path.join(__dirname, 'src/entry.js'),
    js: path.join(__dirname, 'src/js'),
    css: path.join(__dirname, 'src/css'),
    build: path.join(__dirname, 'public/build')
}

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot'
            },
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test: /\.svg$/,
                loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.woff2$/,
                loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.[ot]tf$/,
                loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.eot$/,
                loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        contentBase: PATHS.build,
        historyAPIFallback: true,
        hot: true,
        inline: true,
        progress: true,

        stats: 'errors-only',

        host: process.env.HOST,
        port: process.env.PORT
    }
}
