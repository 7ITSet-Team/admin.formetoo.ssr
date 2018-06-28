import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ListIcon from 'material-ui/svg-icons/action/list'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import uid from 'uid'

import ToolBar from '@src/containers/tool-bar'
import Data from '@src/core/data.provider'

export default class AttributesCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				title: '',
				attributes: [],
				slug: uid(16)
			},
			attributes: []
		}
		this.getAttributes()
		this.changeAttribute = this.changeAttribute.bind(this)
	}

	async getAttributes() {
		const response = await Data.getData('/attributes')
		this.setState({
			attributes: response.data
		})
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

	changeState(value, key) {
		let newState = this.state
		newState.data[ key ] = value
		this.setState(newState)
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
									hintText="Наименование"
									errorText="Поле обязательно"
									onChange={(event, value) => this.changeState(value, 'title')}
								/>
							</div>
							<div
								className='input'
							>
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
							</div>
						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources='attribute-sets'
					data={this.state.data}
					action='create'
				/>
			</div>
		)
	}
}