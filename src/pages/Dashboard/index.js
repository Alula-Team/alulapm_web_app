import PropTypes from "prop-types"
import React from "react"
import MetaTags from "react-meta-tags"
import { Col, Container, Row } from "reactstrap"

// Pages Components
import OutstandingBalances from "./outstandingBalances"
import OutstandingTasks from "./outstandingTasks"
import CalendarEvents from "./calendarEvents"
import LeaseExpiration from "./expiringLeases"
import MaintenanceRequests from "./maintenanceRequests"
import Applicants from "./applicantBox"

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = () => {

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | Alula - Building the Future of Property Management</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
              <h4 className="mb-0 font-size-18">Dashboard</h4>
          </div>

          {/* Row 1 - Outstanding Balances, Outstanding Tasks, Upcoming Calendar Events */}
          <Row>
            {/* Outstanding Balances */}
            <Col className="col-4">
              <OutstandingBalances />
            </Col>

            {/* Outstanding Tasks */}
            <Col className="col-4">
              <OutstandingTasks />
            </Col>

            {/* Upcoming Calendar Events */}
            <Col className="col-4">
              <CalendarEvents />
            </Col>
          </Row>

          {/* Row 2 - Upcoming Lease Renewals, Property Chart */}
          <Row>
            {/* Expiring Leases */}
            <Col className="col-4">
              <LeaseExpiration />
            </Col>

            {/* Maintenance Requests */}
            <Col className="col-4">
              <MaintenanceRequests />
            </Col>

            {/* Rental Applications */}
            <Col className="col-4">
              <Applicants />
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}

export default withTranslation()(Dashboard)
