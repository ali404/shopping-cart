import React, {Component} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import HeaderContainer
    from '../components/Header/HeaderContainer.react'

export default class  AppRoute extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <HeaderContainer />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}
