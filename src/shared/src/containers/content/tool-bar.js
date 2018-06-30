import React from 'react'
import { Toolbar } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import { Redirect } from 'react-router-dom'

import Data from '@src/core/data.provider'

export default class ToolBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			created: false,
			edited: false,
			deleted: false,
			canceled: false,
			add: false
		};
		this.handleRemoveButton = this.handleRemoveButton.bind(this);
		this.handleCancelButton = this.handleCancelButton.bind(this)
	}

	handleSaveButton(action) {
		if (this.props.action === 'create') {
			if (this.props.resources === 'categories') {
				const data = {
					url: this.props.photo,
					creationDate: new Date().toLocaleString(),
					modificationDate: new Date().toLocaleString()
				}
				Data.create('/photos', data)
			}
			const data = this.props.data
			data.creationDate = new Date().toLocaleString()
			data.modificationDate = new Date().toLocaleString()
			Data.create('/' + this.props.resources, data)
			if (action === 'saveAndExit')
				this.setState({
					created: true
				})
			if (action === 'saveAndAdd')
				this.setState({
					add: true
				})
		}
		if (this.props.action === 'edit') {
			if (this.props.resources === 'categories') {
				const data = {
					url: this.props.photo,
					creationDate: new Date().toLocaleString(),
					modificationDate: new Date().toLocaleString()
				};
				Data.create('/photos', data)
			}
			const data = this.props.data;
			data.modificationDate = new Date().toLocaleString();
			Data.edit('/' + this.props.resources, data);
			if (action === 'saveAndExit')
				this.setState({
					edited: true
				})
		}
	}

	handleRemoveButton() {
		Data.remove(this.props.resource);
		this.setState({
			deleted: true
		})
	}

	handleCancelButton() {
		this.setState({
			canceled: true
		})
	}

	render() {
		if (this.state.created || this.state.edited || this.state.deleted || this.state.canceled)
			return (
				<Redirect
					push
					to={{
						pathname: '/' + this.props.resources,
						state: {
							kek: 'lol'
						}
					}}
				/>
			)
		if (this.state.add)
			return (
				<Redirect
					push
					to={'/' + this.props.resources + '/create'}
				/>
			)
		if (this.props.action === 'delete')
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
			);
		if (this.props.action === 'create')
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
			);
		if (this.props.action === 'edit')
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