import AppDispatcher from '../dispatcher/AppDispatcher'
import HeaderConstants from '../constants/HeaderConstants'

export default class HeaderActions {
    static toggleMenu() {
        AppDispatcher.dispatch({
            actionType: HeaderConstants.TOGGLE_MENU
        })
    }
}
