import React, { useState, useEffect } from "react"
import { Spinner, Alert } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { userRegistrationVerification } from "../../api/userApi"
import "./userVerification.style.css"

const initialResponse = {
  status: "",
  message: ""
}

const UserVerification = () => {
  const { _id, email } = useParams()
  const dt = { _id, email }

  const [response, setResponse] = useState(initialResponse)

  useEffect(() => {
    const apiCall = async () => {
      const result = await userRegistrationVerification(dt)
      setResponse(result)
    }

    !response.status && apiCall()
  }, [dt, response])

  //call api and send the _id to verify user
  return (
    <div className="registration-page bg-info">
      <div className="my-5">
        <div className="p-5 bg-light rounded-2 form-box">
          {!response.status && <Spinner variant="info" animation="border" />}
          {response.status && <Alert variant={response.status === "success" ? "success" : "danger"}>{response.message}</Alert>}
        </div>
      </div>
    </div>
  )
}

export default UserVerification
