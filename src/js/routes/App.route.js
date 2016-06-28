import React, {Component} from 'react'

import HeaderContainer
    from '../components/Header/HeaderContainer.react'

import App from '../styles/App'

export default class  AppRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <App>
                    {this.props.children}
                </App>
            </div>
        )
    }
}
