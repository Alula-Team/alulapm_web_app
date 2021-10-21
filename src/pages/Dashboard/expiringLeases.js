import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"

const LeaseExpiration = () => {

    return(
        <React.Fragment>
            <Card style={{ height: 440 }}>
                <CardBody>
                    <CardTitle>Lease Expiration</CardTitle>
                    <hr />
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <tbody>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Property Address </td>

                                        {/* Pops Up modal to make changes to the leasing terms */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Send Renewal</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Property Address </td>

                                        {/* Pops Up modal to make changes to the leasing terms */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Send Renewal</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Property Address </td>

                                        {/* Pops Up modal to make changes to the leasing terms */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Send Renewal</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Property Address </td>

                                        {/* Pops Up modal to make changes to the leasing terms */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Send Renewal</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Property Address </td>

                                        {/* Pops Up modal to make changes to the leasing terms */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Send Renewal</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Property Address </td>

                                        {/* Pops Up modal to make changes to the leasing terms */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Send Renewal</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Property Address </td>

                                        {/* Pops Up modal to make changes to the leasing terms */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Send Renewal</u></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* MAX 7 PROPERTIES PER PAGE */}
                    <p className="text-center">Pagination goes at the bottom; fixed</p>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default LeaseExpiration