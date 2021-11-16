import React from "react"
import { Redirect } from "react-router-dom"


// Accounting
import Transactions from "../pages/Accounting/transactions"
import InvoiceDetail from "../pages/Accounting/invoices-detail"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import EmailVerification from "../pages/Authentication/auth-email-verification"
import TwostepVerification from "../pages/Authentication/auth-two-step-verification"

// Chat
import Chat from "../pages/Chat/Chat"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Calendar
import Calendar from "../pages/Calendar/index"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Leasing
import Leasing from "../pages/Leasing/index"

//Maintenance
import Maintenance from "../pages/Maintenance/index"

// Rentals
import Rentals from "../pages/Rentals/index"

// Tasks
import TasksList from "../pages/Tasks/tasks-list"
import TasksKanban from "../pages/Tasks/tasks-kanban"
import TasksCreate from "../pages/Tasks/tasks-create"

// Team
import Team from "../pages/Team/index"

const authProtectedRoutes = [

  // accounting
  { path: "/accounting", component: Transactions },

  // Calendar
  { path: "/calendar", component: Calendar },

  // Chat
  { path: "/chat", component: Chat },

  // Dashboard
  { path: "/dashboard", component: Dashboard },
  { path: "/invoices-detail/:id?", component: InvoiceDetail },

  // Leasing
  { path: "/leasing", component: Leasing },
  // { path: "/lease-create", component: Leasing },

  // Maintenance 
  { path: "/maintenance", component: Maintenance },

  // Rentals
  { path: "/rentals", component: Rentals },

  // Tasks
  { path: "/tasks-list", component: TasksList },
  { path: "/tasks-kanban", component: TasksKanban },
  { path: "/tasks-create", component: TasksCreate },

  // Team
  { path: "/team", component: Team },
  // { path: "/contacts-profile", component: ContactsProfile },

  // Profile
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
