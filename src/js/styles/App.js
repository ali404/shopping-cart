import React, {Component} from 'react'

export default class App extends Component {
    render() {
        const {
            children,
            className,
            ...other
        } = this.props

        const temp = className || ''
        const classNames = 'app ' + temp

        return (
            <main
                {...other}
                className={classNames}
            >
                {children}
            </main>
        )
    }
}
