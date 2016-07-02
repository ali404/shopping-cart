import AppDispatcher from '../dispatcher/AppDispatcher'
import AuthConstants from '../constants/AuthConstants'

import AuthAPI from '../utils/Auth.api'

export default class AuthActions {

    static login(fields) {
        AuthAPI
            .login(fields)
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

    static signup(fields) {
        AuthAPI
            .signup(fields)
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
