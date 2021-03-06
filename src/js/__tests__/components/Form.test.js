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
    })

    function findFields() {
        username = form.find('#username-field')
        password = form.find('#password-field')
    }

    /***** VALIDATING FORM BEHAVIOUR *****/

    it('should apply validators', () => {
        formSchema = {
            title: 'Login',
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
        }

        let validators = {
            username: (val) => {
                return val.length > 5
            },
            password: (val) => {
                return val.length > 5
            }
        }

        form = mount(<Form schema={formSchema} validators={validators} />)
        findFields()

        expect(form.find('#username-field.error')).to.have.length(1)

        username.simulate('change', {
            target: {
                value: 'abcdefg',
                name: 'username'
            }
        })

        expect(form.find('#username-field.valid')).to.have.length(1)
    })

    /**
    *   Tests for buttond disabled state
    *   -> it should find a disabled button before everythin
    *   -> it shouldn't find no disabled button when inputs are valid
    *   -> it should find a disabled button if emtpying the inputs again
    **/
    it('should display the button disabled state', () => {
        formSchema = {
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
        }

        form = mount(<Form schema={formSchema} />)
        findFields()

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

    /**
    *
    *
    *
    **/
    it('should display error messages', () => {

    })

    /**
    *
    *
    *
    **/
    it('should give error when required fields are not completed', () => {

    })

    /**
    *
    *
    *
    **/
    it('should display error when inputs are not valid', () => {

    })

    /**
    *
    *
    *
    **/
    it('should check refs fields for equality', () => {

    })

    /***** VALIDATING FORM SCHEMA *****/

    /**
    *
    *
    *
    **/
    it('should not accept schema with invalid fields property', () => {
        formSchema = {
            title: 'Something'
        }

        expect(() => {
            mount(<Form schema={formSchema} />)
        })
        .to
        .throw('Form Schema requires a `fields` field of type Object')

        formSchema = {
            title: 'Title',
            fields: new Array()
        }

        expect(() => {
            mount(<Form schema={formSchema} />)
        })
        .to
        .throw('Form Schema requires a `fields` field of type Object')

    })

    /**
    *
    *
    *
    **/
    it('should not accept schema with an invalid title', () => {
        formSchema = {
            fields: {
                username: {
                    type: 'text',
                    title: 'Username',
                    placeholder: 'Username...'
                }
            }
        }

        expect(() => {
            mount(<Form schema={formSchema} />)
        })
        .to
        .throw('Form Schema requires a `title` field of type String')

        formSchema = {
            title: ['title'],
            fields: {
                username: {
                    type: 'text',
                    title: 'Username',
                    placeholder: 'Username...'
                }
            }
        }

        expect(() => {
            mount(<Form schema={formSchema} />)
        })
        .to
        .throw('Form Schema requires a `title` field of type String')
    })

    /**
    *
    *
    *
    **/
    it('should not accept invalid schema fields', () => {
        formSchema = {
            title: 'Title',
            fields: {
                username: new Array(),
                password: {
                    type: 'text',
                    title: 'Password',
                    placeholder: 'Password...'
                }
            }
        }

        expect(() => {
            mount(<Form schema={formSchema} />)
        })
        .to
        .throw('Each field value in `fields` property of Form Schema should be an Object')
    })

    /**
    *
    *
    *
    **/
    it('should not accept validators that are not functions', () => {

    })

    /**
    *
    *
    *
    **/
    it('should not accept invalid HTML field types', () => {

    })

    /**
    *
    *
    *
    **/
    it('should not accept inexistent required fields', () => {

    })

    /**
    *
    *
    *
    **/
    it('should not accept duplicate fields', () => {

    })

    /**
    *
    *
    *
    **/
    it('should not accept uncircular refs', () => {

    })
})
