import React from 'react'
import {mount} from 'enzyme'
import {expect} from 'chai'

import Form from '../../components/Form/Form.react'

describe('Form', () => {
    let form
    let formSchema
    let usernameField
    let passwordField

    beforeEach(() => {
        if(form) {
            form.unmount()
        }

        formSchema = JSON.stringify({
            title: 'Form',
            required: ['username', 'password'],
            fields: {
                username: {
                    type: 'text',
                    title: 'Username',
                    placeholder: 'Username...'
                },
                password: {
                    type: 'text',
                    title: 'Password',
                    placeholder: 'Password...'
                }
            }
        })

        form = mount(
            <Form
                schema={formSchema}
            />
        )

        usernameField = form.find('#username-field')
        passwordField = form.find('#password-field')
    })

    it('should render', () => {
        expect(form).to.exist
    })
})
