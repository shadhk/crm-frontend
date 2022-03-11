import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap"
import { loginPending, loginSuccess, loginFail } from "./loginSlice"
import { userLogin } from "../../api/userApi"
import { getUserProfile } from "../../page/dashboard/userAction"

const LoginForm = ({ formSwitcher }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { isLoading, isAuth, error } = useSelector(state => state.login)
  const [email, setEmail] = useState("shadkhan@gmail.com")
  const [password, setPassword] = useState("shadkhan22")

  useEffect(() => {
    if (sessionStorage.getItem("accessJWT")) history.push("/dashboard")
  }, [isAuth, history])

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

      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message))
      }

      dispatch(loginSuccess())
      dispatch(getUserProfile())
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
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleOnChange} value={password} autoComplete="off" required />
            </Form.Group>
            <Button className="mt-3" type="submit">
              Login
            </Button>
            {isLoading && <Spinner variant="primary" animation="border" />}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link style={{ textDecoration: "none" }} to="/reset-password">
            Forgot Password?
          </Link>
        </Col>
      </Row>
      <Row className="py-2">
        <Col>
          <p>
            Are you new here?
            <Link style={{ textDecoration: "none" }} to="/registration">
              {" "}
              Register Now
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm

LoginForm.propTypes = {
  formSwitcher: PropTypes.func.isRequired
}
