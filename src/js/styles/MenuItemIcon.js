import React, {Component} from 'react'

export default class MenuItemIcon extends Component {
    render() {
        const {
            className,
            icon,
            color,
            ...other
        } = this.props

        const temp = className || ''
        const classNames = 'material-icons header-icon--' + color + ' ' + temp

        return (
            <span className="header-icon">
                <i className={classNames}>{icon}</i>
            </span>
        )
    }
}
