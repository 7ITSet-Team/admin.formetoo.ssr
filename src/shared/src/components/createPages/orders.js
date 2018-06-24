import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import ListIcon from 'material-ui/svg-icons/action/list'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'
import uid from 'uid'

import ToolBar from '@src/containers/tool-bar'
import Data from '@src/core/data.provider'

export default class OrdersCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            statuses: [],
            clients: [],
            data: {
                products: [],
                slug: uid(16)
            },
            products: []
        }
        this.getData('/statuses')
        this.getData('/clients')
        this.getData('/products')
        this.changeProducts = this.changeProducts.bind(this)
    }

    changeState(value, key) {
        let newState = this.state
        newState.data[key] = value
        this.setState(newState)
    }

    changeProducts(event, index, value) {
        this.state.products.forEach((product) => {
            if (product._id === value) {
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
            if (product._id !== id) {
                products.push(product)
            }
        })
        this.changeState(
            products,
            'products'
        )
    }

    changeStatus(value) {
        this.setState({
            currentStatus: value
        })
        this.state.statuses.forEach(status => {
            if (status._id === value) {
                this.setState({
                    data: {
                        ...this.state.data,
                        status: {
                            id: value,
                            name: status.title
                        }
                    }
                })
            }
        })
    }

    async getData(uri) {
        const response = await Data.getData(uri)
        let newState = {}
        newState[uri.slice(1)] = response.data
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <Tabs>
                    <Tab label="Основное">
                        <div
                            className="resource-page">
                            <Link
                                className="resource-actions"
                                to="/orders"
                            >
                                <FlatButton
                                    label="Назад к списку"
                                    primary={true}
                                    icon={<ListIcon/>}
                                />
                            </Link>
                            <SelectField
                                fullWidth={true}
                                floatingLabelText="Статус"
                                value={this.state.data.status}
                                onChange={(event, index, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        status: value
                                    }
                                })}
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
                                floatingLabelText="Заказчик"
                                value={this.state.data.client}
                                onChange={(event, index, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        client: value
                                    }
                                })}
                            >
                                {this.state.clients.map((client, index) => {
                                    return <MenuItem
                                        value={client.slug}
                                        primaryText={client.name}
                                        key={index}
                                    />
                                })}
                            </SelectField>
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
                                                        onClick={() => this.deleteProduct(product._id)}
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
                                floatingLabelText="Похожий продукт"
                                onChange={this.changeProducts}
                            >
                                {this.state.products.map((product, index) => {
                                    return <MenuItem
                                        value={product._id}
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
                                onChange={(event, value) => this.changeState({
                                    ...this.state.data.address,
                                    country: value
                                }, 'address')}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Область"
                                floatingLabelText="Область"
                                errorText="Поле обязательно"
                                onChange={(event, value) => this.changeState({
                                    ...this.state.data.address,
                                    state: value
                                }, 'address')}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Город"
                                floatingLabelText="Город"
                                errorText="Поле обязательно"
                                onChange={(event, value) => this.changeState({
                                    ...this.state.data.address,
                                    city: value
                                }, 'address')}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Улица"
                                floatingLabelText="Улица"
                                errorText="Поле обязательно"
                                onChange={(event, value) => this.changeState({
                                    ...this.state.data.address,
                                    street: value
                                }, 'address')}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Дом"
                                floatingLabelText="Дом"
                                errorText="Поле обязательно"
                                onChange={(event, value) => this.changeState({
                                    ...this.state.data.address,
                                    building: value
                                }, 'address')}
                            />
                            <TextField
                                fullWidth={true}
                                hintText="Квартира"
                                floatingLabelText="Квартира"
                                onChange={(event, value) => this.changeState({
                                    ...this.state.data.address,
                                    apartment: value
                                }, 'address')}
                            />
                        </div>
                    </Tab>
                </Tabs>
                <ToolBar
                    resources='orders'
                    data={this.state.data}
                    action='create'
                />
            </div>
        )
    }
}