import { openNewTicketPending, openNewTicketSuccess, openNewTicketFail } from "./addTicketSlice"
import { createNewTicket } from "../../api/ticketApi"

export const openNewTicket = frmData => dispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(openNewTicketPending())

      ////calll Apiiii
      const res = await createNewTicket(frmData)

      if (res.result === "error") {
        return dispatch(openNewTicketFail(res.message))
      }
      dispatch(openNewTicketSuccess(res.message))
    } catch (error) {
      console.log(error)
      dispatch(openNewTicketFail(error.message))
    }
  })
}
