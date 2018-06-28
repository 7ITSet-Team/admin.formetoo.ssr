import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ListIcon from 'material-ui/svg-icons/action/list'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import uid from 'uid'

import ToolBar from '@src/containers/tool-bar'

export default class AttributesCreate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				showInFilter: false,
				showInProductPage: false,
				showInList: false,
				isRequired: false,
				name: null,
				title: null,
				units: null,
				attrType: null,
				variants: [],
				slug: uid(16)
			},
			open: false,
			types: [
				{
					id: 'multipleSelect',
					title: 'Множественный список'
				}, {
					id: 'textInput',
					title: 'Текстовое поле'
				}, {
					id: 'select',
					title: 'Список'
				}, {
					id: 'numberInput',
					title: 'Числовое поле'
				}, {
					id: 'textBlock',
					title: 'Текстовый блок'
				}, {
					id: 'boolean',
					title: 'Да/Нет'
				}, {
					id: 'interval',
					title: 'Интервал'
				}
			],
			variant: {
				id: '',
				value: ''
			}
		}
		this.changeType = this.changeType.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.addVariant = this.addVariant.bind(this)
	}

	handleOpen() {
		this.setState({
			open: true
		})
	}

	handleClose() {
		this.setState({
			open: false
		})
	}

	addVariant() {
		this.setState({
			data: {
				...this.state.data,
				variants: [
					...this.state.data.variants,
					this.state.variant
				]
			}
		})
		this.handleClose()
	}

	changeState(value, key) {
		let newState = this.state
		newState.data[ key ] = value
		this.setState(newState)
	}

	changeType(event, index, value) {
		this.setState({
			data: {
				...this.state.data,
				attrType: value
			}
		})
	}

	render() {
		const actions = [
			<FlatButton
				label="Закрыть"
				primary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Подтвердить"
				primary={true}
				onClick={this.addVariant}
			/>
		]
		return (
			<div>
				<Tabs>
					<Tab label="Основное">
						<div
							className="resource-page">
							<Link
								className="resource-actions"
								to="/attributes"
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
										width: '250px',
										marginLeft: '20px'
									}}
									label="Показывать в фильтре"
									onToggle={(event, value) => this.changeState(value, 'showInFilter')}
								/>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '250px',
										marginLeft: '20px'
									}}
									label="Показывать на странице товара"
									onToggle={(event, value) => this.changeState(value, 'showInProductPage')}
								/>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '250px',
										marginLeft: '20px'
									}}
									label="Показывать в списке"
									onToggle={(event, value) => this.changeState(value, 'showInList')}
								/>
							</div>
							<div
								className='input'
							>
								<Toggle
									style={{
										width: '250px',
										marginLeft: '20px'
									}}
									label="Обязательный"
									onToggle={(event, value) => this.changeState(value, 'isRequired')}
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Наименование"
									errorText="Поле обязательно"
									onChange={(event, value) => this.changeState(value, 'name')}
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Заголовок"
									errorText="Поле обязательно"
									onChange={(event, value) => this.changeState(value, 'title')}
								/>
							</div>
							<div
								className='input'
							>
								<TextField
									fullWidth={true}
									hintText="Единица измерения"
									errorText="Поле обязательно"
									onChange={(event, value) => this.changeState(value, 'units')}
								/>
							</div>
						</div>
					</Tab>
					<Tab label="Тип">
						<div
							className="resource-page">
							<div
								className='input'
							>
								<SelectField
									fullWidth={true}
									value={this.state.data.attrType}
									floatingLabelText="Тип"
									onChange={this.changeType}
								>
									{this.state.types.map((type, index) => {
										return <MenuItem
											value={type.id}
											primaryText={type.title}
											key={index}
										/>
									})}
								</SelectField>
							</div>
							{
								this.state.data.attrType === 'multipleSelect' || this.state.data.attrType === 'select'
									? (
										<div>
											<Table
												selectable={false}
											>
												<TableHeader
													displaySelectAll={false}
													adjustForCheckbox={false}
												>
													<TableRow>
														<TableHeaderColumn>
															Идентификатор
														</TableHeaderColumn>
														<TableHeaderColumn>
															Значение
														</TableHeaderColumn>
														<TableHeaderColumn>
														</TableHeaderColumn>
													</TableRow>
												</TableHeader>
												<TableBody
													displayRowCheckbox={false}
												>
													{!!this.state.data.variants ? this.state.data.variants.map((variant, index) => {
														return (
															<TableRow
																key={index}
															>
																<TableRowColumn>
																	{variant.id}
																</TableRowColumn>
																<TableRowColumn>
																	{variant.value}
																</TableRowColumn>
																<TableRowColumn>
																	<DeleteIcon
																		color='rgb(255, 64, 129)'
																		onClick={() => this.deleteVariant(variant.id)}
																		style={{cursor: 'pointer'}}
																	/>
																</TableRowColumn>
															</TableRow>
														)
													}) : null}
												</TableBody>
											</Table>
											<RaisedButton
												label="Добавить"
												style={{margin: '38px'}}
												onClick={this.handleOpen}
											/>
											<Dialog
												title="Создание нового варианта"
												actions={actions}
												modal={true}
												open={this.state.open}
												autoScrollBodyContent={true}
											>
												<div
													className='input'
												>
													<TextField
														fullWidth={true}
														floatingLabelText="Идентификатор"
														value={this.state.variant.id}
														errorText='Обязательное поле'
														onChange={(event, value) => this.setState({
															variant: {
																...this.state.variant,
																id: value
															}
														})}/>
												</div>
												<div
													className='input'
												>
													<TextField
														fullWidth={true}
														floatingLabelText="Значение"
														value={this.state.variant.value}
														errorText='Обязательное поле'
														onChange={(event, value) => this.setState({
															variant: {
																...this.state.variant,
																value: value
															}
														})}/>
												</div>
											</Dialog>
										</div>
									)
									: null
							}

						</div>
					</Tab>
				</Tabs>
				<ToolBar
					resources='attributes'
					data={this.state.data}
					action='create'
				/>
			</div>
		)
	}
}