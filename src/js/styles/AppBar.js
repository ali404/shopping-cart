import React, {Component} from 'react'

import Menu from './Menu'
import {Link} from 'react-router'

export default class AppBar extends Component {
    render() {
        const {
            logo,
            className,
            onButtonClick,
            links,
            children,
            ...other,
        } = this.props

        const temp = className || ''
        const classNames = "header" + temp

        return (
            <header
                {...other}
                className={classNames}>
                {/*<div
                    className="header-switch"
                    onClick={this.props.onButtonClick}>
                    <i className="material-icons md-light">menu</i>
                </div>*/}
                <Link
                    className="header-logo"
                    to="/">
                    {logo}
                </Link>
                <div className="header-links">
                    <Menu>
                        {links}
                    </Menu>
                </div>
            </header>
        )
    }
}
