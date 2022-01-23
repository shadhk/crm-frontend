import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets } from "./ticketSlice"
import getAllTickets from "../../api/ticketApi"

export const fetchallTickets = () => async dispatch => {
  dispatch(fetchTicketLoading())
  try {
    const res = await getAllTickets()
    dispatch(fetchTicketSuccess(res.data.result))
  } catch (error) {
    dispatch(fetchTicketFail(error.message))
  }
}

export const filterSearchTicket = str => dispatch => {
  dispatch(searchTickets(str))
}
