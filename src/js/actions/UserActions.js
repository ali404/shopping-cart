import AppDispatcher from '../dispatcher/AppDispatcher'
import UserConstants from '../constants/UserConstants'

import AuthAPI from '../utils/Auth.api'

export default class UserActions {

    static getMyDetails() {
        AuthAPI
            .getMe()
            .then(payload => {
                if(payload.success) {
                    AppDispatcher.dispatch({
                        actionType: UserConstants.GET_MY_DETAILS,
                        user: payload.user
                    })
                }
                else {
                    AppDispatcher.dispatch({
                        actionType: UserConstants.GET_MY_DETAILS_ERROR,
                        message: payload.message
                    })
                }
            })
            .catch(err => {
                throw err
            })
    }
}
