import React, {Component} from 'react'

import Form from '../Form/Form.react'

export default class ShopCreator extends Component {
    constructor() {
        super()

        this.shopSchema = JSON.stringify({
            title: 'Create Shop',
            buttonLabel: 'Create shop',
            required: ['shopName', 'shopDescription'],
            fields: {
                shopName: {
                    type: 'text',
                    title: 'Shop Name',
                    placeholder: 'Shop name...'
                },
                shopDescription: {
                    type: 'text',
                    title: 'Shop Description',
                    placeholder: 'Shop description...'
                }
            }
        })
    }

    render() {
        return (
            <Form
                schema={this.shopSchema}
                onSubmit={this.props.onSubmit} />
        )
    }
}
