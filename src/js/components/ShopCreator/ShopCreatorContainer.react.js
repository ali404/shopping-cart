import React, {Component} from 'react'

import ShopCreator from './ShopCreator.react'

import ShopActions from '../../actions/ShopActions'

import ShopStore from '../../stores/ShopStore'

export default class ShopCreatorContainer extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <ShopCreator
                onSubmit={this.saveStore} />
        )
    }

    saveStore = (values) => {
        ShopActions.addShop({
            shopName: values.shopName,
            shopDescription: values.shopDescription
        })
    }
}
