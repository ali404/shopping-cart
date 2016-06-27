import React, {Component} from 'react'

export default class InputField extends Component {
    render() {
        const {
            children,
            className,
            placeholder,
            type,
            ...other,
        } = this.props

        const temp = className || ''
        const classNames = "input " + temp

        return (
            <input
                {...other}
                type={type}
                className={classNames}
                placeholder={placeholder}
            />
        )
    }
}
