import React, {Component} from 'react'

import ProfileContainer
    from '../components/Profile/ProfileContainer.react'

import AdminMenuContainer
    from '../components/AdminMenu/AdminMenuContainer.react'

import Fold from '../styles/Fold'

import {DrawerContainer} from '../styles/Drawer'

export default class ProfileRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <AdminMenuContainer />
                <DrawerContainer>
                    {this.props.children}
                </DrawerContainer>
            </div>
        )
    }
}
