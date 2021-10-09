import PropTypes from 'prop-types'
import React from "react"

// import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"

// import { db } from './helpers/firebase_helper_2'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { writeBatch, addDoc } from 'firebase/firestore'
// import { query, onSnapshot, collection } from 'firebase/firestore'

// Import Routes all
// import { authProtectedRoutes, publicRoutes } from "./routes"

// Import all middleware
// import Authmiddleware from "./routes/route"

// layouts Format
// import VerticalLayout from "./components/VerticalLayout/"
// import NonAuthLayout from "./components/NonAuthLayout"

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
function Whatever() {
  return (
    <div>
      Coming to you from the function, saying
    </div>
  )
}


const App = () => {
  // const [zeeThings, setZeeThings] = useState([])
  // const getCollectionDocs = async (collectionName) => {
  //   const collectionQuery = query(
  //     collection(db, collectionName),
  //   )
  //   const querySnapshot = await getDocs(collectionQuery)
  //   let dataArray = []
  //   querySnapshot.forEach((doc) => {
  //     const data = doc.data()
  //     console.log(data)
  //   })

  //   console.log(dataArray)
  // }

  // getCollectionDocs("properties")

  // const getCollection = (collectionName) => {
  //   const collectionQuery = query(collection(db, collectionName))

  //   onSnapshot(collectionQuery, (querySnapshot) => {
  //     let dataArray = []
  //     querySnapshot.forEach((doc) => {
  //       dataArray.push(doc.data())
  //     })
  //     dataArray.map((d) => console.log(d))
  //   })
  //   return "Yo"
  // }



  // setDoc(documentRef, {
  //   city: "Whooooooooooooolibase"
  // }, { merge: false })
  // function getLayout() {
  //   let layoutCls = VerticalLayout
  //   switch (props.layout.layoutType) {
  //     default:
  //       layoutCls = VerticalLayout
  //       break
  //   }
  //   return layoutCls
  // }

  // const Layout = getLayout()
  return (
    <React.Fragment>
      <button>Sign In</button>
      <Whatever />
      {/* <Router>
        <Switch>
          <div layout={Layout}>Home</div> */}
      {/* {publicRoutes.map((route, idx) => (
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
          ))} */}
      {/* </Switch>
      </Router> */}
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any,
  greeting: PropTypes.string
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
