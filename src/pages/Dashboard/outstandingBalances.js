import React from "react"
import { Col, Card, CardBody, CardTitle, Row } from "reactstrap"

const OutstandingBalances = () => {

    return(
        <React.Fragment>
            <Card style={{ height: 440 }}>
                <CardBody>
                    <CardTitle>Outstanding Rent Payments</CardTitle>
                    <hr />
                    <Row>
                        <Col className="col-12 my-2">
                            <p>Total:</p>
                            <h4 className="text-center">$12,925</h4>
                        </Col>
                    </Row>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <tbody>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> 5612 Harmony Ave </td>

                                        {/* Transaction Type */}
                                        <td className="text-end"> $1,500 </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> 595 S. Green Valley Unit 121 </td>

                                        {/* Transaction Type */}
                                        <td className="text-end"> $1,750 </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> 123 Main Ave </td>

                                        {/* Transaction Type */}
                                        <td className="text-end"> $2,375 </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> 456 Tommy Yard Ave </td>

                                        {/* Transaction Type */}
                                        <td className="text-end"> $2,000 </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> 789 Blanchett Court Apt 1A </td>

                                        {/* Transaction Type */}
                                        <td className="text-end"> $5,300 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* MAX 5 PROPERTIES PER PAGE */}
                    <p className="text-center">Pagination goes at the bottom; fixed</p>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default OutstandingBalances