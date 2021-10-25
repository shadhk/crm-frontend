import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const ResetPassword = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-danger text-center">Reset Password</h1>
          <hr />
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
          <a style={{ textDecoration: "none" }} href="#!" onClick={() => formSwitcher("login")}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPassword

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
}
