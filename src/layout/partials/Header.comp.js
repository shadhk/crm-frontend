import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import { userLogout } from "../../api/userApi"
import logo from "../../assets/img/logo.png"

export const Header = () => {
  const history = useHistory()

  const logout = () => {
    userLogout()
    sessionStorage.removeItem("accessJWT")
    localStorage.removeItem("crmSite")
    history.push("/")
  }
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-3">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
