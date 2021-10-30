import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { PropTypes } from "prop-types"

import "./addticketform.css"

const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt, frmDataError }) => {
  console.log(frmDt)
  return (
    <div className="p-5 mt-3 bg-light rounded-2 form-box add-new-tkt">
      <h1 className="text-danger text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control name="subject" value={frmDt.subject} onChange={handleOnChange} placeholder="Enter Subject" required minLength="3" />
            <Form.Text className="text-danger">{frmDataError.subject && "Subject is required"}</Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="date" name="issueDate" value={frmDt.issueDate} onChange={handleOnChange} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Password
          </Form.Label>

          <Form.Control as="textarea" name="detail" value={frmDt.detail} rows="5" placeholder="Enter Subject" onChange={handleOnChange} required />
        </Form.Group>

        <div className="d-grid mt-3">
          <Button variant="info" size="lg" onClick={handleOnSubmit}>
            Block Level Button
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddTicketForm

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired
}
