import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import App from './routes/App.route'
import Home from './routes/Home.route'
import Login from './routes/Login.route'
import Signup from './routes/Signup.route'
import Profile from './routes/Profile.route'

import AuthStore from './stores/AuthStore'

function unauthenticatedRoute(nextState, replace) {
    if(AuthStore.isAuthenticated()) {
        replace({
            pathname: '/profile',
            state: {
                nextPathname: nextState.location.pathname
            }
        })
    }
}

function authenticatedRoute(nextState, replace) {
    if(!AuthStore.isAuthenticated()) {
        replace({
            pathname: '/login',
            state: {
                nextPathname: nextState.location.pathname
            }
        })
    }
}

let routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route
                path="/"
                component={Home} />
            <Route
                path="/login"
                component={Login}
                onEnter={unauthenticatedRoute} />
            <Route
                path="/signup"
                component={Signup}
                onEnter={unauthenticatedRoute} />
            <Route
                path="/profile"
                component={Profile}
                onEnter={authenticatedRoute} />
        </Route>
    </Router>
)

render(routes, document.getElementById('shopping-cart'))
