import { configureStore } from "@reduxjs/toolkit"

import ticketsReducer from "./page/ticket-list/ticketSlice"
import loginReducer from "./components/login/loginSlice"
import userReducer from "./page/dashboard/userSlice"
import newTicketReducer from "./components/add-ticket-form/addTicketSlice"
import registrationReducer from "./components/registration-from/userRegistrationSlice"
import passwordReducer from "./components/password-reset/passwordSlice"

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
    openTicket: newTicketReducer,
    registration: registrationReducer,
    password: passwordReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
