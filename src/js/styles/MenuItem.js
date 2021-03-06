import React, {Component} from 'react'

export default class MenuItem extends Component {
    render() {
        const {
            className,
            ...other
        } = this.props

        const temp = className || ''
        const classNames = 'header-menu--item ' + temp

        return (
            <div
                {...other}
                className={classNames}
            >
                {this.props.children}
            </div>
        )
    }
}
