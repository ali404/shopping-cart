import React, {Component} from 'react'

import {Heart} from './Icons'

export default class Logo extends Component {
    render() {
        return (
            <span>
                shop
                <Heart
                    size="small"
                />
                it
            </span>
        )
    }
}
