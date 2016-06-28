import React, {Component} from 'react'

export default class Menu extends Component {
    render() {
        const {
            children,
            className,
            open,
            ...other
        } = this.props

        var temp = open ? 'open ' : 'closed '
        temp += className || ''
        const classNames = 'header-menu ' + temp

        return (
            <div
                {...other}
                className={classNames}
            >
                <nav>
                    {children}
                </nav>
            </div>
        )
    }
}
