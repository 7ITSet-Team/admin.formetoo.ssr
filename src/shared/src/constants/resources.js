import React from 'react'

import CategoriesIcon from 'material-ui/svg-icons/action/bookmark'
import ProductsIcon from 'material-ui/svg-icons/action/list'
import UsersIcon from 'material-ui/svg-icons/social/people'
import RolesIcon from 'material-ui/svg-icons/image/control-point'
import ClientsIcon from 'material-ui/svg-icons/action/verified-user'
import OrdersIcon from 'material-ui/svg-icons/editor/attach-money'
import AttributesIcon from 'material-ui/svg-icons/action/view-list'
import SetOfAttributesIcon from 'material-ui/svg-icons/action/stars'
import TabsIcon from 'material-ui/svg-icons/action/tab'
import SetOfTabsIcon from 'material-ui/svg-icons/action/view-agenda'
import StatusesIcon from 'material-ui/svg-icons/communication/stay-current-portrait'
import PhotosIcon from 'material-ui/svg-icons/image/collections'

const resources = {
    categories: {
        name: 'Категории',
        icon: <CategoriesIcon/>,
        dashboardIcon: <CategoriesIcon color='rgb(0, 188, 212)' style={{width: 50, height: 50}}/>
    },
    products: {
        name: 'Продукты',
        icon: <ProductsIcon/>,
        dashboardIcon: <ProductsIcon color='rgb(0, 188, 212)' style={{width: 50, height: 50}}/>
    },
    orders: {
        name: 'Заказы',
        icon: <OrdersIcon/>,
        dashboardIcon: <OrdersIcon color='rgb(0, 188, 212)' style={{width: 50, height: 50}}/>
    },
    users: {
        name: 'Пользователи',
        icon: <UsersIcon/>,
        dashboardIcon: <UsersIcon color='rgb(0, 188, 212)' style={{width: 50, height: 50}}/>
    },
    clients: {
        name: 'Клиенты',
        icon: <ClientsIcon/>,
        dashboardIcon: <ClientsIcon color='rgb(0, 188, 212)' style={{width: 50, height: 50}}/>
    },
    attributes: {
        name: 'Атрибуты',
        icon: <AttributesIcon/>
    },
    'attribute-sets': {
        name: 'Набор атрибутов',
        icon: <SetOfAttributesIcon/>
    },
    tabs: {
        name: 'Табы',
        icon: <TabsIcon/>
    },
    'tab-sets': {
        name: 'Набор табов',
        icon: <SetOfTabsIcon/>
    },
    statuses: {
        name: 'Статусы',
        icon: <StatusesIcon/>
    },
    roles: {
        name: 'Роли',
        icon: <RolesIcon/>,
        dashboardIcon: <RolesIcon color='rgb(0, 188, 212)' style={{width: 50, height: 50}}/>
    },
    photos: {
        name: 'Медиа',
        icon: <PhotosIcon/>
    },
}

export default resources