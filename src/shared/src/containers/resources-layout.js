import React from 'react'
import { Card } from 'material-ui/Card'

import Data from '@src/core/data.provider'
import Resources from '@src/components/resources'

export default class ResourcesLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: [],
      total: 0,
      statuses: []
    }
    this.getData(this.props.path)
      .catch(error => console.error(`Ошибка при получении ресорсов: `, error))
  }

  async getData(uri) {
    const response = await Data.getData(uri)
    if (uri === '/orders') {
      const resStatuses = await Data.getResource('/statuses')
      const resClients = await Data.getResource('/clients')
      const statuses = response.data.map(data => {
        let arr = {}
        resStatuses.statuses.forEach(item => {
          if (item.slug === data.status) {
            arr = {
              ...data,
              ...arr,
              status: item.title
            }
          }
        })
        resClients.clients.forEach(item => {
          if (item.slug === data.client) {
            arr = {
              ...data,
              ...arr,
              client: item.name
            }
          }
        })
        return arr
      })
      this.setState({
        resources: statuses,
        total: response.total
      })
      return {
        resources: statuses,
        total: response.total
      }
    }
    this.setState({
      resources: response.data,
      total: response.total
    })
    return {
      resources: response.data,
      total: response.total
    }
  }

  async refresh() {
    const response = await this.getData(this.props.path)
    console.log(response)
    this.setState({
      resources: response.resources,
      total: response.total
    })
  }

  render() {
    const {resources, total, statuses} = this.state
    const {title, path} = this.props
    if (this.props.location === '/photos') {
      return (
        <Card>
          <Resources
            title={title}
            resources={resources}
            path={path}
            total={total}
          />
        </Card>
      )
    }
    const {columns, filters} = this.props
    return (
      <Resources
        columns={columns}
        title={title}
        statuses={statuses}
        resources={resources}
        path={path}
        total={total}
        refresh={() => this.refresh()}
        filters={filters}
      />
    )
  }
}