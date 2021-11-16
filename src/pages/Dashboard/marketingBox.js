import React from "react"
import { Card, CardBody, Col, Button, Row } from "reactstrap"

import earth from '../../assets/images/Saly-43.png'

const MarketingBox = () => {

    return(
        <React.Fragment>
            <Card style={{ borderRadius: 10, backgroundColor: '#022AFF70' }}>
                <CardBody>
                    <div>
                        <Row className="d-flex align-items-center">
                            <Col xs={9}>
                                <p style={{ color: 'white', fontSize: 16 }}>Find the best tenants possible by posting one ad to the top rental sites for <span style={{ fontSize: 17, fontWeight: 600 }}><u>FREE</u></span>.</p>
                                <Button
                                    color="danger"
                                    className=" btn-block mt-2 p-2"
                                    // onClick={() => setUserModal(true)}
                                >
                                    Post Vacancies
                                </Button>
                            </Col>
                            <Col xs={3} className="d-flex justify-content-center">
                                <img src={earth} alt="" height="150" style={{ padding: 0 }} />
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default MarketingBox