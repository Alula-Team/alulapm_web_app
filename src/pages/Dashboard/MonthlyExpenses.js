import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

const MonthlyEarning = () => {
  return (
    <React.Fragment>
      {" "}
      <Card>
        <CardBody>
          <CardTitle className="mb-2">Monthly Expenses</CardTitle>
          <Row className="align-items-center">
            <Col sm="12">
              <p className="text-muted">This month</p>
              <h3 className="text-center">$34,252</h3>
              <p className="text-muted text-center">
                <span className="text-danger me-2">
                  {" "}
                  12% <i className="mdi mdi-arrow-up"></i>{" "}
                </span>{" "}
                From previous period
              </p>
            </Col>
          </Row>
          <div className="mt-4 d-flex justify-content-center">
            <Link to="" className="btn btn-primary btn-sm">
              View Details <i className="mdi mdi-arrow-right ms-1"></i>
            </Link>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default MonthlyEarning
