import React, { useState } from 'react'
import MetaTags from "react-meta-tags"
import { Col, Container, Button, Row } from "reactstrap"

// Components
import PropertiesTable from "./propertiesTable"
import AddPropertyModal from "./AddPropertyModal"
import RentalOverview from '../Dashboard/rentalOverview'
import RentalApplications from '../Dashboard/rentalApplications'

const Rentals = () => {
    const [addPropertyModal, setAddPropertyModal] = useState(false)
    return (
        <React.Fragment>
            <AddPropertyModal
                show={addPropertyModal}
                onCloseClick={() => setAddPropertyModal(false)}
            />
            <div className="page-content">
                <MetaTags>
                    <title>Rentals | Alula - Building the Future of Property Management</title>
                </MetaTags>
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="page-title-box">
                            <h4 className="mb-0 mt-2 font-size-18">Rental Properties</h4>
                        </div>
                        <Button
                            color="primary"
                            className="font-16 btn-block mb-3"
                            onClick={() => setAddPropertyModal(true)}
                        >
                            <i className="mdi mdi-plus-circle-outline me-1" />
                            Add Properties
                        </Button>
                    </div>
                    <Row>
                        {/* Rental Overview */}
                        <Col xs={12} md={6}>
                            <RentalOverview />
                        </Col>

                        {/* Rental Applications */}
                        <Col xs={12} md={6}>
                            <RentalApplications />
                        </Col>
                    </Row>
                    <PropertiesTable />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Rentals
