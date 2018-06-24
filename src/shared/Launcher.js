import React from 'react'
import renderRoutes from 'react-router-config/renderRoutes'
import { Switch } from 'react-router-dom'

import '@theme/index.css'
import '@theme/wysiwyg.css'
import routes from '@common/core/routes'

export default class Layout extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Switch>
				{renderRoutes(routes)}
			</Switch>
		)
	}
}