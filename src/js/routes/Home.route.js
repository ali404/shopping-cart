import React, {Component} from 'react'

import {Container} from '../styles/Grid'
import Fold from '../styles/Fold'

export default class HomeRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Fold>
                <Container>
                    <div>Home</div>
                </Container>
            </Fold>
        )
    }
}
