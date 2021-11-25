import React from "react"
import PropTypes from 'prop-types'
import { Col, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
import { AvField, AvForm, AvInput } from "availity-reactstrap-validation"

const CreateEventModal = ({ show, onCloseClick }) => {
    
    return (
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader toggle={onCloseClick} tag="h4">
                    Create Event
                </ModalHeader>
                <ModalBody>
                    <AvForm
                        // onValidSubmit={handleValidEventSubmitcategory}
                    >
                    <Row form>
                        {/* EVENT TITLE */}
                        <Col className="col-12 mb-4">
                        <AvField
                            name="title_category"
                            label="Event Title"
                            placeholder="Enter event title..."
                            type="text"
                            errorMessage="Please enter event title"
                            validate={{
                                required: { value: true },
                            }}
                            // value={
                            //     event.title_category ? event.title_category : ""
                            // }
                        />
                        </Col>

                        {/* DATE & TIME*/}
                        <Row>
                        {/* DATE */}
                        <Col className="col-5 mb-3">
                            <AvField 
                            name="date" 
                            type="date" 
                            errorMessage="Please enter event date" 
                            validate={{
                                required: { value: true },
                            }}
                            value ={
                                event ? event.date: ""
                            }
                            />
                        </Col>

                        {/* TIME Start */}
                        <Col className="col-3 mb-3">
                            <AvField
                            type="select"
                            name="start_time"
                            value={
                                event ? event.start_time : "12:00am"
                            }
                            >
                            <option value="">12:00 am</option>
                            <option value="">12:15 am</option>
                            <option value="">12:30 am</option>
                            <option value="">12:45 am</option>
                            <option value="">1:00 am</option>
                            <option value="">1:15 am</option>
                            <option value="">1:30 am</option>
                            <option value="">1:45 am</option>
                            <option value="">2:00 am</option>
                            <option value="">2:15 am</option>
                            <option value="">2:30 am</option>
                            <option value="">2:45 am</option>
                            <option value="">3:00 am</option>
                            <option value="">3:15 am</option>
                            <option value="">3:30 am</option>
                            <option value="">3:45 am</option>
                            <option value="">4:00 am</option>
                            <option value="">4:15 am</option>
                            <option value="">4:30 am</option>
                            <option value="">4:45 am</option>
                            <option value="">5:00 am</option>
                            <option value="">5:15 am</option>
                            <option value="">5:30 am</option>
                            <option value="">5:45 am</option>
                            <option value="">6:00 am</option>
                            <option value="">6:15 am</option>
                            <option value="">6:30 am</option>
                            <option value="">6:45 am</option>
                            <option value="">7:00 am</option>
                            <option value="">7:15 am</option>
                            <option value="">7:30 am</option>
                            <option value="">7:45 am</option>
                            <option value="">8:00 am</option>
                            <option value="">8:15 am</option>
                            <option value="">8:30 am</option>
                            <option value="">8:45 am</option>
                            <option value="">9:00 am</option>
                            <option value="">9:15 am</option>
                            <option value="">9:30 am</option>
                            <option value="">9:45 am</option>
                            <option value="">10:00 am</option>
                            <option value="">10:15 am</option>
                            <option value="">10:30 am</option>
                            <option value="">10:45 am</option>
                            <option value="">11:00 am</option>
                            <option value="">11:15 am</option>
                            <option value="">11:30 am</option>
                            <option value="">11:45 am</option>
                            <option value="">12:00 pm</option>
                            <option value="">12:15 pm</option>
                            <option value="">12:30 pm</option>
                            <option value="">12:45 pm</option>
                            <option value="">1:00 pm</option>
                            <option value="">1:15 pm</option>
                            <option value="">1:30 pm</option>
                            <option value="">1:45 pm</option>
                            <option value="">2:00 pm</option>
                            <option value="">2:15 pm</option>
                            <option value="">2:30 pm</option>
                            <option value="">2:45 pm</option>
                            <option value="">3:00 pm</option>
                            <option value="">3:15 pm</option>
                            <option value="">3:30 pm</option>
                            <option value="">3:45 pm</option>
                            <option value="">4:00 pm</option>
                            <option value="">4:15 pm</option>
                            <option value="">4:30 pm</option>
                            <option value="">4:45 pm</option>
                            <option value="">5:00 pm</option>
                            <option value="">5:15 pm</option>
                            <option value="">5:30 pm</option>
                            <option value="">5:45 pm</option>
                            <option value="">6:00 pm</option>
                            <option value="">6:15 pm</option>
                            <option value="">6:30 pm</option>
                            <option value="">6:45 pm</option>
                            <option value="">7:00 pm</option>
                            <option value="">7:15 pm</option>
                            <option value="">7:30 pm</option>
                            <option value="">7:45 pm</option>
                            <option value="">8:00 pm</option>
                            <option value="">8:15 pm</option>
                            <option value="">8:30 pm</option>
                            <option value="">8:45 pm</option>
                            <option value="">9:00 pm</option>
                            <option value="">9:15 pm</option>
                            <option value="">9:30 pm</option>
                            <option value="">9:45 pm</option>
                            <option value="">10:00 pm</option>
                            <option value="">10:15 pm</option>
                            <option value="">10:30 pm</option>
                            <option value="">10:45 pm</option>
                            <option value="">11:00 pm</option>
                            <option value="">11:15 pm</option>
                            <option value="">11:30 pm</option>
                            </AvField>
                        </Col>

                        <Col className="col-1 mt-2">To</Col>

                        {/* TIME End */}
                        <Col className="col-3 mb-3">
                            <AvField
                            type="select"
                            name="end_time"
                            value={
                                event ? event.end_time : "12:00am"
                            }
                            >
                            <option value="">12:00 am</option>
                            <option value="">12:15 am</option>
                            <option value="">12:30 am</option>
                            <option value="">12:45 am</option>
                            <option value="">1:00 am</option>
                            <option value="">1:15 am</option>
                            <option value="">1:30 am</option>
                            <option value="">1:45 am</option>
                            <option value="">2:00 am</option>
                            <option value="">2:15 am</option>
                            <option value="">2:30 am</option>
                            <option value="">2:45 am</option>
                            <option value="">3:00 am</option>
                            <option value="">3:15 am</option>
                            <option value="">3:30 am</option>
                            <option value="">3:45 am</option>
                            <option value="">4:00 am</option>
                            <option value="">4:15 am</option>
                            <option value="">4:30 am</option>
                            <option value="">4:45 am</option>
                            <option value="">5:00 am</option>
                            <option value="">5:15 am</option>
                            <option value="">5:30 am</option>
                            <option value="">5:45 am</option>
                            <option value="">6:00 am</option>
                            <option value="">6:15 am</option>
                            <option value="">6:30 am</option>
                            <option value="">6:45 am</option>
                            <option value="">7:00 am</option>
                            <option value="">7:15 am</option>
                            <option value="">7:30 am</option>
                            <option value="">7:45 am</option>
                            <option value="">8:00 am</option>
                            <option value="">8:15 am</option>
                            <option value="">8:30 am</option>
                            <option value="">8:45 am</option>
                            <option value="">9:00 am</option>
                            <option value="">9:15 am</option>
                            <option value="">9:30 am</option>
                            <option value="">9:45 am</option>
                            <option value="">10:00 am</option>
                            <option value="">10:15 am</option>
                            <option value="">10:30 am</option>
                            <option value="">10:45 am</option>
                            <option value="">11:00 am</option>
                            <option value="">11:15 am</option>
                            <option value="">11:30 am</option>
                            <option value="">11:45 am</option>
                            <option value="">12:00 pm</option>
                            <option value="">12:15 pm</option>
                            <option value="">12:30 pm</option>
                            <option value="">12:45 pm</option>
                            <option value="">1:00 pm</option>
                            <option value="">1:15 pm</option>
                            <option value="">1:30 pm</option>
                            <option value="">1:45 pm</option>
                            <option value="">2:00 pm</option>
                            <option value="">2:15 pm</option>
                            <option value="">2:30 pm</option>
                            <option value="">2:45 pm</option>
                            <option value="">3:00 pm</option>
                            <option value="">3:15 pm</option>
                            <option value="">3:30 pm</option>
                            <option value="">3:45 pm</option>
                            <option value="">4:00 pm</option>
                            <option value="">4:15 pm</option>
                            <option value="">4:30 pm</option>
                            <option value="">4:45 pm</option>
                            <option value="">5:00 pm</option>
                            <option value="">5:15 pm</option>
                            <option value="">5:30 pm</option>
                            <option value="">5:45 pm</option>
                            <option value="">6:00 pm</option>
                            <option value="">6:15 pm</option>
                            <option value="">6:30 pm</option>
                            <option value="">6:45 pm</option>
                            <option value="">7:00 pm</option>
                            <option value="">7:15 pm</option>
                            <option value="">7:30 pm</option>
                            <option value="">7:45 pm</option>
                            <option value="">8:00 pm</option>
                            <option value="">8:15 pm</option>
                            <option value="">8:30 pm</option>
                            <option value="">8:45 pm</option>
                            <option value="">9:00 pm</option>
                            <option value="">9:15 pm</option>
                            <option value="">9:30 pm</option>
                            <option value="">9:45 pm</option>
                            <option value="">10:00 pm</option>
                            <option value="">10:15 pm</option>
                            <option value="">10:30 pm</option>
                            <option value="">10:45 pm</option>
                            <option value="">11:00 pm</option>
                            <option value="">11:15 pm</option>
                            <option value="">11:30 pm</option>
                            </AvField>
                        </Col>
                        </Row>
                        
                        {/* CATEGORY, REPEAT EVENT & REMINDER */}
                        <Row>
                        {/* CATEGORY */}
                        <Col className="col-4 mb-3">
                            <AvField
                            type="select"
                            name="event_category"
                            label="Choose Category"
                            value={
                                event ? event.event_category : "select_category"
                            }
                            >
                            <option value="select_category">Select Category</option>
                            <option value="appointment">Appointment</option>
                            <option value="meeting">Meeting</option>
                            <option value="other">Other</option>
                            <option value="outOfOffice">Out of Office</option>
                            <option value="showing">Showing</option>
                            <option value="task">Task</option>
                            </AvField>
                        </Col>


                        {/* REPEAT EVENT - daily, weekly, monthly, yearly */}
                        <Col className="col-4 mb-3">
                            <AvField
                            type="select"
                            name="repeat_event"
                            label="Repeat Event"
                            value={
                                event ? event.repeat_event : "none"
                            }
                            >
                            <option value="none">Does Not Repeat</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                            <option value="every_weekday">Every Weekday</option>
                            </AvField>
                        </Col>

                        {/* REMINIDER */}
                        <Col className="col-4 mb-3">
                            <AvField
                            type="select"
                            name="reminder"
                            label="Reminder"
                            value={
                                event ? event.reminder : "none"
                            }
                            >
                            <option value="none">No Reminder</option>
                            <option value="30_min">30 minutes</option>
                            <option value="1_hour">1 hour</option>
                            <option value="1.5_hours">1.5 hours</option>
                            <option value="2_hours">2 hours</option>
                            <option value="1_day">1 day</option>
                            <option value="2_days">2 days</option>
                            </AvField>
                        </Col>
                        </Row>

                        {/* ADD LOCATION - Google Places API */}
                        <Col className="col-12 mb-3">
                        <AvField
                            name="location"
                            label="Add Location"
                            placeholder="Enter location..."
                            type="location"
                            value={event ? event.location : ""}
                        />
                        </Col>

                        {/* ADD LINK */}
                        <Col className="col-12 mb-3">
                        <AvField
                            name="link"
                            label="Add Link"
                            placeholder="Enter link..."
                            type="link"
                            value={event ? event.link : ""}
                        />
                        </Col>

                        {/* ADD DESCRIPTION */}
                        <Col className="col-12 mb-3">
                        <p style={{fontWeight: 500, marginBottom: 10}}>Description</p>
                        <AvInput
                            name="description"
                            placeholder="Enter event description..."
                            type="textarea"
                            style={{ "height": "150px"}}
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
                                className="btn btn-primary save-event"
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

CreateEventModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
  }

export default CreateEventModal