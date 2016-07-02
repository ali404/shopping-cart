import React, {Component} from 'react'

import ShopCreatorContainer
    from '../components/ShopCreator/ShopCreatorContainer.react'

export default class CreateShopRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ShopCreatorContainer />
        )
    }
}
