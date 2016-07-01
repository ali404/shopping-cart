import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import App from './routes/App.route'
import Home from './routes/Home.route'
import Login from './routes/Login.route'
import Signup from './routes/Signup.route'

let routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route
                path="/"
                component={Home}
            />
            <Route
                path="/login"
                component={Login}
            />
            <Route
                path="signup"
                component={Signup}
            />
        </Route>
    </Router>
)

render(routes, document.getElementById('shopping-cart'))
