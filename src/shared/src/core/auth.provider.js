import axios from 'axios'
import config from '@src/config'
import sha256 from 'js-sha256'
import localStorage from 'localStorage'
import md5 from 'md5'

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
		const salt1 = 'AQRp;S~G=&rG!>}rso!A3<B-[j?uO5f/--Z5v8Af=Qo+L?=Xe8=i[wyNBFn!HyB'
		const salt2 = '#!cgW0mbPC&r*_m>Kozn{.H=)W^3YB>_5i@>_{f_tV+m*l\'}Ff/&r3\'kx!9NlX)'
		const salt3 = '4PH}d9wj=cl-RzQ\'YUvezTwzGv0a+*Qt@`2H.Gh;e$}jJu9>UxSY5f<kX@$gNU~'
		const hashedPassword = sha256(md5(salt1 + password + salt2) + salt3)
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