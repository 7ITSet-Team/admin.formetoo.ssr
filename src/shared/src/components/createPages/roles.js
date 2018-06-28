import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import { Link } from 'react-router-dom'
import uid from 'uid'

import ToolBar from '@src/containers/tool-bar'

export default class RolesCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				resources: {
					users: {showInMenu: false, permissions: []},
					statuses: {showInMenu: false, permissions: []},
					roles: {showInMenu: false, permissions: []},
					products: {showInMenu: false, permissions: []},
					photos: {showInMenu: false, permissions: []},
					orders: {showInMenu: false, permissions: []},
					clients: {showInMenu: false, permissions: []},
					categories: {showInMenu: false, permissions: []},
					attributes: {showInMenu: false, permissions: []},
					'attribute-sets': {showInMenu: false, permissions: []}
				},
				slug: uid(16)
			},
			permissions: [
				{
					type: 'create',
					label: 'Создание'
				},
				{
					type: 'put',
					label: 'Редактирование'
				},
				{
					type: 'get',
					label: 'Чтение'
				},
				{
					type: 'delete',
					label: 'Удаление'
				}
			]
		}
	}

	changeState(value, key) {
		let newState = this.state
		newState.data[ key ] = value
		this.setState(newState)
	}

	menuItems(values) {
		return this.state.permissions.map(({type, label}, index) => (
			<MenuItem
				key={index}
				insetChildren={true}
				checked={values && values.indexOf(type) > -1}
				value={type}
				primaryText={label}
			/>
		))
	}

	render() {
		return (
			<div>
				<Tabs>
					<Tab label="Основная информация"
					>
						<div
							className="big-resource"
						>
							<Link
								className="resource-actions"
								to="/roles"
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
									hintText="Название"
									errorText="Поле обязательно"
									onChange={(event, value) => this.changeState(value, 'name')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.categories.permissions}
									hintText="Права для категорий"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										categories: {
											...this.state.data.resources.categories,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.categories.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										categories: {
											...this.state.data.resources.categories,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.products.permissions}
									hintText="Права для продуктов"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										products: {
											...this.state.data.resources.products,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.products.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										products: {
											...this.state.data.resources.products,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.users.permissions}
									hintText="Права для пользователей"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										users: {
											...this.state.data.resources.users,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.users.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										users: {
											...this.state.data.resources.users,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.roles.permissions}
									hintText="Права для ролей"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										roles: {
											...this.state.data.resources.roles,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.roles.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										roles: {
											...this.state.data.resources.roles,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.clients.permissions}
									hintText="Права для клиентов"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										clients: {
											...this.state.data.resources.clients,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.clients.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										clients: {
											...this.state.data.resources.clients,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.orders.permissions}
									hintText="Права для заказов"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										orders: {
											...this.state.data.resources.orders,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.orders.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										orders: {
											...this.state.data.resources.orders,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.attributes.permissions}
									hintText="Права для атрибутов"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										attributes: {
											...this.state.data.resources.attributes,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.attributes.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										attributes: {
											...this.state.data.resources.attributes,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources[ 'attribute-sets' ].permissions}
									hintText="Права для наборов атрибутов"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										'attribute-sets': {
											...this.state.data.resources[ 'attribute-sets' ],
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources[ 'attribute-sets' ].permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										'attribute-sets': {
											...this.state.data.resources[ 'attribute-sets' ],
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.statuses.permissions}
									hintText="Права для статусов"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										statuses: {
											...this.state.data.resources.statuses,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.statuses.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										statuses: {
											...this.state.data.resources.statuses,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									multiple={true}
									value={this.state.data.resources.photos.permissions}
									hintText="Права для фото"
									errorText="Поле обязательно"
									fullWidth={true}
									onChange={(event, index, values) => this.changeState({
										...this.state.data.resources,
										photos: {
											...this.state.data.resources.photos,
											permissions: values
										}
									}, 'resources')}
								>
									{this.menuItems(this.state.data.resources.photos.permissions)}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '230px',
										marginLeft: '20px'
									}}
									label="Показывать в меню"
									onToggle={(event, value) => this.changeState({
										...this.state.data.resources,
										photos: {
											...this.state.data.resources.photos,
											showInMenu: value
										}
									}, 'resources')}
								/>
							</div>
						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources='roles'
					data={this.state.data}
					action='create'
				/>
			</div>
		)
	}
}