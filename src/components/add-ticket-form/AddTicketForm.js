import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { openNewTicket } from "./addTicketAction"
import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap"
// import { PropTypes } from "prop-types"
import { shortText } from "../../utils/validation"
import "./addticketform.css"

const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: ""
}

const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false
}

export const AddTicketForm = () => {
  const dispatch = useDispatch()
  const {
    user: { name }
  } = useSelector(state => state.user)
  const { isLoading, error, successMsg } = useSelector(state => state.openTicket)
  const [frmData, setFrmData] = useState(initialFrmDt)
  const [frmDataError, setFrmDataError] = useState(initialFrmError)

  useEffect(() => {}, [frmData, frmDataError])

  const handleOnChange = e => {
    const { name, value } = e.target
    setFrmData({
      ...frmData,
      [name]: value
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()

    setFrmDataError(initialFrmError)

    const isSubjectValid = await shortText(frmData.subject)

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid
    })

    dispatch(openNewTicket({ ...frmData, sender: name }))
  }

  return (
    <div className="p-5 mt-3 bg-light rounded-2 form-box add-new-tkt">
      <h1 className="text-danger text-center">Add New Ticket</h1>
      <hr />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="primary">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-2" as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control name="subject" value={frmData.subject} onChange={handleOnChange} placeholder="Enter Subject" required minLength="3" />
            <Form.Text className="text-danger">{frmDataError.subject && "Subject is required"}</Form.Text>
          </Col>
        </Form.Group>
        <Form.Group className="mb-2" as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="date" name="issueDate" value={frmData.issueDate} onChange={handleOnChange} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Password
          </Form.Label>

          <Form.Control as="textarea" name="message" value={frmData.message} rows="5" placeholder="Enter Subject" onChange={handleOnChange} required />
        </Form.Group>

        <div className="d-grid mt-4">
          <Button type="submit" variant="info" size="lg">
            Open Ticket
          </Button>
        </div>
      </Form>
    </div>
  )
}

// AddTicketForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.object.isRequired,
//   frmDataError: PropTypes.object.isRequired
// }
