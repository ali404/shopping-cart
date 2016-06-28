import React, {Component} from 'react'

export default class AppBar extends Component {
    render() {
        const {
            title,
            className,
            onButtonClick,
            ...other,
        } = this.props

        const temp = className || ''
        const classNames = "header" + temp

        return (
            <header
                {...other}
                className={classNames}>
                <div
                    className="header-switch"
                    onClick={this.props.onButtonClick}>
                    <i className="material-icons md-light">menu</i>
                </div>
                <div className="header-title">
                    {title}
                </div>
            </header>
        )
    }
}
