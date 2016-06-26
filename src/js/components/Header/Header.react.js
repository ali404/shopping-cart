import React, {Component} from 'react'
import {Link} from 'react-router'

import AppBar from '../../styles/AppBar'
import Menu from '../../styles/Menu'
import MenuItem from '../../styles/MenuItem'

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
                <AppBar title="Title" />
                <Menu open={this.state.open}>
                    <MenuItem>
                        <Link to="/login">Login</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/signup">Signup</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/">Home</Link>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}
