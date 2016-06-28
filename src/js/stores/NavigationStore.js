import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

import AppDispatcher from '../dispatcher/AppDispatcher'
import NavigationConstants from '../constants/NavigationConstants'

class NavigationStoreClass extends EventEmitter {
    constructor() {

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
        case NavigationConstants.NAVIGATE_PROFILE:

            break

        case NavigationConstants.NAVIGATE_ADMIN:

            break

        case NavigationConstants.NAVIGATE_LOGIN:

            break
    }
})
