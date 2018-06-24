/* eslint-disable indent */
import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
import React from 'react'
import bodyParser from 'body-parser'
import { matchPath, StaticRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Launcher from '../shared/Launcher'
import routes from '@src/constants/routes/index'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(express.static('public'))

const context = {}

app.get('*', (req, res) => {
	const match = routes(req.url, '/').reduce((acc, route) => matchPath(req.url, {path: route, exact: true}) || acc, null)
	if (!match) {
		res.status(404)
			.send('Page not found')
		return
	}

	const markup = renderToString(
		<MuiThemeProvider>
			<StaticRouter
				context={context}
				location={req.url}
			>
				<Launcher/>
			</StaticRouter>
		</MuiThemeProvider>
	)

	res.status(200)
		.send(`
		    <!DOCTYPE html>
		    <html>
				<head>
					<title>formetoo</title>
		            <script src="/bundle.js" defer></script>
		            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
				</head>
				<body>
					<div id="app">${markup}</div>
				</body>
		    </html>
  		`)
})

app.listen(3000, () => {
	console.log('Server listening on port 3000!')
})
