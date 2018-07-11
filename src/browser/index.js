import React from 'react'
import { hydrate } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Launcher from '../shared/Launcher'

hydrate(
	<MuiThemeProvider>
		<HashRouter>
			<Launcher/>
		</HashRouter>
	</MuiThemeProvider>,
	document.getElementById('app')
)
