import React, {Component} from 'react'

import Form from '../Form/Form.react'

export default class ItemCreator extends Component {
    constructor() {
        super()
    }

    render() {
        let shops = this.props.shops.map((shop) => {
            return {
                value: shop.name,
                label: shop.name,
                name: 'shopName'
            }
        })


        let itemSchema = {
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
                },
                shopName: {
                    type: 'select',
                    items: shops
                }
            }
        }

        return (
            <Form schema={itemSchema} />
        )
    }
}
