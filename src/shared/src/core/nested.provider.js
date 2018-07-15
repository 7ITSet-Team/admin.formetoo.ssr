import React from 'react'
import CategoriesIcon from 'material-ui/svg-icons/action/bookmark'
import ProductsIcon from 'material-ui/svg-icons/action/list'

export default class NestedProvider {
	static drawNestedSetsTree(data, products) {
		console.log(data)
		if (data.length && products.length) {
			let ul = (
				<div>
				</div>
			)
			let tree = fetchChildElement(ul)
			return (
				<div>
					{tree}
				</div>
			)
		}

		function fetchChildElement(container, left, right) {
			data.filter(filterItems)
			return container

			function filterItems(item) {
				const {left_key, right_key, title} = item
				if (left_key === (
					left || 1))
				{
					let element = (
						<div
							style={{
								marginLeft: 10
							}}
						>
							{
								title !== 'Корневая'
								? (
									<div>
										<CategoriesIcon
											style={{
												color: 'gray',
												width: 17,
												height: 17
											}}
										/>
										{title}
									</div>
									)
								: null
							}
							{products.map(product => {
								if (product.categories.indexOf(item.slug) !== -1) {
									return (
										<div
											style={{
												marginLeft: 10
											}}
										>
											<ProductsIcon
												style={{
													color: 'gray',
													width: 17,
													height: 17
												}}
											/>
											{product.title}
										</div>
									)
								}
							})}
						</div>
					)
					if (left_key + 1 < right_key) {
						let childContainer = (
							<div
								style={{
									marginLeft: 10
								}}
							>
							</div>
						)
						let child = fetchChildElement(childContainer, left_key + 1, right_key - 1)
						element.props.children = [
							...element.props.children,
							child
						]
					}
					if (!!container.props.children) {
						container.props.children = [
							...container.props.children,
							element
						]
					} else {
						container.props.children = [element]
					}
					if (right && right_key < right) {
						fetchChildElement(container, right_key + 1, right)
					}
				}
			}
		}
	}
}