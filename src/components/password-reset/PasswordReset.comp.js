import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { sendPasswordResetOtp } from "./passwordAction"

const ResetPassword = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const { isLoading, status, message } = useSelector(state => state.password)

  const handleOnResetSubmit = e => {
    e.preventDefault()
    dispatch(sendPasswordResetOtp(email))
  }

  const handleOnChange = e => {
    const { value } = e.target

    setEmail(value)
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-danger text-center">Reset Password</h1>
          <hr />

          {message && <Alert variant={status === "success" ? "success" : "danger"}>{message}</Alert>}

          {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleOnChange} value={email} required />
            </Form.Group>

            <Button className="mt-3" type="submit">
              Reset Password
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link style={{ textDecoration: "none" }} to="/">
            Login Now
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPassword
