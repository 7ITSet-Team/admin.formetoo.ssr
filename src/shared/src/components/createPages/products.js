import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import SelectField from 'material-ui/SelectField'
import ListIcon from 'material-ui/svg-icons/action/list'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'
import uid from 'uid'
import { Editor } from 'react-draft-wysiwyg'
import { ContentState, convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/tool-bar'

export default class ProductsCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				isActive: false,
				relatedProducts: [],
				fromSet: [],
				images: [],
				description: '',
				shortDescription: '',
				categories: [],
				seo: {
					title: '',
					description: '',
					keywords: ''
				},
				'attribute-sets': [],
				attributes: [],
				'tab-sets': [],
				tabs: [],
				title: '',
				slug: uid(16)
			},
			descState: EditorState.createEmpty(),
			shortDescState: EditorState.createEmpty(),
			products: []
		}
		if (!!this.props.match) {
			this.getProduct()
		}
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

	async getProduct() {
		const id = this.props.match.params.id
		let response = await Data.getResource('/products/' + id)
		delete response._id
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
				...response,
				sku: response.sku + '-COPY'
			},
			descState: editorStateDesc,
			shortDescState: editorStateShortDesc
		})
	}

	changeState(value, key) {
		let newState = this.state
		newState.data[ key ] = value
		this.setState(newState)
	}

	changeRelatedProducts(event, index, value) {
		this.state.products.forEach((product) => {
			if (product.slug === value) {
				this.changeState([
					...this.state.data.relatedProducts,
					product
				], 'relatedProducts')
			}
		})
	}

	deleteRelatedProduct(id) {
		let relatedProducts = []
		this.state.data.relatedProducts.map(relatedProduct => {
			if (relatedProduct.slug !== id) {
				relatedProducts.push(relatedProduct)
			}
		})
		this.changeState(
			relatedProducts,
			'relatedProducts'
		)
	}

	async uploadFile(file) {
		const result = await Data.uploadImage('/upload/products', file.target.files[ 0 ])
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
		newState[ resource ] = response.data
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
					...this.state.data[ 'attribute-sets' ],
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
					...this.state.data[ 'tab-sets' ],
					...value
				]
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
		if (!this.state.categories || !this.state.products || !this.state[ 'attribute-sets' ] || !this.state[ 'tab-sets' ]) {
			return false
		}
		return (
			<div>
				<Tabs>
					<Tab label="Основное">
						<div
							className="big-resource">
							<Link
								className="resource-actions"
								to="/products"
							>
								<FlatButton
									label="Назад к списку"
									primary={true}
									icon={<ListIcon/>}
								/>
							</Link>
							<Toggle
								style={{
									width: '150px'
								}}
								className='input'
								label="Активный"
								toggled={this.state.data.isActive}
								onToggle={(event, value) => this.changeState(value, 'isActive')}
							/>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Заголовок"
									floatingLabelText="Заголовок"
									errorText='Поле обязательно'
									value={this.state.data.title}
									onChange={(event, value) => this.changeState(value, 'title')}
								/>
							</div>
							<div
								className='input'
							>
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
							</div>
							<div
								className='input'
							>
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
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Артикул"
									floatingLabelText="Артикул"
									errorText="Поле обязательно"
									value={this.state.data.sku}
									onChange={(event, value) => this.changeState(value, 'sku')}
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Цена"
									floatingLabelText="Цена"
									errorText="Поле обязательно"
									value={this.state.data.price}
									onChange={(event, value) => this.changeState(value, 'price')}
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									fullWidth={true}
									multiple={true}
									value={this.state.data.categories}
									floatingLabelText="Категории"
									onChange={(event, index, value) => {
										this.setState({
											data: {
												...this.state.data,
												categories: value
											}
										})
									}}
								>
									{this.state.categories.map((category, index) => {
										return <MenuItem
											value={category.slug}
											primaryText={category.title}
											key={index}
										/>
									})}
								</SelectField>
							</div>
							<div
								className='input'
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
							</div>
							<div
								className='input'
							>
								<SelectField
									fullWidth={true}
									multiple={true}
									value={this.state.data[ 'attribute-sets' ]}
									floatingLabelText="Наборы атрибутов"
									onChange={(event, index, value) => this.setState({
										data: {
											...this.state.data,
											'attribute-sets': value
										}
									})}
								>
									{this.state[ 'attribute-sets' ].map((attribute, index) => {
										return <MenuItem
											value={attribute.slug}
											primaryText={attribute.title}
											key={index}
										/>
									})}
								</SelectField>
							</div>
							<div
								className='input'
							>
								<SelectField
									fullWidth={true}
									multiple={true}
									value={this.state.data[ 'tab-sets' ]}
									floatingLabelText="Наборы табов"
									onChange={(event, index, value) => this.setState({
										data: {
											...this.state.data,
											'tab-sets': value
										}
									})}
								>
									{this.state[ 'tab-sets' ].map((set, index) => {
										return <MenuItem
											value={set.slug}
											primaryText={set.title}
											key={index}
										/>
									})}
								</SelectField>
							</div>
						</div>
					</Tab>
					<Tab label="SEO">
						<div
							className="resource-page">
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="SEO заголовок"
									floatingLabelText="SEO заголовок"
									value={this.state.data.seo.title}
									onChange={(event, value) => this.changeState({
										...this.state.data.seo,
										title: value
									}, 'seo')}
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="SEO описание"
									floatingLabelText="SEO описание"
									value={this.state.data.seo.description}
									onChange={(event, value) => this.changeState({
										...this.state.data.seo,
										description: value
									}, 'seo')}
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="SEO ключевые слова"
									floatingLabelText="SEO ключевые слова"
									value={this.state.data.seo.keywords}
									onChange={(event, value) => this.changeState({
										...this.state.data.seo,
										keywords: value
									}, 'seo')}
								/>
							</div>
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
																onClick={() => {
																	let relatedProducts = this.state.data.relatedProducts
																	relatedProducts.splice(index, 1)
																	this.setState({
																		data: {
																			...this.state.data,
																			relatedProducts
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
							<div
								className='input'
							>
								<SelectField
									fullWidth={true}
									value={this.state.data.relatedProducts}
									floatingLabelText="Похожий продукт"
									onChange={(event, index, value) => this.setState({
										data: {
											...this.state.data,
											relatedProducts: [
												...this.state.data.relatedProducts,
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
							<div
								className='input'
							>
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
						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources='products'
					data={this.state.data}
					action='create'
				/>
			</div>
		)
	}
}
