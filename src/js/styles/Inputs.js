import React, {Component} from 'react'

export class Input extends Component {
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

        if(type==='select') {

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

export class Checkbox extends Component {
    constructor() {
        super()
    }

    render() {
        var {
            children,
            className,
            placeholder,
            ...other
        }

        const classNames = 'input ' + (className || '')

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
}

export class Select extends Component {
    constructor() {
        super()
    }

    render() {

    }
}
