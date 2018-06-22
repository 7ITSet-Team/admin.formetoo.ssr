import React from 'react'
import { hydrate } from 'react-dom'

import Launcher from '../shared/Launcher'

hydrate(
	<Launcher />,
	document.getElementById('app')
)