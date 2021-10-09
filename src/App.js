import PropTypes from 'prop-types'
import React from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"

// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes"

// Import all middleware
import Authmiddleware from "./routes/route"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

// Import scss
import "./assets/scss/theme.scss"

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper"

//import fakeBackend from "./helpers/AuthType/fakeBackend"

// Activating fake backend
//fakeBackend()

// const firebaseConfig = {
// apiKey: "AIzaSyDWdcgwt4z8h6oVXxsOshaIbzDZjZIw8CI",
//   authDomain: "alula-5e6c6.firebaseapp.com",
//     projectId: "alula-5e6c6",
//       storageBucket: "alula-5e6c6.appspot.com",
//         messagingSenderId: "633732970516",
//           appId: "1:633732970516:web:b4cf1643121fa99a7acf01"
// }

// init firebase backend
// initFirebaseBackend(firebaseConfig)

const App = props => {

  function getLayout() {
    let layoutCls = VerticalLayout
    switch (props.layout.layoutType) {
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }

  const Layout = getLayout()
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
