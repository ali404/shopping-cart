module.exports = function(app, api) {

    const auth = require('./auth.js')(app)
    const User = require('../models/user.js')

    /*
    *   {query.token} Token used for authentication
    *
    *   Returns user details from database, is token is correct
    *   returns {user} from database (the user from token)
    */
    api.get('/me', auth.protectedRoute, function(req, res) {
        var token = req.token

        User.findOne({
            'username': token.username
        }, function(err, user) {
            if(err) {
                throw err
            }
            else if(!user) {
                res.json({
                    success: false,
                    message: 'Request failed, user not found'
                })
            }
            else if(user) {
                res.json({
                    success: true,
                    user: {
                        username: user.username
                    },
                    message: 'Request succeeded'
                })
            }
        })
    })

    /*
    *   {query.username} username used in database retrieval
    *
    *   Returns user details from database is id is correct
    *   returns {user} from database
    */
    api.get('/user/:username', function(req, res) {
        var username = req.query.username || ''

        if(!username) {
            res.json({
                success: false,
                message: 'username not specified'
            })
        }
        else {
            User.findOne({
                'username': username
            }, function(err, user) {
                if(err) {
                    throw err
                }
                else if(!user) {
                    res.json({
                        success: false,
                        message: 'User not found'
                    })
                }
                else {
                    res.json({
                        success: true,
                        message: 'User found',
                        user: {
                            username: user.username
                        }
                    })
                }
            })
        }
    })

    /*
    *   Returns all users
    *   TODO: protect passwords from showing
    */
    api.get('/users', function(req, res) {
        User.find({}, function(err, users) {
            res.json(users)
        })
    })

    /*
    *   {body.username} Username
    *   {body.password} Password
    *
    *   Creates a new user. IT DOES NOT LOG IN THE USER
    *   returns {success message}
    */
    api.post('/user', function(req, res, next) {
        var username = req.body.username || ''
        var password = req.body.password || ''
        var isAdmin = req.body.admin

        console.log("admin:" + isAdmin)

        if(
            !username
            || !password
            || !(isAdmin === true || isAdmin === false)
        ) {
            res.status(400).send({
                success: false,
                message: 'Request failed, parameters not specified'
            })
        }
        else {
            User.findOne({
                'username': username
            }, function(err, user) {
                if(err) {
                    throw err;
                }
                else if(user) {
                    res.json({
                        success: false,
                        message: 'Username exists'
                    })
                }
                else if(!user) {
                    var user = new User({
                        username: username,
                        password: auth.createHash(password),
                        admin: isAdmin
                    })

                    user.save(function(err) {
                        if(err) {
                            throw err
                        }
                        else {
                            res.json({
                                success: true,
                                message: 'Account created'
                            })
                        }
                    })
                }
            })
        }
    })

    /*
    *   {body.username} Username
    *   {body.password} Password
    *
    *   Logs in a user, if username and password are good
    *   returns {token} for authentication
    */
    api.post('/user/login', function(req, res, next) {
        var username = req.body.username || ''
        var password = req.body.password || ''

        if(!username || !password) {
            res.json({
                success: false,
                message: 'Request failed, params not specified'
            })
        }
        else {
            User.findOne({
                'username': username
            }, function(err, user) {
                if(err) {
                    throw err
                }
                else if(!user) {
                    res.json({
                        success: false,
                        message: 'User not found'
                    })
                }
                else if(!auth.checkPassword(password, user.password)) {
                    res.json({
                        success: false,
                        message: 'Passwords don\'t match'
                    })
                }
                else {
                    var user = {
                        username: user.username
                    }

                    var token = auth.createJwt(user)

                    res.json({
                        success: true,
                        token: token,
                        message: 'User created'
                    })
                }
            })
        }
    })

    /*
    *   {query.token} Token for authentication
    *
    *   Deletes the instance of login. It logs out the user
    */
    api.delete('/user/login', auth.protectedRoute, function(req, res, next) {
        // actually I don't need this...
    })
}
