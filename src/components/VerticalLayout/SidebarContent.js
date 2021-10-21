import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>

            {/* DASHBOARD */}
            <li>
              <Link to="/dashboard" className="">
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            {/* Rentals */}
            <li>
              <Link to="/rentals" className="">
                <i className="bx bx-building-house"></i>
                <span>{props.t("Rentals")}</span>
              </Link>
            </li>

            {/* Accounting */}
            <li>
              <Link to="/accounting" className="">
                <i className="bx bx-file"></i>
                <span>{props.t("Accounting")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Apps")} </li>

            {/* CALENDAR */}
            <li>
              <Link to="/calendar" className="">
                <i className="bx bx-calendar"></i>
                <span>{props.t("Calendar")}</span>
              </Link>
            </li>

            {/* CHAT - Mass/Group Messages and Invidual Messages */}
            <li>
              <Link to="/chat" className="">
                <i className="bx bx-chat"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  14
                </span>
                <span>{props.t("Chat")}</span>
              </Link>
            </li>

            {/* Leasing - Projects Grid UI w/ Detail (Create task button that links to create task compose) */}
            <li>
              <Link to="#" className="">
                <i className="bx bx-receipt"></i>
                <span>{props.t("Leasing")}</span>
              </Link>
            </li>

            {/* Maintenance - Projects List UI w/ Detail (Create task button that links to create task compose) */}
            <li>
              <Link to="#" className="">
                <i className="bx bx-briefcase-alt-2"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  10
                </span>
                <span>{props.t("Maintenance")}</span>
              </Link>
            </li>

            {/* TASK CREATION & KANBAN BOARD */}
            <li>
              <Link to="#" className="">
                <i className="bx bx-task"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  7
                </span>
                <span>{props.t("Tasks")}</span>
              </Link>
            </li>

            {/* TEAM - USER LIST UI */}
            <li>
              <Link to="#" className="">
                <i className="bx bxs-user-detail"></i>
                <span>{props.t("Team")}</span>
              </Link>
            </li> 
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
