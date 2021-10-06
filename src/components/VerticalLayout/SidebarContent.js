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

            <li className="menu-title">{props.t("Apps")} </li>

            {/* CALENDAR */}
            <li>
              <Link to="/calendar" className="">
                <i className="bx bx-calendar"></i>
                <span className="badge rounded-pill bg-warning float-end text-dark">
                  3
                </span>
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

            {/* Invoices - */}
            <li>
              <Link to="#" className="">
                <i className="bx bx-receipt"></i>
                <span className="badge rounded-pill bg-success float-end text-dark">
                  New
                </span>
                <span>{props.t("Invoices")}</span>
              </Link>
            </li>

            {/* Notifications - */}
            <li>
              <Link to="#" className="">
                <i className="bx bx-bell"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  124
                </span>
                <span>{props.t("Notifications")}</span>
              </Link>
            </li>

            {/* SERVICE REQUESTS - Projects List UI w/ Detail (Create task button that links to create task compose) */}
            <li>
              <Link to="#" className="">
                <i className="bx bx-briefcase-alt-2"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  10
                </span>
                <span>{props.t("Service Requests")}</span>
              </Link>
            </li>

            {/* TASK CREATION & KANBAN BOARD */}
            <li>
              <Link to="/tasks" className="">
                <i className="bx bx-task"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  7
                </span>
                <span>{props.t("Tasks")}</span>
              </Link>
            </li>

            {/* Team - User user list ui */}
            <li>
              <Link to="/contact-list" className="">
                <i className="bx bxs-user-detail"></i>
                <span>{props.t("Team")}</span>
              </Link>
            </li>

            {/* User Navigation*/}
            <li className="menu-title mt-5">{props.t("User Navigation")} </li>

            {/* Profile */}
            <li>
              <Link to="#" className="">
                <i className="bx bx-user"></i>
                <span>{props.t("Profile")}</span>
              </Link>
            </li>

            {/* Account Settings */}
            <li>
              <Link to="#" className="mb-4">
                <i className="bx bx-cog"></i>
                <span>{props.t("Account Settings")}</span>
              </Link>
            </li>

            <hr style={{width: '80%', margin: 'auto'}} />

            {/* Logout */}
            <li>
              <Link to="#" className="mt-4">
                <i className="bx bx-exit text-warning"></i>
                <span className="text-warning">{props.t("Logout")}</span>
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
