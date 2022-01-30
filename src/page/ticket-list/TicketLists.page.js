import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAllTickets } from "./ticketAction"
import { Container, Row, Col, Button } from "react-bootstrap"
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp"
import SearchForm from "../../components/search-form/SearchFormComp"
import TicketTable from "../../components/ticket-table/TicketTable.comp"
import { Link } from "react-router-dom"

const TicketLists = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllTickets())
  }, [dispatch])

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
          <SearchForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  )
}

export default TicketLists
