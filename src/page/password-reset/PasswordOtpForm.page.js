import React, { useState } from "react"
import { useSelector } from "react-redux"
import "./PasswordOtpForm.style.css"
import UpdatePasswordForm from "../../components/password-reset/UpdatePasswordForm.comp"
import ResetPassword from "../../components/password-reset/PasswordReset.comp"

const PasswordOtpForm = () => {
  const { showUpdatePassForm } = useSelector(state => state.password)

  return (
    <div className="entry-page bg-info">
      <div className="p-5 bg-light rounded-2 form-box">{showUpdatePassForm ? <UpdatePasswordForm /> : <ResetPassword />}</div>
    </div>
  )
}

export default PasswordOtpForm
