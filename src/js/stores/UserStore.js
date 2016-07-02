import {EventEmitter} from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher'

import UserContants from '../constants/UserConstants'

const CHANGE_EVENT = 'change'

class UserStoreClass extends EventEmitter {

    constructor() {
        super()
        this.user = undefined
    }

    setMyDetails(user) {
        this.user = user
        this.role = user.role
    }

        getMyDetails() {
            return this.user
        }

        getMyRole() {
            return this.role
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

let UserStore = new UserStoreClass()

UserStore.dispatchToken = AppDispatcher.register(payload => {
    let actionType = payload.actionType

    switch(actionType) {
        case UserContants.GET_MY_DETAILS:
            UserStore.setMyDetails(payload.user)
            UserStore.emitChange()

            break

        case UserContants.GET_MY_DETAILS_ERROR:
            console.log(payload.message)
            UserStore.emitChange()

            break
    }
})

export default UserStore
