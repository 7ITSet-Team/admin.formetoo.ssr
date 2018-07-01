import React from 'react'

import App from '@src/containers/app-layout'
import Login from '@src/containers/login'

export default [
	{
		path: '/login',
		exact: true,
		component: Login
	}, {
		path: '/',
		exact: false,
		component: App
	}
]
