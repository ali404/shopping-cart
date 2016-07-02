import React, {Component} from 'react'

import ProductCreatorContainer
    from '../components/ProductCreator/ProductCreatorContainer.react'

export default class CreateProductRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ProductCreatorContainer />
        )
    }
}
