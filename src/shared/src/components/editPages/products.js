import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import CopyIcon from 'material-ui/svg-icons/action/flip-to-front'
import DatePicker from 'material-ui/DatePicker'
import { Link } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ListIcon from 'material-ui/svg-icons/action/list'
import uid from 'uid'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import { ContentState, convertToRaw, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/tool-bar'

export default class ProductsEdit extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				isActive: false,
				title: '',
				description: '',
				shortDescription: '',
				sku: '',
				price: '',
				categories: [],
				images: [],
				'attribute-sets': [],
				attributes: [],
				'tab-sets': [],
				tabs: [],
				seo: {
					title: '',
					description: '',
					keywords: ''
				},
				relatedProducts: [],
				fromSet: [],
				creationDate: new Date(),
				modificationDate: new Date(),
				slug: uid(16)
			},
			products: []
		}
		this.getProduct(this.props.location)
		this.getResource('/products')
		this.getResource('/categories')
		this.getResource('/attribute-sets')
		this.getResource('/tab-sets')
		this.changeRelatedProducts = this.changeRelatedProducts.bind(this)
		this.uploadFile = this.uploadFile.bind(this)
		this.changeCategories = this.changeCategories.bind(this)
		this.changeAttributeSets = this.changeAttributeSets.bind(this)
		this.changeTabSets = this.changeTabSets.bind(this)
		this.onEditorDescChange = this.onEditorDescChange.bind(this)
		this.onEditorShortDescChange = this.onEditorShortDescChange.bind(this)
	}

	async getProduct(uri) {
		const response = await Data.getResource(uri)
		const description = response.description
		const contentBlockDesc = htmlToDraft(description)
		const contentStateDesc = ContentState.createFromBlockArray(contentBlockDesc.contentBlocks)
		const editorStateDesc = EditorState.createWithContent(contentStateDesc)
		const shortDescription = response.shortDescription
		const contentBlockShortDesc = htmlToDraft(shortDescription)
		const contentStateShortDesc = ContentState.createFromBlockArray(contentBlockShortDesc.contentBlocks)
		const editorStateShortDesc = EditorState.createWithContent(contentStateShortDesc)
		this.setState({
			data: {
				...this.state.data,
				...response
			},
			descState: editorStateDesc,
			shortDescState: editorStateShortDesc
		})
	}

	changeState(value, key) {
		let newState = this.state
		newState.data[key] = value
		this.setState(newState)
	}

	changeRelatedProducts(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				relatedProducts: [
					...this.state.data.relatedProducts,
					value
				]
			}
		})
	}

	deleteRelatedProduct(id) {
		let relatedProducts = []
		this.state.data.relatedProducts.map(relatedProduct => {
			if (relatedProduct !== id) {
				relatedProducts.push(relatedProduct)
			}
		})
		this.setState({
			data: {
				...this.state.data,
				relatedProducts: relatedProducts
			}
		})
	}

	async uploadFile(file) {
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

	async getResource(uri) {
		const resource = uri.slice(1)
		const response = await Data.getData(uri)
		let newState = {}
		newState[resource] = response.data
		this.setState(newState)
	}

	changeCategories(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				categories: [
					...this.state.data.categories,
					...value
				]
			}
		})
	}

	changeAttributeSets(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				'attribute-sets': [
					...this.state.data['attribute-sets'],
					...value
				]
			}
		})
	}

	changeTabSets(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				'tab-sets': [
					...this.state.data['tab-sets'],
					...value
				]
			}
		})
	}

	onEditorDescChange(descState) {
		this.setState({
			descState,
		})
	}

	onEditorShortDescChange(shortDescState) {
		this.setState({
			shortDescState,
		})
	}


	render() {
		if (!this.state.data || !this.state.categories || !this.state['attribute-sets'] || !this.state['tab-sets']) {
			return false
		}
		return (
			<div>
				<Tabs>
					<Tab label="Основное">
						<div
							className="big-resource">
							<div
								className="resource-actions"
							>
								<Link
									to={{
										pathname: `${this.props.location}/copy`,
										state: this.state.data
									}}
								>
									<FlatButton
										label="Копировать"
										labelStyle={{color: 'rgb(64, 255, 129)'}}
										primary={true}
										icon={<CopyIcon color='rgb(64, 255, 129)'/>}
									/>
								</Link>
								<Link
									to={`${this.props.location}/delete`}
								>
									<FlatButton
										label="Удалить"
										labelStyle={{color: 'rgb(255, 64, 129)'}}
										primary={true}
										icon={<DeleteIcon color='rgb(255, 64, 129)'/>}
									/>
								</Link>
								<Link
									to="/products"
								>
									<FlatButton
										label="Назад к списку"
										primary={true}
										icon={<ListIcon/>}
									/>
								</Link>
							</div>
							<Toggle
								style={{
									width: '150px',
									marginLeft: '20px'
								}}
								label="Активный"
								toggled={this.state.data.isActive}
								onToggle={(event, value) => this.changeState(value, 'isActive')}
							/>
							<TextField
								fullWidth={true}
								hintText="Заголовок"
								errorText="Поле обязательно"
								value={this.state.data.title}
								onChange={(event, value) => this.changeState(value, 'title')}
							/>
							<div
								style={{
									color: 'rgba(0, 0, 0, 0.3)'
								}}
							>
								Описание
							</div>
							<Editor
								editorState={this.state.descState}
								wrapperClassName="demo-wrapper"
								editorClassName="demo-editor"
								onEditorStateChange={this.onEditorDescChange}
								onChange={() => this.setState({
									data: {
										...this.state.data,
										description: draftToHtml(convertToRaw(this.state.descState.getCurrentContent()))
									}
								})}
							/>
							<div
								style={{
									color: 'rgba(0, 0, 0, 0.3)'
								}}
							>
								Краткое описание
							</div>
							<Editor
								editorState={this.state.shortDescState}
								wrapperClassName="demo-wrapper"
								editorClassName="demo-editor"
								onEditorStateChange={this.onEditorShortDescChange}
								onChange={() => this.setState({
									data: {
										...this.state.data,
										shortDescription: draftToHtml(convertToRaw(this.state.shortDescState.getCurrentContent()))
									}
								})}
							/>
							<TextField
								fullWidth={true}
								hintText="Артикул"
								errorText="Поле обязательно"
								value={this.state.data.sku}
								onChange={(event, value) => this.changeState(value, 'sku')}
							/>
							<TextField
								fullWidth={true}
								hintText="Цена"
								errorText="Поле обязательно"
								value={this.state.data.price}
								onChange={(event, value) => this.changeState(value, 'price')}
							/>
							<SelectField
								fullWidth={true}
								multiple={true}
								value={this.state.data.categories}
								floatingLabelText="Категории"
								onChange={(event, index, value) => this.setState({
									data: {
										...this.state.data,
										categories: value
									}
								})}
							>
								{this.state.categories.map((category, index) => {
									return <MenuItem
										value={category.slug}
										primaryText={category.title}
										key={index}
									/>
								})}
							</SelectField>
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
								Перенесите сюда файл или нажмите, чтобы выбрать изображение
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
							<SelectField
								fullWidth={true}
								multiple={true}
								value={this.state.data['attribute-sets']}
								floatingLabelText="Наборы атрибутов"
								onChange={(event, index, value) => this.setState({
									data: {
										...this.state.data,
										'attribute-sets': value
									}
								})}
							>
								{this.state['attribute-sets'].map((attribute, index) => {
									return <MenuItem
										value={attribute.slug}
										primaryText={attribute.title}
										key={index}
									/>
								})}
							</SelectField>
							<SelectField
								fullWidth={true}
								multiple={true}
								value={this.state.data['tab-sets']}
								floatingLabelText="Наборы табов"
								onChange={(event, index, value) => this.setState({
									data: {
										...this.state.data,
										'tab-sets': value
									}
								})}
							>
								{this.state['tab-sets'].map((set, index) => {
									return <MenuItem
										value={set.slug}
										primaryText={set.title}
										key={index}
									/>
								})}
							</SelectField>
							<DatePicker
								fullWidth={true}
								floatingLabelText="Дата создания"
								hintText="Дата создания"
								defaultDate={new Date(this.state.data.creationDate)}
							/>
							<DatePicker
								fullWidth={true}
								floatingLabelText="Дата изменения"
								hintText="Дата изменения"
								defaultDate={new Date(this.state.data.modificationDate)}
							/>
							<TextField
								fullWidth={true}
								value={this.state.data.slug}
								onChange={(event, value) => this.setState({
									data: {
										...this.state.data,
										slug: value
									}
								})}
								floatingLabelText='Slug'
								label='Slug'
							/>
						</div>
					</Tab>
					<Tab label="SEO">
						<div
							className="resource-page">
							<TextField
								fullWidth={true}
								hintText="SEO заголовок"
								value={!!this.state.data.seo ? this.state.data.seo.title : undefined}
								onChange={(event, value) => this.changeState({
									...this.state.data.seo,
									title: value
								}, 'seo')}
							/>
							<TextField
								fullWidth={true}
								hintText="SEO описание"
								value={!!this.state.data.seo ? this.state.data.seo.description : undefined}
								onChange={(event, value) => this.changeState({
									...this.state.data.seo,
									description: value
								}, 'seo')}
							/>
							<TextField
								fullWidth={true}
								hintText="SEO ключевые слова"
								value={!!this.state.data.seo ? this.state.data.seo.keywords : undefined}
								onChange={(event, value) => this.changeState({
									...this.state.data.seo,
									keywords: value
								}, 'seo')}
							/>
						</div>
					</Tab>
					<Tab label="Похожие продукты">
						<div
							className="resource-page">
							<Table
								selectable={false}
							>
								<TableHeader
									displaySelectAll={false}
									adjustForCheckbox={false}
								>
									<TableRow>
										<TableHeaderColumn>
											Артикул
										</TableHeaderColumn>
										<TableHeaderColumn>
											Наименование
										</TableHeaderColumn>
										<TableHeaderColumn>
											Цена
										</TableHeaderColumn>
										<TableHeaderColumn>
										</TableHeaderColumn>
									</TableRow>
								</TableHeader>
								<TableBody
									displayRowCheckbox={false}
								>
									{this.state.data.relatedProducts.map((relatedProduct, index) => {
										return this.state.products.map(product => {
											if (product.slug === relatedProduct) {
												return (
													<TableRow
														key={index}
													>
														<TableRowColumn>
															{product.sku}
														</TableRowColumn>
														<TableRowColumn>
															{product.title}
														</TableRowColumn>
														<TableRowColumn>
															{product.price}
														</TableRowColumn>
														<TableHeaderColumn>
															<DeleteIcon
																color='rgb(255, 64, 129)'
																onClick={() => this.deleteRelatedProduct(product.slug)}
																style={{cursor: 'pointer'}}
															/>
														</TableHeaderColumn>
													</TableRow>
												)
											}
										})
									})}
								</TableBody>
							</Table>
							<SelectField
								fullWidth={true}
								value={this.state.data.relatedProducts}
								floatingLabelText="Похожий продукт"
								onChange={this.changeRelatedProducts}
							>
								{this.state.products.map((product, index) => {
									return <MenuItem
										value={product.slug}
										primaryText={product.title}
										key={index}
									/>
								})}
							</SelectField>
						</div>
					</Tab>
					<Tab label="Товары из набора">
						<div
							className="resource-page">
							<Table
								selectable={false}
							>
								<TableHeader
									displaySelectAll={false}
									adjustForCheckbox={false}
								>
									<TableRow>
										<TableHeaderColumn>
											Артикул
										</TableHeaderColumn>
										<TableHeaderColumn>
											Наименование
										</TableHeaderColumn>
										<TableHeaderColumn>
											Цена
										</TableHeaderColumn>
										<TableHeaderColumn>
										</TableHeaderColumn>
									</TableRow>
								</TableHeader>
								<TableBody
									displayRowCheckbox={false}
								>
									{this.state.data.fromSet.map((fromSet, index) => {
										return this.state.products.map(product => {
											if (product.slug === fromSet) {
												return (
													<TableRow
														key={index}
													>
														<TableRowColumn>
															{product.sku}
														</TableRowColumn>
														<TableRowColumn>
															{product.title}
														</TableRowColumn>
														<TableRowColumn>
															{product.price}
														</TableRowColumn>
														<TableHeaderColumn>
															<DeleteIcon
																color='rgb(255, 64, 129)'
																onClick={() => {
																	let fromSet = this.state.data.fromSet
																	fromSet.splice(index, 1)
																	this.setState({
																		data: {
																			...this.state.data,
																			fromSet
																		}
																	})
																}}
																style={{cursor: 'pointer'}}
															/>
														</TableHeaderColumn>
													</TableRow>
												)
											}
										})
									})}
								</TableBody>
							</Table>
							<SelectField
								fullWidth={true}
								value={this.state.data.fromSet}
								floatingLabelText="Товар из набора"
								onChange={(event, index, value) => this.setState({
									data: {
										...this.state.data,
										fromSet: [
											...this.state.data.fromSet,
											value
										]
									}
								})}
							>
								{this.state.products.map((product, index) => {
									return <MenuItem
										value={product.slug}
										primaryText={product.title}
										key={index}
									/>
								})}
							</SelectField>
						</div>
					</Tab>
					<Tab
						label='Атрибуты'
					>
						<div
							className="resource-page">
							{
								this.state.data.attributes.map((attribute, key) => {
									if (attribute.attrType === 'select' || attribute.attrType === 'multipleSelect')
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
									if (attribute.attrType === 'interval')
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
									return (
										<TextField
											fullWidth={true}
											hintText={attribute.title}
											value={this.state.data.attributes[key].value}
											floatingLabelText={attribute.title}
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
				</Tabs>
				<ToolBar
					resources='products'
					data={this.state.data}
					action='edit'
				/>
			</div>
		)
	}
}