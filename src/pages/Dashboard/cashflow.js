import React from "react"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"

import TransactionChart from "./charts/transactionChart"

const CashFlow = () => {

    return(
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="mb-5">Cash Flow</CardTitle>
                    <Row className="text-center mb-1">
                        {/* Revenue */}
                        <Col xs={4}>
                            <h3>$148,000</h3>
                            <p className="text-muted">Revenue</p>
                        </Col>
                        {/* Expenses */}
                        <Col xs={4}>
                            <h3>$28,630</h3>
                            <p className="text-muted">Expenses</p>
                        </Col>
                        {/* Net Profit */}
                        <Col xs={4}>
                            <h3>$124,370</h3>
                            <p className="text-muted">Net Profit</p>
                        </Col>
                    </Row>
                    <TransactionChart />
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default CashFlow