import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import uid from 'uid'

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/tool-bar'
import Hash from '@src/core/hash.provider'

export default class UsersCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			roles: [],
			data: {
				slug: uid(16)
			}
		}
		this.getRoles()
		this.changeRole = this.changeRole.bind(this)
		this.changeState = this.changeState.bind(this)
	}

	changeState(value, key) {
		let newState = this.state
		newState.data[ key ] = value
		this.setState(newState)
	}

	changeRole(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				role: value
			}
		})
	}

	async getRoles() {
		const response = await Data.getData('/roles')
		this.setState({
			roles: response.data
		})
	}

	render() {
		return (
			<div>
				<Tabs>
					<Tab label="Основное">
						<div
							className="resource-page">
							<Link
								className="resource-actions"
								to="/users"
							>
								<FlatButton
									label="Назад к списку"
									primary={true}
									icon={<ListIcon/>}
								/>
							</Link>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Имя"
									onChange={(event, value) => this.changeState(value, 'name')}
									errorText="Поле обязательно"
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Почта"
									onChange={(event, value) => this.changeState(value, 'email')}
									errorText="Поле обязательно"
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Пароль"
									onChange={(event, value) => this.changeState(Hash.getHash(value), 'password')}
									errorText="Поле обязательно"
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									fullWidth={true}
									value={this.state.data.role}
									floatingLabelText="Роль"
									onChange={this.changeRole}
								>
									{this.state.roles.map((role, index) => {
										return <MenuItem
											value={role.slug}
											primaryText={role.name}
											key={index}
										/>
									})}
								</SelectField>
							</div>
						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources="users"
					data={this.state.data}
					action='create'
				/>
			</div>
		)
	}
}