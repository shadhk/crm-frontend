import React from "react"
import PropTypes from "prop-types"
import { Form, Button } from "react-bootstrap"

const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label className="fw-bold text-secondary">Reply</Form.Label>
      <Form.Control value={msg} onChange={handleOnChange} as="textarea" rows={3} name="detail" />
      <Form.Text className="text-muted">Please reply your message here or update the ticket</Form.Text>
      <div className="text-end my-3">
        <Button variant="primary" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  )
}

export default UpdateTicket

UpdateTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired
}
