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
					content: [
						{
							type: 'textInput',
							name: 'name',
							title: 'Название',
							required: true
						}, {
							type: 'multipleSelect',
							name: ['resources', 'categories', 'permissions'],
							title: 'Права для категорий'
						}, {
							type: 'boolean',
							name: ['resources', 'categories', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'products', 'permissions'],
							title: 'Права для продуктов'
						}, {
							type: 'boolean',
							name: ['resources', 'products', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'users', 'permissions'],
							title: 'Права для пользователей'
						}, {
							type: 'boolean',
							name: ['resources', 'users', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'roles', 'permissions'],
							title: 'Права для ролей'
						}, {
							type: 'boolean',
							name: ['resources', 'roles', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'clients', 'permissions'],
							title: 'Права для клиентов'
						}, {
							type: 'boolean',
							name: ['resources', 'clients', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'orders', 'permissions'],
							title: 'Права для заказов'
						}, {
							type: 'boolean',
							name: ['resources', 'orders', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'attributes', 'permissions'],
							title: 'Права для атрибутов'
						}, {
							type: 'boolean',
							name: ['resources', 'attributes', 'showInMenu'],
							title: 'Показывать в меню'
						},{
							type: 'multipleSelect',
							name: ['resources', 'tabs', 'permissions'],
							title: 'Права для табов'
						}, {
							type: 'boolean',
							name: ['resources', 'tabs', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'attribute-sets', 'permissions'],
							title: 'Права для наборов атрибутов'
						}, {
							type: 'boolean',
							name: ['resources', 'attribute-sets', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'tab-sets', 'permissions'],
							title: 'Права для наборов табов'
						}, {
							type: 'boolean',
							name: ['resources', 'tab-sets', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'statuses', 'permissions'],
							title: 'Права для статусов'
						}, {
							type: 'boolean',
							name: ['resources', 'statuses', 'showInMenu'],
							title: 'Показывать в меню'
						}, {
							type: 'multipleSelect',
							name: ['resources', 'photos', 'permissions'],
							title: 'Права для фото'
						}, {
							type: 'boolean',
							name: ['resources', 'photos', 'showInMenu'],
							title: 'Показывать в меню'
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
							required: true
						}, {
							type: 'textInput',
							name: 'email',
							title: 'Почта',
							required: true
						}, {
							type: 'textInput',
							name: 'password',
							title: 'Пароль',
							required: true
						}, {
							type: 'select',
							name: 'role',
							title: 'Роль',
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
					content: [
						{
							type: 'boolean',
							name: 'isActive',
							title: 'Активный',
							required: false
						}, {
							type: 'textInput',
							name: 'title',
							title: 'Заголовок',
							required: true
						}, {
							type: 'wysiwyg',
							name: 'description',
							title: 'Описание',
							required: true
						}, {
							type: 'file',
							name: 'image',
							title: 'Перенесите сюда файл или нажмите, чтобы выбрать изображение',
							required: false
						}, {
							type: 'select',
							name: 'parentCategory',
							title: 'Родительская категория',
							required: false
						}
					]
				}, {
					title: 'SEO',
					content: [
						{
							type: 'textInput',
							name: ['seo', 'title'],
							title: 'SEO заголовок',
							required: false
						}, {
							type: 'textInput',
							name: ['seo', 'description'],
							title: 'SEO описание',
							required: false
						}, {
							type: 'textInput',
							name: ['seo', 'keywords'],
							title: 'SEO ключевые слова',
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
					content: [
						{
							type: 'boolean',
							name: 'isActive',
							title: 'Активный',
							required: false
						}, {
							type: 'textInput',
							name: 'title',
							title: 'Заголовок',
							required: true
						}, {
							type: 'wysiwyg',
							name: 'description',
							title: 'Описание',
							required: true
						}, {
							type: 'wysiwyg',
							name: 'shortDescription',
							title: 'Краткое описание',
							required: true
						}, {
							type: 'textInput',
							name: 'sku',
							title: 'Атрикул',
							required: true
						}, {
							type: 'numberInput',
							name: 'price',
							title: 'Цена',
							required: true
						}, {
							type: 'multipleSelect',
							name: 'categories',
							title: 'Категории',
							required: false
						}, {
							type: 'file',
							name: 'image',
							title: 'Перенесите сюда файл или нажмите, чтобы выбрать изображение',
							required: false
						}, {
							type: 'multipleSelect',
							name: 'attribute-sets',
							title: 'Наборы атрибутов',
							required: false
						}, {
							type: 'multipleSelect',
							name: 'tab-sets',
							title: 'Наборы табов',
							required: false
						}
					]
				}, {
					title: 'SEO',
					content: [
						{
							type: 'textInput',
							name: ['seo', 'title'],
							title: 'SEO заголовок',
							required: false
						}, {
							type: 'textInput',
							name: ['seo', 'description'],
							title: 'SEO описание',
							required: false
						}, {
							type: 'textInput',
							name: ['seo', 'keywords'],
							title: 'SEO ключевые слова',
							required: false
						}
					]
				}, {
					title: 'ПОХОЖИЕ ПРОДУКТЫ',
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
							]
						}, {
							type: 'select',
							name: 'relatedProducts',
							title: 'Похожий продукт',
							required: false
						}
					]
				}, {
					title: 'ТОВАРЫ ИЗ НАБОРА',
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
							]
						}, {
							type: 'select',
							name: 'fromSet',
							title: 'Товар из набора',
							required: false
						}
					]
				}
			]
		}
	}
]