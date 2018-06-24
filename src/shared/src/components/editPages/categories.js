import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import { Link } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ListIcon from 'material-ui/svg-icons/action/list'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg'
import { ContentState, convertToRaw, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/tool-bar'

export default class CategoriesEdit extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			data: {
				isActive: false,
				title: '',
				description: '',
				image: '',
				parentCategory: '',
				slug: '',
				seo: {
					title: '',
					description: '',
					keywords: ''
				},
				creationDate: new Date(),
				modificationDate: new Date()
			},
			descState: EditorState.createEmpty(),
			image: ''
		}
		this.getCategory(this.props.location)
		this.getCategories()
		this.uploadFile = this.uploadFile.bind(this)
		this.onEditorDescChange = this.onEditorDescChange.bind(this)
		this.changeParentCategory = this.changeParentCategory.bind(this)
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

	changeParentCategory(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				parentCategory: value
			}
		})
	}

	changeState(value, key) {
		let newState = this.state
		newState.data[key] = value
		this.setState(newState)
	}

	async getCategory(uri) {
		const response = await Data.getResource(uri)
		const description = response.description
		const contentBlock = htmlToDraft(description)
		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
		const editorState = EditorState.createWithContent(contentState)
		this.setState({
			data: {
				...this.state.data,
				...response
			},
			descState: editorState
		})
	}

	async getCategories() {
		const response = await Data.getResource('/categories')
		this.setState({
			categories: response.categories
		})
	}

	onEditorDescChange(descState) {
		this.setState({
			descState,
		})
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<Tabs>
					<Tab label="Основное">
						<div
							className="big-resource">
							<Link
								className="resource-actions"
								to="/categories"
							>
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
								<FlatButton
									label="Назад к списку"
									primary={true}
									icon={<ListIcon/>}
								/>
							</Link>
							<Toggle
								style={{
									width: '150px',
									marginLeft: '20px'
								}}
								label="Активный"
								toggled={this.state.data.isActive}
								onToggle={(event, value) => this.setState({
									data: {
										...this.state.data,
										isActive: value
									}
								})}
							/>
							<TextField
								fullWidth={true}
								hintText="Заголовок"
								floatingLabelText="Заголовок"
								errorText="Поле обязательно"
								value={this.state.data.title}
								onChange={(event, value) => this.setState({
									data: {
										...this.state.data,
										title: value
									}
								})}
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
								<img
									className="inputfile__image"
									src={this.state.data.image}
								/>
							</div>
							<SelectField
								fullWidth={true}
								value={this.state.data.parentCategory}
								floatingLabelText="Родительская категория"
								onChange={(event, index, value) => this.setState({
									data: {
										...this.state.data,
										parentCategory: value
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
								floatingLabelText="SEO заголовок"
								value={!!this.state.data.seo ? this.state.data.seo.title : ''}
								onChange={(event, value) => this.setState({
									data: {
										...this.state.data,
										seo: {
											...this.state.data.seo,
											title: value
										}
									}
								})}
							/>
							<TextField
								fullWidth={true}
								hintText="SEO описание"
								floatingLabelText="SEO описание"
								value={!!this.state.data.seo ? this.state.data.seo.description : ''}
								onChange={(event, value) => this.setState({
									data: {
										...this.state.data,
										seo: {
											...this.state.data.seo,
											description: value
										}
									}
								})}
							/>
							<TextField
								fullWidth={true}
								hintText="SEO ключевые слова"
								floatingLabelText="SEO ключевые слова"
								value={!!this.state.data.seo ? this.state.data.seo.keywords : ''}
								onChange={(event, value) => this.setState({
									data: {
										...this.state.data,
										seo: {
											...this.state.data.seo,
											keywords: value
										}
									}
								})}
							/>
						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources='categories'
					data={this.state.data}
					action='edit'
					photo={this.state.image}
				/>
			</div>
		)
	}
}