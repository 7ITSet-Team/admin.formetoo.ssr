import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export default class SelectInput extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {title, required, value, onChange, type, variants, field} = this.props
		return (
			<SelectField
				multiple={type === 'multipleSelect'}
				value={value}
				floatingLabelText={title}
				errorText={required ? 'Поле обязательно' : ''}
				onChange={(event, index, value) => onChange(value)}
			>
				{
					variants.map((variant, index) => {
						return <MenuItem
							value={variant[field]}
							primaryText={variant.title}
							key={index}
						/>
					})
				}
			</SelectField>
		)
	}
}