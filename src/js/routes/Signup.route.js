import React, {Component} from 'react'

import SignupContainer
    from '../components/Signup/SignupContainer.react'

import Fold from '../styles/Fold'

export default class SignupRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Fold>
                <SignupContainer />
            </Fold>
        )
    }
}
