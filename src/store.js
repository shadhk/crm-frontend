import { configureStore } from "@reduxjs/toolkit"

import ticketsReducer from "./page/ticket-list/ticketSlice"
import loginReducer from "./components/login/loginSlice"

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer
  }
})

export default store
