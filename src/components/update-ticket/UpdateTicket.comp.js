import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { Form, Button } from "react-bootstrap"

import { replyOnTicket } from "../../page/ticket-list/ticketAction"

export const UpdateTicket = ({ _id }) => {
  const {
    user: { name }
  } = useSelector(state => state.user)
  const [message, setMessage] = useState("")

  const dispatch = useDispatch()

  const handleOnChange = e => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const msgObj = {
      message,
      sender: name
    }

    dispatch(replyOnTicket(_id, msgObj))
    setMessage("")
  }

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label className="fw-bold text-secondary">Reply</Form.Label>
        <Form.Control value={message} onChange={handleOnChange} as="textarea" rows={3} name="detail" />
        <Form.Text className="text-muted">Please reply your message here or update the ticket</Form.Text>
        <div className="text-end my-3">
          <Button variant="primary" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  )
}

UpdateTicket.propTypes = {
  _id: PropTypes.string.isRequired
}
