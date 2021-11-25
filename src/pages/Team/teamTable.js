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

// users
import user1 from "../../assets/images/users/avatar-3.jpg"

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
                    </div>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                        {/* User's Image */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable text-center">
                                            #
                                            <span className="order-4"></span>
                                        </th>

                                        {/* User's Name */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            Name
                                            <span className="order-4"></span>
                                        </th>

                                        {/* User's Email */}
                                        <th tabIndex="0" aria-label="Property Address sortable" className="sortable">
                                            Email
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Phone Number */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable">
                                            Phone Number
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Job Title */}
                                        <th tabIndex="0" aria-label="Date Added sortable" className="sortable">
                                            Role
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
                                        {/* User's Image */}
                                        <td className="text-center"> 
                                            <img
                                                className="rounded-circle header-profile-user"
                                                src={user1}
                                                alt="Header Avatar"
                                            />
                                        </td>

                                        {/* User's Name */}
                                        <td> 
                                            <span style={{ fontWeight: '500' }}>Kane Toomer</span>
                                            <br />
                                            <span className="text-muted">Property Owner</span>
                                        </td>

                                        {/* User's Email */}
                                        <td>kane@alulapm.com</td>

                                        {/* Uswer's Phone Number */}
                                        <td>(702)918-9000</td>
                                        
                                        {/* Role*/}
                                        <td> Admin </td>

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
