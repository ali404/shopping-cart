import React from 'react'
import {mount} from 'enzyme'
import {expect} from 'chai'

import Form from '../../components/Form/Form.react'

describe('Form', () => {
    let form
    let formSchema

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

        form = mount(<Form schema={formSchema} />)
    })

    it('should render', () => {
        expect(form).to.exist
    })
})
