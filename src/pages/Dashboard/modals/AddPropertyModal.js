import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { AvField, AvForm } from "availity-reactstrap-validation"

const AddPropertyModal = () => {
    const [modal, setModal] = useState(false);


    return (
        <React.Fragment>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle} tag="h4">
                    Add Property
                </ModalHeader>
                <ModalBody>
                    <AvForm onValidSubmit={handleValidEventSubmit}>
                        <Row form>
                            <h6>Property Information</h6>
                            <Col className="col-12 mb-3">
                                {/* Property Address - Needs Google Places API */}
                                <AvField
                                    name="propertyAddress"
                                    label="Property Address"
                                    type="text"
                                    errorMessage="Please enter the property address"
                                    validate={{
                                        required: { value: true },
                                    }}
                                    value={event ? event.title : ""}
                                />

                                {/* Unit - Optional */}
                                <AvField
                                    name="unit"
                                    label="Unit (optional)"
                                    type="text"
                                    value={event ? event.title : ""}
                                />

                                {/* # of Bedrooms */}
                                <AvField
                                    name="bedCount"
                                    label="Property Address"
                                    type="text"
                                    errorMessage="Please enter the property address"
                                    validate={{
                                        required: { value: true },
                                    }}
                                    value={event ? event.title : ""}
                                />

                                {/* # of Bathrooms */}
                                <AvField
                                    name="bathCount"
                                    label="Property Address"
                                    type="text"
                                    errorMessage="Please enter the property address"
                                    validate={{
                                        required: { value: true },
                                    }}
                                    value={event ? event.title : ""}
                                />

                                {/* Square Footage */}
                                <AvField
                                    name="title"
                                    label="Property Address"
                                    type="text"
                                    errorMessage="Please enter the property address"
                                    validate={{
                                        required: { value: true },
                                    }}
                                    value={event ? event.title : ""}
                                />
                                
                            </Col>
                            <Col className="col-12 mb-3">
                                <AvField
                                    type="select"
                                    name="category"
                                    label="Select Category"
                                    validate={{
                                        required: { value: true },
                                    }}
                                    value={event ? event.category : "bg-primary"}
                                >
                                    <option value="bg-danger">Commericial</option>
                                    <option value="bg-success">Residential</option>
                                </AvField>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-end">
                                <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={toggle}
                                >
                                    Close
                                </button>
                                {!!isEdit && (
                                    <button
                                    type="button"
                                    className="btn btn-danger me-2"
                                    onClick={() => setDeleteModal(true)}
                                    >
                                    Delete
                                    </button>
                                )}
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

export default AddPropertyModal
