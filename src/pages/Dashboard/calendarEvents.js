import React from "react"
import { Card, CardBody, CardTitle, Media } from "reactstrap"

const CalendarEvents = () => {

    return(
        <React.Fragment>
            <Card style={{ height: 440 }}>
                <CardBody>
                    <CardTitle>Todays Events</CardTitle>
                    <hr />
                    <ul className="verti-timeline list-unstyled">


                        {/* WHEN AN EVEN HAS PASSED, IT IS REMOVED FROM LIST */}

                        
                        <li className="event-list">
                            <div className="event-timeline-dot">
                                <i className="bx bx-right-arrow-circle font-size-18" />
                            </div>
                            <Media>
                                <div className="me-3">
                                    <h5 className="font-size-14">
                                        9:00am{" "}
                                        <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                                    </h5>
                                </div>
                                <Media body>
                                    <div>Email catchup block</div>
                                </Media>
                            </Media>
                        </li>
                        <li className="event-list">
                            <div className="event-timeline-dot">
                                <i className="bx bx-right-arrow-circle font-size-18" />
                            </div>
                            <Media>
                                <div className="me-3">
                                    <h5 className="font-size-14">
                                        10:00am{" "}
                                        <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                                    </h5>
                                </div>
                                <Media body>
                                    <div>Review applicants</div>
                                </Media>
                            </Media>
                        </li>
                        <li className="event-list">
                            <div className="event-timeline-dot">
                                <i className="bx bx-right-arrow-circle font-size-18" />
                            </div>
                            <Media>
                                <div className="me-3">
                                    <h5 className="font-size-14">
                                        12:00pm{" "}
                                        <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                                    </h5>
                                </div>
                                <Media body>
                                    <div>Lunch</div>
                                </Media>
                            </Media>
                        </li>
                        <li className="event-list">
                            <div className="event-timeline-dot">
                                <i className="bx bx-right-arrow-circle font-size-18" />
                            </div>
                            <Media>
                                <div className="me-3">
                                    <h5 className="font-size-14">
                                        1:30pm{" "}
                                        <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                                    </h5>
                                </div>
                                <Media body>
                                    <div>Showing for Unit 122</div>
                                </Media>
                            </Media>
                        </li>
                        <li className="event-list">
                            <div className="event-timeline-dot">
                                <i className="bx bx-right-arrow-circle font-size-18" />
                            </div>
                            <Media>
                                <div className="me-3">
                                    <h5 className="font-size-14">
                                        2:00pm{" "}
                                        <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                                    </h5>
                                </div>
                                <Media body>
                                    <div>Showing for Unit 1128</div>
                                </Media>
                            </Media>
                        </li>
                    </ul>

                    {/* MAX 5 EVENTS PER PAGE */}
                    <p className="text-center mt-4">This is supposed to scroll</p>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default CalendarEvents