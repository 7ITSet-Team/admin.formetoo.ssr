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

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/tool-bar'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg'
import { convertToRaw, EditorState } from 'draft-js'

export default class CategoriesCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			data: {
				image: '',
				slug: uid(16)
			},
			descState: EditorState.createEmpty(),
			image: undefined
		}
		this.getData()
		this.uploadFile = this.uploadFile.bind(this)
		this.onEditorDescChange = this.onEditorDescChange.bind(this)
		this.changeParentCategory = this.changeParentCategory.bind(this)
	}

	async uploadFile(file) {
		const result = await Data.uploadImage('/upload/categories', file.target.files[ 0 ])
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
		newState.data[ key ] = value
		this.setState(newState)
	}

	async getData() {
		const response = await Data.getData('/categories')
		this.setState({
			categories: response.data
		})
	}

	onEditorDescChange(descState) {
		this.setState({
			descState
		})
	}

	render() {
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
								<FlatButton
									label="Назад к списку"
									primary={true}
									icon={<ListIcon/>}
								/>
							</Link>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '150px'
									}}
									label="Активный"
									onToggle={(event, value) => this.changeState(value, 'isActive')}
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Заголовок"
									floatingLabelText="Заголовок"
									errorText="Поле обязательно"
									onChange={(event, value) => this.changeState(value, 'title')}
								/>
							</div>
							<div
								className='input'
							>
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
							</div>
							<div
								className='input'
							>
								<SelectField
									fullWidth={true}
									value={this.state.data.parentCategory}
									floatingLabelText="Родительская категория"
									onChange={this.changeParentCategory}
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
									onChange={(event, value) => this.changeState({
										...this.state.data.seo,
										keywords: value
									}, 'seo')}
								/>
							</div>
						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources='categories'
					data={this.state.data}
					action='create'
					photo={this.state.image}
				/>
			</div>
		)
	}
}