import React from 'react'
import { List, ListItem } from 'material-ui/List'
import { Link } from 'react-router-dom'
import ProfileIcon from 'material-ui/svg-icons/social/people'
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app'
import DashboardIcon from 'material-ui/svg-icons/action/home'
import { Redirect } from 'react-router-dom'

import Auth from '@src/core/auth.provider'
import resources from '@src/constants/resources'

export default class ResourcesList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			logouted: false
		}
	}

	render() {
		const {isMenuOpened, allowedResources, basePath} = this.props
		if (this.state.logouted) {
			return <Redirect
				push
				to='/login'
			/>
		}
		return (
			<List
				className={
					isMenuOpened
						? 'list'
						: 'list_moved'
				}
			>
				<div>
					<Link
						to={basePath}
					>
						<ListItem
							primaryText="Главная страница"
							className="list__item"
							leftIcon={<DashboardIcon/>}
						/>
					</Link>
					{allowedResources.map((allowed, index) => {
						return (
							<Link
								key={index}
								to={`${basePath}${allowed.resource}`}
							>
								<ListItem
									primaryText={resources[allowed.resource].name}
									className="list__item"
									leftIcon={resources[allowed.resource].icon}
								/>
							</Link>
						)
					})}
				</div>
				<div>
					<Link
						to="profile"
					>
						<ListItem
							primaryText="Профиль"
							className="list__item"
							leftIcon={<ProfileIcon/>}
						/>
					</Link>
					<ListItem
						primaryText="Выйти"
						className="list__item"
						leftIcon={<ExitIcon/>}
						onClick={() => {
							Auth.logout()
                            this.setState({
	                            logouted: true
                            })
						}}
					/>
				</div>
			</List>
		)
	}
}