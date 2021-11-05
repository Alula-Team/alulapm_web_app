import React from 'react'
import MetaTags from "react-meta-tags"
import { Container, Button } from "reactstrap"

// Components


const Leasing = () => {
    // const [userModal, setUserModal] = useState(false)
    return (
        <React.Fragment>
            
            <div className="page-content">
                <MetaTags>
                    <title>Leasing | Alula - Building the Future of Property Management</title>
                </MetaTags>
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="page-title-box">
                            <h4 className="mb-0 mt-2 font-size-18">Leasing</h4>
                        </div>
                        <Button
                            color="primary"
                            className="font-16 btn-block mb-3"
                            // onClick={() => setUserModal(true)}
                        >
                            <i className="mdi mdi-plus-circle-outline me-1" />
                            Create New Lease Template
                        </Button>
                    </div>
                    
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Leasing
