export default [{
	resource: 'photos',
	title: 'Лента фотографий',
	columns: [],
	filters: []
}, {
	resource: 'statuses',
	title: 'Список статусов',
	columns: [{
		name: 'ЗАГОЛОВОК',
		key: 'title'
	}],
	filters: []
}, {
	resource: 'tab-sets',
	title: 'Список наборов табов',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'title'
	}],
	filters: []
}, {
	resource: 'tabs',
	title: 'Список табов',
	columns: [{
		name: 'ЗАГОЛОВОК',
		key: 'title'
	}],
	filters: []
}, {
	resource: 'attribute-sets',
	title: 'Список наборов атрибутов',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'title'
	}],
	filters: []
}, {
	resource: 'attributes',
	title: 'Список атрибутов',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'title'
	}, {
		name: 'ТИП',
		key: 'attrType'
	}, {
		name: 'ОБЯЗАТЕЛЬНЫЙ',
		key: 'isRequired'
	}, {
		name: 'ПОКАЗЫВАТЬ В ФИЛЬТРЕ',
		key: 'showInFilter'
	}],
	filters: [{
		type: 'title',
		title: 'Заголовок'
	}, {
		type: 'type',
		title: 'Тип'
	}, {
		type: 'isRequired',
		title: 'Обязательный'
	}, {
		type: 'showInFilter',
		title: 'Показать в фильтре'
	}]
}, {
	resource: 'orders',
	title: 'Список заказов',
	columns: [{
		name: 'ДАТА',
		key: 'creationDate'
	}, {
		name: 'СТАТУС',
		key: 'status',
	}, {
		name: 'КЛИЕНТ',
		key: 'client',
	}, {
		name: 'СУММА',
		key: 'sum'
	}],
	filters: [{
		type: 'client',
		title: 'Клиент'
	}]
}, {
	resource: 'clients',
	title: 'Список клиентов',
	columns: [{
		name: 'ИМЯ',
		key: 'name'
	}, {
		name: 'ПОЧТА',
		key: 'email'
	}, {
		name: 'ТЕЛЕФОН',
		key: 'phone'
	}],
	filters: [{
		type: 'name',
		title: 'Имя'
	}, {
		type: 'email',
		title: 'Почта'
	}]
}, {
	resource: 'roles',
	title: 'Список ролей',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'name'
	}],
	filters: []
}, {
	resource: 'users',
	title: 'Список пользователей',
	columns: [{
		name: 'ПОЛЬЗОВАТЕЛЬ',
		key: 'name'
	}, {
		name: 'ПОЧТА',
		key: 'email'
	}, {
		name: 'РОЛЬ',
		key: 'role'
	}],
	filters: [{
		type: 'name',
		title: 'Имя'
	}, {
		type: 'email',
		title: 'Почта'
	}, {
		type: 'role',
		title: 'Роль'
	}]
}, {
	resource: 'categories',
	title: 'Список категорий',
	columns: [{
		name: 'ЗАГОЛОВОК',
		key: 'title'
	}],
	filters: [{
		type: 'title',
		title: 'Заголовок'
	}, {
		type: 'creationDateStart',
		title: 'Дата создания от'
	}, {
		type: 'creationDateEnd',
		title: 'Дата создания до'
	}, {
		type: 'modificationDateStart',
		title: 'Дата изменения от'
	}, {
		type: 'modificationDateEnd',
		title: 'Дата изменения до'
	}]
}, {
	resource: 'products',
	title: 'Список продуктов',
	columns: [{
		name: 'АРТИКУЛ',
		key: 'sku'
	}, {
		name: 'ТОВАР',
		key: 'title'
	}, {
		name: 'Категории',
		key: 'categories'
	}, {
		name: 'ЦЕНА',
		key: 'price'
	}, {
		name: 'АКТИВНЫЙ',
		key: 'isActive'
	}],
	filters: [{
		type: 'title',
		title: 'Название'
	}, {
		type: 'sku',
		title: 'Артикул'
	}, {
		type: 'isActive',
		title: 'Активный'
	}, {
		type: 'attribute-sets',
		title: 'Набор атрибутов'
	}, {
		type: 'category',
		title: 'Категория'
	}, {
		type: 'priceStart',
		title: 'Цена от'
	}, {
		type: 'priceEnd',
		title: 'Цена до'
	}]
}]