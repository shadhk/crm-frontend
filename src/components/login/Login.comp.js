import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap"
import { loginPending, loginSuccess, loginFail } from "./loginSlice"
import { userLogin } from "../../api/userApi"

const LoginForm = ({ formSwitcher }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { isLoading, isAuth, error } = useSelector(state => state.login)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleOnChange = e => {
    const { name, value } = e.target

    switch (name) {
      case "email":
        setEmail(value)
        break
      case "password":
        setPassword(value)
        break
      default:
        break
    }
  }

  const handleOnSubmit = async e => {
    e.preventDefault()

    if (!email || !password) {
      return alert("fill up the form")
    }

    dispatch(loginPending())

    try {
      const isAuth = await userLogin({ email, password })
      console.log(isAuth)

      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message))
      }

      dispatch(loginSuccess())
      history.push("/dashboard")
    } catch (error) {
      dispatch(loginFail(error.message))
    }
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-danger text-center">Client Login</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
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
            {isLoading && <Spinner variant="primary" animation="border" />}
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
  formSwitcher: PropTypes.func.isRequired
}
