import React, {Component} from 'react'

import LoginContainer
    from '../components/Login/LoginContainer.react'

import {Container} from '../styles/Grid'

import Fold from '../styles/Fold'


export default class LoginRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Fold>
                <LoginContainer />
            </Fold>
        )
    }
}
