import React from 'react'
import AppBar from 'material-ui/AppBar'
import { renderRoutes } from 'react-router-config'
import { Redirect } from 'react-router-dom'

import routes from '@src/constants/routes'
import ResourcesList from '@src/components/sidebar/resources'
import Auth from '@src/core/auth.provider'
import Data from '@src/core/data.provider'

export default class AppLayout extends React.Component {
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
		if (__isBrowser__ && !authorised) {
			return <Redirect
				push
				to='/login'
			/>
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
					</div>
				</div>
			</div>
		)
	}
}