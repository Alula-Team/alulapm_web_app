import React from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
import { AvField, AvForm } from "availity-reactstrap-validation"

const GenerateReportModal = ({ show, onCloseClick }) => {

    return(
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Generate Report
                </ModalHeader>
                <ModalBody>
                    <AvForm>
                        <Row form>
                            

                            {/* JOB TITLE */}
                            <Col className="col-12 mb-4">
                                <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Select Property <span className="text-danger">*</span></p>
                                <AvField 
                                    type="select"
                                    name="report_location"
                                    errorMessage="Please select which property you'd like to generate a report for.s"
                                    validate={{
                                        required: { value: true },
                                      }}
                                    value={
                                      event ? event.job_title : "report_location"
                                    }
                                >
                                    <option value="report_location">Select Property</option>
                                    <option value="all_properties">All Properties</option>
                                    <option value="">Property Address</option>
                                </AvField>
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
                                    className="btn btn-primary save-event"
                                  >
                                    Generate Report
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

GenerateReportModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default GenerateReportModal