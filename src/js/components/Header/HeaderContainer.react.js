import React, {Component} from 'react'
import Header from './Header.react'
import HeaderStore from '../../stores/HeaderStore'
import HeaderActions from '../../actions/HeaderActions'

export default class HeaderContainer extends Component {
    constructor() {
        super()

        this.state = this._getMenuToggleState()
    }

    _getMenuToggleState = () => {
        return {
            isMenuOpen: HeaderStore.getMenuToggleState()
        }
    }

    componentDidMount() {
        console.log(HeaderStore)
        HeaderStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        HeaderStore.removeChangeListener(this._onChange)
    }

    _onChange = () => {
        this.setState(this._getMenuToggleState())
    }

    render() {
        return (
            <Header
                isMenuOpen={this.state.isMenuOpen}
                onButtonClick={this.onButtonClick}
            />
        )
    }

    onButtonClick = () => {
        HeaderActions.toggleMenu()
    }
}
