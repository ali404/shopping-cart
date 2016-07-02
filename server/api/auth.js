const jwt = require('jsonwebtoken')
const bCrypt = require('bcrypt')

module.exports = function(app) {

    /*
    *   Callback for API
    *   Secures API Endpoint only for Authenticated users
    */
    var protectedRoute = function(req, res, next) {
        // get token
        var token = req.body.token
            || req.query.token
            || req.headers['x-access-token']

        if(token) {
            jwt.verify(token, app.get('secret'), function(err, decoded) {
                if(err) {
                    return res.json({
                        success: false,
                        message: 'Failed to authenticate token.'
                    })
                }
                else {
                    req.token = decoded
                    next()
                }
            })
        }
        else {
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            })
        }
    }

    /*
    *   password {String}
    *
    *   Creates password hash for database storage
    *   returns {String} hashed password
    */
    var createHash = function(password) {
        return bCrypt.hashSync(
            password,
            bCrypt.genSaltSync(10),
            null,
            function(err, res) {
                console.log(err);
            }
        )
    }

    /*
    *   password {String}
    *       Password specified in req.body
    *   userPassword {String}
    *       Password that appears in database
    *
    *   Checks two password for equality
    *   returns {Boolean}
    */
    var checkPassword = function(password, hashedPassword) {
        return bCrypt.compareSync(password, hashedPassword)
    }

    /*
    *   payload {Object}
    *       Payload to be stored in Jwt token
    *
    *   Creates token with user encoded there
    *   returns {String} JWT Token
    */
    var createJwt = function(payload) {
        return jwt.sign(payload, app.get('secret'), {
            expiresIn: 60*60*24
        })
    }

    return {
        protectedRoute: protectedRoute,
        createHash: createHash,
        checkPassword: checkPassword,
        createJwt: createJwt
    }
}
