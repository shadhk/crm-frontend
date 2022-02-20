import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Button, Col, Container, Form, Row, Spinner, Alert } from "react-bootstrap"
import { newUserRegistration } from "./userRegAction"

const initialState = {
  name: "Shad Hussain Khan",
  phone: "766937053",
  email: "shadkhan41@gmail.com",
  company: "TCS",
  address: "Hyderabad",
  password: "Sh@dkhan22",
  confirmPass: "Sh@dkhan22"
}

const passVerificationError = {
  isLenthy: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  hasSpclChr: false,
  confirmPass: false
}

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState(initialState)
  const [passwordError, setPasswordError] = useState(passVerificationError)

  const { isLoading, status, message } = useSelector(state => state.registration)

  useEffect(() => {}, [newUser])

  const handleOnChange = e => {
    const { name, value } = e.target

    setNewUser({ ...newUser, [name]: value })

    if (name === "password") {
      const isLenthy = value.length > 8
      const hasUpper = /[A-Z]/.test(value)
      const hasLower = /[a-z]/.test(value)
      const hasNumber = /[0-9]/.test(value)
      const hasSpclChr = /[@,#,$,%,&]/.test(value)

      setPasswordError({
        ...passwordError,
        isLenthy,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpclChr
      })
    }

    if (name === "confirmPass") {
      setPasswordError({
        ...passwordError,
        confirmPass: newUser.password === value
      })
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    dispatch(newUserRegistration(newUser))
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-danger text-center">User Registration</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>{message && <Alert variant={status === "success" ? "success" : "danger"}>{message}</Alert>}</Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" value={newUser.name} onChange={handleOnChange} placeholder="Your name" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" name="phone" value={newUser.phone} onChange={handleOnChange} placeholder="Phone" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value={newUser.email} onChange={handleOnChange} placeholder="Enter email" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" name="company" value={newUser.company} onChange={handleOnChange} placeholder="Company name" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={newUser.address} onChange={handleOnChange} placeholder="Full address" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control autoComplete="off" type="password" name="password" value={newUser.password} onChange={handleOnChange} placeholder="Password" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control autoComplete="off" type="password" name="confirmPass" value={newUser.confirmPass} onChange={handleOnChange} placeholder="Confirm Password" required />
            </Form.Group>
            <Form.Text>{!passwordError.confirmPass && <div className="text-danger mb-3">Password doesn't match!</div>}</Form.Text>

            <ul className="mb-4">
              <li className={passwordError.isLenthy ? "text-success" : "text-danger"}>Min 8 characters</li>
              <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least one upper case</li>
              <li className={passwordError.hasLower ? "text-success" : "text-danger"}>At least one lower case</li>
              <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
              <li className={passwordError.hasSpclChr ? "text-success" : "text-danger"}>At least on of the special characters i.e @ # $ % & </li>
            </ul>

            <Button variant="primary" type="submit" disabled={Object.values(passwordError).includes(false)}>
              Submit
            </Button>
            {isLoading && <Spinner variant="info" animation="border" />}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="mt-4">
            Already have an account{" "}
            <Link style={{ textDecoration: "none", fontWeight: "bold" }} to="/">
              Login Now
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationForm
