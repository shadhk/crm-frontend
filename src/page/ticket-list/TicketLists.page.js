import React, { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp"
import SearchForm from "../../components/search-form/SearchFormComp"
import TicketTable from "../../components/ticket-table/TicketTable.comp"
import tickets from "../../assets/data/dummy-tickets.json"
import { Link } from "react-router-dom"

const TicketLists = () => {
  const [str, setStr] = useState("")
  const [dispTicket, setDispTicket] = useState(tickets)

  useEffect(() => {}, [str, dispTicket])

  const handleOnChange = e => {
    const { value } = e.target
    setStr(value)
    searchTicket(value)
  }

  const searchTicket = sttr => {
    const displayTickets = tickets.filter(row => row.subject.toLowerCase().includes(sttr.toLowerCase()))

    setDispTicket(displayTickets)
  }
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col>
          <Link to="/add-ticket">
            <Button variant="danger">Add New Ticket</Button>{" "}
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  )
}

export default TicketLists
