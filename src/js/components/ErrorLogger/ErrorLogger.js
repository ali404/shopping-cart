import React, {Component} from 'react'

import ErrorLoggerStore from '../../stores/ErrorLoggerStore'

export default class ErrrorLogger extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        ErrorLoggerStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        ErrorLoggerStore.removeChangeListener(this._onChange)
    }

    _onChange = () => {

    }

    render() {
        return null
    }
}
