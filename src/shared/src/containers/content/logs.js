import React from 'react'
import Chip from 'material-ui/Chip'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import FlatButton from 'material-ui/FlatButton'

import Data from '@src/core/data.provider'

export default class Logs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
		this.getLogs()
	}

	async getLogs() {
		const result = await Data.getData('/logs')
		this.setState({
			data: result.data
		})
	}

	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					flexDirection: 'column',
					backgroundColor: 'white',
					overflowY: 'scroll'
				}}
			>
				{
					this.state.data.map((log, index) => {
						return (
							<div
								key={index}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '20px'
								}}
							>
								<div
									style={{
										display: 'flex'
									}}
								>
									<div
										style={{
											color: 'red',
											fontWeight: 'bold',
											margin: '3px'
										}}
									>
										{log.user}
									</div>
									<div
										style={{
											margin: '3px',
											fontWeight: 'bold'
										}}
									>
										{log.action}
									</div>
								</div>
								<FlatButton
									label="Удалить"
									labelStyle={{color: 'rgb(255, 64, 129)'}}
									primary={true}
									icon={<DeleteIcon color='rgb(255, 64, 129)'/>}
								/>
								<Chip>
									{log.time}
								</Chip>
							</div>
						)
					})
				}
			</div>
		)
	}
}