import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

export default class TableField extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log('TABLE FIELD')
		const {columns, name, rows} = this.props
		return (
			<Table
				selectable={false}
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
						rows.map((item, index) => {
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
											onClick={() => this.props.deleteTableRow(index, name)}
											style={{cursor: 'pointer'}}
										/>
									</TableRowColumn>
								</TableRow>
							)
						})
					}
				</TableBody>
			</Table>
		)
	}
}