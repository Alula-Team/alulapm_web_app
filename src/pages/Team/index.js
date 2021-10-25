import React, { useState } from 'react'
import MetaTags from "react-meta-tags"
import { Container, Button } from "reactstrap"

// Components
import TeamTable from "./teamTable"
import UserModal from "./createUserModal"

const Contacts = () => {
    const [userModal, setUserModal] = useState(false)
    return (
        <React.Fragment>
            <UserModal
                show={userModal}
                onCloseClick={() => setUserModal(false)}
            />
            <div className="page-content">
                <MetaTags>
                    <title>Contacts | Alula - Building the Future of Property Management</title>
                </MetaTags>
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="page-title-box">
                            <h4 className="mb-0 mt-2 font-size-18">Team</h4>
                        </div>
                        <Button
                            color="primary"
                            className="font-16 btn-block mb-3"
                            onClick={() => setUserModal(true)}
                        >
                            <i className="mdi mdi-plus-circle-outline me-1" />
                            Create New User
                        </Button>
                    </div>
                    <TeamTable />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Contacts
