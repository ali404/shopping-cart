import React, {Component} from 'react'
import {Link} from 'react-router'

import AppBar from '../../styles/AppBar'
import Menu from '../../styles/Menu'
import MenuItem from '../../styles/MenuItem'
import MenuItemIcon from '../../styles/MenuItemIcon'

import AuthActions from '../../actions/AuthActions'

import Logo from '../../styles/Logo'

export default class Header extends Component {
    constructor() {
        super()
    }

    render() {
        let links = []

        if(this.props.isAuthenticated) {
            links.push(
                <MenuItem key="profile">
                    <Link
                        activeClassName="active"
                        to="/profile">
                        <span>Profile</span>
                    </Link>
                </MenuItem>
            )

            links.push(
                <MenuItem key="logout">
                    <a
                        onClick={this.logoutUser} >
                        <span>Logout</span>
                    </a>
                </MenuItem>
            )

        }
        else {
            links.push(
                <MenuItem key="signup">
                    <Link
                        activeClassName="active"
                        to="/signup">
                        <span>Signup</span>
                    </Link>
                </MenuItem>
            )

            links.push(
                <MenuItem key="login">
                    <Link
                        activeClassName="active"
                        to="/login">
                        <span>Login</span>
                    </Link>
                </MenuItem>
            )
        }

        let logo = <Logo />

        return (
            <AppBar
                logo={logo}
                onButtonClick={this.onButtonClick}
                links={links}
            >
            </AppBar>
        )
    }

    onButtonClick = () => {
        this.props.onButtonClick()
    }

    logoutUser = () => {
        AuthActions.logout()
    }
}
