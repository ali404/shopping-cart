import React, {Component} from 'react'
import Form from '../Form/Form.react'
import Security from '../../utils/Security.api'
import AuthActions from '../../actions/AuthActions'

export default class Signup extends Component {
    constructor() {
        super()

        this.signupSchema = JSON.stringify({
            title: 'Signup',
            required: ['username', 'password', 'repeatPassword'],
            fields: {
                username: {
                    type: 'text',
                    title: 'Username',
                    placeholder: 'Username...'
                },
                password: {
                    type: 'password',
                    title: 'Password',
                    placeholder: 'Password...',
                    ref: 'repeatPassword'
                },
                repeatPassword: {
                    type: 'password',
                    title: 'Repeat password',
                    placeholder: 'Repeat password...',
                    ref: 'password'
                }
            },
            refs: [
                ['password', 'repeatPassword']
            ]
        })

        this.validators = {
            username: Security.validateUsername,
            password: Security.validatePassword
        }
    }

    render() {
        return (
            <Form
                schema={this.signupSchema}
                validators={this.validators}
                onSubmit={this.onSubmit}
            />
        )
    }

    onSubmit = (values) => {
        AuthActions.signup(values.username, values.password)
    }
}
