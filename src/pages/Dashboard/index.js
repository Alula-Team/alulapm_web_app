import PropTypes from "prop-types"
import React from "react"
import MetaTags from "react-meta-tags"
import { Col, Container, Row } from "reactstrap"

// Pages Components
import CalendarEvents from "./calendarEvents"
import MarketingBox from "./marketingBox"
import CashFlow from "./cashflow"
import RentalOverview from "./rentalOverview"
import RentalApplications from "./rentalApplications"
import PortfolioMetrics from "./portfolioMetrics"

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

          {/* Row 1 - Marketing, Portfolio Overview, Cashflow */}
          <Row>
            {/* Marketing, Portfolio Metrics */}
            <Col xs={12} md={4}>
              <Row>
               <MarketingBox />
               <PortfolioMetrics />
              </Row>
            </Col>

            {/* Cashflow */}
            <Col xs={12} md={8}>
              <CashFlow />
            </Col>
          </Row>

          {/* Row 2 - Rental Overview, Rental Applications, Calendar Events */}
          <Row>
            {/* Rental Overview */}
            <Col xs={12} md={4}>
              <RentalOverview />
            </Col>

            {/* Rental Applications */}
            <Col xs={12} md={4}>
              <RentalApplications />
            </Col>

            {/* Calendar Events */}
            <Col xs={12} md={4}>
              <CalendarEvents />
            </Col>
          </Row>

          {/* Row 3 - Service Requests, tasks,  */}
          

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
