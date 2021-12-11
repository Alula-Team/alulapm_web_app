import React, {useState} from 'react'
import { Form, Col, Button, Input, FormText } from 'reactstrap'


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
                            n_button.setAttribute("class","btn btn-primary")
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
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Property Address <span className="text-danger">*</span></p>
                                    <AvField
                                        name="propertyAddress"
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
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Unit</p>
                                    <AvField
                                        name="unit"
                                        placeholder="Enter unit number... "
                                        helpMessage="Optional - include &quot;Apt&quot;, &quot;Unit&quot;, etc..."
                                        type="text"
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Purchase Price */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Purchase Price <span className="text-danger">*</span></p>
                                    <AvField
                                        name="purchasePrice"
                                        placeholder="Enter the purchase..."
                                        helpMessage="Numbers only - used to calculate metrics for reporting"
                                        type="number"
                                        errorMessage="Please enter the purchase price"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Purchase Date */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Purchase Date <span className="text-danger">*</span></p>
                                    <AvField 
                                        name="date"
                                        type="date" 
                                        errorMessage="Please enter properties purchase date"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </Col>
                            </div>

                            {/* PAGE 2 MODAL SPLIT */}
                            <div className="modal-split" id="page2">
                                <Col className="col-12 mb-3">
                                    {/* # of Bedrooms */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Bedrooms <span className="text-danger">*</span></p>
                                    <AvField
                                        name="bedCount"
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
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Bathrooms <span className="text-danger">*</span></p>
                                    <AvField
                                        name="bathCount"
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
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Living Space Sqft <span className="text-danger">*</span></p>
                                    <AvField
                                        name="livingSQFT"
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
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Lot Sqft <span className="text-danger">*</span></p>
                                    <AvField
                                        name="lotSQFT"
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
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Select Property Status <span className="text-danger">*</span></p>
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
                                </Col>
                            </div>
                        </Row>
                    </AvForm>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default AddPropertyModal