import React from 'react'
import { Card } from 'material-ui/Card'

import Data from '@src/core/data.provider'
import Nested from '@src/core/nested.provider'
import Resources from '@src/containers/content/resources'

export default class ResourcesLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			resources: [],
			total: 0,
			statuses: [],
			changes: [],
			elements: []
		}
		this.getData()
		    .catch(err => console.log('resource-layout:16, Error getting data! ', err))
	}

	async getData() {
		if (this.props.tree) {
			const response = await Data.getData('/tree')
			const products = await Data.getData('/products')
			return this.setState({
				resources: response.data,
				products: products.data
			})
		}
		if (!this.props.changes) {
			const response = await Data.getData(this.props.path)
			if (this.props.path === '/orders') {
				const resStatuses = await Data.getResource('/statuses')
				const resClients = await Data.getResource('/clients')
				const statuses = response.data.map(data => {
					let arr = {}
					resStatuses.statuses.forEach(item => {
						if (item.slug === data.status) {
							arr = {
								...data,
								...arr,
								status: item.title
							}
						}
					})
					resClients.clients.forEach(item => {
						if (item.slug === data.client) {
							arr = {
								...data,
								...arr,
								client: item.name
							}
						}
					})
					return arr
				})
				this.setState({
					resources: statuses,
					total: response.total
				})
				return {
					resources: statuses,
					total: response.total
				}
			}
			this.setState({
				resources: response.data,
				total: response.total
			})
			return {
				resources: response.data,
				total: response.total
			}
		} else {
			const response = await Data.getResource(this.props.location.pathname)
			this.setState({
				changes: response
			})
		}
	}

	async refresh() {
		const response = await this.getData(this.props.path)
		this.setState({
			resources: response.resources,
			total: response.total
		})
	}

	render() {
		const {resources, total, statuses, products} = this.state
		const {title, path, tree} = this.props
		if (tree) {
			return (
				<div
					className='tree-layout'
				>
					{resources.length !== 0
						? <Nested
							data={resources}
							products={products}
							generateNodeProps={rowInfo => (
	                           <div
	                               style={{
		                               borderLeft: 'solid 8px gray',
		                               borderBottom: 'solid 10px gray',
		                               marginRight: 10,
		                               width: 16,
		                               height: 12,
		                               filter: 'drop-shadow(1px 0 0 gray) drop-shadow(0 1px 0 gray) drop-shadow(0 -1px 0 gray) drop-shadow(-1px 0 0 gray)',
		                               borderColor: 'white'
	                               }}
	                           />
							)}
						/>
						: null}
				</div>
			)
		}
		if (this.props.location === '/photos') {
			return (
				<Card>
					<Resources
						title={title}
						resources={resources}
						path={path}
						total={total}
					/>
				</Card>
			)
		}
		if (this.props.changes) {
			return (
				<Resources
					title='Изменения у продукта'
					isChanged
					changeFields={this.state.changes}
					match={this.props.match}
				/>
			)
		}
		const {columns, filters} = this.props
		return (
			<Resources
				columns={columns}
				title={title}
				statuses={statuses}
				resources={resources}
				path={path}
				total={total}
				refresh={() => this.refresh()}
				filters={filters}
			/>
		)
	}
}