import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'
import { Link } from 'react-router-dom'

import ToolBar from '@src/containers/tool-bar'
import Data from '@src/core/data.provider'

export default class ResourceLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: this.getInitialState(),
			variant: {}
		}
		if (this.props.action === 'edit') {
			this.getResourceInfo()
			    .catch(err => console.error('resource-layout:27 ERROR GETTING RESOURCE!: ', err))
		}
		if (this.props.resource === 'attribute-sets') {
			this.getData('attributes')
			    .catch(err => console.error('resource-layout:31 ERROR GETTING DATA!: ', err))
		}
		if (this.props.resource === 'tab-sets') {
			this.state = {
				...this.state,
				tabs: []
			}
			this.getData('tabs')
			    .catch(err => console.error('resource-layout:39 ERROR GETTING DATA!: ', err))
		}
		if (this.props.resource === 'attribute-sets') {
			this.state = {
				...this.state,
				attributes: []
			}
			this.getData('attributes')
			    .catch(err => console.error('resource-layout:47 ERROR GETTING DATA!: ', err))
		}
		if (this.props.resource === 'attributes') {
			this.state = {
				...this.state,
				open: false,
				variant: {
					id: '',
					value: ''
				}
			}
		}
		if (this.props.resource === 'orders') {
			this.state = {
				...this.state,
				clients: [],
				statuses: [],
				products: []
			}
			this.getData('clients')
			    .catch(err => console.error('resource-layout:66 ERROR GETTING DATA!: ', err))
			this.getData('statuses')
			    .catch(err => console.error('resource-layout:68 ERROR GETTING DATA!: ', err))
			this.getData('products')
			    .catch(err => console.error('resource-layout:70 ERROR GETTING DATA!: ', err))
		}
		if (this.props.resource === 'clients') {
			this.state = {
				...this.state,
				address: {
					country: '',
					state: '',
					city: '',
					street: '',
					building: '',
					apartment: ''
				},
				open: false
			}
		}
		this.changeValueOfInput = this.changeValueOfInput.bind(this)
		this.changeSwitchInput = this.changeSwitchInput.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.addVariant = this.addVariant.bind(this)
		this.addAddress = this.addAddress.bind(this)
	}

	getInitialState() {
		let currentResource = {}

		let parseArrayOfKeys = (keys, defaultValue) => {
			if (keys.length === 2) {
				currentResource[ keys[ 0 ] ] = {...currentResource[ keys[ 0 ] ]}
				currentResource[ keys[ 0 ] ][ keys[ 1 ] ] = defaultValue
			}
			if (keys.length === 3) {
				currentResource[ keys[ 0 ] ] = {...currentResource[ keys[ 0 ] ]}
				currentResource[ keys[ 0 ] ][ keys[ 1 ] ] = {...currentResource[ keys[ 0 ] ][ keys[ 1 ] ]}
				currentResource[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ] = defaultValue
			}
		}

		this.props.structure.tabs.forEach(tab => {
			tab.content.forEach(field => {
				if (field.type === 'table') {
					return
				}
				const {name, defaultValue} = field
				if (name instanceof Array) {
					parseArrayOfKeys(name, defaultValue)
					return
				}
				currentResource[ name ] = defaultValue
			})
		})

		if (this.props.resource === 'attributes') {
			currentResource.variants = []
		}

		if (this.props.resource === 'orders') {
			currentResource.products = []
		}

		if (this.props.resource === 'clients') {
			currentResource.addresses = []
			delete currentResource.address
		}

		return currentResource
	}

	async getResourceInfo() {
		const {id} = this.props.match.params
		const result = await Data.getResource(`/${this.props.resource}/${id}`)
		this.setState({
			data: result
		})
	}

	async getData(resources) {
		const response = await Data.getData(`/${resources}`)
		this.setState({
			[ resources ]: response.data
		})
	}

	changeValueOfInput(e) {
		const {name, value} = e.target
		this.setState({
			data: {
				...this.state.data,
				[ name ]: value
			}
		})
	}

	changeSelectInput(value, name) {
		this.setState({
			data: {
				...this.state.data,
				[ name ]: value
			}
		})
	}

	changeSwitchInput(value, name) {
		this.setState({
			data: {
				...this.state.data,
				[ name ]: value
			}
		})
	}

	handleOpen() {
		this.setState({
			open: true
		})
	}

	handleClose() {
		this.setState({
			open: false
		})
	}

	addVariant() {
		this.setState({
			data: {
				...this.state.data,
				variants: [
					...this.state.data.variants,
					this.state.variant
				]
			}
		})
		this.handleClose()
	}

	addAddress() {
		this.setState({
			data: {
				...this.state.data,
				addresses: [
					...this.state.data.addresses,
					this.state.address
				]
			}
		})
		this.handleClose()
	}

	deleteVariant(id) {
		let newVariants = []
		this.state.data.variants.forEach(variant => {
			if (variant.id === id) {
				return
			}
			newVariants.push(variant)
		})
		this.setState({
			data: {
				...this.state.data,
				variants: newVariants
			}
		})
		this.handleClose()
	}

	pushToTable(value, name) {
		this.setState({
			data: {
				...this.state.data,
				[ name ]: [
					...this.state.data.products,
					value
				]
			}
		})
	}

	deleteTableRow(index, name) {
		let newItems = []
		this.state.data[ name ].forEach((item, i) => {
			if (i === index) {
				return
			}
			newItems.push(item)
		})
		this.setState({
			data: {
				...this.state.data,
				[ name ]: newItems
			}
		})
	}

	render() {
		const {tabs} = this.props.structure
		console.log('STATE =>>>', this.state)
		console.log('PROPS =>>>', this.props)
		return (
			<React.Fragment>
				<Tabs>
					{
						tabs.map((tab, tabIndex) => {
							return (
								<Tab
									label={tab.title}
									key={tabIndex}
								>
									<div
										className='resource-page'
									>
										<div
											className='resource-actions'
										>
											{
												this.props.action === 'edit'
													? <Link
														to={`${this.props.location.pathname}/delete`}
													>
														<FlatButton
															label="Удалить"
															labelStyle={{color: 'rgb(255, 64, 129)'}}
															primary={true}
															icon={<DeleteIcon color='rgb(255, 64, 129)'/>}
														/>
													</Link>
													: null
											}
											<Link
												to={`/${this.props.resource}`}
											>
												<FlatButton
													label='Назад к списку'
													primary={true}
													icon={<ListIcon/>}
												/>
											</Link>
										</div>
										{
											tab.content.map((field, fieldIndex) => {
												const {name, required, title, type} = field
												if (type === 'textInput') {
													if (name instanceof Array) {
														return (
															<div
																className='input'
																key={fieldIndex}
															>
																<TextField
																	fullWidth={true}
																	hintText={title}
																	floatingLabelText={title}
																	errorText={required ? 'Поле обязательно' : ''}
																	value={this.state.data[ name[ 0 ] ][ name[ 1 ] ]}
																	onChange={(e) => this.setState({
																		data: {
																			...this.state.data,
																			[ name[ 0 ] ]: {
																				...this.state.data[ name[ 0 ] ],
																				[ name[ 1 ] ]: e.target.value
																			}
																		}
																	})}
																/>
															</div>
														)
													}
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<TextField
																fullWidth={true}
																hintText={title}
																floatingLabelText={title}
																errorText={required ? 'Поле обязательно' : ''}
																name={name}
																value={this.state.data[ name ]}
																onChange={this.changeValueOfInput}
															/>
														</div>
													)
												}
												if (type === 'multipleSelect' || (
													type === 'select' && !!field.variants))
												{
													const {name, required, title, type, variants} = field
													const actions = [
														<FlatButton
															label="Закрыть"
															primary={true}
															onClick={this.handleClose}
														/>,
														<FlatButton
															label="Подтвердить"
															primary={true}
															onClick={this.addVariant}
														/>
													]
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<SelectField
																fullWidth={true}
																multiple={type === 'multipleSelect'}
																value={this.state.data[ name ]}
																floatingLabelText={title}
																errorText={required ? 'Поле обязательно' : ''}
																onChange={(event, index, value) => this.changeSelectInput(value, name)}
															>
																{
																	!!variants
																		? variants.map((variant, index) => {
																			return <MenuItem
																				value={variant.id}
																				primaryText={variant.title}
																				key={index}
																			/>
																		})
																		: this.state[ name ].map((item, index) => {
																			return <MenuItem
																				value={item.slug}
																				primaryText={item.title}
																				key={index}
																			/>
																		})
																}
															</SelectField>
															{
																(
																	this.state.data.attrType === 'select' || this.state.data.attrType === 'multipleSelect') && this.props.resource === 'attributes'
																	? <React.Fragment>
																		<Table
																			selectable={false}
																		>
																			<TableHeader
																				displaySelectAll={false}
																				adjustForCheckbox={false}
																			>
																				<TableRow>
																					<TableHeaderColumn>
																						Идентификатор
																					</TableHeaderColumn>
																					<TableHeaderColumn>
																						Значение
																					</TableHeaderColumn>
																				</TableRow>
																			</TableHeader>
																			<TableBody
																				displayRowCheckbox={false}
																			>
																				{!!this.state.data.variants ? this.state.data.variants.map((variant, index) => {
																					return (
																						<TableRow
																							key={index}
																						>
																							<TableRowColumn>
																								{variant.id}
																							</TableRowColumn>
																							<TableRowColumn>
																								{variant.value}
																							</TableRowColumn>
																							<TableRowColumn>
																								<DeleteIcon
																									color='rgb(255, 64, 129)'
																									onClick={() => this.deleteVariant(variant.id)}
																									style={{cursor: 'pointer'}}
																								/>
																							</TableRowColumn>
																						</TableRow>
																					)
																				}) : null}
																			</TableBody>
																		</Table>
																		<RaisedButton
																			label="Добавить"
																			style={{margin: '38px'}}
																			onClick={this.handleOpen}
																		/>
																		<Dialog
																			title="Создание нового варианта"
																			actions={actions}
																			modal={true}
																			open={this.state.open}
																			autoScrollBodyContent={true}
																		>
																			<TextField
																				fullWidth={true}
																				floatingLabelText="Идентификатор"
																				value={this.state.variant.id}
																				errorText='Обязательное поле'
																				onChange={(event, value) => this.setState({
																					variant: {
																						...this.state.variant,
																						id: value
																					}
																				})}/>
																			<TextField
																				fullWidth={true}
																				floatingLabelText="Значение"
																				value={this.state.variant.value}
																				errorText='Обязательное поле'
																				onChange={(event, value) => this.setState({
																					variant: {
																						...this.state.variant,
																						value: value
																					}
																				})}/>
																		</Dialog>
																	</React.Fragment>
																	: null
															}
														</div>
													)
												}
												if (type === 'select') {
													const {name, title, needResources} = field
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<SelectField
																fullWidth={true}
																multiple={type === 'multipleSelect'}
																value={this.state.data[ name ]}
																floatingLabelText={title}
																errorText={required ? 'Поле обязательно' : ''}
																onChange={(event, index, value) => this.changeSelectInput(value, name)}
															>
																{
																	this.state[ needResources ].map((item, index) => {
																		return <MenuItem
																			value={item.slug}
																			primaryText={item.title || item.name}
																			key={index}
																		/>
																	})
																}
															</SelectField>
														</div>
													)
												}
												if (type === 'boolean') {
													const {name, title} = field
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<Toggle
																style={{
																	width: '250px'
																}}
																toggled={this.state.data[ name ]}
																label={title}
																onToggle={(event, value) => this.changeSwitchInput(value, name)}
															/>
														</div>
													)
												}
												if (type === 'table') {
													const {columns, name} = field
													return (
														<Table
															selectable={false}
															key={fieldIndex}
														>
															<TableHeader
																displaySelectAll={false}
																adjustForCheckbox={false}
															>
																<TableRow>
																	{
																		columns.map((item, index) => {
																			return (
																				<TableHeaderColumn
																					key={index}
																				>
																					{item.title}
																				</TableHeaderColumn>
																			)
																		})
																	}
																	<TableHeaderColumn>
																	</TableHeaderColumn>
																</TableRow>
															</TableHeader>
															<TableBody
																displayRowCheckbox={false}
															>
																{
																	this.state.data[ name ].map((item, index) => {
																		return (
																			<TableRow
																				key={index}
																			>
																				{
																					columns.map((column, index) => {
																						return (
																							<TableRowColumn
																								key={index}
																							>
																								{item[ column.name ]}
																							</TableRowColumn>
																						)
																					})
																				}
																				<TableRowColumn>
																					<DeleteIcon
																						color='rgb(255, 64, 129)'
																						onClick={() => this.deleteTableRow(index, name)}
																						style={{cursor: 'pointer'}}
																					/>
																				</TableRowColumn>
																			</TableRow>
																		)
																	})
																}
															</TableBody>
														</Table>
													)
												}
												if (type === 'pushTable') {
													const {title, needResources, name} = field
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<SelectField
																fullWidth={true}
																floatingLabelText={title}
																onChange={(event, index, value) => this.pushToTable(value, name)}
															>
																{
																	this.state[ needResources ].map((item, index) => {
																		return <MenuItem
																			value={item}
																			primaryText={item.title || item.name}
																			key={index}
																		/>
																	})
																}
															</SelectField>
														</div>
													)
												}
												if (type === 'dialog') {
													const actions = [
														<FlatButton
															label="Закрыть"
															primary={true}
															onClick={this.handleClose}
														/>,
														<FlatButton
															label="Подтвердить"
															primary={true}
															onClick={this.addAddress}
														/>
													]
													return (
														<React.Fragment
															key={fieldIndex}
														>
															<Dialog
																title="Создание нового варианта"
																actions={actions}
																modal={true}
																open={this.state.open}
																autoScrollBodyContent={true}
															>
																{
																	field.children.map((element, index) => {
																		return (
																			<div
																				className='input'
																				key={index}
																			>
																				<TextField
																					fullWidth={true}
																					hintText={element.title}
																					floatingLabelText={element.title}
																					errorText={element.required ? 'Поле обязательно' : ''}
																					value={this.state[ field.name ][ element.name ]}
																					onChange={(e) => this.setState({
																						[ field.name ]: {
																							...this.state[ field.name ],
																							[ element.name ]: e.target.value
																						}
																					})}
																				/>
																			</div>
																		)
																	})
																}
															</Dialog>
															<RaisedButton
																label="Добавить"
																style={{margin: '38px'}}
																onClick={this.handleOpen}
															/>
														</React.Fragment>
													)
												}
											})
										}
									</div>
								</Tab>
							)
						})
					}
				</Tabs>
				<ToolBar
					resources={this.props.resource}
					data={this.state.data}
					action={this.props.action}
				/>
			</React.Fragment>
		)
	}
}