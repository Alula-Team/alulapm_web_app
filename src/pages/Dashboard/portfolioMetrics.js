import React from "react"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"

const PortfolioMetrics = () => {

    return(
        <React.Fragment>
            <Card style={{ height: 440 }}>
                <CardBody>
                    <CardTitle>Portfolio Metrics</CardTitle>

                    {/* Vacancy Card */}
                    <Row className="text-center p-1 mt-4" style={{ backgroundColor: "#022AFF10", borderRadius: 10 }}>
                        {/* Occupied */}
                        <Col xs={12}>
                            <p className="text-muted" style={{ fontSize: 12 }}>Properties</p>
                            <h5>12</h5>
                        </Col>
                        
                    </Row>

                    {/* Portfolio Purchase Price */}
                    <Row className="mt-4">
                        <Col xs={12} className="d-flex justify-content-between">
                            <p>Portfolio Purchase Price <i className="bx bx-info-circle"></i></p>
                            <p style={{ fontWeight: 500 }}>$1.50M</p>
                        </Col>
                    </Row>

                    {/* Estimated Value */}
                    <Row className="mt-4">
                        <Col xs={12} className="d-flex justify-content-between">
                            <p>Estimated Value <i className="bx bx-info-circle"></i></p>
                            <p style={{ fontWeight: 500 }}>$3.50M</p>
                        </Col>
                    </Row>


                    {/* Estimated Appreciation */}
                    <Row className="mt-4">
                        <Col xs={12} className="d-flex justify-content-between">
                            <p>Estimated Appreciation <i className="bx bx-info-circle"></i></p>
                            <p style={{ fontWeight: 500 }}>$2.00M</p>
                        </Col>
                    </Row>

                    {/* Time Under Management */}
                    <Row className="mt-4">
                        <Col xs={12} className="d-flex justify-content-between">
                            <p>Time Under Management <i className="bx bx-info-circle"></i></p>
                            <p style={{ fontWeight: 500 }}>5y 3d</p>
                        </Col>
                    </Row>


                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default PortfolioMetrics