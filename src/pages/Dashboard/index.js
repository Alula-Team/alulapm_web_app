import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { Container } from "reactstrap"

//import action
import { getChartsData as onGetChartsData } from "../../store/actions"

// Pages Components
import WelcomeComp from "./WelcomeComp"
import MonthlyEarnings from "./MonthlyEarnings"
import MonthlyExpenses from "./MonthlyExpenses"
// import ActivityComp from "./ActivityComp"

//i18n
import { withTranslation } from "react-i18next"

//redux
import { useDispatch } from "react-redux"

const Dashboard = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(onGetChartsData("yearly"))
  }, [dispatch])

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

          {/* Row 1 */}
          <div className="row">
            {/* Welcome Box */}
            <div className="col-12 col-xl-4">
              <WelcomeComp />
            </div>

            {/* Money In - FOR PROPERTY MANAGERS ONLY */}
            <div className="col-12 col-xl-4">
              <MonthlyEarnings />
            </div>

            {/* Money Out - FOR PROPERTY MANAGERS ONLY */}
            <div className="col-12 col-xl-4">
              <MonthlyExpenses />
            </div>
          </div>

          {/* Row 2 - Properties Table*/}
          <div className="row">
            {/* Vacant Property List */}
            <div className="col-6">
              
            </div>

            {/* Renewal List */}
            <div className="col-6">
              
            </div>

            {/* Occupied Properties List */}
            <div className="col-12">
              
            </div>
          </div>

          {/* Row 3 - Transaction Table List */}
          <div className="row">
            <div className="col-12">

            </div>
          </div>
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
