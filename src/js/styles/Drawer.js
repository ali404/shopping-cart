import React, {Component} from 'react'

export default class Drawer extends Component {
    render() {
        let {
            className,
            children,
            ...other
        } = this.props

        return (
            <div className="drawer">
                <ul class="drawer-menu">
                    {children}
                </ul>
            </div>
        )
    }
}

export class DrawerItem extends Component {
    render() {
        let {
            text,
            hasChildren,
            className,
            children,
            ...other
        } = this.props

        if(hasChildren) {
            return (
                <li className="drawer-item drawer-has-children">
                    <input
                        className="drawer-item--checkbox"
                        type="checkbox"
                        name={"group-"+text.replace(' ', '-')}
                        id={"group-"+text.replace(' ', '-')} />
                    <label
                        className="drawer-item--label"
                        for={"group-"+text.replace(' ', '-')}>
                        {text}
                    </label>
                    <ul className="drawer-item--menu">
                        {children}
                    </ul>
                </li>
            )
        }
        else {
            return (
                <li className="drawer-item">
                    {children}
                </li>
            )
        }
    }
}

export class DrawerContainer extends Component {
    render() {
        return (
            <div className="drawer-left">
                {this.props.children}
            </div>
        )
    }
}
