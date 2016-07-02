import AppDispatcher from '../dispatcher/AppDispatcher'
import ShopConstants from '../constants/ShopConstants'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

export default class ShopStoreClass extends EventEmitter {


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

let ShopStore = new ShopStoreClass()

ShopStore.dispatchToken = AppDispatcher.register(payload => {
    let actionType = payload.actionType

    switch(actionType) {
        case ShopConstants.ADD_SHOP:
            console.log(payload)

            break

        case ShopConstants.ADD_SHOP_ERROR:
            console.log(payload)

            break
    }
})
