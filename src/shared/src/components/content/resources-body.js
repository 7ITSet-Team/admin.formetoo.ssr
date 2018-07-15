import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import EditIcon from 'material-ui/svg-icons/content/create'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import FalseIcon from 'material-ui/svg-icons/content/clear'
import TrueIcon from 'material-ui/svg-icons/action/done'
import SaveIcon from 'material-ui/svg-icons/content/save'
import ChangesAll from 'material-ui/svg-icons/content/select-all'
import Chip from 'material-ui/Chip'

import Data from '@src/core/data.provider'

export default class ResourcesBody extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			ascendingSort: true,
			sortedData: [],
			categories: [],
			'attribute-sets': [],
			'tab-sets': [],
			roles: [],
			products: [],
			data: {}
		}
		if (this.props.path === '/users') {
			this.getRoles()
		}
		if (this.props.path === '/products') {
			this.getProductsPrice()
			this.getCategories()
		}
		if (!!this.props.match && this.props.match.path === '/logs/:id/changes') {
			this.getData('/categories')
			this.getData('/attribute-sets')
			this.getData('/tab-sets')
			this.getData('/products')
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			sortedData: nextProps.data
		})
	}

	async getProductsPrice() {
		const response = await Data.getResource('/products')
		response.products.forEach(product => {
			this.setState({
				data: {
					...this.state.data,
					[ product.slug ]: product.price
				}
			})
		})
	}

	async getCategories() {
		const response = await Data.getResource('/categories')
		this.setState({
			categories: response.categories
		})
	}

	async getData(uri) {
		const resource = uri.slice(1)
		const response = await Data.getData(uri)
		this.setState({
			[resource]: response.data
		})
	}

	async getRoles() {
		const response = await Data.getResource('/roles')

		this.setState({
			roles: response.roles
		})
	}

	static ascendingSort(key, first, last) {
		if (key !== 'price') {
			return first[ key ] > last[ key ]
		}
		return first[ key ] - last[ key ]
	}

	static descendingSort(key, first, last) {
		if (key !== 'price') {
			return last[ key ] > first[ key ]
		}
		return last[ key ] - first[ key ]
	}

	sort(resource) {
		if (this.state.ascendingSort) {
			const newData = this.state.sortedData.slice().sort(ResourcesBody.ascendingSort.bind(null, resource.key))

			this.setState({
				sortedData: newData
			})
		} else {
			const newData = this.state.sortedData.slice().sort(ResourcesBody.descendingSort.bind(null, resource.key))

			this.setState({
				sortedData: newData
			})
		}
	}

	render() {
		const {columns, path, page, total, isChanged, changeFields} = this.props
		const {sortedData} = this.state
		if (isChanged) {
			return (
				<div
					className='table'
				>
					<Table
						selectable={false}
					>
						<TableHeader
							displaySelectAll={false}
							adjustForCheckbox={false}
						>
							<TableRow
								className='table__row'
							>
								<TableHeaderColumn
									className='table__header__column'
								>
									Характеристика
								</TableHeaderColumn>
								<TableHeaderColumn
									className='table__header__column'
								>
									До изменения
								</TableHeaderColumn>
								<TableHeaderColumn
									className='table__header__column'
								>
									После изменения
								</TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody
							displayRowCheckbox={false}
						>
							{
								changeFields.map((field, index) => {
									let before = []
									let after = []
									if (field.title === 'Категории') {
										this.state.categories.forEach(category => {
											const beforeSlugs = field.before.split(/, ?/)
											const afterSlugs = field.after.split(/, ?/)
											beforeSlugs.forEach(slug => {
												if (category.slug === slug) {
													before.push(category.title)
												}
											})
											afterSlugs.forEach(slug => {
												if (category.slug === slug) {
													after.push(category.title)
												}
											})
										})
									}
									if (field.title === 'Набор атрибутов') {
										this.state['attribute-sets'].forEach(set => {
											const beforeSlugs = field.before.split(/, ?/)
											const afterSlugs = field.after.split(/, ?/)
											beforeSlugs.forEach(slug => {
												if (set.slug === slug) {
													before.push(set.title)
												}
											})
											afterSlugs.forEach(slug => {
												if (set.slug === slug) {
													after.push(set.title)
												}
											})
										})
									}
									if (field.title === 'Набор табов') {
										this.state['tab-sets'].forEach(set => {
											const beforeSlugs = field.before.split(/, ?/)
											const afterSlugs = field.after.split(/, ?/)
											beforeSlugs.forEach(slug => {
												if (set.slug === slug) {
													before.push(set.title)
												}
											})
											afterSlugs.forEach(slug => {
												if (set.slug === slug) {
													after.push(set.title)
												}
											})
										})
									}
									if (field.title === 'Похожие продукты' || field.title === 'Из набора') {
										this.state.products.forEach(product => {
											const beforeSlugs = field.before.split(/, ?/)
											const afterSlugs = field.after.split(/, ?/)
											beforeSlugs.forEach(slug => {
												if (product.slug === slug) {
													before.push(product.title)
												}
											})
											afterSlugs.forEach(slug => {
												if (product.slug === slug) {
													after.push(product.title)
												}
											})
										})
									}
									return (
										<TableRow
											className='table__row'
											key={index}
										>
											<TableRowColumn>
												{field.title}
											</TableRowColumn>
											<TableRowColumn>
												{
													field.title === 'Категории' ||
													field.title === 'Набор атрибутов' ||
													field.title === 'Набор табов' ||
													field.title === 'Похожие продукты' ||
													field.title === 'Из набора'
														? before.join(', ')
														: field.before
												}
											</TableRowColumn>
											<TableRowColumn>
												{
													field.title === 'Категории' ||
													field.title === 'Набор атрибутов' ||
													field.title === 'Набор табов' ||
													field.title === 'Похожие продукты' ||
													field.title === 'Из набора'
														? after.join(', ')
														: field.after
												}
											</TableRowColumn>
										</TableRow>
									)
								})
							}
						</TableBody>
					</Table>
				</div>
			)
		} else {
			return (
				<div
					className='table'
				>
					<Table
						selectable={false}
					>
						<TableHeader
							displaySelectAll={false}
							adjustForCheckbox={false}
						>
							<TableRow
								className='table__row'
							>
								{columns.map((column, key) => (
									<TableHeaderColumn
										key={key}
										className='table__header__column'
									>
										<div
											onClick={() => {
												this.sort(column)
												this.setState({
													ascendingSort: !this.state.ascendingSort
												})
											}}
											style={{
												cursor: 'pointer'
											}}
										>
											{column.name}
										</div>
									</TableHeaderColumn>
								))}
								<TableHeaderColumn/>
								<TableHeaderColumn/>
							</TableRow>
						</TableHeader>
						<TableBody
							displayRowCheckbox={false}
						>
							{sortedData.map((data, key) => {
								if ((
									(
										key + 1 >= page * 10 - 9) && (
									(
										total > (
										page % 10) * 10) && (
									key + 1 <= (
									page % 10) * 10) || (
									total <= (
									page % 10) * 10) && (
									key + 1 <= total))))
								{
									return (
										<TableRow
											key={key}
											className='table__row'
										>
											{columns.map((column, i) => {
												if (typeof data[column.key] === 'boolean') {
													if (data[column.key]) {
														return (
															<TableRowColumn key={i}>
																<TrueIcon/>
															</TableRowColumn>
														)
													}
													return (
														<TableRowColumn key={i}>
															<FalseIcon/>
														</TableRowColumn>
													)
												}
												if (column.key instanceof Array && !!data[column.key[0]]) {
													return (
														<TableRowColumn
															key={i}
														>
															{data[column.key[0]][column.key[1]]}
														</TableRowColumn>
													)
												}
												if (column.key === 'role') {
													return this.state.roles.map(role => {
														if (data.role === role.slug) {
															return <TableRowColumn key={i}>{role.name}</TableRowColumn>
														}
													})
												}
												if (column.key === 'price') {
													return (
														<TableRowColumn key={i}>
															<TextField
																style={{
																	width: 60
																}}
																value={!!this.state.data[data.slug] ? this.state.data[data.slug] : ''}
																onChange={(event, value) => {
																	this.setState({
																		data: {
																			...this.state.data,
																			[data.slug]: value
																		}
																	})
																}}
															/>
															<SaveIcon
																color='rgb(0, 188, 212)'
																style={{
																	marginLeft: 10,
																	cursor: 'pointer'
																}}
																onClick={() => {
																	const url = this.props.path
																	Data.edit(url, {
																		...data,
																		price: this.state.data[data.slug]
																	})
																}}
															/>
														</TableRowColumn>
													)
												}
												if (column.key === 'categories') {
													return (
														<TableRowColumn
															key={i}
														>
															<div
																style={{
																	display: 'flex',
																	flexWrap: 'wrap'
																}}
															>
																{this.state.categories.map((category, i) => {
																	return data.categories.map(productCategory => {
																		if (category.slug === productCategory) {
																			return (
																				<Chip
																					style={{
																						margin: '4px'
																					}}
																					key={i}
																				>
																					{category.title}
																				</Chip>
																			)
																		}
																	})
																})}
															</div>
														</TableRowColumn>
													)
												}
												return <TableRowColumn key={i}>{data[column.key]}</TableRowColumn>
											})}
											{
												this.props.path !== '/logs'
													? <TableRowColumn>
														<Link
															to={`${path}/${data._id}`}
														>
															<EditIcon
																color='rgb(0, 188, 212)'
															/>
														</Link>
													</TableRowColumn>
													: null
											}
											{
												this.props.path === '/logs' && data.actionType === 'edit'
													? (
														<TableRowColumn>
															<Link
																to={`${path}/${data._id}/changes`}
															>
																<ChangesAll
																	color='rgb(0, 188, 212)'
																/>
															</Link>
														</TableRowColumn>
													)
													: this.props.path === '/logs'
														? <TableRowColumn/>
														: null
											}
											<TableRowColumn>
												<Link
													to={`${path}/${data._id}/delete`}
												>
													<DeleteIcon
														color='rgb(255, 64, 129)'
													/>
												</Link>
											</TableRowColumn>
										</TableRow>
									)
								}
							})}
						</TableBody>
					</Table>
				</div>
			)
		}
	}
}
