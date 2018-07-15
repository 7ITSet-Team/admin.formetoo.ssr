import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
import React from 'react'
import bodyParser from 'body-parser'
import { StaticRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Launcher from '../shared/Launcher'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(express.static('public'))


app.get('*', (req, res) => {
	const context = {}
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
	res.send(`
		    <!DOCTYPE html>
		    <html>
				<head>
					<title>formetoo</title>
		            <script src="/bundle.js" defer></script>
		            <link rel="stylesheet" type="text/css" href="/styles/index.css" >
		            <link rel="stylesheet" type="text/css" href="/styles/wysiwyg.css" >
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
