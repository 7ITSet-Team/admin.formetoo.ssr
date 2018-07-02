import React from 'react'
import TextField from 'material-ui/TextField'

export default class TextInput extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {name, title, required, value, onChange} = this.props
		return (
			<TextField
				fullWidth={true}
				hintText={title}
				floatingLabelText={title}
				errorText={required ? 'Поле обязательно' : ''}
				name={name}
				value={value}
				onChange={onChange}
			/>
		)
	}
}