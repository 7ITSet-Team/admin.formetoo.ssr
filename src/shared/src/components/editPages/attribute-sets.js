import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import { Link } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ListIcon from 'material-ui/svg-icons/action/list'

import ToolBar from '@src/containers/tool-bar'
import Data from '@src/core/data.provider'

export default class AttributesCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				title: '',
				attributes: [],
				slug: ''
			},
			attributes: []
		}
		this.getAttributes()
		this.getAttributeSet(this.props.location)
		this.changeAttribute = this.changeAttribute.bind(this)
	}

	async getAttributes() {
		const response = await Data.getData('/attributes')
		this.setState({
			attributes: response.data
		})
	}

	async getAttributeSet(url) {
		const response = await Data.getResource(url)
		this.setState({
			data: response
		})
	}

	changeState(value, key) {
		let newState = this.state
		newState.data[key] = value
		this.setState(newState)
	}

	changeAttribute(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				attributes: [
					...value
				]
			}
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
								to="/attribute-sets"
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
							<TextField
								fullWidth={true}
								hintText="Наименование"
								errorText="Поле обязательно"
								value={this.state.data.title}
								onChange={(event, value) => this.setState({
									data: {
										...this.state.data,
										title: value
									}
								})}
							/>
							<SelectField
								fullWidth={true}
								multiple={true}
								value={this.state.data.attributes}
								floatingLabelText="Атрибуты"
								onChange={this.changeAttribute}
							>
								{this.state.attributes.map((attribute, index) => {
									return <MenuItem
										value={attribute.slug}
										primaryText={attribute.title}
										key={index}
									/>
								})}
							</SelectField>
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
				</Tabs>
				<ToolBar
					resources='attribute-sets'
					data={this.state.data}
					action='edit'
				/>
			</div>
		)
	}
}