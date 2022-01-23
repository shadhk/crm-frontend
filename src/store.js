import { configureStore } from "@reduxjs/toolkit"

import ticketsReducer from "./page/ticket-list/ticketSlice"

const store = configureStore({
  reducer: {
    tickets: ticketsReducer
  }
})

export default store
