import React, {Component} from 'react'

export default class Paper extends Component {
    render() {
        const {
            children,
            className,
            ...other
        } = this.props

        const temp = className || ''
        const classNames = "paper" + temp

        return (
            <div
                {...other}
                className={classNames}>
                {children}
            </div>
        )
    }
}
