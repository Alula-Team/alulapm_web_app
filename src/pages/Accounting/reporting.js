import React from 'react'
import MetaTags from "react-meta-tags"
import { Container, Button, Col, Row } from "reactstrap"

// Components
import ReportsTable from './reportsTable'

const Reporting = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Reporting | Alula - Building the Future of Property Management</title>
                </MetaTags>
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="page-title-box">
                            <h4 className="mb-0 mt-2 font-size-18">Reporting</h4>
                        </div>
                        <Button
                            color="danger"
                            className="font-16 btn-block mb-3"
                            // onClick={() => setAddTransactionModal(true)}
                        >
                            Request Report
                        </Button>
                    </div>
                    
                    {/* Page Split */}
                    <div className="">
                        <Row className="">
                            {/* LEFT */}
                            <Col xs={12} md={12} lg={5}>
                                
                            </Col>

                            {/* Right */}
                            <Col xs={12} md={12} lg={7}>
                                <ReportsTable />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Reporting
