import React, {Component} from 'react'

import {Link} from 'react-router'

import Drawer from '../../styles/Drawer'
import {DrawerItem} from '../../styles/Drawer'

export default class AdminMenu extends Component {
    render() {
        return (
            <Drawer>
                <DrawerItem
                    text="add-shop">
                    <Link to="/profile/add-shop">
                        Add Shop
                    </Link>
                </DrawerItem>
                <DrawerItem
                    text="Label 2"
                    hasChildren={true}>
                    <DrawerItem>
                        link 1
                    </DrawerItem>
                </DrawerItem>
                <DrawerItem text="Label 3" />
                <DrawerItem text="Label 4" />
            </Drawer>
        )
    }
}
