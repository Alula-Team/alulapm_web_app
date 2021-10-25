import React from "react"
import { Redirect } from "react-router-dom"

// Chat
import Chat from "../pages/Chat/Chat"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Calendar
import Calendar from "../pages/Calendar/index"

// Tasks
import TasksList from "../pages/Tasks/tasks-list"
import TasksKanban from "../pages/Tasks/tasks-kanban"
import TasksCreate from "../pages/Tasks/tasks-create"

// //Projects
import ProjectsGrid from "../pages/Projects/projects-grid"
import ProjectsList from "../pages/Projects/projects-list"
import ProjectsOverview from "../pages/Projects/ProjectOverview/projects-overview"
import ProjectsCreate from "../pages/Projects/projects-create"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import EmailVerification from "../pages/Authentication/auth-email-verification"
import TwostepVerification from "../pages/Authentication/auth-two-step-verification"


// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Rentals
import Rentals from "../pages/Rentals/index"

// Accounting
import Accounting from "../pages/Accounting/index"
import InvoiceDetail from "../pages/Accounting/invoices-detail"

// Team
import Team from "../pages/Team/index"

const authProtectedRoutes = [
  // dashboard
  { path: "/dashboard", component: Dashboard },
  { path: "/invoices-detail/:id?", component: InvoiceDetail },

  // rentals
  { path: "/rentals", component: Rentals },

  // accounting
  { path: "/accounting", component: Accounting },

  // calendar
  { path: "/calendar", component: Calendar },

  // chat
  { path: "/chat", component: Chat },

  // leasing
  // { path: "/leasing", component: Leasing },
  // { path: "/lease-create", component: Leasing },


  // maintenance 
  // { path: "/maintenance", component: Maintenance },
  // { path: "/maintenance-detail/:id?", component: MaintenanceDetail },
  // { path: "/maintenance-create", component: MaintenanceCreate },

  // Tasks
  { path: "/tasks-list", component: TasksList },
  { path: "/tasks-kanban", component: TasksKanban },
  { path: "/tasks-create", component: TasksCreate },

  // Team
  { path: "/team", component: Team },
  // { path: "/contacts-profile", component: ContactsProfile },

  //Projects
  { path: "/projects-grid", component: ProjectsGrid },
  { path: "/projects-list", component: ProjectsList },
  { path: "/projects-overview", component: ProjectsOverview },
  { path: "/projects-overview/:id", component: ProjectsOverview },
  { path: "/projects-create", component: ProjectsCreate },


  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  // Authentication Inner
  { path: "/auth-email-verification", component: EmailVerification },
  { path: "/auth-two-step-verification", component: TwostepVerification },
]

export { authProtectedRoutes, publicRoutes }
