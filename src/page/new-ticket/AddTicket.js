import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import AddTicketForm from "../../components/add-ticket-from/AddTicketForm"
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp"
import { shortText } from "../../utils/validation"

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: ""
}

const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false
}

const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt)
  const [frmDataError, setFrmDataError] = useState(initialFrmError)

  useEffect(() => {}, [frmData, frmDataError])

  const handleOnChange = e => {
    const { name, value } = e.target
    setFrmData({
      ...frmData,
      [name]: value
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()

    setFrmDataError(initialFrmError)

    const isSubjectValid = await shortText(frmData.subject)

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid
    })

    console.log("form submitted", frmData)
  }
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} frmDt={frmData} frmDataError={frmDataError} />
        </Col>
      </Row>
    </Container>
  )
}

export default AddTicket
