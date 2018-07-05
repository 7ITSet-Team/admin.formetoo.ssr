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
import CopyIcon from 'material-ui/svg-icons/action/flip-to-front'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import { ContentState, convertToRaw, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import { Link } from 'react-router-dom'
import uid from 'uid'

import ToolBar from '@src/containers/content/tool-bar'
import Data from '@src/core/data.provider'

export default class ResourceCreateEditTemplate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: this.getInitialState()
		}
		const {action, resource} = this.props
		if (action === 'edit' || action === 'copy') {
			this.getResourceInfo()
			    .catch(err => console.error('resource-layout ERROR GETTING RESOURCE!: ', err))
		}
		if (resource === 'attribute-sets') {
			this.getData('attributes')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
		}
		if (resource === 'tab-sets') {
			this.state = {
				...this.state,
				tabs: []
			}
			this.getData('tabs')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
		}
		if (resource === 'attribute-sets') {
			this.state = {
				...this.state,
				attributes: []
			}
			this.getData('attributes')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
		}
		if (resource === 'attributes') {
			this.state = {
				...this.state,
				open: false,
				variant: {
					id: '',
					value: ''
				}
			}
		}
		if (resource === 'orders') {
			this.state = {
				...this.state,
				clients: [],
				statuses: [],
				products: []
			}
			this.getData('clients')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
			this.getData('statuses')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
			this.getData('products')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
		}
		if (resource === 'clients') {
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
		if (resource === 'users') {
			this.state = {
				...this.state,
				roles: []
			}
			this.getData('roles')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
		}
		if (resource === 'categories') {
			this.state = {
				...this.state,
				categories: [],
				descState: EditorState.createEmpty()
			}
			this.getData('categories')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
		}
		if (resource === 'products') {
			this.state = {
				...this.state,
				categories: [],
				'attribute-sets': [],
				'tab-sets': [],
				products: [],
				descState: EditorState.createEmpty(),
				shortDescState: EditorState.createEmpty()
			}
			this.getData('categories')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
			this.getData('attribute-sets')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
			this.getData('tab-sets')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
			this.getData('products')
			    .catch(err => console.error('resource-layout ERROR GETTING DATA!: ', err))
		}
		this.changeValueOfInput = this.changeValueOfInput.bind(this)
		this.changeSwitchInput = this.changeSwitchInput.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.addVariant = this.addVariant.bind(this)
		this.addAddress = this.addAddress.bind(this)
		this.onEditorDescChange = this.onEditorDescChange.bind(this)
		this.onEditorShortDescChange = this.onEditorShortDescChange.bind(this)
		this.uploadFile = this.uploadFile.bind(this)
		this.uploadFiles = this.uploadFiles.bind(this)
	}

	getInitialState() {
		let currentResource = {}

		let parseArrayOfKeys = (keys, defaultValue) => {
			if (keys.length === 2) {
				currentResource[keys[0]] = {...currentResource[keys[0]]}
				currentResource[keys[0]][keys[1]] = defaultValue
			}
			if (keys.length === 3) {
				currentResource[keys[0]] = {...currentResource[keys[0]]}
				currentResource[keys[0]][keys[1]] = {...currentResource[keys[0]][keys[1]]}
				currentResource[keys[0]][keys[1]][keys[2]] = defaultValue
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
				currentResource[name] = defaultValue
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

		if (this.props.resource === 'products') {
			currentResource.relatedProducts = []
			currentResource.fromSet = []
		}

		currentResource.slug = uid(16)

		return currentResource
	}

	async getResourceInfo() {
		const {id} = this.props.match.params
		const result = await Data.getResource(`/${this.props.resource}/${id}`)
		if (this.props.resource === 'categories') {
			const description = result.description
			const contentBlock = htmlToDraft(description)
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
			const editorState = EditorState.createWithContent(contentState)
			this.setState({
				data: result,
				descState: editorState
			})
			return
		}

		if (this.props.resource === 'products') {
			const description = result.description
			const contentBlock = htmlToDraft(description)
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
			const editorState = EditorState.createWithContent(contentState)
			const shortDescription = result.shortDescription
			const contentBlockShortDesc = htmlToDraft(shortDescription)
			const contentStateShortDesc = ContentState.createFromBlockArray(contentBlockShortDesc.contentBlocks)
			const editorStateShortDesc = EditorState.createWithContent(contentStateShortDesc)
			if (this.props.copy) {
				delete result._id
				return this.setState({
					data: {
						...result,
						sku: `${result.sku}-COPY`,
						slug: uid(16)
					},
					descState: editorState,
					shortDescState: editorStateShortDesc
				})
			}
			result.seo.keywords = result.seo.keywords.join(', ')
			return this.setState({
				data: result,
				descState: editorState,
				shortDescState: editorStateShortDesc
			})
		}

		if (this.props.resource === 'categories') {
			result.seo.keywords = result.seo.keywords.join(', ')
		}

		this.setState({
			data: result
		})
	}

	async getData(resources) {
		const response = await Data.getData(`/${resources}`)
		this.setState({
			[resources]: response.data
		})
	}

	async uploadFile(file) {
		const result = await Data.uploadImage('/upload/categories', file.target.files[0])
		this.setState({
			data: {
				...this.state.data,
				image: result
			},
			image: result
		})
	}

	async uploadFiles(file) {
		const result = await Data.uploadImage('/upload/products', file.target.files[0])
		this.setState({
			data: {
				...this.state.data,
				images: [
					...this.state.data.images,
					result
				]
			}
		})
	}

	changeValueOfInput(e) {
		const {name, value} = e.target
		this.setState({
			data: {
				...this.state.data,
				[name]: value
			}
		})
	}

	async changeSelectInput(value, name, multiple) {
		if (this.props.resource === 'products') {
			if (name === 'attribute-sets') {
				const attributes = await Data.getAttributes(value)
				this.setState({
					data: {
						...this.state.data,
						attributes
					}
				})
			}
			if (name === 'tab-sets') {
				const tabs = await Data.getTabs(value)
				this.setState({
					data: {
						...this.state.data,
						tabs
					}
				})
			}
			this.setState({
				data: {
					...this.state.data,
					[name]: value
				}
			})
			return
		}
		if (name instanceof Array) {
			if (name.length === 3) {
				if (!!multiple) {
					this.setState({
						data: {
							...this.state.data,
							[name[0]]: {
								...this.state.data[name[0]],
								[name[1]]: {
									...this.state.data[name[0]][name[1]],
									[name[2]]: value
								}
							}
						}
					})
				}
			}
			return
		}
		this.setState({
			data: {
				...this.state.data,
				[name]: value
			}
		})
	}

	changeSwitchInput(value, name, multiple) {
		if (!!multiple) {
			if (name.length === 3) {
				this.setState({
					data: {
						...this.state.data,
						[name[0]]: {
							...this.state.data[name[0]],
							[name[1]]: {
								...this.state.data[name[0]][name[1]],
								[name[2]]: value
							}
						}
					}
				})
			}
			return
		}
		this.setState({
			data: {
				...this.state.data,
				[name]: value
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
				[name]: [
					...this.state.data[name],
					value
				]
			}
		})
	}

	deleteTableRow(index, name) {
		let newItems = []
		this.state.data[name].forEach((item, i) => {
			if (i === index) {
				return
			}
			newItems.push(item)
		})
		this.setState({
			data: {
				...this.state.data,
				[name]: newItems
			}
		})
	}

	onEditorDescChange(descState) {
		this.setState({
			descState
		})
	}

	onEditorShortDescChange(shortDescState) {
		this.setState({
			shortDescState
		})
	}

	render() {
		const {tabs} = this.props.structure
		console.log('RESCREAEDITSTATE ', this.state)
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
										className={!!tab.className ? tab.className : 'resource-page'}
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
											{
												this.props.action === 'edit' && this.props.resource === 'products'
													? (
														<Link
															to={{
																pathname: `${this.props.location.pathname}/copy`
															}}
														>
															<FlatButton
																label="Копировать"
																labelStyle={{color: 'rgb(64, 255, 129)'}}
																primary={true}
																icon={<CopyIcon color='rgb(64, 255, 129)'/>}
															/>
														</Link>
													)
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
												const {name, title, type, required} = field
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
																	value={this.state.data[name[0]][name[1]]}
																	onChange={(e) => this.setState({
																		data: {
																			...this.state.data,
																			[name[0]]: {
																				...this.state.data[name[0]],
																				[name[1]]: e.target.value
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
																value={this.state.data[name]}
																onChange={this.changeValueOfInput}
															/>
														</div>
													)
												}
												if ((
													type === 'multipleSelect' && !!field.variants) || (
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
													if (name instanceof Array) {
														if (name.length === 3) {
															return (
																<div
																	className='input'
																	key={fieldIndex}
																>
																	<SelectField
																		fullWidth={true}
																		multiple={type === 'multipleSelect'}
																		value={this.state.data[name[0]][name[1]][name[2]]}
																		floatingLabelText={title}
																		errorText={required ? 'Поле обязательно' : ''}
																		onChange={(event, index, value) => this.changeSelectInput(value, name, true)}
																	>
																		{
																			variants.map((variant, index) => {
																				return <MenuItem
																					value={variant.id}
																					primaryText={variant.title}
																					key={index}
																				/>
																			})
																		}
																	</SelectField>
																</div>
															)
														}
														return
													}
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<SelectField
																fullWidth={true}
																multiple={type === 'multipleSelect'}
																value={this.state.data[name]}
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
																		: this.state[name].map((item, index) => {
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
												if (type === 'multipleSelect') {
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<SelectField
																fullWidth={true}
																multiple={type === 'multipleSelect'}
																value={this.state.data[name]}
																floatingLabelText={title}
																errorText={required ? 'Поле обязательно' : ''}
																onChange={(event, index, value) => this.changeSelectInput(value, name)}
															>
																{
																	this.state[name].map((item, index) => {
																		return <MenuItem
																			value={item.slug}
																			primaryText={item.title}
																			key={index}
																		/>
																	})
																}
															</SelectField>
														</div>
													)
												}
												if (type === 'select') {
													const {name, title, needResources, required} = field
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<SelectField
																fullWidth={true}
																multiple={type === 'multipleSelect'}
																value={this.state.data[name]}
																floatingLabelText={title}
																errorText={required ? 'Поле обязательно' : ''}
																onChange={(event, index, value) => this.changeSelectInput(value, name)}
															>
																{
																	this.state[needResources].map((item, index) => {
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
													const {name, title, required} = field
													if (name instanceof Array) {
														if (name.length === 3) {
															return (
																<div
																	className='input'
																	key={fieldIndex}
																>
																	<Toggle
																		style={{
																			width: '250px'
																		}}
																		toggled={this.state.data[name[0]][name[1]][name[2]]}
																		label={title}
																		onToggle={(event, value) => this.changeSwitchInput(value, name, true)}
																	/>
																</div>
															)
														}
														return
													}
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<Toggle
																style={{
																	width: '250px'
																}}
																toggled={this.state.data[name]}
																label={title}
																onToggle={(event, value) => this.changeSwitchInput(value, name)}
															/>
														</div>
													)
												}
												if (type === 'table') {
													const {name, columns, needResources} = field
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
																	this.state.data[name].map(slug => {
																		return this.state[needResources].map((item, index) => {
																			if (item.slug === slug) {
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
																										{item[column.name]}
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
																			}
																		})
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
																	this.state[needResources].map((item, index) => {
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
																					value={this.state[field.name][element.name]}
																					onChange={(e) => this.setState({
																						[field.name]: {
																							...this.state[field.name],
																							[element.name]: e.target.value
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
												if (type === 'wysiwyg') {
													return (
														<div
															className='input'
															key={fieldIndex}
														>
															<div
																style={{
																	color: 'rgba(0, 0, 0, 0.3)'
																}}
															>
																{title}
															</div>
															<Editor
																editorState={this.state[field.editorStateName]}
																wrapperClassName="demo-wrapper"
																editorClassName="demo-editor"
																onEditorStateChange={field.editorStateName === 'descState' ? this.onEditorDescChange : this.onEditorShortDescChange}
																onChange={() => this.setState({
																	data: {
																		...this.state.data,
																		[name]: draftToHtml(convertToRaw(this.state[field.editorStateName].getCurrentContent()))
																	}
																})}
															/>
														</div>
													)
												}
												if (type === 'file') {
													if (!field.multiple) {
														return (
															<div
																className='input'
																key={fieldIndex}
															>
																<input
																	type="file"
																	className="inputfile"
																	id="file"
																	onChange={this.uploadFile}
																/>
																<label
																	htmlFor="file"
																	className="inputfile__label"
																>
																	Перенесите сюда файл или нажмите, чтобы выбрать
																	изображение
																</label>
																<div
																	className="inputfile__images"
																>
																	{
																		!!this.state.data.image
																			? <img
																				className="inputfile__image"
																				src={this.state.data.image}
																			/>
																			: null
																	}
																</div>
															</div>
														)
													} else {
														return (
															<div
																className='input'
																key={fieldIndex}
															>
																<input
																	type="file"
																	className="inputfile"
																	id="file"
																	onChange={this.uploadFiles}
																/>
																<label
																	htmlFor="file"
																	className="inputfile__label"
																>
																	Перенесите сюда файл или нажмите, чтобы выбрать
																	изображение
																</label>
																<div
																	className="inputfile__images"
																>
																	{this.state.data.images.map((image, index) => {
																		return (
																			<img
																				className="inputfile__image"
																				src={image}
																				key={index}
																			/>
																		)
																	})}
																</div>
															</div>
														)
													}
												}
											})
										}
									</div>
								</Tab>
							)
						})
					}
					{
						this.props.resource === 'products' && !!this.state.data.attributes
							? (
								<Tab
									label='Атрибуты'
								>
									<div
										className="resource-page">
										{
											this.state.data.attributes.map((attribute, key) => {
												if (attribute.attrType === 'select' || attribute.attrType === 'multipleSelect') {
													return (
														<SelectField
															fullWidth={true}
															multiple={attribute.attrType === 'multipleSelect'}
															value={this.state.data.attributes[key].value}
															floatingLabelText={attribute.title}
															onChange={(event, index, value) => {
																let newState = {
																	data: {
																		...this.state.data,
																		attributes: this.state.data.attributes
																	}
																}
																newState.data.attributes[key].value = value
																this.setState(newState)
															}}
															key={key}
														>
															{
																attribute.variants.map((variant, index) => {
																	return (
																		<MenuItem
																			value={variant.value}
																			primaryText={variant.id}
																			key={index}
																		/>
																	)
																})
															}
														</SelectField>
													)
												}
												if (attribute.attrType === 'interval') {
													return (
														<div
															key={key}
														>
															<TextField
																fullWidth={true}
																hintText={`${attribute.title} от`}
																defaultValue={!!this.state.data.attributes[key].value ? this.state.data.attributes[key].value.from : ''}
																floatingLabelText={`${attribute.title} от`}
																onChange={(event, value) => {
																	let newState = {
																		data: {
																			...this.state.data,
																			attributes: this.state.data.attributes
																		}
																	}
																	newState.data.attributes[key].value = {...newState.data.attributes[key].value}
																	newState.data.attributes[key].value.from = value
																	this.setState(newState)
																}}
															/>
															<TextField
																fullWidth={true}
																hintText={`${attribute.title} до`}
																defaultValue={!!this.state.data.attributes[key].value ? this.state.data.attributes[key].value.to : ''}
																floatingLabelText={`${attribute.title} до`}
																onChange={(event, value) => {
																	let newState = {
																		data: {
																			...this.state.data,
																			attributes: this.state.data.attributes
																		}
																	}
																	newState.data.attributes[key].value = {...newState.data.attributes[key].value}
																	newState.data.attributes[key].value.to = value
																	this.setState(newState)
																}}
															/>
														</div>
													)
												}
												return (
													<TextField
														fullWidth={true}
														hintText={attribute.title}
														floatingLabelText={attribute.title}
														value={attribute.value}
														onChange={(event, value) => {
															let newState = {
																data: {
																	...this.state.data,
																	attributes: this.state.data.attributes
																}
															}
															newState.data.attributes[key].value = value
															this.setState(newState)
														}}
														key={key}
													/>
												)
											})
										}
									</div>
								</Tab>
							)
							: null
					}
					{
						this.props.resource === 'products' && !!this.state.data.tabs
							? (
								<Tab
									label='Табы'
								>
									<div
										className="resource-page">
										{
											this.state.data.tabs.map((tab, key) => {
												return (
													<TextField
														fullWidth={true}
														hintText={tab.title}
														value={this.state.data.tabs[key].value}
														floatingLabelText={tab.title}
														onChange={(event, value) => {
															let newState = {
																data: {
																	...this.state.data,
																	tabs: this.state.data.tabs
																}
															}
															newState.data.tabs[key].value = value
															this.setState(newState)
														}}
														key={key}
													/>
												)
											})
										}
									</div>
								</Tab>
							)
							: null
					}
				</Tabs>
				<ToolBar
					resources={this.props.resource}
					data={this.state.data}
					action={this.props.action === 'copy' ? 'create' : this.props.action}
					photos={
						this.props.resource === 'products'
							? this.state.data.images
							: undefined
					}
					photo={
						this.props.resource === 'categories'
							? this.state.data.image
							: null
					}
				/>
			</React.Fragment>
		)
	}
}