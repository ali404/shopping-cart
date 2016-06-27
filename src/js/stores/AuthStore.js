import AppDispatcher from '../dispatcher/AppDispatcher'
import AuthConstants from '../constants/AuthConstants'

import FluxStore from './__helpers__/FluxStore'

class AuthStoreClass extends FluxStore {
    constructor() {
        super()
        this.jwt = undefined
    }

    isAuthenticated() {
        if(this.getJwt()) {
            return true
        }
        else {
            return false
        }
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
