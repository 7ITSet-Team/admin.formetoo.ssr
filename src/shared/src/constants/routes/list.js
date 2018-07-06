export default [
	{
		resource: 'photos',
		title: 'Лента фотографий',
		columns: [],
		filters: []
	},
	{
		resource: 'statuses',
		title: 'Список статусов',
		columns: [
			{
				name: 'ЗАГОЛОВОК',
				key: 'title'
			}
		],
		filters: [],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					content: [
						{
							type: 'textInput',
							title: 'Заголовок(наименование)',
							name: 'title',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}
			]
		}
	},
	{
		resource: 'tab-sets',
		title: 'Список наборов табов',
		columns: [
			{
				name: 'НАЗВАНИЕ',
				key: 'title'
			}
		],
		filters: [],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					content: [
						{
							type: 'textInput',
							title: 'Заголовок',
							name: 'title',
							defaultValue: '',
							required: true
						}, {
							type: 'multipleSelect',
							title: 'Табы',
							name: 'tabs',
							defaultValue: [],
							required: true
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}
			]
		}
	},
	{
		resource: 'tabs',
		title: 'Список табов',
		columns: [
			{
				name: 'ЗАГОЛОВОК',
				key: 'title'
			}
		],
		filters: [],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					content: [
						{
							type: 'boolean',
							title: 'Показывать в фильтре',
							name: 'showInFilter',
							required: false
						},{
							type: 'boolean',
							title: 'Показывать на странице товара',
							name: 'showInProductPage',
							required: false
						},{
							type: 'boolean',
							title: 'Показывать в списке',
							name: 'showInList',
							required: false
						},{
							type: 'boolean',
							title: 'Обязательный',
							name: 'isRequired',
							required: false
						},
						{
							type: 'textInput',
							title: 'Наименование',
							name: 'name',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Заголовок',
							name: 'title',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Единица измерения',
							name: 'unit',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				},
				{
					title: 'ТИП',
					content: [
						{
							type: 'select',
							title: 'Тип',
							name: 'tabType',
							variants: [
								{
									id: 'multipleSelect',
									title: 'Множественный список'
								}, {
									id: 'textInput',
									title: 'Текстовое поле'
								}, {
									id: 'select',
									title: 'Список'
								}, {
									id: 'numberInput',
									title: 'Числовое поле'
								}, {
									id: 'textBlock',
									title: 'Текстовый блок'
								}, {
									id: 'boolean',
									title: 'Да/Нет'
								}, {
									id: 'interval',
									title: 'Интервал'
								}
							],
							defaultValue: 'textInput',
							required: true
						}
					]
				}
			]
		}
	},
	{
		resource: 'attribute-sets',
		title: 'Список наборов атрибутов',
		columns: [
			{
				name: 'НАЗВАНИЕ',
				key: 'title'
			}
		],
		filters: [],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					content: [
						{
							type: 'textInput',
							title: 'Наименование',
							name: 'title',
							defaultValue: '',
							required: true
						}, {
							type: 'multipleSelect',
							title: 'Атрибуты',
							name: 'attributes',
							defaultValue: [],
							required: true
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}
			]
		}
	},
	{
		resource: 'attributes',
		title: 'Список атрибутов',
		columns: [
			{
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
			}
		],
		filters: [
			{
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
			}
		],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					content: [
						{
							type: 'boolean',
							title: 'Показывать в фильтре',
							name: 'showInFilter',
							required: false
						},{
							type: 'boolean',
							title: 'Показывать на странице товара',
							name: 'showInProductPage',
							required: false
						},{
							type: 'boolean',
							title: 'Показывать в списке',
							name: 'showInList',
							required: false
						},{
							type: 'boolean',
							title: 'Обязательный',
							name: 'isRequired',
							required: false
						}, {
							type: 'textInput',
							title: 'Наименование',
							name: 'name',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Заголовок',
							name: 'title',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Единица измерения',
							name: 'unit',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}, {
					title: 'ТИП',
					content: [
						{
							type: 'select',
							title: 'Тип',
							name: 'attrType',
							variants: [
								{
									id: 'multipleSelect',
									title: 'Множественный список'
								}, {
									id: 'textInput',
									title: 'Текстовое поле'
								}, {
									id: 'select',
									title: 'Список'
								}, {
									id: 'numberInput',
									title: 'Числовое поле'
								}, {
									id: 'textBlock',
									title: 'Текстовый блок'
								}, {
									id: 'boolean',
									title: 'Да/Нет'
								}, {
									id: 'interval',
									title: 'Интервал'
								}
							],
							defaultValue: 'textInput',
							required: true
						}
					]
				}
			]
		}
	},
	{
		resource: 'orders',
		title: 'Список заказов',
		columns: [
			{
				name: 'ДАТА',
				key: 'creationDate'
			}, {
				name: 'СТАТУС',
				key: 'status'
			}, {
				name: 'КЛИЕНТ',
				key: 'client'
			}, {
				name: 'СУММА',
				key: 'sum'
			}
		],
		filters: [
			{
				type: 'client',
				title: 'Клиент'
			}
		],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					content: [
						{
							type: 'select',
							title: 'Статус',
							name: 'status',
							needResources: 'statuses',
							defaultValue: '',
							required: true
						}, {
							type: 'select',
							title: 'Заказчик',
							name: 'client',
							needResources: 'clients',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}, {
					title: 'ПРОДУКТЫ',
					content: [
						{
							type: 'table',
							columns: [
								{
									name: 'sku',
									title: 'Артикул'
								}, {
									name: 'title',
									title: 'Наименование'
								}, {
									name: 'price',
									title: 'Цена'
								}
							],
							name: 'products'
						}, {
							type: 'pushTable',
							title: 'Продукт',
							needResources: 'products',
							name: 'products'
						}
					]
				}, {
					title: 'АДРЕС',
					content: [
						{
							type: 'textInput',
							name: ['address', 'country'],
							title: 'Страна',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: ['address', 'state'],
							title: 'Область',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: ['address', 'city'],
							title: 'Город',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: ['address', 'street'],
							title: 'Улица',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: ['address', 'building'],
							title: 'Дом',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: ['address', 'apartment'],
							title: 'Квартира',
							defaultValue: '',
							required: true
						}
					]
				}
			]
		}
	},
	{
		resource: 'clients',
		title: 'Список клиентов',
		columns: [
			{
				name: 'ИМЯ',
				key: 'name'
			}, {
				name: 'ПОЧТА',
				key: 'email'
			}, {
				name: 'ТЕЛЕФОН',
				key: 'phone'
			}
		],
		filters: [
			{
				type: 'name',
				title: 'Имя'
			}, {
				type: 'email',
				title: 'Почта'
			}
		],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					content: [
						{
							type: 'textInput',
							name: 'name',
							title: 'Имя',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: 'email',
							title: 'Почта',
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
							name: 'password',
							title: 'Пароль',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				},
				{
					title: 'АДРЕСА',
					content: [
						{
							type: 'table',
							columns: [
								{
									name: 'country',
									title: 'Страна'
								}, {
									name: 'state',
									title: 'Область'
								}, {
									name: 'city',
									title: 'Город'
								}, {
									name: 'street',
									title: 'Улица'
								}, {
									name: 'building',
									title: 'Дом'
								}, {
									name: 'apartment',
									title: 'Квартира'
								}
							],
							name: 'addresses'
						},
						{
							type: 'dialog',
							name: 'address',
							children: [
								{
									type: 'textInput',
									name: 'country',
									title: 'Страна',
									defaultValue: '',
									required: true
								}, {
									type: 'textInput',
									name: 'state',
									title: 'Область',
									defaultValue: '',
									required: true
								}, {
									type: 'textInput',
									name: 'city',
									title: 'Город',
									defaultValue: '',
									required: true
								}, {
									type: 'textInput',
									name: 'street',
									title: 'Улица',
									defaultValue: '',
									required: true
								}, {
									type: 'textInput',
									name: 'building',
									title: 'Дом',
									defaultValue: '',
									required: true
								}, {
									type: 'textInput',
									name: 'apartment',
									title: 'Квартира',
									defaultValue: '',
									required: true
								}
							]
						}
					]
				}
			]
		}
	},
	{
		resource: 'roles',
		title: 'Список ролей',
		columns: [
			{
				name: 'НАЗВАНИЕ',
				key: 'name'
			}
		],
		filters: [],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					className: 'big-resource',
					content: [
						{
							type: 'textInput',
							name: 'name',
							title: 'Название',
							defaultValue: '',
							required: true
						}, {
							type: 'multipleSelect',
							name: ['resources', 'categories', 'permissions'],
							title: 'Права для категорий',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'categories', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'products', 'permissions'],
							title: 'Права для продуктов',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'products', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'users', 'permissions'],
							title: 'Права для пользователей',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'users', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'roles', 'permissions'],
							title: 'Права для ролей',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'roles', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'clients', 'permissions'],
							title: 'Права для клиентов',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'clients', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'orders', 'permissions'],
							title: 'Права для заказов',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'orders', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'attributes', 'permissions'],
							title: 'Права для атрибутов',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'attributes', 'showInMenu'],
							title: 'Показывать в меню'
						},{
							type: 'multipleSelect',
							name: ['resources', 'tabs', 'permissions'],
							title: 'Права для табов',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'tabs', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'attribute-sets', 'permissions'],
							title: 'Права для наборов атрибутов',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'attribute-sets', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'tab-sets', 'permissions'],
							title: 'Права для наборов табов',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'tab-sets', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'statuses', 'permissions'],
							title: 'Права для статусов',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'statuses', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'photos', 'permissions'],
							title: 'Права для фото',
							variants: [
								{
									id: 'get',
									title: 'Чтение'
								}, {
									id: 'create',
									title: 'Создание'
								}, {
									id: 'put',
									title: 'Редактирование'
								}, {
									id: 'delete',
									title: 'Удаление'
								}
							],
							defaultValue: []
						}, {
							type: 'boolean',
							name: ['resources', 'photos', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}
			]
		}
	},
	{
		resource: 'users',
		title: 'Список пользователей',
		columns: [
			{
				name: 'ПОЛЬЗОВАТЕЛЬ',
				key: 'name'
			}, {
				name: 'ПОЧТА',
				key: 'email'
			}, {
				name: 'РОЛЬ',
				key: 'role'
			}
		],
		filters: [
			{
				type: 'name',
				title: 'Имя'
			}, {
				type: 'email',
				title: 'Почта'
			}, {
				type: 'role',
				title: 'Роль'
			}
		],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					content: [
						{
							type: 'textInput',
							name: 'name',
							title: 'Имя',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: 'email',
							title: 'Почта',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: 'password',
							title: 'Пароль',
							defaultValue: '',
							required: true
						}, {
							type: 'select',
							name: 'role',
							title: 'Роль',
							needResources: 'roles',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}
			]
		}
	},
	{
		resource: 'categories',
		title: 'Список категорий',
		columns: [
			{
				name: 'ЗАГОЛОВОК',
				key: 'title'
			}
		],
		filters: [
			{
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
			}
		],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					className: 'big-resource',
					content: [
						{
							type: 'boolean',
							name: 'isActive',
							title: 'Активный',
							defaultValue: false,
							required: false
						}, {
							type: 'textInput',
							name: 'title',
							title: 'Заголовок',
							defaultValue: '',
							required: true
						}, {
							type: 'wysiwyg',
							name: 'description',
							title: 'Описание',
							editorStateName: 'descState',
							defaultValue: '',
							required: true
						}, {
							type: 'file',
							name: 'image',
							title: 'Перенесите сюда файл или нажмите, чтобы выбрать изображение',
							defaultValue: undefined,
							required: false
						}, {
							type: 'select',
							name: 'parentCategory',
							needResources: 'categories',
							title: 'Родительская категория',
							required: false
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}, {
					title: 'SEO',
					content: [
						{
							type: 'textInput',
							name: ['seo', 'title'],
							title: 'SEO заголовок',
							defaultValue: '',
							required: false
						}, {
							type: 'textInput',
							name: ['seo', 'description'],
							title: 'SEO описание',
							defaultValue: '',
							required: false
						}, {
							type: 'textInput',
							name: ['seo', 'keywords'],
							title: 'SEO ключевые слова',
							defaultValue: '',
							required: false
						}
					]
				}
			]
		}
	},
	{
		resource: 'products',
		title: 'Список продуктов',
		columns: [
			{
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
			}
		],
		filters: [
			{
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
			}
		],
		structure: {
			tabs: [
				{
					title: 'ОСНОВНОЕ',
					className: 'big-resource',
					content: [
						{
							type: 'boolean',
							name: 'isActive',
							title: 'Активный',
							defaultValue: false,
							required: false
						}, {
							type: 'textInput',
							name: 'title',
							title: 'Заголовок',
							defaultValue: '',
							required: true
						}, {
							type: 'wysiwyg',
							name: 'description',
							title: 'Описание',
							editorStateName: 'descState',
							defaultValue: '',
							required: true
						}, {
							type: 'wysiwyg',
							name: 'shortDescription',
							editorStateName: 'shortDescState',
							title: 'Краткое описание',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: 'sku',
							title: 'Атрикул',
							defaultValue: '',
							required: true
						}, {
							type: 'textInput',
							name: 'price',
							title: 'Цена',
							defaultValue: '',
							required: true
						}, {
							type: 'multipleSelect',
							name: 'categories',
							title: 'Категории',
							defaultValue: [],
							needResources: 'categories',
							required: false
						}, {
							type: 'file',
							name: 'images',
							multiple: true,
							title: 'Перенесите сюда файл или нажмите, чтобы выбрать изображение',
							defaultValue: [],
							required: false
						}, {
							type: 'multipleSelect',
							name: 'attribute-sets',
							title: 'Наборы атрибутов',
							defaultValue: [],
							needResources: 'attribute-sets',
							required: false
						}, {
							type: 'multipleSelect',
							name: 'tab-sets',
							title: 'Наборы табов',
							defaultValue: [],
							needResources: 'tab-sets',
							required: false
						}, {
							type: 'textInput',
							title: 'Слаг',
							name: 'slug',
							required: true
						}
					]
				}, {
					title: 'SEO',
					content: [
						{
							type: 'textInput',
							name: ['seo', 'title'],
							title: 'SEO заголовок',
							defaultValue: '',
							required: false
						}, {
							type: 'textInput',
							name: ['seo', 'description'],
							title: 'SEO описание',
							defaultValue: '',
							required: false
						}, {
							type: 'textInput',
							name: ['seo', 'keywords'],
							title: 'SEO ключевые слова',
							defaultValue: [],
							required: false
						}
					]
				}, {
					title: 'ПОХОЖИЕ ПРОДУКТЫ',
					content: [
						{
							type: 'table',
							name: 'relatedProducts',
							columns: [
								{
									name: 'sku',
									title: 'Артикул'
								}, {
									name: 'title',
									title: 'Наименование'
								}, {
									name: 'price',
									title: 'Цена'
								}
							],
							rows: [],
							needResources: 'products',
							defaultValue: []
						}, {
							type: 'pushTable',
							title: 'Похожий продукт',
							needResources: 'products',
							name: 'relatedProducts'
						}
					]
				}, {
					title: 'ТОВАРЫ ИЗ НАБОРА',
					content: [
						{
							type: 'table',
							name: 'fromSet',
							columns: [
								{
									name: 'sku',
									title: 'Артикул'
								}, {
									name: 'title',
									title: 'Наименование'
								}, {
									name: 'price',
									title: 'Цена'
								}
							],
							rows: [],
							needResources: 'products',
							defaultValue: []
						}, {
							type: 'pushTable',
							title: 'Товар из набора',
							needResources: 'products',
							name: 'fromSet'
						}
					]
				}
			]
		}
	},
	{
		resource: 'logs',
		title: 'Список логов',
		columns: [
			{
				name: 'ПОЛЬЗОВАТЕЛЬ',
				key: 'user'
			}, {
				name: 'ДЕЙСТВИЕ',
				key: 'action'
			}, {
				name: 'ДАТА',
				key: 'time'
			}
		],
		filters: []
	}
]