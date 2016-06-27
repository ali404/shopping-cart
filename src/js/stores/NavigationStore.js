import AppDispatcher from '../dispatcher/AppDispatcher'
import NavigationConstants from '../constants/NavigationConstants'
import FluxStore from './__helpers__/FluxStore'

class NavigationStoreClass extends FluxStore {

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
