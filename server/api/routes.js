const express = require('express')
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const auth = require('./auth.js')

module.exports = function(app) {
    var api = express.Router()
    require('./user.js')(app, api)
    return api
}
