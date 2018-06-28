import React from 'react'

import Dashboard from '@src/components/dashboard'
import Resource from '@src/components/resource-layout'
import ResourcesLayout from '@src/containers/resources-layout'
import RemoveLayout from '@src/containers/remove-layout'
import Profile from '@src/containers/profile'

import components from './components'

import listRoutes from './list'

export default (location, root) => {
	let resources = [
		'categories',
		'products',
		'orders',
		'users',
		'clients',
		'attributes',
		'attribute-sets',
		'tabs',
		'tab-sets',
		'statuses',
		'roles',
		'photos'
	]
	let routes = [
		{
			path: root,
			exact: true,
			component: Dashboard
		}, {
			path: root + 'profile',
			exact: true,
			component: () => <Profile
				location={location}
				resources='photos'
			/>
		}
	]
	listRoutes.forEach(route => {
		routes.push({
			path: root + route.resource,
			exact: true,
			component: () => <ResourcesLayout
				path={location}
				title={route.title}
				columns={route.columns}
				filters={route.filters}
			/>
		})
	})

	listRoutes.forEach(route => {
		routes.push({
			path: `${root}${route.resource}/create`,
			exact: true,
			component: () => <Resource
				resource={route.resource}
				structure={route.structure}
				action='create'
			/>
		})
		routes.push({
			path: `${root}${route.resource}/:id`,
			exact: true,
			component: (props) => <Resource
				resource={route.resource}
				structure={route.structure}
				action='edit'
				{...props}
			/>
		})
	})

	resources.forEach(resource => {
		/*routes.push({
			path: root + resource + '/create',
			exact: true,
			component: () => React.createElement(
				components[ resource.charAt(0).toUpperCase() + resource.slice(1) + 'Create' ],
				{path: location}
			)
		})
		routes.push({
			path: root + resource + '/:id',
			exact: true,
			component: () => React.createElement(
				components[ resource.charAt(0).toUpperCase() + resource.slice(1) + 'Edit' ],
				{location: location}
			)
		})*/
		routes.push({
			path: root + resource + '/:id/delete',
			exact: true,
			component: () => <RemoveLayout
				location={location}
				resources={resource}
			/>
		})
	})
	return routes
}