import React, { useState } from 'react'
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Button, Input } from "reactstrap"
import { Link } from "react-router-dom"

//redux
// import { useSelector, useDispatch } from "react-redux"

// Modals
import AddTransactionsModal from './modals/AddTransactionModal'

const TransactionsTable = () => {
    const [addTransactionsModal, setAddTransactionsModal] = useState(false)

    return (
        <React.Fragment>
            <AddTransactionsModal 
                show={addTransactionsModal}
                onCloseClick={ () => setAddTransactionsModal(false) }
            />
            <Card>
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
                            {/* Add Transaction Button */}
                            <Button className="btn btn-danger btn-sm mb-4 d-flex align-items-center" onClick={() => setAddTransactionsModal(true)}>
                                <i className="mdi mdi-plus-circle-outline me-1" />
                                Add Transaction
                            </Button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                        {/* Transaction ID */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            Transaction ID
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Transaction TYPE */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            Transaction Type
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Billing Name */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            Billing Name
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Date Paid */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable">
                                            Date Paid
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Total */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable">
                                            Total
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Payment Status */}
                                        <th tabIndex="0" aria-label="Status sortable" className="sortable text-center">
                                            Payment Status
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Payment Method */}
                                        <th tabIndex="0" aria-label="Status sortable" className="sortable text-center">
                                            Payment Method
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
                                        <td> #ID NUMBER </td>

                                        {/* Transaction Type */}
                                        <td> Expense </td>

                                        {/* Billing Name */}
                                        <td> Kane Toomer </td>

                                        {/* Date Paid */}
                                        <td> 10-01-2021 </td>

                                        {/* Amount Paid */}
                                        <td> $1,500 </td>

                                        {/* Status - Paid (btn btn-success btn-sm), Outstanding (btn btn-warning btn-sm), Past Due (btn btn-danger btn-sm) */}
                                        <td className="text-center"> 
                                            <span className="btn btn-success btn-sm">Paid</span>
                                        </td>

                                        {/* Payment Method */}
                                        <td className="text-center"> 
                                            ACH 
                                        </td>

                                        {/* View Details */}
                                        <td className="d-flex justify-content-center">
                                            <Link to="" className="btn btn-primary btn-sm">
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default TransactionsTable
