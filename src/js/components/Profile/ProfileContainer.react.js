import React, {Component} from 'react'

import Profile
    from './Profile.react'

import UserStore from '../../stores/UserStore'
import UserActions from '../../actions/UserActions'

export default class ProfileContainer extends Component {
    constructor() {
        super()

        this.state = this._getInitialProfileState()
    }

    _getInitialProfileState = () => {
        return {
            user: UserActions.getMyDetails()
        }
    }

    _getProfileState = () => {
        return {
            user: UserStore.getMyDetails()
        }
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange)
    }

    _onChange = () => {
        this.setState(this._getProfileState())
    }

    render() {
        return (
            <Profile
                user={this.state.user}
            />
        )
    }
}
