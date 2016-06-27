import AppDispatcher from '../dispatcher/AppDispatcher'
import AuthConstants from '../constants/AuthConstants'

import AuthAPI from '../utils/Auth.api'

export default class AuthActions {

    static login(username, password) {
        AuthAPI
            .login(username, password)
            .then((payload) => {
                if(payload.success) {
                    AppDispatcher.dispatch({
                        actionType: AuthConstants.LOGIN,
                        token: payload.token
                    })
                }
                else {
                    AppDispatcher.dispatch({
                        actionType: AuthConstants.LOGIN_ERROR,
                        message: payload.message
                    })
                }
            })
            .catch((err) => {
                throw err
            })
    }

    static signup(username, password) {
        AuthAPI
            .signup(username, password)
            .then((payload) => {
                if(payload.success) {
                    AppDispatcher.dispatch({
                        actionType: AuthConstants.SIGNUP,
                        message: payload.message
                    })
                }
                else {
                    AppDispatcher.dispatch({
                        actionType: AuthConstants.SIGNUP_ERROR,
                        message: payload.message
                    })
                }
            })
            .catch((err) => {
                throw err
            })
    }

    static logout() {
        AppDispatcher.dispatch({
            actionType: AuthConstants.LOGOUT
        })
    }
}
