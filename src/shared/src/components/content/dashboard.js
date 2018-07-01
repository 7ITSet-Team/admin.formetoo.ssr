import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardTitle } from 'material-ui/Card'

import resources from '@src/constants/resources'

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			refs: [
				'products',
				'categories',
				'orders',
				'clients',
				'users',
				'roles'
			]
		}
	}

	render() {
		return (
			<Card
				className="dashboard"
			>
				<CardTitle
					title='Главная страница'
				/>
				<div
					className='dashboard__refs'
				>
					{this.state.refs.map((item, key) => {
						return (
							<Link
								key={key}
								className="dashboard__item"
								to={item}
							>
								{resources[ item ].dashboardIcon}
								<div
									className="dashboard__item__title"
								>
									{resources[ item ].name}
								</div>
							</Link>
						)
					})}
				</div>
			</Card>
		)
	}
}