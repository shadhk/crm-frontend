import React from "react"
import { useSelector } from "react-redux"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

const TicketTable = () => {
  const { searchTicketList, isLoading, error } = useSelector(state => state.tickets)

  if (isLoading) return <h3>Loading...</h3>

  if (error) return <h3>{error}</h3>

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id No.</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {searchTicketList.length ? (
          searchTicketList.map(ticket => (
            <tr key={ticket._id}>
              <td>{ticket._id}</td>
              <td>
                <Link to={`/ticket/${ticket._id}`}>{ticket.subject}</Link>
              </td>
              <td>{ticket.status}</td>
              <td>{ticket.openAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default TicketTable
