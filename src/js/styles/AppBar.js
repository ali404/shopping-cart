import React, {Component} from 'react'

export default class AppBar extends Component {
    render() {
        const {
            title,
            className,
            ...other,
        } = this.props

        const classNames = "" + className

        return (
            <header
                {...other}
                className={classNames}>
                <div>
                    {title}
                </div>
            </header>
        )
    }
}
