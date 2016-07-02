import React, {Component} from 'react'

import ProfileContainer
    from '../components/Profile/ProfileContainer.react'

import Fold from '../styles/Fold'

export default class ProfileRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Fold>
                <ProfileContainer />
            </Fold>
        )
    }
}
