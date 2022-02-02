import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap"
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import { MessageHistory } from "../../components/message-history/MessageHistory.comp"
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp"
import { useParams } from "react-router-dom"

import { fetchSingleTicket, closeTicket } from "../ticket-list/ticketAction"

// const ticket = tickets[0]
const Ticket = () => {
  const { tId } = useParams()
  const dispatch = useDispatch()
  const { isLoading, error, selectedTicket, replyMsg, replyTicketError } = useSelector(state => state.tickets)

  useEffect(() => {
    dispatch(fetchSingleTicket(tId))
  }, [tId, dispatch])

  const closeTicketHandler = () => {
    dispatch(closeTicket(tId))
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner as="span" variant="primary" animation="border" size="lg" role="status" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {replyTicketError && <Alert variant="danger">{replyTicketError}</Alert>}
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
        </Col>
      </Row>
      <Row>
        <Col className="fw-bolder text-secondary">
          <div className="subject">Subject : {selectedTicket.subject}</div>
          <div className="date">Ticket Opened : {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}</div>
          <div className="status">Status : {selectedTicket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info" onClick={closeTicketHandler} disabled={selectedTicket.status === "Closed"}>
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{selectedTicket.conversation && <MessageHistory msg={selectedTicket.conversation} />}</Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <UpdateTicket _id={tId} />
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket
