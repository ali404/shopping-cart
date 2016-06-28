import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

import AppDispatcher from '../dispatcher/AppDispatcher'
import HeaderConstants from '../constants/HeaderConstants'

class HeaderStoreClass extends EventEmitter {
    constructor() {
        super()
        this._isMenuOpen = false
    }

    getMenuToggleState() {
        return this._isMenuOpen
    }

    toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen
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

let HeaderStore = new HeaderStoreClass()

HeaderStore.dispatchToken = AppDispatcher.register(payload => {
    let actionType = payload.actionType

    switch(actionType) {
        case HeaderConstants.TOGGLE_MENU:
            HeaderStore.toggleMenu()
            HeaderStore.emitChange()
            break
    }

    return true
})

export default HeaderStore
