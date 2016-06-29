const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: './src/entry'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.sass?$/,
                loader: 'style!css!sass',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.png$/,
                loader: 'file'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            }
        ]
    },
    plugins: []
}
