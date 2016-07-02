import React, {Component} from 'react'
import {Link} from 'react-router'

import AppBar from '../../styles/AppBar'
import Menu from '../../styles/Menu'
import MenuItem from '../../styles/MenuItem'
import MenuItemIcon from '../../styles/MenuItemIcon'

import AuthActions from '../../actions/AuthActions'

export default class Header extends Component {
    constructor() {
        super()
    }

    render() {
        let links = []


        // separate links, put them in a json schema.
        // create links based on schmea. it is just better....
        links.push(
            <MenuItem key="home">
                <Link
                    activeClassName="active"
                    to="/">
                    <MenuItemIcon
                        icon="bubble_chart"
                    />
                    <span>Home</span>
                </Link>
            </MenuItem>
        )

        if(this.props.isAuthenticated) {
            links.push(
                <MenuItem key="profile">
                    <Link
                        activeClassName="active"
                        to="/profile">
                        <MenuItemIcon
                            icon="keyboard_arrow_right"
                        />
                        <span>Profile</span>
                    </Link>
                </MenuItem>
            )

            links.push(
                <MenuItem key="logout">
                    <a
                        onClick={this.logoutUser} >
                        <MenuItemIcon
                            icon="exit_to_app"
                        />
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
                        <MenuItemIcon
                             icon="person_add"
                        />
                        <span>Signup</span>
                    </Link>
                </MenuItem>
            )

            links.push(
                <MenuItem key="login">
                    <Link
                        activeClassName="active"
                        to="/login">
                        <MenuItemIcon
                            icon="keyboard_arrow_right"
                        />
                        <span>Login</span>
                    </Link>
                </MenuItem>
            )
        }

        return (
            <div>
                <AppBar
                    title="Title"
                    onButtonClick={this.onButtonClick}
                />
                <Menu open={this.props.isMenuOpen}>
                    {links}
                </Menu>
            </div>
        )
    }

    onButtonClick = () => {
        this.props.onButtonClick()
    }

    logoutUser = () => {
        AuthActions.logout()
    }
}
