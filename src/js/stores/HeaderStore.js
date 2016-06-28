import AppDispatcher from '../dispatcher/AppDispatcher'
import HeaderConstants from '../constants/HeaderConstants'

import FluxStore from './__helpers__/FluxStore'

class HeaderStoreClass extends FluxStore {
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
