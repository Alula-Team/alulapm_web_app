import React from 'react'
import MetaTags from "react-meta-tags"
import { Container, Button } from "reactstrap"

// Components
import PropertiesTable from "./propertiesTable"

const Rentals = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Rentals | Alula - Building the Future of Property Management</title>
                </MetaTags>
                <Container fluid>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="page-title-box">
                        <h4 className="mb-0 font-size-18">Rental Propertiess</h4>
                    </div>
                    <Button
                        color="primary"
                        className="font-16 btn-block mb-3"
                    >
                        <i className="mdi mdi-plus-circle-outline me-1" />
                        Add Properties
                    </Button>
                </div>
                    <PropertiesTable />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Rentals