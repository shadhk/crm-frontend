import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const LoginForm = ({ handleOnChange, handleOnSubmit, formSwitcher, email, password }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-danger text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleOnChange} value={email} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleOnChange} value={password} required />
            </Form.Group>
            <Button className="mt-3" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a style={{ textDecoration: "none" }} href="#!" onClick={() => formSwitcher("reset")}>
            Forgot Password?
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}
