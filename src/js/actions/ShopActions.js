import AppDispatcher from '../dispatcher/AppDispatcher'
import ShopConstants from '../constants/ShopConstants'

import ShopAPI from '../utils/Shop.api'

export default class ShopActions {
    static addShop(fields) {
        ShopAPI
            .addShop(fields)
            .then(payload => {
                if(payload.success) {
                    AppDispatcher.dispatch({
                        actionType: ShopConstants.ADD_SHOP,
                        message: payload.message
                    })
                }
                else {
                    AppDispatcher.dispatch({
                        actionType: ShopConstants.ADD_SHOP_ERROR,
                        message: payload.message
                    })
                }
            })
            .catch(err => {
                throw err
            })
    }
}
