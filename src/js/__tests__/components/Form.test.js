import React from 'react'
import {mount} from 'enzyme'
import {expect} from 'chai'

import Form from '../../components/Form/Form.react'

describe('JSON Form Schema', () => {
    let form
    let formSchema
    let username
    let password

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

        username = form.find('#username-field')
        password = form.find('#password-field')
    })

    /***** VALIDATING FORM BEHAVIOUR *****/

    it('should render', () => {
        expect(form).to.exist
    })

    it('should apply validators', () => {

    })

    /**
    *   Tests for buttond disabled state
    *   -> it should find a disabled button before everythin
    *   -> it shouldn't find no disabled button when inputs are valid
    *   -> it should find a disabled button if emtpying the inputs again
    **/
    it('should display the button disabled state', () => {
        expect(form.find('.Form-button[disabled]')).to.have.length(1)

        username.simulate('change', {
            target: {
                value: 'a',
                name: 'username'
            }
        })

        password.simulate('change', {
            target: {
                value: 'a',
                name: 'password'
            }
        })

        expect(form.find('.Form-button[disabled]')).to.have.length(0)

        username.simulate('change', {
            target: {
                value: '',
                name: 'username'
            }
        })

        expect(form.find('.Form-button[disabled]')).to.have.length(1)
    })

    it('should display error messages', () => {

    })

    it('should give error when required fields are not completed', () => {

    })

    it('should display error when inputs are not valid', () => {

    })

    it('should check refs fields for equality', () => {

    })

    /***** VALIDATING FORM SCHEMA *****/

    it('should not accept schema without fields', () => {

    })

    it('should not accept schema without title', () => {

    })

    it('should not accept invalid schema fields', () => {

    })

    it('should not accept validators that are not functions', () => {

    })

    it('should not accept invalid HTML field types', () => {

    })

    it('should not accept inexistent required fields', () => {

    })

    it('should not accept duplicate fields', () => {

    })

    it('should not accept uncircular refs', () => {

    })
})
