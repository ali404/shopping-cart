const path = require('path')
const express = require('express')
// configure the express app
const app = express()
const http = require('http').Server(app)

const compress = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

// get the config files
const config = require('./server/config.js')

// get the port
const port = (process.env.PORT || 8080)

// connect the database
mongoose.connect(config.database)

// set the secret global variable
app.set('secret', config.secret)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

// use the RESTful API
const api = require('./server/api/routes.js')(app)
app.use('/api', api)

// enable compression
app.use(compress())

// set the view engine to `pug`
app.set("view engine", "pug")

// configure Hot reload in development
if(process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackConfig = require('./webpack.dev.config.js')
    const compiler = webpack(webpackConfig)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }))
}

// set the static files directory name
app.use(express.static(__dirname + '/public'))

// use a wildcard for SPA correct rendering when refreshing the browser
app.get('*', function(_, res) {
    res.render('react')
})


const server = http.listen(port, function() {
    console.log(`App listening on: ${port}`);
});

module.exports = server
