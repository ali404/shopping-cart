import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

import AppDispatcher from '../dispatcher/AppDispatcher'
import NavigationConstants from '../constants/NavigationConstants'
import AuthConstants from '../constants/AuthConstants'

import {browserHistory} from 'react-router'

class NavigationStoreClass extends EventEmitter {
    navigateProfile() {
        browserHistory.push('/profile')
    }

    navigateLogout() {
        browserHistory.push('/')
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

let NavigationStore = new NavigationStoreClass()

NavigationStore.dispatchToken = AppDispatcher.register(payload => {
    let actionType = payload.actionType

    switch(actionType) {
        case AuthConstants.LOGIN:
            NavigationStore.navigateProfile()

            NavigationStore.emitChange()
            break

        case AuthConstants.LOGOUT:
            NavigationStore.navigateLogout()

            NavigationStore.emitChange()
            break
    }
})

export default NavigationStore
