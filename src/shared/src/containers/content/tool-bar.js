import React from 'react'
import { Toolbar } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import { Redirect } from 'react-router-dom'
import sha256 from 'js-sha256'

import Data from '@src/core/data.provider'

export default class ToolBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			created: false,
			edited: false,
			deleted: false,
			canceled: false,
			add: false
		}
		this.handleRemoveButton = this.handleRemoveButton.bind(this)
		this.handleCancelButton = this.handleCancelButton.bind(this)
	}

	async handleSaveButton(action) {
		if (this.props.action === 'create') {
			if (this.props.resources === 'categories') {
				const data = {
					url: this.props.photo,
					creationDate: new Date().toLocaleString(),
					modificationDate: new Date().toLocaleString()
				}
				await Data.create('/photos', data)
			}
			if (this.props.resources === 'products') {
				let data = this.props.photos.map(photo => {
					return {
						url: photo,
						creationDate: new Date().toLocaleString(),
						modificationDate: new Date().toLocaleString()
					}
				})
				await Data.create('/photos', data)
			}
			let data = this.props.data
			if (this.props.resources === 'users') {
				const salt = '#!f$55723e.12d68,,b36fdcCC0ba7cf^%^d8f8e1c1793453_32'
				data.password = sha256(salt + data.password)
			}
			if (this.props.resources === 'products' || this.props.resources === 'categories') {
				data.seo.keywords = data.seo.keywords.split(', ')
			}
			data.creationDate = new Date().toLocaleString()
			data.modificationDate = new Date().toLocaleString()
			const result = await Data.create('/' + this.props.resources, data)
			if (result.success) {
				if (action === 'saveAndExit') {
					this.setState({
						created: true
					})
				}
				if (action === 'saveAndAdd') {
					this.setState({
						add: true
					})
				}
			}
		}
		if (this.props.action === 'edit') {
			if (this.props.resources === 'categories') {
				const data = {
					url: this.props.photo,
					creationDate: new Date().toLocaleString(),
					modificationDate: new Date().toLocaleString()
				}
				await Data.create('/photos', data)
			}
			if (this.props.resources === 'products') {
				let data = this.props.photos.map(photo => {
					return {
						url: photo,
						creationDate: new Date().toLocaleString(),
						modificationDate: new Date().toLocaleString()
					}
				})
				await Data.create('/photos', data)
			}
			const data = this.props.data
			if (this.props.resources === 'products' || this.props.resources === 'categories') {
				data.seo.keywords = data.seo.keywords.split(', ')
			}
			data.modificationDate = new Date().toLocaleString()
			const result = await Data.edit('/' + this.props.resources, data)
			if (result.success) {
				if (action === 'saveAndExit') {
					this.setState({
						edited: true
					})
				}
			}
		}
	}

	async handleRemoveButton() {
		const result = await Data.remove(this.props.resource)
		if (result.success) {
			this.setState({
				deleted: true
			})
		}
	}

	handleCancelButton() {
		this.setState({
			canceled: true
		})
	}

	render() {
		if (this.state.created || this.state.edited || this.state.deleted || this.state.canceled) {
			return (
				<Redirect
					push
					to={{
						pathname: '/' + this.props.resources
					}}
				/>
			)
		}
		if (this.state.add) {
			return (
				<Redirect
					to={'/' + this.props.resources + '/create'}
				/>
			)
		}
		if (this.props.action === 'delete') {
			return (
				<Toolbar
					style={{
						display: 'flex',
						justifyContent: 'flex-start'
					}}
				>
					<RaisedButton
						style={{
							margin: '10px'
						}}
						label="Удалить"
						onClick={this.handleRemoveButton}
						primary={true}
					/>
					<RaisedButton
						style={{
							margin: '10px'
						}}
						label="Отмена"
						primary={false}
						onClick={this.handleCancelButton}
					/>
				</Toolbar>
			)
		}
		if (this.props.action === 'create') {
			return (
				<Toolbar
					style={{
						display: 'flex',
						justifyContent: 'flex-start'
					}}
				>
					<RaisedButton
						style={{
							margin: '10px'
						}}
						label="Сохранить"
						primary={true}
						onClick={() => this.handleSaveButton('saveAndExit')}
					/>
					<RaisedButton
						style={{
							margin: '10px'
						}}
						label="Сохранить и создать"
						primary={true}
						onClick={() => this.handleSaveButton('saveAndAdd')}
					/>
				</Toolbar>
			)
		}
		if (this.props.action === 'edit') {
			return (
				<Toolbar
					style={{
						display: 'flex',
						justifyContent: 'flex-start'
					}}
				>
					<RaisedButton
						style={{
							margin: '10px'
						}}
						label="Применить"
						primary={true}
						onClick={() => this.handleSaveButton('apply')}
					/>
					<RaisedButton
						style={{
							margin: '10px'
						}}
						label="Применить и закрыть"
						primary={true}
						onClick={() => this.handleSaveButton('saveAndExit')}
					/>
				</Toolbar>
			)
		}
	}
}