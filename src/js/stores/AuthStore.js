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

    logout() {
        localStorage.removeItem('token')
    }
}

let AuthStore = new AuthStoreClass()
AuthStore.dispatchToken = AppDispatcher.register(payload => {
    let actionType = payload.actionType

    switch(actionType) {
        case AuthConstants.LOGIN:
            console.log(payload)
            break

        case AuthConstants.LOGIN_ERROR:
            console.log(payload)
            break

        case AuthConstants.SIGNUP:
            console.log(payload)
            break

        case AuthConstants.SIGNUP_ERROR:
            console.log(payload)
            break

        case AuthConstants.LOGOUT:

            break
    }
})


export default AuthStore
