import React, {Component} from 'react'

import HeaderContainer
    from '../components/Header/HeaderContainer.react'

import App from '../styles/App'
import ErrorLogger from '../components/ErrorLogger/ErrorLogger'

// TODO: find a better way
import NavigationStore from '../stores/NavigationStore'

export default class  AppRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <ErrorLogger />
                <HeaderContainer />
                {this.props.children}
            </div>
        )
    }
}
