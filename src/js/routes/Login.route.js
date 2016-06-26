import React, {Component} from 'react'

import LoginContainer
    from '../components/Login/LoginContainer.react'
import {Container} from '../styles/Grid'


export default class LoginRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Container>
                <LoginContainer />
            </Container>
        )
    }
}
