import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
import React from 'react'

import Launcher from '../shared/Launcher'

const app = express()

app.use(cors())

app.use(express.static("public"))

app.get("*", (req, res) => {
	const markup = renderToString(
		<Launcher />
	)

	res.send(`
    <!DOCTYPE html>
    <html>
		<head>
			<title>SSR with RR</title>
  			<script src="/bundle.js" defer></script>
		</head>
		<body>
			<div id="app">${markup}</div>
		</body>
    </html>
  `)
})

app.listen(8080, () => {
	console.log(`Server is listening on port: 8080`)
})