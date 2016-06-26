import AppDispatcher from '../dispatcher/AppDispatcher'
import AuthConstants from '../constants/AuthConstants'

import Fluxstore from './__helpers__/FluxStore'

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

    }
}

let AuthStore = new AuthStoreClass()
AuthStore.dispatchToken = AppDispatcher.register(payload => {
    let actionType = payload.actionType
    switch(acitonType) {
        case AuthConstants.LOGIN:

            break

        case AuthConstants.SIGNUP:

            break

        case AuthConstants.LOGOUT:

            break
    }
})


export default Authstore
