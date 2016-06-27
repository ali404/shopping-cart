import AuthStore from '../stores/AuthStore'
import request from 'superagent/lib/client'

export default class AuthApi {

    /*
    *   Uses Jwt {String} provided by AuthStore
    *
    *   Returns the user instance if Token is valid
    *   AJAX request returns an object with the user
    *   returns {Promise} with the AJAX request
    */
    static getMe() {
        return new Promise((resolve, reject) => {
            request
                .get('/api/me')
                .set('x-access-token', AuthStore.getJwt())
                .end((err, payload) => {
                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve(JSON.parse(payload.text))
                    }
                })
        })
    }

    /*
    *   username {String}
    *
    *   Returns the user if username is found in database
    *   AJAX request returns a user object if `username` is found in DB
    *   returns {Promise}
    */
    static getUser(username) {
        return new Promise((resolve, reject) => {
            request
                .get('/api/user')
                .query({
                    username: username
                })
                .end((err, payload) => {
                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve(JSON.parse(payload.text))
                    }
                })
        })
    }

    /*
    *   username {String}
    *       Username to be logged in
    *   password {String}
    *       Password (for Server Side checking if this is the user)
    *
    *   Logs in the user
    *   AJAX request returns the JWT Token
    *   returns {Promise} with the AJAX request
    */
    static login(username, password) {
        return new Promise((resolve, reject) => {
            request
                .post('/api/user/login')
                .send({
                    username: username,
                    password: password
                })
                .end((err, payload) => {
                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve(JSON.parse(payload.text))
                    }
                })
        })
    }

    /*
    *   usernae {String}
    *       username to be signup up
    *   password {Stirng}
    *       password to be saved for the user
    *
    *   Signs up the user, if the credentials are OK
    *   returns {Promise} with the AJAX request
    */
    static signup(username, password) {
        return new Promise((resolve, reject) => {
            request
                .post('/api/user')
                .send({
                    username: username,
                    password: password
                })
                .end((err, payload) => {
                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve(JSON.parse(payload.text))
                    }
                })
        })
    }
}
