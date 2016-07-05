import React, {Component} from 'react'
import Form from '../Form/Form.react'
import Security from '../../utils/Security.api'

export default class Login extends Component {
    constructor() {
        super()

        this.loginSchema = {
            title: 'Login',
            buttonLabel: 'Login',
            required: ['username', 'password'],
            fields: {
                username: {
                    type: 'text',
                    title: 'Username',
                    placeholder: 'Username...'
                },
                password: {
                    type: 'password',
                    title: 'Password',
                    placeholder: 'Password...'
                }
            }
        }

        this.validators = {
            username: Security.validateUsername,
            password: Security.validatePassword
        }
    }

    render() {
        let message = ''
        if(this.props.loginSucceeded) {
            message = 'Success'
        }
        else {
            message = 'Fail'
        }

        return (
            <Form
                schema={this.loginSchema}
                validators={this.validators}
                onSubmit={this.props.onSubmit}
                message={message}
            />
        )
    }
}
