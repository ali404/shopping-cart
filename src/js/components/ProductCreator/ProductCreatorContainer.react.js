import React, {Component} from 'react'

import ProductCreator from './ProductCreator.react'

import ShopActions from '../../actions/ShopActions'
import ShopStore from '../../stores/ShopStore'

export default class ItemCreator extends Component {
    constructor() {
        super()

        this.state = this._getItemCreatorInitialState()
    }

    _getItemCreatorInitialState = () => {
        return {
            shops: ShopActions.getMyShops()
        }
    }


    _getItemCreatorState = () => {
        return {
            shops: ShopStore.getShops()
        }
    }

    componentDidMount() {
        ShopStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        ShopStore.removeChangeListener(this._onChange)
    }

    _onChange = () => {
        this.setState(this._getItemCreatorState())
    }

    render() {
        console.log(this.state.shops)
        return (
            <ProductCreator
                shops={this.state.shops || []}
            />
        )
    }
}
