import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import ListIcon from 'material-ui/svg-icons/action/list'
import FlatButton from 'material-ui/FlatButton'
import uid from 'uid'

import ToolBar from '@src/containers/tool-bar'

export default class TabsCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                name: '',
                title: '',
                slug: uid(16)
            }
        }
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
                                to="/tabs"
                            >
                                <FlatButton
                                    label="Назад к списку"
                                    primary={true}
                                    icon={<ListIcon/>}
                                />
                            </Link>
                            <TextField
                                fullWidth={true}
                                hintText="Наименование"
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        name: value
                                    }
                                })}
                                errorText="Поле обязательно"
                            />
                            <TextField
                                fullWidth={true}
                                onChange={(event, value) => this.setState({
                                    data: {
                                        ...this.state.data,
                                        title: value
                                    }
                                })}
                                hintText="Заголовок"
                                errorText="Поле обязательно"
                            />
                        </div>
                    </Tab>
                </Tabs>
                <ToolBar
                    resources='tabs'
                    data={this.state.data}
                    action='create'
                />
            </div>
        )
    }
}