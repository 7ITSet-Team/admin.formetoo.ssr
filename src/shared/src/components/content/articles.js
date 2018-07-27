import React from 'react'
import ResourcesBody from '@src/components/content/resources-body'
import ResourcesHeader from '@src/components/content/resources-header'
import { CardTitle } from 'material-ui/Card/index'
import Data from '@src/core/data.provider'

export default class Articles extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: []
		}
		Data.getData('/articles')
			.then(response => this.setState({articles: response.data}))
	}

	render() {
		return (
			<div
				className='resource-page'
			>
				<ResourcesHeader
					path={this.props.match.url}
					filters={[]}
					title={
						<CardTitle
							title={this.props.title}
						/>
					}
				/>
				<ResourcesBody
					columns={[
						{
							name: 'Slug',
							key: 'slug'
						}, {
							name: 'Заголовок',
							key: 'title'
						}
					]}
					data={this.state.articles}
					path={this.props.match.url}
				/>
			</div>
		)
	}
}