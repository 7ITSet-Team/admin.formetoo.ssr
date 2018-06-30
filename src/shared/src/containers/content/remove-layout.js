import React from 'react'

import ToolBar from '@src/containers/content/tool-bar'

export default class RemoveLayout extends React.Component {
    render() {
        const {location, resources} = this.props
        return (
            <div
                className="resource-page">
                <div
                    className="warning-msg"
                >
                    Вы уверены?
                </div>
                <ToolBar
                    action='delete'
                    resource={location}
                    resources={resources}
                />
            </div>
        )
    }
}