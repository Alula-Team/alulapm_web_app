import React from 'react'
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { Card, CardBody } from "reactstrap"
// import { Link } from "react-router-dom"

//redux
// import { useSelector, useDispatch } from "react-redux"


const ReportsTable = () => {

    return(
        <React.Fragment>
            <Card style={{ minHeight: 650, }}>
                <CardBody>
                    <div className="mb-4 me-4 h4 card-title">Properties</div>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                        {/* ID */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            ID
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Property Address */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            Property Address
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Income */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            Income
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Expenses */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-end">
                                            Expenses
                                            <span className="order-4"></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* ID */}
                                        <td className=""> KT123JC456APM </td>

                                        {/* Property Address */}
                                        <td className=""> 5612 Harmony Ave </td>

                                        {/* Income */}
                                        <td className="text-success text-center" style={{ fontWeight: '600', fontSize: 14}}>$99,999</td>

                                        {/* Expenses */}
                                        <td className="text-danger text-end" style={{ fontWeight: '600', fontSize: 14}}>$9,999</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* MAX 12 TRANSACTIONS PER PAGE */}
                    <p className="text-center mt-4">Pagination goes at the bottom; fixed</p>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default ReportsTable