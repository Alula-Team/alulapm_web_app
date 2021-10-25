// import PropTypes from "prop-types"
import React, { useState } from 'react'
import { Icon } from '@iconify/react'

// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Input } from "reactstrap"

// Components
import EditUserModal from "./editUserModal"
import DeleteUserModal from "./deleteUserModal"

//redux
// import { useSelector, useDispatch } from "react-redux"

// Firebase

const TeamTable = () => {
    const [userModal, setUserModal] = useState(false)
    const [deleteUserModal, setDeleteUserModal] = useState(false)

    return (
        <React.Fragment>
            <EditUserModal
                show={userModal}
                onCloseClick={() => setUserModal(false)}
            />
            <DeleteUserModal
                show={deleteUserModal}
                onCloseClick={() => setDeleteUserModal(false)}
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
                                    placeholder="Search Team..."
                                />
                                <i className="bx bx-search-alt search-icon" />
                            </div>
                        </div>

                        {/* Filter */}
                        <div>
                            <select className="mb-4 me-3 custom-select" id="inputGroupSelect01">
                                <option selected>Filter by Status:</option>
                                <option value="1">All Properties</option>
                                <option value="2">Occupied</option>
                                <option value="3">Renewal</option>
                                <option value="4">Vacant</option>
                            </select>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                        {/* User's Name */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            Name
                                            <span className="order-4"></span>
                                        </th>

                                        {/* User's Email */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            Email
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Phone Number */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable text-center">
                                            Phone Number
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Job Title */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable text-center">
                                            Job Title
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Actions */}
                                        <th tabIndex="0" aria-label="View Details sortable" className="sortable text-center">
                                            Actions
                                            <span className="order-4"></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* User's Name*/}
                                        <td className="text-center"> Kane Toomer </td>

                                        {/* User's Email */}
                                        <td className="text-center"> kane@alulapm.com </td>

                                        {/* Uswer's Phone Number */}
                                        <td className="text-center"> (702)918-9000 </td>

                                        {/* Job Title*/}
                                        <td className="text-center"> Property Owner </td>

                                        {/* Actions */}
                                        <td className="text-center">
                                            <a onClick={() => setUserModal(true)}><Icon icon="bx:bx-pencil" width="25" height="25" className="me-3" /></a>
                                            <a onClick={() => setDeleteUserModal(true)}><Icon icon="bx:bx-trash" width="25" height="25" /></a>
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

export default TeamTable
