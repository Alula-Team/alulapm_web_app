import React from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
import { AvField, AvForm, AvRadio, AvRadioGroup } from "availity-reactstrap-validation"
// import { nextPrev } from './modalUtilities'

const AddPropertyModal = ({ show, onCloseClick }) => {
    var currentTab = 0
    function showTab(n) {
        var x = document.getElementsByClassName("tab")
        x[n].style.display = "block"
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none"
        } else {
            document.getElementById("prevBtn").style.display = "inline"
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>'
        } else {
            document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>'
        }
        fixStepIndicator(n)
    }

    function nextPrev(n) {
        var x = document.getElementsByClassName("tab")
        if (n == 1 && !validateForm()) return false
        x[currentTab].style.display = "none"
        currentTab = currentTab + n
        if (currentTab >= x.length) {

            document.getElementById("nextprevious").style.display = "none"
            document.getElementById("all-steps").style.display = "none"
            document.getElementById("register").style.display = "none"
            document.getElementById("text-message").style.display = "block"
        }
        showTab(currentTab)
    }

    function validateForm() {
        var x, y, i, valid = true
        x = document.getElementsByClassName("tab")
        y = x[currentTab].getElementsByTagName("input")
        for (i = 0; i < y.length; i++) {
            if (y[i].value == "") {
                y[i].className += " invalid"; valid = false
            }
        } if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish"
        } return valid
    }

    function fixStepIndicator(n) {
        var i, x = document.getElementsByClassName("step")
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "")
        } x[n].className += " active"
    }
    return (
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Add Property
                </ModalHeader>
                <ModalBody>
                    <AvForm
                    // onValidSubmit={handleValidEventSubmit}
                    >
                        <Row form>
                            {/* PAGE 1 MODAL SPLIT */}
                            <div className="tab">
                                <Col className="col-12 mb-3">
                                    {/* Property Address - Needs Google Places API */}
                                    <AvField
                                        name="propertyAddress"
                                        label="Property Address"
                                        placeholder="Enter property address..."
                                        type="text"
                                        errorMessage="Please enter the property address"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                        className="mb-3"
                                    />

                                    {/* Unit - Optional */}
                                    <AvField
                                        name="unit"
                                        label="Unit"
                                        placeholder="Enter unit number... "
                                        helpMessage="Optional - include &quot;Apt&quot;, &quot;Unit&quot;, etc..."
                                        type="text"
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                            </div>

                            {/* PAGE 2 MODAL SPLIT */}
                            <div className="tab">
                                <Col className="col-12 mb-3">
                                    {/* # of Bedrooms */}
                                    <AvField
                                        name="bedCount"
                                        label="Bedrooms"
                                        placeholder="Enter number of bedrooms..."
                                        helpMessage="Numbers only"
                                        type="number"
                                        errorMessage="Please enter the number of bedrooms"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* # of Bathrooms */}
                                    <AvField
                                        name="bathCount"
                                        label="Bathrooms"
                                        placeholder="Enter number of bathrooms..."
                                        helpMessage="Numbers only"
                                        type="number"
                                        errorMessage="Please enter the number of bathrooms..."
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Square Footage */}
                                    <AvField
                                        name="livingSQFT"
                                        label="Living Space Sqft"
                                        placeholder="Enter number of living space SqFt..."
                                        helpMessage="Numbers only"
                                        type="number"
                                        errorMessage="Please enter the square footage of living space"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Square Footage - Optional */}
                                    <AvField
                                        name="lotSQFT"
                                        label="Lot Sqft"
                                        placeholder="Enter number of lot SqFt..."
                                        helpMessage="Numbers only"
                                        type="number"
                                        errorMessage="Please enter the square footage of the lot"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                            </div>

                            {/* PAGE 3 MODAL SPLIT - Needs to Hide or show tenant add in */}
                            <div className="tab">
                                <Col className="col-12 mb-3">
                                    <p style={{ fontWeight: 500 }}>Select Property Status</p>
                                    <AvRadioGroup inline name="statusRadio" required>
                                        <AvRadio label="Occupied" value="occupied" />
                                        <AvRadio label="Vacant" value="vacant" />
                                    </AvRadioGroup>
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Tenant Name - Optional */}
                                    <AvField
                                        name="tenant_name"
                                        label="Tenant Name"
                                        type="text"
                                        placeholder="Enter tenant's name..."
                                        errorMessage="Please enter the tenant's name"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                        className="mb-3"
                                    />

                                    {/* Tenant Email - Optional */}
                                    <AvField
                                        name="tenant_email"
                                        label="Tenant's Email"
                                        placeholder="Enter tenant's email..."
                                        type="text"
                                        errorMessage="Please enter the tenant's email"
                                        helpMessage="Your tenant will receive an invitation to download the Alula tenant app"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                            </div>
                            <div className="thanks-message text-center" id="text-message">
                                <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information.It helps us to improve our services!</span>
                            </div>
                            <div style={{ overflow: "auto" }} id="nextprevious">
                                <div style={{ float: "right" }}> <button type="button" id="prevBtn" onClick={nextPrev(-1)}><i className="fa fa-angle-double-left"></i></button> <button type="button" id="nextBtn" onClick={nextPrev(1)}><i className="fa fa-angle-double-right"></i></button> </div>
                            </div>
                        </Row>
                    </AvForm>
                </ModalBody>
                <div className="modal-footer"></div>
            </Modal>
        </React.Fragment>
    )
}

AddPropertyModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default AddPropertyModal
