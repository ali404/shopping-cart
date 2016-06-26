const path = require('path')
const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const config = require('./config.js')

module.exports = {
    app: function() {
        const app = express()
        mongoose.connect(config.database)
        app.set('secret', config.secret)

        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        app.use(morgan('dev'))

        const api = require('./api/routes.js')(app)
        app.use('/api', api)

        app.use(compress())
        app.set("view engine", "pug")

        app.use(express.static(__dirname + '/public'))

        app.get('/', function(_, res) {
            res.render('react')
        })

        return app
    }
}
