import React from 'react'
import { pinkA200, white } from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'
import LockOutline from 'material-ui/svg-icons/action/lock-outline'
import RaisedButton from 'material-ui/RaisedButton'
import { Redirect } from 'react-router-dom'

import Auth from '@src/core/auth.provider'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: null,
			password: null,
			authorised: false
		}
		this.login = this.login.bind(this)
	}

	componentWillMount() {
		Auth.init(
			() => this.setState({
				authorised: true
			}),
			() => this.setState({
				authorised: false
			})
		)
	}

	async login() {
		const {email, password} = this.state
		if (email && password) {
			const success = await Auth.login(email, password)
			if (success) {
				this.setState({
					authorised: true
				})
			}
		}
	}

	render() {
		const {email, password, authorised} = this.state
		if (authorised) {
			return <Redirect
				push
				to='/'
			/>
		}
		return (
			<div
				className='login-layout'
			>
				<Paper
					className='login-layout__window'
				>
					<div>
						<Avatar
							icon={<LockOutline/>}
							color={white}
							backgroundColor={pinkA200}
							size={60}
							className='login-layout__window__avatar'
						/>
					</div>
					<TextField
						floatingLabelText='Имя пользователя'
						errorText={(
							email === '') ? 'обязательно для заполнения' : undefined}
						onBlur={() => !email && this.setState({email: ''})}
						onChange={e => this.setState({email: e.target.value})}
						type='text' name='username'
					/>
					<TextField
						floatingLabelText='Пароль'
						errorText={(
							password === '') ? 'обязательно для заполнения' : undefined}
						onBlur={() => !password && this.setState({password: ''})}
						onChange={e => this.setState({password: e.target.value})}
						type='password' name='password'
					/>
					<RaisedButton
						label="ВОЙТИ"
						primary={true}
						className='login-layout__window__button'
						onClick={this.login}
					/>
				</Paper>
			</div>
		)
	}
}