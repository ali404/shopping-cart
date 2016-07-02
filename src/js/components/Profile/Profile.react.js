import React, {Component} from 'react'

export default class Profile extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {
                    this.props.user ? (
                        <div>
                            <div>Role: {this.props.user.role}</div>
                            <div>Username: {this.props.user.username}</div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )
                }
            </div>
        )
    }
}
