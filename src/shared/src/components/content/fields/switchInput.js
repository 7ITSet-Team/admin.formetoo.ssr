import React from 'react'
import Toggle from 'material-ui/Toggle'

export default class SwitchInput extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {title, onToggle, toggled} = this.props
		return (
			<Toggle
				style={{
					width: '250px'
				}}
				toggled={toggled}
				label={title}
				onToggle={onToggle}
			/>
		)
	}
}