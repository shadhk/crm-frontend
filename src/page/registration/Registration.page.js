import React from "react"
import RegistrationForm from "../../components/registration-from/RegistrationForm.comp"
import "./Registration.style.css"

const Registration = () => {
  return (
    <div className="registration-page bg-info">
      <div className="my-5">
        <div className="p-5 bg-light rounded-2 form-box">
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}

export default Registration
