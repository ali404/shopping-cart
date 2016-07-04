import AuthStore from '../stores/AuthStore'
import request from 'superagent/lib/client'

export default class ShopAPI {

    /**
    *
    *
    *
    *
    **/
    static addShop(fields) {
        return new Promise((resolve, reject) => {
            request
                .post('/api/shop')
                .set('x-access-token', AuthStore.getJwt())
                .send(fields)
                .end((err, payload) => {
                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve(JSON.parse(payload.text))
                    }
                })
        })
    }
}
