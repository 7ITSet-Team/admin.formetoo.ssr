import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import DatePicker from 'material-ui/DatePicker'
import { Link } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ListIcon from 'material-ui/svg-icons/action/list'

import ToolBar from '@src/containers/tool-bar'
import Data from '@src/core/data.provider'

export default class OrdersEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            statuses: [],
            clients: [],
            data: {
                products: [],
                status: '',
                client: '',
                address: {
                    country: '',
                    state: '',
                    city: '',
                    street: '',
                    building: '',
                    apartment: ''
                },
                slug: '',
                creationDate: new Date(),
                modificationDate: new Date()
            },
            products: []
        }
        this.getOrder(this.props.location)
        this.getClients()
        this.getStatuses()
        this.getProducts()
        this.changeStatus = this.changeStatus.bind(this)
        this.changeClient = this.changeClient.bind(this)
        this.changeProducts = this.changeProducts.bind(this)
    }

    changeState(value, key) {
        let newState = this.state
        newState.data[key] = value
        this.setState(newState)
    }

    changeProducts(event, index, value) {
        this.state.products.forEach((product) => {
            if (product.slug === value) {
                this.changeState([
                    ...this.state.data.products,
                    product
                ], 'products')
            }
        })
    }

    deleteProduct(id) {
        let products = []
        this.state.data.products.map(product => {
            if (product.slug !== id) {
                products.push(product)
            }
        })
        this.changeState(
            products,
            'products'
        )
    }

    changeStatus(event, index, value) {
        this.setState({
            data: {
                ...this.state.data,
                status: value
            }
        })
    }

    async getClients() {
        const response = await Data.getResource('/clients')
        this.setState({
            clients: response.clients
        })
    }

    async getStatuses() {
        const response = await Data.getResource('/statuses')
        this.setState({
            statuses: response.statuses
        })
    }

    async getProducts() {
        const response = await Data.getResource('/products')
        this.setState({
            products: response.products
        })
    }

    changeClient(event, index, value) {
        this.setState({
            data: {
                ...this.state.data,
                client: value
            }
        })
    }

    async getOrder(uri) {
        const response = await Data.getResource(uri)
        this.setState({
            data: {
                ...this.state.data,
                ...response
            }
        })
    }

    render() {
        return (
            <div>
                <Tabs>
                    <Tab label="Основное">
                        <div
                            className="resource-page">
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
                                    to="/orders"
                                >
                                    <FlatButton
                                        label="Назад к списку"
                                        primary={true}
                                        icon={<ListIcon/>}
                                    />
                                </Link>
                            </div>
                            <SelectField
                                fullWidth={true}
                                value={this.state.data.status}
                                floatingLabelText="Статус"
                                onChange={this.changeStatus}
                            >
                                {this.state.statuses.map((status, index) => {
                                    return <MenuItem
                                        value={status.slug}
                                        primaryText={status.title}
                                        key={index}
                                    />
                                })}
                            </SelectField>
                            <SelectField
                                fullWidth={true}
                                value={this.state.data.client}
                                floatingLabelText="Заказчик"
                                onChange={this.changeClient}
                            >
                                {this.state.clients.map((client, index) => {
                                    return <MenuItem
                                        value={client.slug}
                                        primaryText={client.name}
                                        key={index}
                                    />
                                })}
                            </SelectField>
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
                    <Tab label="Продукты">
                        <div
                            className="resource-page">
                            <Table
                                selectable={false}
                            >
                                <TableHeader
                                    displaySelectAll={false}
                                    adjustForCheckbox={false}
                                >
                                    <TableRow>
                                        <TableHeaderColumn>
                                            Артикул
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                            Наименование
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                            Цена
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                            Количество
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                            Итого
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                        </TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={false}
                                >
                                    {this.state.data.products.map((product, index) => {
                                        return (
                                            <TableRow
                                                key={index}
                                            >
                                                <TableRowColumn>
                                                    {product.sku}
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    {product.title}
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    {product.price}
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    {product.count}
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    ИТОГО
                                                </TableRowColumn>
                                                <TableHeaderColumn>
                                                    <DeleteIcon
                                                        color='rgb(255, 64, 129)'
                                                        onClick={() => this.deleteProduct(product.slug)}
                                                        style={{cursor: 'pointer'}}
                                                    />
                                                </TableHeaderColumn>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                            <SelectField
                                fullWidth={true}
                                value={this.state.data.products}
                                floatingLabelText="Похожий продукт"
                                onChange={this.changeProducts}
                            >
                                {this.state.products.map((product, index) => {
                                    return <MenuItem
                                        value={product.slug}
                                        primaryText={product.title}
                                        key={index}
                                    />
                                })}
                            </SelectField>
                        </div>
                    </Tab>
                    <Tab label="Адрес">
                        <div
                            className="resource-page">
                            <TextField
                                fullWidth={true}
                                hintText="Страна"
                                floatingLabelText="Страна"
                                errorText="Поле обязательно"
                                value={this.state.data.address.country}
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        address: {
                                            ...this.state.data.address,
                                            country: value
                                        }
                                    }
                                })}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Область"
                                floatingLabelText="Область"
                                errorText="Поле обязательно"
                                value={this.state.data.address.state}
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        address: {
                                            ...this.state.data.address,
                                            state: value
                                        }
                                    }
                                })}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Город"
                                floatingLabelText="Город"
                                errorText="Поле обязательно"
                                value={this.state.data.address.city}
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        address: {
                                            ...this.state.data.address,
                                            city: value
                                        }
                                    }
                                })}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Улица"
                                floatingLabelText="Улица"
                                errorText="Поле обязательно"
                                value={this.state.data.address.street}
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        address: {
                                            ...this.state.data.address,
                                            street: value
                                        }
                                    }
                                })}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Дом"
                                floatingLabelText="Дом"
                                errorText="Поле обязательно"
                                value={this.state.data.address.building}
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        address: {
                                            ...this.state.data.address,
                                            building: value
                                        }
                                    }
                                })}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Квартира"
                                floatingLabelText="Квартира"
                                value={this.state.data.address.apartment}
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        address: {
                                            ...this.state.data.address,
                                            apartment: value
                                        }
                                    }
                                })}
                            />
                        </div>
                    </Tab>
                </Tabs>
                <ToolBar
                    resources='orders'
                    data={this.state.data}
                    action='edit'
                />
            </div>
        )
    }
}