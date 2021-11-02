import React from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
import { AvField, AvForm, AvRadio, AvRadioGroup } from "availity-reactstrap-validation"

const AddPropertyModal = ({ show, onCloseClick }) => {
    
    $(document).ready(function() {
        prep_modal()
    })
    function prep_modal() {
        $(".modal").each(function() {
      
            var element = this
            var pages = $(this).find('.modal-split')
        
            if (pages.length != 0) {
                pages.hide()
                pages.eq(0).show()
        
                var b_button = document.createElement("button")
                        b_button.setAttribute("type","button")
                            b_button.setAttribute("class","btn btn-light")
                            b_button.setAttribute("style","display: none")
                            b_button.innerHTML = "Back"
        
                var n_button = document.createElement("button")
                        n_button.setAttribute("type","button")
                            n_button.setAttribute("class","btn btn-success")
                            n_button.innerHTML = "Next"
        
                $(this).find('.modal-footer').append(b_button).append(n_button)
        
        
                var page_track = 0
        
                $(n_button).click(function() {
                
                    this.blur()
            
                    if(page_track == 0) {
                        $(b_button).show()
                    }
        
                    if(page_track == pages.length-2) {
                        $(n_button).text("Save")
                    }
            
                    if(page_track == pages.length-1) {
                        $(element).find("form").submit()
                    }
            
                        if(page_track < pages.length-1) {
                            page_track++
            
                            pages.hide()
                            pages.eq(page_track).show()
                        }
                })
        
                $(b_button).click(function() {
        
                    if(page_track == 1)
                    {
                        $(b_button).hide()
                    }
        
                    if(page_track == pages.length-1)
                    {
                        $(n_button).text("Next")
                    }
        
                    if(page_track > 0)
                    {
                        page_track--
        
                        pages.hide()
                        pages.eq(page_track).show()
                    }
                })
            }
        })
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
                            <div className="modal-split" id="page1">
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
                            <div className="modal-split" id="page2">
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
                            <div className="modal-split" id="page3">
                                <Col className="col-12 mb-3">
                                    <p style={{fontWeight: 500}}>Select Property Status</p>
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
