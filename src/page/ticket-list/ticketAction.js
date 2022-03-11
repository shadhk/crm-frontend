import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets, fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail, replyTicketLoading, replyTicketSuccess, replyTicketFail, closeTicketLoading, closeTicketSuccess, closeTicketFail } from "./ticketSlice"
import { getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClose } from "../../api/ticketApi"

//Action for fetching all tickets
export const fetchAllTickets = () => async dispatch => {
  dispatch(fetchTicketLoading())
  try {
    const res = await getAllTickets()
    res.data.result.length && dispatch(fetchTicketSuccess(res.data.result))
  } catch (error) {
    dispatch(fetchTicketFail(error.message))
  }
}

//Action for searching ticket
export const filterSearchTicket = str => dispatch => {
  dispatch(searchTickets(str))
}

//Action for fetching single ticket only
export const fetchSingleTicket = _id => async dispatch => {
  dispatch(fetchSingleTicketLoading())
  try {
    const res = await getSingleTicket(_id)
    dispatch(fetchSingleTicketSuccess(res.data.result.length && res.data.result[0]))
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message))
  }
}

//Action for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async dispatch => {
  dispatch(replyTicketLoading())
  try {
    const res = await updateReplyTicket(_id, msgObj)

    if (res.status === "error") {
      return dispatch(replyTicketFail(res.message))
    }
    dispatch(fetchSingleTicket(_id))
    dispatch(replyTicketSuccess(res.message))
  } catch (error) {
    dispatch(replyTicketFail(error.message))
  }
}

//Action for close ticket
export const closeTicket = _id => async dispatch => {
  dispatch(closeTicketLoading())
  try {
    const res = await updateTicketStatusClose(_id)

    if (res.status === "error") {
      return dispatch(closeTicketFail(res.message))
    }
    dispatch(fetchSingleTicket(_id))
    dispatch(closeTicketSuccess(res.message))
  } catch (error) {
    dispatch(closeTicketFail(error.message))
  }
}
