import React from 'react'
import ResourcesContent from './resources-content'
import ResourcesHeader from './resources-header'
import { CardTitle } from 'material-ui/Card'
import mapObj from 'map-obj'

import PaginationContainer from '@src/containers/pagination'
import Photos from '@src/components/photos'
import Data from '@src/core/data.provider'

export default class ResourcesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      resources: [],
      filteredResources: [],
      filtration: {}
    }
    this.changePage = this.changePage.bind(this)
    this.exportFile = this.exportFile.bind(this)
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      resources: nextProps.resources,
      filteredResources: nextProps.resources
    })
  }

  onChangeState(key, value) {
    let newState = this.state
    newState[key] = value
    this.setState({
      ...newState
    })
  }

  addFiltration(type, value) {
    let filtration = this.state.filtration
    filtration[type] = value
    this.setState({
      filtration
    })
    let resources = this.state.resources
    mapObj(this.state.filtration, (key, value) => {
      let newResources = resources.filter(resource => {
        if (key === 'title' || key === 'sku')
          return resource[key].indexOf(value) !== -1
        if (key === 'showInFilter' || key === 'isActive' || key === 'isRequire' || key === 'attrType' || key === 'role')
          return resource[key] === value
        if (key === 'client')
          return resource[key] === value
        if (key === 'attribute-sets' || key === 'categories' || key === 'name' || key === 'email')
          return resource[key].indexOf(value) !== -1
        if (key === 'priceStart')
          return Number(resource.price) >= Number(value)
        if (key === 'priceEnd')
          return Number(resource.price) <= Number(value)
        if (key === 'creationDateStart')
          return new Date(resource.creationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) >= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')))
        if (key === 'creationDateEnd')
          return new Date(resource.creationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) <= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')))
        if (key === 'modificationDateStart')
          return new Date(resource.modificationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) >= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')))
        if (key === 'modificationDateEnd')
          return new Date(resource.modificationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) <= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')))
      })
      this.setState({
        filteredResources: newResources
      })
      return true
    })
  }

  async exportFile(file) {
    await Data.uploadXls(this.props.path, file.target.files[0])
    this.props.refresh()
  }

  render() {
    const {title, statuses, columns, path, total, filters} = this.props
    const {page, filteredResources} = this.state
    return (
      <div
        className={path === '/photos' ? 'media-resource' : 'resource-page'}
      >
        {path === '/photos' ?
          <Photos
            data={filteredResources}
            total={total}
            page={page}
          >
          </Photos>
          : <div>
            <ResourcesHeader
              path={path}
              refresh={() => this.props.refresh()}
              filters={filters}
              addFiltration={(type, value) => this.addFiltration(type, value)}
              exportFile={this.exportFile}
              title={
                <CardTitle
                  title={title}
                />
              }
            />
            <ResourcesContent
              columns={columns}
              data={filteredResources}
              statuses={statuses}
              addFiltration={(type, value) => this.addFiltration(type, value)}
              onChangeState={(key, value) => this.onChangeState(key, value)}
              path={path}
              page={page}
              total={total}
            />
            <PaginationContainer
              total={total}
              changePage={this.changePage}
              page={page}
            />
          </div>
        }
      </div>
    )
  }
}