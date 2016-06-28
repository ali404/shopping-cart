import {EventEmitter} from 'events'
const CHANGE_EVENT = 'change'

import AppDispatcher from '../dispatcher/AppDispatcher'
import AuthConstants from '../constants/AuthConstants'

class AuthStoreClass extends EventEmitter {
    constructor() {
        super()
        this.jwt = undefined
    }

    isAuthenticated() {
        return !!this.getJwt()
    }

    getJwt() {
        return localStorage.getItem('token')
    }

    login(jwt) {
        this.loginSucceeded = true
        localStorage.setItem('token', jwt)
    }

    setLoginError() {
        this.loginSucceeded = false
    }

    signup() {
        this.signupSucceeded = true
    }

    setSignupError() {
        this.signupSucceeded = false
    }

    logout() {
        localStorage.removeItem('token')
    }



    emitChange() {
        this.emit(CHANGE_EVENT)
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
}

let AuthStore = new AuthStoreClass()

AuthStore.dispatchToken = AppDispatcher.register(payload => {
    let actionType = payload.actionType

    switch(actionType) {
        case AuthConstants.LOGIN:
            AuthStore.login(payload.token)
            break

        case AuthConstants.LOGIN_ERROR:
            console.log(payload)
            AuthStore.setLoginError()
            break

        case AuthConstants.SIGNUP:
            AuthStore.signup()
            break

        case AuthConstants.SIGNUP_ERROR:
            console.log(payload)
            AuthStore.setSignupError()
            break

        case AuthConstants.LOGOUT:
            AuthStore.logout()
            break
    }
})

export default AuthStore
