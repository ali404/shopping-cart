import React, {Component} from 'react'

import Form from '../Form/Form.react'

export default class ItemCreator extends Component {
    constructor() {
        super()

        this.itemSchema = JSON.stringify({
            title: 'Create Product',
            buttonLabel: 'Add product',
            required: ['productName', 'productDescription'],
            fields: {
                productName: {
                    type: 'text',
                    title: 'Product Name',
                    placeholder: 'Product name...'
                },
                productDescription: {
                    type: 'text',
                    title: 'Product Description',
                    placeholder: 'Product description...',
                }
            }
        })
    }

    render() {
        return (
            <Form schema={this.itemSchema} />
        )
    }
}
