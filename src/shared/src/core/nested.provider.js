import React from 'react'
import CategoriesIcon from 'material-ui/svg-icons/action/bookmark'
import ProductsIcon from 'material-ui/svg-icons/action/list'
import SortableTree from 'react-sortable-tree'
import { Redirect } from 'react-router-dom'

export default class NestedProvider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			treeData: this.getNestedSetsTree(this.props.data, this.props.products),
			redirect: false,
			redirectPath: ''
		}
	}

	getNestedSetsTree(data, products) {
		function getTreeFromFlatData({
			                             flatData,
			                             getKey = node => node.slug,
			                             getParentKey = node => node.parentCategory || node.categories,
			                             rootKey = 'b364bss55ow'
		                             })
		{
			if (!flatData) {
				return []
			}

			const childrenToParents = {}
			flatData.forEach(child => {
				const parentKey = getParentKey(child)
				if (parentKey instanceof Array) {
					child.type = 'product'
					parentKey.forEach(key => {
						if (key in childrenToParents) {
							childrenToParents[key].push(child)
						} else {
							childrenToParents[key] = [child]
						}
					})
					return
				}
				child.type = 'category'
				if (parentKey in childrenToParents) {
					childrenToParents[parentKey].push(child)
				} else {
					childrenToParents[parentKey] = [child]
				}
			})

			if (!(
				rootKey in childrenToParents))
			{
				return []
			}

			const trav = parent => {
				const parentKey = getKey(parent)
				if (parentKey in childrenToParents) {
					return {
						...parent,
						children: childrenToParents[parentKey].map(child => trav(child))
					}
				}

				return {...parent}
			}

			return childrenToParents[rootKey].map(child => trav(child))
		}

		return getTreeFromFlatData({
			flatData: [...data, ...products]
		})
	}

	render() {
		if (this.state.redirect) {
			return (
				<Redirect
					to={this.state.redirectPath}
					push
				/>
			)
		}
		return (
			<div style={{height: '100%'}}>
				<SortableTree
					treeData={this.state.treeData}
					onChange={treeData => this.setState({treeData})}
					generateNodeProps={rowInfo => {
						return {
							onClick: event => {
								if (event.target.className.includes('collapseButton') || event.target.className.includes('expandButton')) {
								} else {
									if (rowInfo.node.type === 'product') {
										this.setState({
											redirect: true,
											redirectPath: `/products/${rowInfo.node._id}`
										})
									}
									if (rowInfo.node.type === 'category') {
										this.setState({
											redirect: true,
											redirectPath: `/categories/${rowInfo.node._id}`
										})
									}
								}
							},
							style: {
								cursor: 'pointer'
							}
						}
					}}
				/>
			</div>
		)
	}
}