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
		            <link rel="stylesheet" href="/photo3d-html-files/v3/css/style.css" type="text/css" media="all" />
		
					<script src="/photo3d-html-files/v3/js/jquery-1.11.0.min.js" type="text/javascript"></script>
					<script src="/photo3d-html-files/v3/js/canvasloader.js" type="text/javascript"></script>
					<script src="/photo3d-html-files/v3/js/jquery.fullscreen-0.3.5.js" type="text/javascript"></script>
					<script src="/photo3d-html-files/v3/js/jquery.mousewheel.js" type="text/javascript"></script>
					<script src="/photo3d-html-files/v3/js/jquery.selection.js" type="text/javascript"></script>
					<script src="/photo3d-html-files/v3/js/jquery.metadata.js" type="text/javascript"></script>
					<script src="/photo3d-html-files/v3/js/jquery.photo3d.js" type="text/javascript"></script>
					<script src="/photo3d-html-files/v3/js/jquery.photo3dconfig.js" type="text/javascript"></script>
					<script src="/photo3d-html-files/v3/js/device.min.js" type="text/javascript"></script>
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


/**


 <img
 id='image'
 class="photo3d-preview-image {maxZoom:100, frames:53, yframes:1, useSeparateFrames:true, startImmediately:true, autoPlay:true, horizontalRangeLeft:0, horizontalRangeRight:0, verticalRangeBottom:0, verticalRangeTop:0, firstFrameX:0, firstFrameY:0, productCode:''}"
 src='/img3d_000045.jpg'
 border='0'
 width='800'
 height='600'
 />
 **/