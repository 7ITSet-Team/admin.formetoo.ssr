import React from 'react'
import TextField from 'material-ui/TextField'

import Data from '@src/core/data.provider'
import ToolBar from '@src/containers/content/tool-bar'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
        this.getUser()
            .catch(error => console.error(`Ошибка при получении данных профиля: `, error))
    }

    async getUser() {
        const result = await Data.getProfile()
        this.setState({
            user: result.profile
        })
    }

    render() {
        return (
            <div
                className="resource-page">
                <div
                    className="profile__label"
                >
                    Информация профиля
                </div>
                <TextField
                    fullWidth={true}
                    hintText="Почта"
                    floatingLabelText="Почта"
                    value={this.state.user}
                    onChange={(event, value) => this.setState({
                        user: value
                    })}
                />
                <TextField
                    fullWidth={true}
                    hintText="Пароль"
                    floatingLabelText="Пароль"
                    onChange={(event, value) => this.setState({
                        password: value
                    })}
                />
                <ToolBar
                    resources='profile'
                    data={this.state}
                    action='edit'
                />
            </div>
        )
    }
}