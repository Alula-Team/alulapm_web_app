import React from "react"
import { Redirect } from "react-router-dom"

// // Pages Component
import Chat from "../pages/Chat/Chat"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Pages Calendar
import Calendar from "../pages/Calendar/index"

// //Tasks
import TasksList from "../pages/Tasks/tasks-list"
import TasksKanban from "../pages/Tasks/tasks-kanban"
import TasksCreate from "../pages/Tasks/tasks-create"

// //Team

// //Projects
import ProjectsGrid from "../pages/Projects/projects-grid"
import ProjectsList from "../pages/Projects/projects-list"
import ProjectsOverview from "../pages/Projects/ProjectOverview/projects-overview"
import ProjectsCreate from "../pages/Projects/projects-create"

//Invoices
import InvoicesList from "../pages/Invoices/invoices-list"
import InvoiceDetail from "../pages/Invoices/invoices-detail"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import Recoverpw from "../pages/Authentication/Recoverpw"
import EmailVerification from "../pages/Authentication/auth-email-verification"
import TwostepVerification from "../pages/Authentication/auth-two-step-verification"


// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Pages

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  //chat
  { path: "/chat", component: Chat },

  // //calendar
  { path: "/calendar", component: Calendar },

  // //profile
  { path: "/profile", component: UserProfile },

  //Invoices
  { path: "/invoices-list", component: InvoicesList },
  { path: "/invoices-detail/:id?", component: InvoiceDetail },

  // Tasks
  { path: "/tasks-list", component: TasksList },
  { path: "/tasks-kanban", component: TasksKanban },
  { path: "/tasks-create", component: TasksCreate },

  //Projects
  { path: "/projects-grid", component: ProjectsGrid },
  { path: "/projects-list", component: ProjectsList },
  { path: "/projects-overview", component: ProjectsOverview },
  { path: "/projects-overview/:id", component: ProjectsOverview },
  { path: "/projects-create", component: ProjectsCreate },

  // Team
  // { path: "/contacts-list", component: ContactsList },
  // { path: "/contacts-profile", component: ContactsProfile },


  //Utility
  // { path: "/pages-faqs", component: PagesFaqs },

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
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/auth-email-verification", component: EmailVerification },
  { path: "/auth-two-step-verification", component: TwostepVerification },
]

export { authProtectedRoutes, publicRoutes }
