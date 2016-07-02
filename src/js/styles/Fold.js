import React, {Component} from 'react'

export default class Fold extends Component {
    render() {
        const {
            children,
            ...other
        } = this.props

        return (
            <div
                {...other}
                className="fold">
                {children}
            </div>
        )
    }
}
