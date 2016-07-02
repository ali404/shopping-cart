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

        getLoginState() {
            return this.loginSucceeded;
        }

    signup() {
        this.signupSucceeded = true
    }

        setSignupError() {
            this.signupSucceeded = false
        }

        getSignupState() {
            return this.signupSucceeded
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

            AuthStore.emitChange()
            break

        case AuthConstants.LOGIN_ERROR:
            console.log(payload)
            AuthStore.setLoginError()

            AuthStore.emitChange()
            break

        case AuthConstants.SIGNUP:
            AuthStore.signup()

            AuthStore.emitChange()
            break

        case AuthConstants.SIGNUP_ERROR:
            console.log(payload)
            AuthStore.setSignupError()

            AuthStore.emitChange()
            break

        case AuthConstants.LOGOUT:
            AuthStore.logout()
            AuthStore.emitChange()
            break
    }
})

export default AuthStore
