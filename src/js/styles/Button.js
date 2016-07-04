import React, {Component} from 'react'

export default class Button extends Component {
    render() {
        const {
            children,
            className,
            label,
            ...other
        } = this.props

        const temp = className || ''
        const classNames = 'button ' + temp

        return (
            <button
                {...other}
                className={classNames}
            >
                {label}
            </button>
        )
    }
}
