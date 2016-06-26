import React, {Component} from 'react'
import InputField from '../../styles/InputField'
import Button from '../../styles/Button'

export default class Login extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <InputField 
                    label="Username"
                    type="text"
                />
                <InputField
                    label="Password"
                    type="password"
                />
                <Button label="Login"/>
            </div>
        )
    }
}
