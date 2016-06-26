import React, {Component} from 'react'

export default class Menu extends Component {
    render() {
        const {
            children,
            className,
            open,
            ...other
        } = this.props

        const classNames = "" + className

        return (
            <div
                {...other}
                className={classNames}
            >
                <nav>
                    {children}
                </nav>
            </div>
        )
    }
}
