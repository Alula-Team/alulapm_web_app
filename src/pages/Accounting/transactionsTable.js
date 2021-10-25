import React from 'react'
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Input } from "reactstrap"
// import { Link } from "react-router-dom"

//redux
// import { useSelector, useDispatch } from "react-redux"


const TransactionsTable = () => {

    return (
        <React.Fragment>
            <Card style={{ minHeight: 650 }}>
                <CardBody>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mb-4 me-4 h4 card-title">Transactions</div>
                            {/* Search */}
                            <div className="search-box mb-4">
                                <div className="position-relative">
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Transactions..."
                                    />
                                    <i className="bx bx-search-alt search-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            {/* Filter */}
                            <select className="mb-4 me-3 custom-select" id="inputGroupSelect01">
                                <option selected>Filter by Status:</option>
                                <option value="1">All Transactions</option>
                                <option value="2">Outstanding</option>
                                <option value="3">Paid</option>
                                <option value="4">Past Due</option>
                            </select>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                        {/* Transaction ID */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            Transaction ID
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Transaction TYPE */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            Transaction Type
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Billing Name */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            Billing Name
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Date Paid */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable text-center">
                                            Date Paid
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Total */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable text-center">
                                            Total
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Payment Status */}
                                        <th tabIndex="0" aria-label="Status sortable" className="sortable text-center">
                                            Payment Status
                                            <span className="order-4"></span>
                                        </th>

                                        {/* View Details */}
                                        <th tabIndex="0" aria-label="View Details sortable" className="sortable text-center">
                                            View Details
                                            <span className="order-4"></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td className="text-center"> #ID NUMBER </td>

                                        {/* Transaction Type */}
                                        <td className="text-center"> Expense </td>

                                        {/* Billing Name */}
                                        <td className="text-center"> Kane Toomer </td>

                                        {/* Date Paid */}
                                        <td className="text-center"> 10-01-2021 </td>

                                        {/* Amount Paid */}
                                        <td className="text-center"> $1,500 </td>

                                        {/* Status - Paid (btn btn-success btn-sm), Outstanding (btn btn-warning btn-sm), Past Due (btn btn-danger btn-sm) */}
                                        <td className="text-center"> 
                                            <span className="btn btn-success btn-sm">Paid</span>
                                        </td>

                                        {/* View Details */}
                                        <td className="d-flex justify-content-center">
                                            <a href="#" className="my-2">
                                                <u>View Details</u>
                                            </a>
                                        </td>
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

export default TransactionsTable
