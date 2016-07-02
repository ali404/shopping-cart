import React, {Component} from 'react'

import ProfileContainer
    from '../components/Profile/ProfileContainer.react'

export default class ProfileRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ProfileContainer />
        )
    }
}
