import axios from 'axios'
import config from '@src/config'
import sha256 from 'js-sha256'
import localStorage from 'localStorage'

export default class Auth {
	static get _token() {
		return localStorage.getItem('token')
	}

	static set _token(token) {
		localStorage.setItem('token', token)
		return true
	}

	static _clearToken() {
		localStorage.removeItem('token')
		return true
	}

	static init(onLoginAction, onLogoutAction) {
		Auth.onLoginAction = onLoginAction || (
			() => undefined)
		Auth.onLogoutAction = onLogoutAction || (
			() => undefined)
		return true
	}

	static isAuthorizedSession() {
		return !!Auth._token
	}

	static logout() {
		Auth._clearToken()
		Auth.onLogoutAction()
		return true
	}

	static async login(email, password) {
		const salt = '#!f$55723e.12d68,,b36fdcCC0ba7cf^%^d8f8e1c1793453_32'
		const hashedPassword = sha256(salt + password)
		const response = await axios.post(config.uri.login, {email, password: hashedPassword})
		if (response.data.success) {
			Auth._token = response.data.token
			Auth.onLoginAction()
			return true
		}
		return {
			success: 'false',
			msg: response.msg
		}
	}
}