import React, {Component} from 'react'

export default class Grid extends Component {
    render() {
        const {
            children,
            className,
            size,
            ...other
        } = this.props

        const classNames = "" + className

        return (
            <div className="grid-">
                {children}
            </div>
        )
    }
}

export class Container extends Component {
    render() {
        const {
            children,
            className,
            ...other
        } = this.props

        return (
            <div className="container">
                {children}
            </div>
        )
    }
}
