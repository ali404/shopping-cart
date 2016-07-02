import React, {Component} from 'react'
import Header from './Header.react'

import HeaderStore from '../../stores/HeaderStore'
import AuthStore from '../../stores/AuthStore'

import HeaderActions from '../../actions/HeaderActions'

export default class HeaderContainer extends Component {
    constructor() {
        super()

        this.state = this._getMenuToggleState()
    }

    _getMenuToggleState = () => {
        return {
            isMenuOpen: HeaderStore.getMenuToggleState(),
            isAuthenticated: AuthStore.isAuthenticated()
        }
    }

    componentDidMount() {
        HeaderStore.addChangeListener(this._onChange)
        AuthStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        HeaderStore.removeChangeListener(this._onChange)
        AuthStore.addChangeListener(this._onChange)
    }

    _onChange = () => {
        this.setState(this._getMenuToggleState())
    }

    render() {
        return (
            <Header
                isMenuOpen={this.state.isMenuOpen}
                onButtonClick={this.onButtonClick}
                isAuthenticated={this.state.isAuthenticated}
            />
        )
    }

    onButtonClick = () => {
        HeaderActions.toggleMenu()
    }
}
