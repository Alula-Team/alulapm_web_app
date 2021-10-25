import React from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
import { AvField, AvForm } from "availity-reactstrap-validation"

const EditUserModal = ({ show, onCloseClick }) => {

    return(
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Edit User
                </ModalHeader>
                <ModalBody>
                    <AvForm>
                        <Row form>
                            {/* USER NAME */}
                            <Col className="col-12 mb-4">
                                <AvField
                                    name="user_name"
                                    label="Name"
                                    placeholder="Enter user&apos;s name..."
                                    type="text"
                                    errorMessage="Please enter user&apos;s name"
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
                                    placeholder="Enter user&apos;s email address..."
                                    helpMessage="i.e john@email.com"
                                    type="text"
                                    errorMessage="Please enter user&apos;s email"
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
                                    placeholder="Enter user&apos;s telephone number..."
                                    helpMessage="i.e (xxx)xxx-xxxx"
                                    type="phone"
                                    errorMessage="Please enter user&apos;s telephone number"
                                    validate={{
                                        required: { value: true },
                                    }}
                                    // value={ event.user_telephone ? event.title_category : "" }
                                />
                            </Col>

                            {/* JOB TITLE */}
                            <Col className="col-12 mb-4">
                                <AvField 
                                    type="select"
                                    name="job_title"
                                    label="Job Title"
                                    errorMessage="Please enter user&apos;s job title"
                                    validate={{
                                        required: { value: true },
                                      }}
                                    value={
                                      event ? event.job_title : "select_job_title"
                                    }
                                >
                                    <option value="select_job_title">Select Job Title</option>
                                    <option value="cleaning_personnel">Cleaning Personnel</option>
                                    <option value="facilities_personnel">Facilities Personnel</option>
                                    <option value="grounds_personnel">Grounds Keeping Personnel</option>
                                    <option value="leasing_agent">Leasing Agent</option>
                                    <option value="marketing_personnel">Marketing Personnel</option>
                                    <option value="property_manager">Property Manager</option>
                                    <option value="property_staff">Property Staff</option>
                                    <option value="realestate_agent">Real Estate Agent</option>
                                    <option value="realestate_broker">Real Estate Broker</option>
                                </AvField>
                            </Col>

                            {/* HIRE DATE */}
                            <Col className="col-12 mb-4">
                                <AvField 
                                    name="date" 
                                    label="Hire Date" 
                                    type="date" 
                                    errorMessage="Please enter user&apos;s hire date"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
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

EditUserModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default EditUserModal