import React from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
import { AvField, AvForm } from "availity-reactstrap-validation"

const CreateUserModal = ({ show, onCloseClick }) => {

    return(
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Create User
                </ModalHeader>
                <ModalBody>
                    <AvForm>
                        <Row form>
                            {/* USER NAME */}
                            <Col className="col-12 mb-4">
                                <AvField
                                    name="user_name"
                                    label="Name"
                                    placeholder="Enter users name..."
                                    type="text"
                                    errorMessage="Please enter event title"
                                    validate={{
                                    required: { value: true },
                                    }}
                                    // value={
                                    // event.title_category
                                    //     ? event.title_category
                                    //     : ""
                                    // }
                                />
                            </Col>

                            {/* EMAIL */}
                            <Col className="col-12 mb-4">
                                <AvField
                                    name="user_email"
                                    label="Email"
                                    placeholder="Enter users email address..."
                                    helpMessage="i.e john@email.com"
                                    type="text"
                                    errorMessage="Please enter event title"
                                    validate={{
                                    required: { value: true },
                                    }}
                                    // value={
                                    // event.title_category
                                    //     ? event.title_category
                                    //     : ""
                                    // }
                                />
                            </Col>

                            {/* Telephone Number */}
                            <Col className="col-12 mb-4">
                                <AvField
                                    name="user_telephone"
                                    label="Phone Number"
                                    placeholder="Enter users telephone number..."
                                    helpMessage="i.e (xxx)xxx-xxxx"
                                    type="phone"
                                    errorMessage="Please enter event title"
                                    validate={{
                                    required: { value: true },
                                    }}
                                    // value={
                                    // event.title_category
                                    //     ? event.title_category
                                    //     : ""
                                    // }
                                />
                            </Col>

                            {/* JOB TITLE */}
                            <Col className="col-12 mb-4">
                                <AvField 
                                    type="select"
                                    name="job_title"
                                    label="Job Title"
                                    value={
                                      event ? event.job_title : "select_job_title"
                                    }
                                >
                                    <option value="select_job_title">Select Job Title</option>
                                    <option value="cleaning_personnel">Cleaning Personnel</option>
                                    <option value="">Facilities Personnel</option>
                                    <option value="">Grounds Keeping Personnel</option>
                                    <option value="">Leasing Agent</option>
                                    <option value="">Marketing</option>
                                    <option value="">Property Manager</option>
                                    <option value="">Property Staff</option>
                                    <option value="">Real Estate Agent</option>
                                    <option value="">Real Estate Broker</option>
                                </AvField>
                            </Col>

                            {/* HIRE DATE */}
                            <Col className="col-12 mb-4">
                                <AvField name="date" label="Hire Date" type="date" />
                            </Col>
                        </Row>
                        <Row>
                              <Col>
                                <div className="text-end">
                                  <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={onCloseClick}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-success save-event"
                                  >
                                    Save
                                  </button>
                                </div>
                              </Col>
                            </Row>
                    </AvForm>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

CreateUserModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default CreateUserModal