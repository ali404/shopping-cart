const path = require('path')
const webpack = require('webpack')

const babelSettings = {
    presets: ['react', 'es2015', 'stage-0'],
    env: {
        development: {
            plugins: [
                ['react-transform', {
                    transforms: [
                        {
                            transform: 'react-transform-hmr',
                            imports: ['react'],
                            locals: ['module']
                        }
                    ]
                }]
            ]
        }
    }
}

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './src/entry',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: path.join(__dirname, 'node_modules'),
                query: babelSettings
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
    }
}
