import React, {Component} from 'react'

import {Container} from '../../styles/Grid'
import ShopCreatorContainer from '../ShopCreator/ShopCreatorContainer.react'

export default class Profile extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Container>
                {
                    this.props.user ? (
                        <div>
                            <div>Role: {this.props.user.role}</div>
                            <div>Username: {this.props.user.username}</div>
                            <ShopCreatorContainer />
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )
                }
            </Container>
        )
    }
}
