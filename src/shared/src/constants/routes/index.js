import React from 'react'

import Dashboard from '@src/components/content/dashboard'
import Profile from '@src/containers/content/profile'
import ResourceCreateEditLayout from '@src/containers/content/resource-create-edit-layout'
import ResourcesLayout from '@src/containers/content/resources-layout'
import RemoveLayout from '@src/containers/content/remove-layout'

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
			component: () => <ResourceCreateEditLayout
				resource={route.resource}
				structure={route.structure}
				action='create'
			/>
		})
		routes.push({
			path: `${root}${route.resource}/:id`,
			exact: true,
			component: (props) => <ResourceCreateEditLayout
				resource={route.resource}
				structure={route.structure}
				action='edit'
				{...props}
			/>
		})
	})

	resources.forEach(resource => {
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