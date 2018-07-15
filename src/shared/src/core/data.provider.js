import axios from 'axios'
import localStorage from 'localStorage'

import config from '@src/config'
import Auth from './auth.provider'

const axiosConfig = () => {
	return {
		headers: {
			'Authorization': Auth._token
		}
	}
}

export default class Data {

	static async getAllowedResources() {
		const response = await axios.get(config.uri.allowed, axiosConfig())
		return {
			success: response.data.success,
			allowed: response.data.allowed
		}
	}

	static async getProfile() {
		const response = await axios.get(config.uri.admin + '/profile', axiosConfig())
		if (response.data.success)
			return {
				success: true,
				profile: response.data.user
			}
		else
			return {
				success: false,
				msg: response.data.msg
			}
	}

	static async getData(uri) {
		const resource = uri.slice(1)
		const response = await axios.get(config.uri.admin + uri, axiosConfig())
		if (response.data.success)
			return {
				success: true,
				data: response.data[resource],
				total: response.data.total
			}
		else
			return {
				success: false,
				data: [],
				total: 0,
				msg: response.data.msg
			}
	}

	static async getResource(uri) {
		const response = await axios.get(config.uri.admin + uri, axiosConfig())
		return response.data
	}

	static async getAttributes(sets) {
		const response = await axios.post(config.uri.admin + '/products/get/attributes', sets, axiosConfig())
		return response.data
	}

	static async getTabs(sets) {
		const response = await axios.post(config.uri.admin + '/products/get/tabs', sets, axiosConfig())
		return response.data
	}

	static async uploadImage(uri, data) {
		let formData = new FormData()
		formData.append('file', data.file)
		formData.append('addWaterMark', data.imageData.addWaterMark)
		formData.append('rotation', data.imageData.rotation)
		const result = await axios.post(config.uri.admin + uri, formData, axiosConfig())
		return result.data.url
	}

	static async uploadImages(uri, data) {
		let formData = new FormData()
		formData.append('file', data.file)
		formData.append('addWaterMark', data.imageData.addWaterMark)
		formData.append('rotation', data.imageData.rotation)
		const result = await axios.post(config.uri.admin + uri, formData, axiosConfig())
		return result.data.url
	}

	static async uploadFile(data) {
		let formData = new FormData()
		formData.append('file', data)
		const result = await axios.post(config.uri.admin + '/upload', formData, axiosConfig())
		return result
	}

	static async uploadXls(uri, data) {
		let formData = new FormData()
		formData.append('file', data)
		const response = await axios.post(config.uri.admin + '/export' + uri, formData, axiosConfig())
		if (response.data.success)
			return {
				success: true
			}
		else
			return {
				success: false
			}
	}

	static async importXls(uri) {
		const response = await axios.get(config.uri.admin + '/import' + uri, axiosConfig())
		if (response.data.success)
			return {
				success: true
			}
		else
			return {
				success: false
			}
	}

	static async create(uri, data) {
		const result = await axios.post(config.uri.admin + uri, data, axiosConfig())
		return result.data
	}

	static async edit(uri, data) {
		if (uri === '/profile') {
			const response = await axios.post(config.uri.admin + uri + '/', data, axiosConfig())
			Auth._token = response.data.token
			return {
				success: true,
				email: response.data.profile.email
			}
		}
		const url = config.uri.admin + uri + '/' + data._id
		const result = await axios.post(url, data, axiosConfig())
		return result.data
	}

	static async remove(uri) {
		const result = await axios.post(config.uri.admin + uri, null, axiosConfig())
		return result.data
	}
}
