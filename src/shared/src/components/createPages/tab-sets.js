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

export default class TabSetsCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				title: '',
				tabs: [],
				slug: uid(16)
			},
			tabs: []
		}
		this.getTabs()
		this.changeTabs = this.changeTabs.bind(this)
	}

	changeTabs(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				tabs: [
					...value
				]
			}
		})
	}

	async getTabs() {
		const response = await Data.getData('/tabs')
		this.setState({
			tabs: response.data
		})
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<Tabs>
					<Tab label="Основное">
						<div
							className="resource-page">
							<Link
								className="resource-actions"
								to="/tab-sets"
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
									hintText="Заголовок"
									onChange={(event, value) => {
										this.setState({
											data: {
												...this.state.data,
												title: value
											}
										})
									}}
									errorText="Поле обязательно"
								/>
							</div>
							<div
								className='input'
							>
								<SelectField
									fullWidth={true}
									multiple={true}
									value={this.state.data.tabs}
									floatingLabelText="Табы"
									onChange={this.changeTabs}
								>
									{this.state.tabs.map((tab, index) => {
										return <MenuItem
											value={tab.slug}
											primaryText={tab.title}
											key={index}
										/>
									})}
								</SelectField>
							</div>
						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources='tab-sets'
					data={this.state.data}
					action='create'
				/>
			</div>
		)
	}
}