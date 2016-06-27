import React, {Component} from 'react'
import Form from '../Form/Form.react'
import Security from '../../utils/Security.api'
import AuthActions from '../../actions/AuthActions'

export default class Login extends Component {
    constructor() {
        super()

        this.loginSchema = JSON.stringify({
            title: 'Login',
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
        })

        this.validators = {
            username: Security.validateUsername,
            password: Security.validatePassword
        }
    }

    render() {
        return (
            <Form
                schema={this.loginSchema}
                validators={this.validators}
                onSubmit={this.onSubmit}
            />
        )
    }

    onSubmit = (values) => {
        AuthActions.login(values.username, values.password)
    }
}
