export default {
	uri: {
		admin: process.env.NODE_ENV === 'production' ? 'http://admin.formetoo.ru/api' : 'http://localhost:3001/api',
		login: process.env.NODE_ENV === 'production' ? 'http://admin.formetoo.ru/api/login' : 'http://localhost:3001/api/login',
		allowed: process.env.NODE_ENV === 'production' ? 'http://admin.formetoo.ru/api/allowed' : 'http://localhost:3001/api/allowed'
	}
}