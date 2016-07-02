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
                    text="add-item">
                    <Link to="/profile/add-product">
                        Add Item
                    </Link>
                </DrawerItem>
            </Drawer>
        )
    }
}
