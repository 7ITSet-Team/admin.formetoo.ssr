import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import uid from 'uid'

import ToolBar from '@src/containers/tool-bar'

export default class TabSetsCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				title: '',
				slug: uid(16)
			}
		}
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
								to="/statuses"
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
									onChange={(event, value) => {
										this.setState({
											data: {
												...this.state.data,
												title: value
											}
										})
									}}
									hintText="Заголовок(наименование)"
									errorText="Поле обязательно"
								/>
							</div>
						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources='statuses'
					data={this.state.data}
					action='create'
				/>
			</div>
		)
	}
}