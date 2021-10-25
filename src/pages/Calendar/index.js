import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"
import { isEmpty } from "lodash"

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap"
import { AvField, AvForm, AvInput } from "availity-reactstrap-validation"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import BootstrapTheme from "@fullcalendar/bootstrap"

import {
  addNewEvent as onAddNewEvent,
  deleteEvent as onDeleteEvent,
  getCategories as onGetCategories,
  getEvents as onGetEvents,
  // updateEvent as onUpdateEvent,
} from "../../store/actions"

import DeleteModal from "./DeleteModal"

//css
import "@fullcalendar/bootstrap/main.css"

//redux
import { useSelector, useDispatch } from "react-redux"

const Calender = props => {
  const dispatch = useDispatch()

  const { events } = useSelector(state => ({
    events: state.calendar.events
  }))

  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [modalcategory, setModalcategory] = useState(false)
  const [event, setEvent] = useState({})
  const [selectedDay, setSelectedDay] = useState(0)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    dispatch(onGetCategories())
    dispatch(onGetEvents())
  }, [])

  useEffect(() => {
    if (!modal && !isEmpty(event) && !!isEdit) {
      setTimeout(() => {
        setEvent({})
        setIsEdit(false)
      }, 500)
    }
  }, [modal, event])

  /**
   * Handling the modal state
   */
  const toggle = () => {
    setModal(!modal)
  }

  const toggleCategory = () => {
    setModalcategory(!modalcategory)
  }

  /**
   * Handling date click on calendar
   */
  const handleDateClick = arg => {
    const date = arg["date"]
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const currectDate = new Date()
    const currentHour = currectDate.getHours()
    const currentMin = currectDate.getMinutes()
    const currentSec = currectDate.getSeconds()
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    )
    const modifiedData = { ...arg, date: modifiedDate }

    setSelectedDay(modifiedData)
    toggle()
  }

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = arg => {
    const event = arg.event
    setEvent({
      id: event.id,
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    })
    setIsEdit(true)
    toggle()
  } 

  /**
   * Handling submit event on event form
   */
  // const handleValidEventSubmit = (e, values) => {
  //   const date = event['start']
  //   const day = date.getDate()
  //   const month = date.getMonth()
  //   const year = date.getFullYear()

  //   const currectDate = new Date()
  //   const currentHour = currectDate.getHours()
  //   const currentMin = currectDate.getMinutes()
  //   const currentSec = currectDate.getSeconds()
  //   const modifiedDate = new Date(year, month, day, currentHour, currentMin, currentSec)
  //   if (isEdit) {
  //     const updateEvent = {
  //       id: event.id,
  //       title: values.title,
  //       classNames: values.category + " text-white",
  //       start: modifiedDate,
  //     }
  //     // update event
  //     dispatch(onUpdateEvent(updateEvent))
  //   } else {
  //     const newEvent = {
  //       id: Math.floor(Math.random() * 100),
  //       title: values["title"],
  //       start: selectedDay ? selectedDay.date : new Date(),
  //       className: values.category + " text-white",
  //     }
  //     // save new event
  //     dispatch(onAddNewEvent(newEvent))
  //   }
  //   setSelectedDay(null)
  //   toggle()
  // }

  const handleValidEventSubmitcategory = (event, values) => {
    const newEvent = {
      id: Math.floor(Math.random() * 100),
      title: values["title_category"],
      start: selectedDay ? selectedDay.date : new Date(),
      className: values.event_category
        ? values.event_category + " text-white"
        : "bg-danger text-white",
    }
    // save new event

    dispatch(onAddNewEvent(newEvent))
    toggleCategory()
  }

  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    dispatch(onDeleteEvent(event))
    setDeleteModal(false)
    toggle()
  }

  /**
   * On calendar drop event
   */
  const onDrop = event => {
    const date = event['date']
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const currectDate = new Date()
    const currentHour = currectDate.getHours()
    const currentMin = currectDate.getMinutes()
    const currentSec = currectDate.getSeconds()
    const modifiedDate = new Date(year, month, day, currentHour, currentMin, currentSec)

    const draggedEl = event.draggedEl
    const modifiedData = {
      id: Math.floor(Math.random() * 100),
      title: draggedEl.innerText,
      start: modifiedDate,
      className: draggedEl.className,
    }
    dispatch(onAddNewEvent(modifiedData))
  }

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <MetaTags>
          <title>Calendar | Alula - Building the Future of Property Management</title>
        </MetaTags>
        <Container fluid={true}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="page-title-box">
              <h4 className="mb-0 font-size-18">Calendar</h4>
            </div>
            <Button
              color="primary"
              className="font-16 btn-block mb-3"
              onClick={toggleCategory}
            >
              <i className="mdi mdi-plus-circle-outline me-1" />
              Create New Event
            </Button>
          </div>
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Row>
                    <Col className="col-12">
                      {/* fullcalendar control */}
                      <FullCalendar
                        plugins={[
                          BootstrapTheme,
                          dayGridPlugin,
                          interactionPlugin
                        ]}
                        slotDuration={"00:15:00"}
                        handleWindowResize={true}
                        themeSystem="bootstrap"
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,dayGridWeek,dayGridDay",
                        }}
                        events={events}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        drop={onDrop}
                      />

                      {/* Create Event / Edit Event Modal */}
                      <Modal
                        isOpen={modalcategory}
                        toggle={toggleCategory}
                        className={props.className}
                      >
                        <ModalHeader toggle={toggle} tag="h4">
                          Create Event
                        </ModalHeader>
                        <ModalBody>
                          <AvForm
                            onValidSubmit={handleValidEventSubmitcategory}
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
                                  value={
                                    event.title_category
                                      ? event.title_category
                                      : ""
                                  }
                                />
                              </Col>

                              {/* DATE & TIME*/}
                              <Row>
                                {/* DATE */}
                                <Col className="col-5 mb-3">
                                  <AvField 
                                    name="date" 
                                    type="date" 
                                    errorMessage="Please enter event title" 
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
                                    onClick={toggleCategory}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-success save-event"
                                  >
                                    Save
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
                                </div>
                              </Col>
                            </Row>
                          </AvForm>
                        </ModalBody>
                      </Modal>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Calender.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
}

export default Calender
