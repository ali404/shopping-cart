import React, {Component} from 'react'

import {Container} from '../styles/Grid'
import SignupContainer
    from '../components/Signup/SignupContainer.react'

export default class SignupRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Container>
                <SignupContainer />
            </Container>
        )
    }
}
