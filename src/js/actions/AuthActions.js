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
                        user: payload.user
                    })
                }
                else {
                    AppDispatcher.dispatch({
                        actionType: AuthConstants.LOGIN_ERROR,
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    static signup(username, password) {
        AuthAPI
            .signup(username, password)
            .then((payload) => {
                if(payload.success) {
                    AppDispatcher.dispatch({
                        actionType: AuthConstants.SIGNUP,
                        user: payload.user
                    })
                }
                else {
                    AppDispatcher.dispatch({
                        actionType: AuthConstants.SIGNUP_ERROR
                    })
                }
            })
    }

    static logout() {
        AppDispatcher.dispatch({
            actionType: AuthConstants.LOGOUT
        })
    }
}
