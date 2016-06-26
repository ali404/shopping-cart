import React, {Component} from 'react'
import Form from '../../styles/Form.js'
import Paper from '../../styles/Paper.js'
import InputField from '../../styles/InputField'
import Button from '../../styles/Button'

export default class Login extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Paper>
                <Form>
                    <h4 className="h4">Login</h4>
                    <InputField
                        label="Username"
                        type="text"
                    />
                    <InputField
                        label="Password"
                        type="password"
                    />
                    <Button label="Login"/>
                </Form>
            </Paper>
        )
    }
}
