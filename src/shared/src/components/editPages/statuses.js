import React from 'react'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import { Link } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ListIcon from 'material-ui/svg-icons/action/list'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/tool-bar'

export default class StatusEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                title: '',
                slug: '',
                creationDate: new Date(),
                modificationDate: new Date()
            }
        }
        this.getStatus(this.props.location)
    }

    async getStatus(uri) {
        const response = await Data.getResource(uri)
        this.setState({
            data: response
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
                                    to="/statuses"
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
                                value={this.state.data.title}
                                onChange={(event, value) => {
                                    this.setState({
                                        data: {
                                            ...this.state.data,
                                            title: value
                                        }
                                    })
                                }}
                                hintText="Заголовок(наименование)"
                                errorText="Поле обязательно"
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
                    resources='statuses'
                    data={this.state.data}
                    action='edit'
                />
            </div>
        )
    }
}