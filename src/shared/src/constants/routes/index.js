import React from 'react'

import Dashboard from '@src/components/content/dashboard'
import Profile from '@src/containers/content/profile'
import ResourceCreateEditTemplate from '@src/containers/content/resource-create-edit-template'
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
		'photos',
		'logs'
	]
	let structureLegalEntity = {
		tabs: [
			{
				title: 'ОСНОВНОЕ',
				className: 'big-resource',
				content: [
					{
						type: 'customFile',
						name: 'logo',
						title: 'Логотип',
						defaultValue: '',
						required: true
					}, {
						type: 'customFile',
						name: 'companySeal',
						title: 'Печать предприятия',
						defaultValue: '',
						required: true
					}, {
						type: 'customFile',
						name: 'signatureGenDirector',
						title: 'Подпись ген. директора',
						defaultValue: '',
						required: true
					},{
						type: 'customFile',
						name: 'signatureChiefAccountant',
						title: 'Подпись глав.бухгалтера',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'firstname',
						title: 'Имя',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'lastname',
						title: 'Фамилия',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'patronymic',
						title: 'Отчество',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'post',
						title: 'Должность',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'tin',
						title: 'ИНН',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'msrn',
						title: 'ОГРН',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'rcf',
						title: 'КПП',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'rs',
						title: 'Расчётный счет',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'ks',
						title: 'Корреспондентский счёт',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'legalAddress',
						title: 'Юридический адрес',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'actualAddress',
						title: 'Фактический адрес',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'phone',
						title: 'Телефон',
						defaultValue: '',
						required: true
					}, {
						type: 'textInput',
						name: 'email',
						title: 'Эл. почта',
						defaultValue: '',
						required: true
					}
				]
			}
		]
	}

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
		}, {
			path: root + 'logs/:id/changes',
			exact: true,
			component: (props) => <ResourcesLayout
				changes
				{...props}
			/>
		}, {
			path: root + 'tree',
			exact: true,
			component: (props) => <ResourcesLayout
				tree
				{...props}
			/>
		}, {
			path: root + 'legalentity',
			exact: true,
			component: (props) => <ResourceCreateEditTemplate
				resource='legalentity'
				structure={structureLegalEntity}
				action='universal'
				{...props}
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

		routes.push({
			path: `${root}${route.resource}/create`,
			exact: true,
			component: () => <ResourceCreateEditTemplate
				resource={route.resource}
				structure={route.structure}
				action='create'
			/>
		})
		routes.push({
			path: `${root}${route.resource}/:id`,
			exact: true,
			component: (props) => <ResourceCreateEditTemplate
				resource={route.resource}
				structure={route.structure}
				action='edit'
				{...props}
			/>
		})
		routes.push({
			path: `${root}${route.resource}/:id/copy`,
			exact: true,
			component: (props) => <ResourceCreateEditTemplate
				resource={route.resource}
				structure={route.structure}
				copy
				action='copy'
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