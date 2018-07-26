import React from 'react'
import { Toolbar } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import { Redirect } from 'react-router-dom'
import sha256 from 'js-sha256'

import Data from '@src/core/data.provider'
import md5 from 'md5'

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
		if (this.props.action === 'create' || this.props.action === 'universal') {
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
				const salt1 = 'AQRp;S~G=&rG!>}rso!A3<B-[j?uO5f/--Z5v8Af=Qo+L?=Xe8=i[wyNBFn!HyB'
				const salt2 = '#!cgW0mbPC&r*_m>Kozn{.H=)W^3YB>_5i@>_{f_tV+m*l\'}Ff/&r3\'kx!9NlX)'
				const salt3 = '4PH}d9wj=cl-RzQ\'YUvezTwzGv0a+*Qt@`2H.Gh;e$}jJu9>UxSY5f<kX@$gNU~'
				data.password = sha256(md5(salt1 + data.password + salt2) + salt3)
			}
			if ((this.props.resources === 'products' || this.props.resources === 'categories') && !(data.seo.keywords instanceof Array)) {
				data.seo.keywords = data.seo.keywords.split(/, ?/)
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
			} else {
				console.error(result)
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
			if (this.props.resources === 'profile') {
				let data = this.props.data
				const salt1 = 'AQRp;S~G=&rG!>}rso!A3<B-[j?uO5f/--Z5v8Af=Qo+L?=Xe8=i[wyNBFn!HyB'
				const salt2 = '#!cgW0mbPC&r*_m>Kozn{.H=)W^3YB>_5i@>_{f_tV+m*l\'}Ff/&r3\'kx!9NlX)'
				const salt3 = '4PH}d9wj=cl-RzQ\'YUvezTwzGv0a+*Qt@`2H.Gh;e$}jJu9>UxSY5f<kX@$gNU~'
				data.password = sha256(md5(salt1 + data.password + salt2) + salt3)
				const result = await Data.edit('/' + this.props.resources, data)
				if (result.success) {
					if (action === 'saveAndExit') {
						this.setState({
							edited: true
						})
					}
				}
			}
			const data = this.props.data
			if (this.props.resources === 'users') {
				const salt1 = 'AQRp;S~G=&rG!>}rso!A3<B-[j?uO5f/--Z5v8Af=Qo+L?=Xe8=i[wyNBFn!HyB'
				const salt2 = '#!cgW0mbPC&r*_m>Kozn{.H=)W^3YB>_5i@>_{f_tV+m*l\'}Ff/&r3\'kx!9NlX)'
				const salt3 = '4PH}d9wj=cl-RzQ\'YUvezTwzGv0a+*Qt@`2H.Gh;e$}jJu9>UxSY5f<kX@$gNU~'
				data.password = sha256(md5(salt1 + data.password + salt2) + salt3)
			}
			if ((this.props.resources === 'products' || this.props.resources === 'categories') && !(data.seo.keywords instanceof Array)) {
				data.seo.keywords = data.seo.keywords.split(/, ?/)
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
		if (this.state.edited && this.props.resources === 'profile') {
			return (
				<Redirect
					push
					to={{
						pathname: '/'
					}}
				/>
			)
		}
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
		if (this.props.action === 'universal') {
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
				</Toolbar>
			)
		}
	}
}