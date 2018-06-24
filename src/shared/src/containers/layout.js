import React from 'react'
import AppBar from 'material-ui/AppBar'
import { Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@src/constants/routes'

import ResourcesList from '@src/containers/resources'
import Login from '@src/containers/login'
import Auth from '@src/core/auth.provider'
import Data from '@src/core/data.provider'
import components from '@src/constants/routes/components'

export default class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isMenuOpened: true,
			authorised: Auth.isAuthorizedSession(),
			allowedResources: []
		}
		this.getAllowedResources()
		    .catch(error => console.error(`Ошибка при получении разрешённых ресурсов! ${error}`))
		this.openMenu = this.openMenu.bind(this)
	}

	componentWillMount() {
		Auth.init(
			() => this.setState({
				authorised: true
			}),
			() => this.setState({
				authorised: false
			})
		)
	}

	componentWillUnmount() {
		Auth.init()
	}

	openMenu() {
		const {isMenuOpened} = this.state
		return this.setState({
			isMenuOpened: !isMenuOpened
		})
	}

	async getAllowedResources() {
		const resources = await Data.getAllowedResources()
		if (resources.success) {
			return this.setState({
				allowedResources: resources.allowed
			})
		} else {
			return console.error('Ошибка получения разрешённых ресурсов: ', resources.msg)
		}
	}

	render() {
		const {authorised, allowedResources, isMenuOpened} = this.state
		const location = this.props.location.pathname
		const route = this.props.route.path
		if (!__isBrowser__) {
			return null
		}
		if (__isBrowser__ && !authorised) {
			return <Login/>
		}
			return (
				<div
					className="layout"
				>
					<AppBar
						title="ForMeToo"
						onLeftIconButtonClick={this.openMenu}
						style={{
							height: 60
						}}
					/>
					<div
						className="body"
					>
						<ResourcesList
							allowedResources={allowedResources}
							isMenuOpened={isMenuOpened}
							basePath={route}
						/>
						<div
							className={
								isMenuOpened
									? 'content'
									: 'content_moved'
							}
						>
							{renderRoutes(routes(location, route))}
							<Route
								path={route + 'products/:id/copy'}
								component={components.ProductsCreate}
							/>
						</div>
					</div>
				</div>
			)
	}
}