import React, {Component} from 'react'
import Login from './Login.react'

import AuthStore from '../../stores/AuthStore'

export default class LoginContainer extends Component {
    constructor() {
        super()

        this.state = this._getLoginState()
    }

    _getLoginState = () => {
        return {
            loginSucceeded: AuthStore.getLoginState()
        }
    }

    componentDidMount() {
        AuthStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        AuthStore.removeChangeListener(this._onChange)
    }

    _onChange = () => {
        this.setState(this._getLoginState())
    }

    render() {
        return (
            <Login />
        )
    }
}
