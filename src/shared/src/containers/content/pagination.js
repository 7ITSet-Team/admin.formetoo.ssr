import React from 'react'
import Pagination from 'material-ui-pagination'

export default class PaginationContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {total, changePage, page} = this.props
        return (
            <div
                className="pagination">
                <div
                    className="total">
                    {page * 10 - 9} - {total > (page % 10) * 10 ? (page % 10) * 10 : total} из {total}
                </div>
                <Pagination
                    total={total % 10 === 0 ? Math.floor(total / 10) : Math.floor(total / 10 + 1)}
                    display={total % 10 === 0 ? Math.floor(total / 10) : Math.floor(total / 10 + 1)}
                    current={page}
                    onChange={changePage}
                />
            </div>
        )
    }
}