import React, {Component} from 'react'
import {Link} from 'react-router'

import AppBar from '../../styles/AppBar'
import Menu from '../../styles/Menu'
import MenuItem from '../../styles/MenuItem'
import MenuItemIcon from '../../styles/MenuItemIcon'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Title"
                    onButtonClick={this.onButtonClick}
                />
                <Menu open={this.state.open}>
                    <MenuItem>
                        <Link
                            activeClassName="active"
                            to="/">
                            <MenuItemIcon
                                icon="bubble_chart"
                            />
                            <span>Home</span>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            activeClassName="active"
                            to="/signup">
                            <MenuItemIcon
                                 icon="person_add"
                            />
                            <span>Signup</span>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            activeClassName="active"
                            to="/login">
                            <MenuItemIcon
                                icon="keyboard_arrow_right"
                            />
                            <span>Login</span>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        )
    }

    onButtonClick = () => {
        this.setState({
            open: !this.state.open
        })
    }
}
