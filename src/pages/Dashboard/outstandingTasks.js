import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"

const OutstandingTasks = () => {

    return(
        <React.Fragment>
            <Card style={{ height: 440 }}>
                <CardBody>
                    <CardTitle>Outstanding Tasks</CardTitle>
                    <hr />
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <tbody>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Task 1 </td>

                                        {/* When marked complete; remove from table */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Mark Complete</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Task 2 </td>

                                        {/* When marked complete; remove from table */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Mark Complete</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Task 3 </td>

                                        {/* When marked complete; remove from table */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Mark Complete</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Task 4 </td>

                                        {/* When marked complete; remove from table */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Mark Complete</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Task 5 </td>

                                        {/* When marked complete; remove from table */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Mark Complete</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Task 6 </td>

                                        {/* When marked complete; remove from table */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Mark Complete</u></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Transaction ID */}
                                        <td> Task 7 </td>

                                        {/* When marked complete; remove from table */}
                                        <td className="text-end">
                                            <a href="#" className="font-size-12"><u>Mark Complete</u></a>
                                        </td>
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* MAX 7 TASKS PER PAGE */}
                    <p className="text-center">Pagination goes at the bottom; fixed</p>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default OutstandingTasks