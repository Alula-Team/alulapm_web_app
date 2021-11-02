import React, { useState } from 'react'
import MetaTags from "react-meta-tags"
import { Container, Button } from "reactstrap"

// Components
import MaintenanceTable from "./maintenanceTable"
import RequestModal from "./createRequestModal"

const Maintenance = () => {
    const [requestModal, setRequestModal] = useState(false)
    return (
        <React.Fragment>
            <RequestModal
                show={requestModal}
                onCloseClick={() => setRequestModal(false)}
            />
            <div className="page-content">
                <MetaTags>
                    <title>Maintenance | Alula - Building the Future of Property Management</title>
                </MetaTags>
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="page-title-box">
                            <h4 className="mb-0 mt-2 font-size-18">Maintenance</h4>
                        </div>
                        <Button
                            color="primary"
                            className="font-16 btn-block mb-3"
                            onClick={() => setRequestModal(true)}
                        >
                            <i className="mdi mdi-plus-circle-outline me-1" />
                            Create Maintenance Request
                        </Button>
                    </div>
                    <MaintenanceTable />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Maintenance
