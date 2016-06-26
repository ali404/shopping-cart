import React, {Component} from 'react'

import HeaderContainer
    from '../components/Header/HeaderContainer.react'

export default class  AppRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <main>
                <HeaderContainer />
                {this.props.children}
            </main>
        )
    }
}
