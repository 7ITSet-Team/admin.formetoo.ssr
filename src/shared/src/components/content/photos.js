import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import { Link } from 'react-router-dom'

export default class Photos extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {data} = this.props
		return (
			<GridList
				cellHeight={180}
				cols={4}
				className='photos__gridlist'
			>
				{data.map((item, key) => {
					return (
						<GridTile
							key={key}
							title=" "
							actionIcon={
								<Link
									to={'photos/' + item._id + '/delete'}
								>
									<DeleteIcon
										color='rgb(255, 64, 129)'
										style={{
											cursor: 'pointer'
										}}
									/>
								</Link>
							}
						>
							<img
								src={item.url}
							/>
						</GridTile>
					)
				})}
			</GridList>
		)
	}
}