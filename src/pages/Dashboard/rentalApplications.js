import React from "react"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"

const RentalOverview = () => {

    return(
        <React.Fragment>
            <Card style={{ height: 440 }}>
                <CardBody>
                    <CardTitle>Rental Applications</CardTitle>

                    {/* Applications Card */}
                    <Row className="text-center p-1 mt-4" style={{ backgroundColor: "#022AFF10", borderRadius: 10 }}>
                        {/* Occupied */}
                        <Col xs={6}>
                            <p className="text-muted" style={{ fontSize: 12 }}>Properties Listed</p>
                            <h5>2</h5>
                        </Col>
                        {/* Vacant */}
                        <Col xs={6}>
                            <p className="text-muted" style={{ fontSize: 12 }}>Total Applicants</p>
                            <h5>25</h5>
                        </Col>
                    </Row>

                    {/* Applications Table */}
                    <div className="table-responsive mt-2">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <tbody>
                                    <tr>
                                        <div className="d-flex justify-content-between">
                                            5612 Harmony Ave
    
                                            <a href="#">
                                                11 Apps<i className="bx bx-right-arrow-alt align-middle ms-1"></i>
                                            </a>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="d-flex justify-content-between">
                                            595 S. Green Valley Pkwy Unit 121
    
                                            <a href="#">
                                                14 Apps<i className="bx bx-right-arrow-alt align-middle ms-1"></i>
                                            </a>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default RentalOverview