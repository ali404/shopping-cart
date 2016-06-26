import React, {Component} from 'react'
import {Link} from 'react-router'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'



export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Title"
                    onTitleTouchTap={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem>
                        <Link to="/login">Login</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/signup">Signup</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/">Home</Link>
                    </MenuItem>
                </Drawer>
            </div>
        )
    }
}
