import React, { useState } from 'react'
import MetaTags from "react-meta-tags"
import { Container, Button } from "reactstrap"

// Components
import TransactionsTable from "./transactionsTable"
import AddTransactionModal from "./AddTransactionModal"

const Accounting = () => {
    const [addTransactionModal, setAddTransactionModal] = useState(false)
    return (
        <React.Fragment>
            <AddTransactionModal
                show={addTransactionModal}
                onCloseClick={() => setAddTransactionModal(false)}
            />
            <div className="page-content">
                <MetaTags>
                    <title>Accounting | Alula - Building the Future of Property Management</title>
                </MetaTags>
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="page-title-box">
                            <h4 className="mb-0 mt-2 font-size-18">Accounting</h4>
                        </div>
                        <Button
                            color="primary"
                            className="font-16 btn-block mb-3"
                            onClick={() => setAddTransactionModal(true)}
                        >
                            <i className="mdi mdi-plus-circle-outline me-1" />
                            Add Transaction
                        </Button>
                    </div>
                    <TransactionsTable />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Accounting
    