import React, {Component} from 'react'

import HeaderContainer
    from '../components/Header/HeaderContainer.react'

import App from '../styles/App'
import NavigationStore from '../stores/NavigationStore'

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
