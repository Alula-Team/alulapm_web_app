import React from 'react'
import PropTypes from 'prop-types'
import { Col, FormText, Input, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
import { AvField, AvForm, AvInput } from "availity-reactstrap-validation"

const CreateRequestModal = ({ show, onCloseClick }) => {

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

    return(
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Create Maintenance Request
                </ModalHeader>
                <ModalBody>
                    <AvForm> 
                        <Row form>
                            {/* PAGE 1 MODAL SPLIT */}
                            <div className="modal-split" id="page1">
                                {/* Property Address */}
                                <Col className="col-12 mb-4">
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Property Address <span className="text-danger">*</span></p>
                                    <AvField 
                                        type="select"
                                        name="maintenance_property_address"
                                        errorMessage="Please select this request&apos;s property address"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={
                                        event ? event.maintenance_assignee : "select_address"
                                        }
                                    >
                                        <option value="select_address">Select Property Address</option>
                                        <option value="property_address">Property Address</option>
                                    </AvField>
                                </Col>

                                {/* Location */}
                                <Col className="col-12 mb-4">
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Location <span className="text-danger">*</span></p>
                                    <AvField 
                                        type="select"
                                        name="maintenance_location"
                                        errorMessage="Please select this request&apos;s location on the property"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={
                                        event ? event.maintenance_assignee : "select_location"
                                        }
                                    >
                                        <option value="select_location">Select Location</option>
                                        <option value="ext-list">--- Exterior ---</option>
                                        <option value="air_conditioner">Air Conditioner</option>
                                        <option value="back_yard">Back Yard</option>
                                        <option value="front_yard">Front Yard</option>
                                        <option value="garage">Garage</option>
                                        <option value="other_exterior">Other Exterior</option>
                                        <option value="water_heater">Water Heater</option>
                                        <option value="int-list">--- Interior ---</option>
                                        <option value="game_room">Game Room</option>
                                        <option value="family_room">Family Room</option>
                                        <option value="foyer">Foyer</option>
                                        <option value="hallway">Hallway</option>
                                        <option value="kitchen">Kitchen</option>
                                        <option value="laundry_room">Laundry Room</option>
                                        <option value="living_room">Living Room</option>
                                        <option value="master_bath">Master Bathroom</option>
                                        <option value="master_bed">Master Bedroom</option>
                                        <option value="master_closet">Master Closet</option>
                                        <option value="other_interior">Other Interior</option>
                                        <option value="secondary_bath">Secondary Bathroom</option>
                                        <option value="secondary_bed">Secondary Bedroom</option>
                                        <option value="secondary_closet">Secondary Closet</option>
                                        <option value="staircase">Staircase</option>
                                    </AvField>
                                </Col>

                                {/* Priority */}
                                <Col className="col-12 mb-4">
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Priority <span className="text-danger">*</span></p>
                                    <AvField 
                                        type="select"
                                        name="maintenance_priority"
                                        errorMessage="Please select this request&apos;s priority"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={
                                        event ? event.maintenance_priority : "select_priority"
                                        }
                                    >
                                        <option value="select_priority">Select Priority</option>
                                        <option value="low_priority">Low Priority</option>
                                        <option value="medium_priority">Medium Priority</option>
                                        <option value="high_priority">High Priority</option>
                                    </AvField>
                                </Col>
                                

                                {/* Status */}
                                <Col className="col-12 mb-4">
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Status <span className="text-danger">*</span></p>
                                    <AvField 
                                        type="select"
                                        name="maintenance_status"
                                        errorMessage="Please select this request&apos;s status"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={
                                        event ? event.maintenance_status : "select_status"
                                        }
                                    >
                                        <option value="select_status">Select Status</option>
                                        <option value="completed">Completed</option>
                                        <option value="outstanding">Outstanding</option>
                                    </AvField>
                                </Col>

                                {/* Assigned Too */}
                                <Col className="col-12 mb-4">
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Assigned <span className="text-danger">*</span></p>
                                    <AvField 
                                        type="select"
                                        name="maintenance_assignee"
                                        errorMessage="Please select this request&apos;s assignee"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={
                                        event ? event.maintenance_assignee : "select_assignee"
                                        }
                                    >
                                        <option value="select_assignee">Select Assignee</option>
                                        <option value="team_member_name">User Name (Title)</option>
                                    </AvField>
                                </Col>
                            </div>
                            
                            {/* PAGE 2 MODAL SPLIT */}
                            <div className="modal-split" id="page2">
                                {/* Description */}
                                <Col className="col-12 mb-4">
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Description <span className="text-danger">*</span></p>
                                    <AvInput
                                        name="description"
                                        placeholder="Enter transaction description..."
                                        type="textarea"
                                        style={{ "height": "200px"}}
                                    />
                                </Col>
                            </div>
                            
                            {/* PAGE 3 MODAL SPLIT */}
                            <div className="modal-split" id="page3">
                                {/* Attach File */}
                                <Col className="col-12 mb-4">
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Description <span className="text-danger">*</span></p>
                                    <div className="mt-4 mt-md-0">
                                        <Input
                                        type="file"
                                        className="form-control"
                                        // defaultValue={}
                                        />
                                        <FormText color="muted">
                                            Optional - any file type
                                        </FormText>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <div className="modal-footer"></div>
                    </AvForm>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

CreateRequestModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default CreateRequestModal