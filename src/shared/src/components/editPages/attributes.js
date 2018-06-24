import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import { Link } from 'react-router-dom'
import ListIcon from 'material-ui/svg-icons/action/list'

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/tool-bar'

export default class AttributesEdit extends React.Component {
    constructor(props) {
	    super(props)
        this.state = {
            data: {
                showInFilter: false,
                showInProductPage: false,
                showInList: false,
                isRequired: false,
                name: '',
                title: '',
                units: '',
                slug: '',
                attrType: '',
                variants: [],
                creationDate: new Date(),
                modificationDate: new Date()
            },
            open: false,
            types: [
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
            variant: {
                id: '',
                value: ''
            }
        }
	    this.getAttribute(this.props.location)
	    this.changeType = this.changeType.bind(this)
	    this.handleClose = this.handleClose.bind(this)
	    this.handleOpen = this.handleOpen.bind(this)
        this.addVariant = this.addVariant.bind(this)
    }

    handleOpen() {
        this.setState({
            open: true
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    addVariant() {
        this.setState({
            data: {
                ...this.state.data,
                variants: [
                    ...this.state.data.variants,
                    this.state.variant
                ]
            }
        })
        this.handleClose()
    }

    changeState(value, key) {
	    let newState = this.state
	    newState.data[key] = value
        this.setState(newState)
    }

    changeType(event, index, value) {
        this.setState({
            data: {
                ...this.state.data,
                attrType: value
            }
        })
    }

    async getAttribute(url) {
	    const response = await Data.getResource(url)
        this.setState({
            data: response
        })
    }

    render() {
        const actions = [
            <FlatButton
                label="Закрыть"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Подтвердить"
                primary={true}
                onClick={this.addVariant}
            />
        ]
        if (!this.state.data)
	        return false
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
                                    to="/attributes"
                                >
                                    <FlatButton
                                        label="Назад к списку"
                                        primary={true}
                                        icon={<ListIcon/>}
                                    />
                                </Link>
                            </div>
                            <Toggle
                                style={{
                                    width: '250px',
                                    marginLeft: '20px'
                                }}
                                toggled={this.state.data.showInFilter}
                                label="Показывать в фильтре"
                                onToggle={(event, value) => this.changeState(value, 'showInFilter')}
                            />
                            <Toggle
                                style={{
                                    width: '250px',
                                    marginLeft: '20px'
                                }}
                                toggled={this.state.data.showInProductPage}
                                label="Показывать на странице товара"
                                onToggle={(event, value) => this.changeState(value, 'showInProductPage')}
                            />
                            <Toggle
                                style={{
                                    width: '250px',
                                    marginLeft: '20px'
                                }}
                                toggled={this.state.data.showInList}
                                label="Показывать в списке"
                                onToggle={(event, value) => this.changeState(value, 'showInList')}
                            />
                            <Toggle
                                style={{
                                    width: '250px',
                                    marginLeft: '20px'
                                }}
                                toggled={this.state.data.isRequired}
                                label="Обязательный"
                                onToggle={(event, value) => this.changeState(value, 'isRequired')}
                            />
                            <TextField
                                fullWidth={true}
                                value={this.state.data.name}
                                hintText="Наименование"
                                floatingLabelText="Наименование"
                                errorText="Поле обязательно"
                                onChange={(event, value) => this.changeState(value, 'name')}
                            />
                            <TextField
                                fullWidth={true}
                                value={this.state.data.title}
                                hintText="Заголовок"
                                floatingLabelText="Заголовок"
                                errorText="Поле обязательно"
                                onChange={(event, value) => this.changeState(value, 'title')}
                            />
                            <TextField
                                fullWidth={true}
                                value={this.state.data.units}
                                hintText="Единица измерения"
                                floatingLabelText="Единица измерения"
                                errorText="Поле обязательно"
                                onChange={(event, value) => this.changeState(value, 'units')}
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
                    <Tab label="Тип">
                        <div
                            className="resource-page">
                            <SelectField
                                fullWidth={true}
                                value={this.state.data.attrType}
                                disabled={true}
                                floatingLabelText="Тип"
                            >
                                {this.state.types.map((type, index) => {
                                    return <MenuItem
                                        value={type.id}
                                        primaryText={type.title}
                                        key={index}
                                    />
                                })}
                            </SelectField>
                            {
                                this.state.data.attrType === 'multipleSelect' || this.state.data.attrType === 'select'
                                    ? (
                                        <div>
                                            <Table
                                                selectable={false}
                                            >
                                                <TableHeader
                                                    displaySelectAll={false}
                                                    adjustForCheckbox={false}
                                                >
                                                    <TableRow>
                                                        <TableHeaderColumn>
                                                            Идентификатор
                                                        </TableHeaderColumn>
                                                        <TableHeaderColumn>
                                                            Значение
                                                        </TableHeaderColumn>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody
                                                    displayRowCheckbox={false}
                                                >
                                                    {!!this.state.data.variants ? this.state.data.variants.map((variant, index) => {
                                                        return (
                                                            <TableRow
                                                                key={index}
                                                            >
                                                                <TableRowColumn>
                                                                    {variant.id}
                                                                </TableRowColumn>
                                                                <TableRowColumn>
                                                                    {variant.value}
                                                                </TableRowColumn>
                                                            </TableRow>
                                                        )
                                                    }) : null}
                                                </TableBody>
                                            </Table>
                                            <RaisedButton
                                                label="Добавить"
                                                style={{margin: '38px'}}
                                                onClick={this.handleOpen}
                                            />
                                            <Dialog
                                                title="Создание нового адреса"
                                                actions={actions}
                                                modal={true}
                                                open={this.state.open}
                                                autoScrollBodyContent={true}
                                            >
                                                <TextField
                                                    fullWidth={true}
                                                    floatingLabelText="Идентификатор"
                                                    value={this.state.variant.id}
                                                    errorText='Обязательное поле'
                                                    onChange={(event, value) => this.setState({
                                                        variant: {
                                                            ...this.state.variant,
                                                            id: value
                                                        }
                                                    })}/>
                                                <TextField
                                                    fullWidth={true}
                                                    floatingLabelText="Значение"
                                                    value={this.state.variant.value}
                                                    errorText='Обязательное поле'
                                                    onChange={(event, value) => this.setState({
                                                        variant: {
                                                            ...this.state.variant,
                                                            value: value
                                                        }
                                                    })}/>
                                            </Dialog>
                                        </div>
                                    ) : null
                            }
                        </div>
                    </Tab>
                </Tabs>
                <ToolBar
                    resources='attributes'
                    data={this.state.data}
                    action='edit'
                />
            </div>
        )
    }
}