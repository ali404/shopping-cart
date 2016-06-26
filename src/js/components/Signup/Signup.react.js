import React, {Component} from 'react'
import Paper from '../../styles/Paper'
import Form from '../../styles/Form'
import InputField from '../../styles/InputField'
import Button from '../../styles/Button'

export default class Signup extends Component {
    render() {
        return (
            <Paper>
                <Form>
                    <h4 className="h4">Signup</h4>
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
