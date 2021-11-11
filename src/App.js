import React from "react"
import "./App.css"
import { DefaultLayout } from "./layout/DefaultLayout"
// import { Dashboard } from "./page/dashboard/Dashboard"
// import Entry from "./page/entry/Entry.page"
// import AddTicket from "./page/new-ticket/AddTicket"
// import TicketLists from "./page/ticket-list/TicketLists.page"
import Ticket from "./page/ticket/Ticket.page"

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  )
}

export default App
