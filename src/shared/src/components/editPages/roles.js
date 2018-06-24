import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import { Link } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ListIcon from 'material-ui/svg-icons/action/list'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/tool-bar'

export default class RolesEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                resources: {
                    users: {showInMenu: false, permissions: []},
                    statuses: {showInMenu: false, permissions: []},
                    roles: {showInMenu: false, permissions: []},
                    products: {showInMenu: false, permissions: []},
                    photos: {showInMenu: false, permissions: []},
                    orders: {showInMenu: false, permissions: []},
                    clients: {showInMenu: false, permissions: []},
                    categories: {showInMenu: false, permissions: []},
                    attributes: {showInMenu: false, permissions: []},
                    "attribute-sets": {showInMenu: false, permissions: []}
                }
            },
            permissions: [
                {
                    type: 'post',
                    label: 'Создание'
                },
                {
                    type: 'put',
                    label: 'Редактирование'
                },
                {
                    type: 'get',
                    label: 'Чтение'
                },
                {
                    type: 'delete',
                    label: 'Удаление'
                }
            ]
        }
        this.getRole()
    }

    changeState(value, key) {
        let newState = this.state
        newState.data[key] = value
        this.setState(newState)
    }

    async getRole() {
        const response = await Data.getResource(this.props.location)
        this.setState({
            data: response
        })
    }

    menuItems(values) {
        return this.state.permissions.map(({type, label}, index) => (
            <MenuItem
                key={index}
                insetChildren={true}
                checked={values && values.indexOf(type) > -1}
                value={type}
                primaryText={label}
            />
        ));
    }

    render() {
        if (!this.state.data.name) {
            return false
        }
        return (
            <div>
                <Tabs>
                    <Tab label="Основная информация">
                        <div
                            className="big-resource">
                            <div
                                className="resource-actions"
                            >
                                <Link
                                    to={`${this.props.location}/delete`}
                                >
                                    <FlatButton
                                        label="Удалить"
                                        labelStyle={{color: 'rgb(255, 64, 129)'}}
                                        primary={true}
                                        icon={<DeleteIcon color='rgb(255, 64, 129)'/>}
                                    />
                                </Link>
                                <Link
                                    to="/roles"
                                >
                                    <FlatButton
                                        label="Назад к списку"
                                        primary={true}
                                        icon={<ListIcon/>}
                                    />
                                </Link>
                            </div>
                            <TextField
                                fullWidth={true}
                                floatingLabelText="Название"
                                errorText="Поле обязательно"
                                value={this.state.data.name}
                                onChange={(event, value) => this.changeState(value, 'name')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.categories.permissions}
                                floatingLabelText="Права для категорий"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    categories: {
                                        ...this.state.data.resources.categories,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.categories.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.categories.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    categories: {
                                        ...this.state.data.resources.categories,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.products.permissions}
                                floatingLabelText="Права для продуктов"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    products: {
                                        ...this.state.data.resources.products,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.products.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.products.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    products: {
                                        ...this.state.data.resources.products,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.users.permissions}
                                floatingLabelText="Права для пользователей"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    users: {
                                        ...this.state.data.resources.users,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.users.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.users.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    users: {
                                        ...this.state.data.resources.users,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.roles.permissions}
                                floatingLabelText="Права для ролей"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    roles: {
                                        ...this.state.data.resources.roles,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.roles.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.roles.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    roles: {
                                        ...this.state.data.resources.roles,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.clients.permissions}
                                floatingLabelText="Права для клиентов"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    clients: {
                                        ...this.state.data.resources.clients,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.clients.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.clients.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    clients: {
                                        ...this.state.data.resources.clients,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.orders.permissions}
                                floatingLabelText="Права для заказов"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    orders: {
                                        ...this.state.data.resources.orders,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.orders.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.orders.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    orders: {
                                        ...this.state.data.resources.orders,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.attributes.permissions}
                                floatingLabelText="Права для атрибутов"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    attributes: {
                                        ...this.state.data.resources.attributes,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.attributes.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.attributes.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    attributes: {
                                        ...this.state.data.resources.attributes,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources['attribute-sets'].permissions}
                                floatingLabelText="Права для наборов атрибутов"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    'attribute-sets': {
                                        ...this.state.data.resources['attribute-sets'],
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources['attribute-sets'].permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources['attribute-sets'].showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    'attribute-sets': {
                                        ...this.state.data.resources['attribute-sets'],
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.statuses.permissions}
                                floatingLabelText="Права для статусов"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    statuses: {
                                        ...this.state.data.resources.statuses,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.statuses.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.statuses.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    statuses: {
                                        ...this.state.data.resources.statuses,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <SelectField
                                multiple={true}
                                value={this.state.data.resources.photos.permissions}
                                floatingLabelText="Права для фото"
                                errorText="Поле обязательно"
                                fullWidth={true}
                                onChange={(event, index, values) => this.changeState({
                                    ...this.state.data.resources,
                                    photos: {
                                        ...this.state.data.resources.photos,
                                        permissions: values
                                    }
                                }, 'resources')}
                            >
                                {this.menuItems(this.state.data.resources.photos.permissions)}
                            </SelectField>
                            <Toggle
                                style={{
                                    width: '230px',
                                    marginLeft: '20px'
                                }}
                                label="Показывать в меню"
                                toggled={this.state.data.resources.photos.showInMenu}
                                onToggle={(event, value) => this.changeState({
                                    ...this.state.data.resources,
                                    photos: {
                                        ...this.state.data.resources.photos,
                                        showInMenu: value
                                    }
                                }, 'resources')}
                            />
                            <DatePicker
                                fullWidth={true}
                                floatingLabelText="Дата создания"
                                hintText="Дата создания"
                                defaultDate={new Date(this.state.data.creationDate)}
                            />
                            <DatePicker
                                fullWidth={true}
                                floatingLabelText="Дата изменения"
                                hintText="Дата изменения"
                                defaultDate={new Date(this.state.data.modificationDate)}
                            />
                            <TextField
                                fullWidth={true}
                                value={this.state.data.slug}
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        slug: value
                                    }
                                })}
                                floatingLabelText='Slug'
                                label='Slug'
                            />
                        </div>
                    </Tab>
                </Tabs>
                <ToolBar
                    resources='roles'
                    data={this.state.data}
                    action='edit'
                />
            </div>
        )
    }
}