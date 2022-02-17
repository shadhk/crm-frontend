import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp"
import { Dashboard } from "./page/dashboard/Dashboard"
import Entry from "./page/entry/Entry.page"
import AddTicket from "./page/new-ticket/AddTicket"
import Registration from "./page/registration/Registration.page"
import TicketLists from "./page/ticket-list/TicketLists.page"
import Ticket from "./page/ticket/Ticket.page"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute exact path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
          <PrivateRoute exact path="/tickets">
            <TicketLists />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  )
}

export default App
