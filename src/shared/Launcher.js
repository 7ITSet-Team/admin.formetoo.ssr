import React from 'react'
import renderRoutes from 'react-router-config/renderRoutes'
import { Switch } from 'react-router-dom'

import routes from '@common/core/routes'
import './styles/index.css'
import './styles/tree.css'
import './styles/wysiwyg.css'

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