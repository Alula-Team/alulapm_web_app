import React from "react"
import { Card, CardBody, CardTitle, Col, Progress, Row } from "reactstrap"

const RentalOverview = () => {

    return(
        <React.Fragment>
            <Card style={{ height: 440 }}>
                <CardBody>
                    <CardTitle>Rental Overview</CardTitle>

                    {/* Vacancy Card */}
                    <Row className="text-center p-1 mt-4" style={{ backgroundColor: "#022AFF10", borderRadius: 10 }}>
                        {/* Occupied */}
                        <Col xs={4}>
                            <p className="text-muted" style={{ fontSize: 12 }}>Occupied</p>
                            <h5>10</h5>
                        </Col>
                        {/* Vacant */}
                        <Col xs={4}>
                            <p className="text-muted" style={{ fontSize: 12 }}>Vacant</p>
                            <h5>2</h5>
                        </Col>
                        {/* Past Due */}
                        <Col xs={4}>
                            <p className="text-muted" style={{ fontSize: 12 }}>Past Due</p>
                            <h5>1</h5>
                        </Col>
                    </Row>

                    <Progress multi className="mt-4">
                        <Progress
                            animated
                            bar
                            max={15000} 
                            min={0}
                            value="9000"
                        />
                        <Progress
                            animated
                            bar
                            color="warning"
                            max={15000} min={0}
                            value="3500"
                        />
                        <Progress
                            animated
                            bar
                            color="danger"
                            max={15000} 
                            min={0}
                            value="2500"
                        />
                    </Progress>

                    {/* Expected Rent */}
                    <Row className="mt-4">
                        <Col xs={12} className="d-flex justify-content-between">
                            <p>Expected Rent</p>
                            <p style={{ fontWeight: 500 }}>$15,000</p>
                        </Col>
                    </Row>

                    <hr />

                    {/* Total Rent Collected */}
                    <Row className="mt-3">
                        <Col xs={12} className="d-flex justify-content-between">
                            <p className="text-primary"><i className="bx bx-check-circle me-2"></i> Rent Collected</p>
                            <p style={{ fontWeight: 500 }}>$10,000</p>
                        </Col>
                    </Row>

                    {/* Total Rent Outstanding */}
                    <Row className="mt-3">
                        <Col xs={12} className="d-flex justify-content-between">
                            <p className="text-warning"><i className="bx bx-bulb me-2"></i> Rent Pending</p>
                            <p style={{ fontWeight: 500 }}>$3,500</p>
                        </Col>
                    </Row>

                    {/* Total Rent Past Due */}
                    <Row className="mt-3">
                        <Col xs={12} className="d-flex justify-content-between">
                            <p className="text-danger"><i className="bx bx-error me-2"></i> Rent Past Due</p>
                            <p style={{ fontWeight: 500 }}>$1,500</p>
                        </Col>
                    </Row>

                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default RentalOverview