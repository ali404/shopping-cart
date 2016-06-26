import React, {Component} from 'react'

export default class Form extends Component {
    render() {
        const {
            children,
            className,
            ...other
        } = this.props

        const temp = className || ''
        const classNames = "form" + temp

        return (
            <div
                {...other}
                className={classNames}>
                {children}
            </div>
        )
    }
}
