import React, {Component} from 'react'

export default class MenuItem extends Component {
    render() {
        const {
            className,
            ...other
        } = this.props

        const classNames = "" + className

        return (
            <li
                {...other}
                className={classNames}
            >
                {this.props.children}
            </li>
        )
    }
}
