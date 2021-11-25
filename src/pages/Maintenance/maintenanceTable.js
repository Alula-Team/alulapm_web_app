// import PropTypes from "prop-types"
import React, { useState } from 'react'

// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Input } from "reactstrap"

// Components
// import EditUserModal from "./editUserModal"
import DeleteRequestModal from "./deleteRequestModal"

//redux
// import { useSelector, useDispatch } from "react-redux"

// Firebase

const MaintenanceTable = () => {
    // const [requestModal, setRequestModal] = useState(false)
    const [deleteRequestModal, setDeleteRequestModal] = useState(false)

    return (
        <React.Fragment>
            {/* <EditRequestModal
                show={userModal}
                onCloseClick={() => setUserModal(false)}
            /> */}
            <DeleteRequestModal
                show={deleteRequestModal}
                onCloseClick={() => setDeleteRequestModal(false)}
            />
            <Card style={{ minHeight: 650 }}>
                <CardBody>
                    <div className="d-flex justify-content-between align-items-center">
                           
                        {/* Search */}
                        <div className="search-box mb-4">
                            <div className="position-relative">
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Requests..."
                                />
                                <i className="bx bx-search-alt search-icon" />
                            </div>
                        </div>

                        {/* Filter */}
                        <div>
                            <select className="mb-4 me-3 custom-select" id="inputGroupSelect01">
                                <option selected>Filter by Status:</option>
                                <option value="all_requests">All Requests</option>
                                <option value="complete">Complete</option>
                                <option value="outstanding">Outstanding</option>
                            </select>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                        {/* Property Address */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            Property Address
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Tenant's Name */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            Tenant Name
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Date Added */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable text-center">
                                            Date Added
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Status */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable text-center">
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
                                        {/* Property Address*/}
                                        <td className="text-center"> 5612 Harmony Ave </td>

                                        {/* Tenant's Email */}
                                        <td className="text-center">Kane Toomer</td>

                                        {/* Uswer's Phone Number */}
                                        <td className="text-center">11-01-2021</td>
                                        
                                        {/* Status */}
                                        <td className="text-center"> Outstanding </td>

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

                    {/* MAX 12 PROPERTIES PER PAGE */}
                    <p className="text-center mt-4">Pagination goes at the bottom; fixed</p>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default MaintenanceTable
