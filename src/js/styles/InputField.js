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

        if(type==='checkbox') {
            return (
                <label>
                    <input
                        {...other}
                        type={type}
                        className={className}
                    />
                    {placeholder}
                </label>
            )
        }

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
