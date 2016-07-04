import {EventEmitter} from 'events'
const CHANGE_EVENT = 'change'

import AppDispatcher from '../dispatcher/AppDispatcher'
import ErrorConstants from '../constants/ErrorConstants'

class ErrorLoggerStoreClass extends EventEmitter {

    throwError(message) {
        throw new Error(message)
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

let ErrorLoggerStore = new ErrorLoggerStoreClass()

ErrorLoggerStore.dispatchToken = AppDispatcher.register(payload => {
    let actionType = payload.actionType

    switch(actionType) {
        case ErrorConstants.ERR_FORM_SCHEMA_VALIDATION:
            ErrorLoggerStore.throwError(payload.message)
            ErrorLoggerStore.emitChange()
            break
    }

    return true
})

export default ErrorLoggerStore
