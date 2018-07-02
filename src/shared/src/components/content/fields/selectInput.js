import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export default class SelectInput extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {title, required, value, onChange, type, variants, key} = this.props
		console.log(123)
		return (
			<SelectField
				multiple={type === 'multipleSelect'}
				value={value}
				floatingLabelText={title}
				errorText={required ? 'Поле обязательно' : ''}
				onChange={onChange}
			>
				{
					variants.map((variant, index) => {
						return <MenuItem
							value={!!key ? variant[key] : variant.id}
							primaryText={variant.title}
							key={index}
						/>
					})
				}
			</SelectField>
		)
	}
}