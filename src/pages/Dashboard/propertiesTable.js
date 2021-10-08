import React from 'react'
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Button, Input } from "reactstrap"
import { Link } from "react-router-dom"

//redux
// import { useSelector, useDispatch } from "react-redux"


const PropertiesTable = () => {

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mb-4 me-4 h4 card-title">Properties</div>
                            {/* Search */}
                            <div className="search-box mb-4">
                                <div className="position-relative">
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Properties..."
                                    />
                                    <i className="bx bx-search-alt search-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            {/* Filter */}
                            <select className="mb-4 me-3 custom-select" id="inputGroupSelect01">
                                <option selected>Filter by Status:</option>
                                <option value="1">All Properties</option>
                                <option value="2">Occupied</option>
                                <option value="3">Renewal</option>
                                <option value="4">Vacant</option>
                            </select>
                            {/* Add Property Button */}
                            <Button className="btn btn-danger btn-sm mb-4 d-flex align-items-center">
                                <i className="mdi mdi-plus-circle-outline me-1" />
                                Add Property
                            </Button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                        {/* Property Address */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            Property Address
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Tenant Name */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            Tenant Name
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Date Added */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable">
                                            Date Added
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Status */}
                                        <th tabIndex="0" aria-label="Status sortable" className="sortable">
                                            Status
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
                                        {/* Property Address */}
                                        <td> 595 S. Green Valley Pkwy Unit 121 </td>

                                        {/* Tenant Name */}
                                        <td className=""> Kane Toomer </td>

                                        {/* Date Added */}
                                        <td> 11-06-2020 </td>

                                        {/* Status */}
                                        <td> Renewal </td>

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

export default PropertiesTable