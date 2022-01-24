import React, { useState } from "react"
import "./entry.style.css"

import LoginForm from "../../components/login/Login.comp"
import ResetPassword from "../../components/password-reset/PasswordReset.comp"

const Entry = () => {
  const [frmLoad, setFrmLoad] = useState("login")

  const handleOnResetSubmit = e => {
    e.preventDefault()
  }

  const formSwitcher = frmType => {
    setFrmLoad(frmType)
  }
  return (
    <div className="entry-page bg-info">
      <div className="p-5 bg-light rounded-2 form-box">
        {frmLoad === "login" && <LoginForm formSwitcher={formSwitcher} />}

        {frmLoad === "reset" && <ResetPassword handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher} />}
      </div>
    </div>
  )
}

export default Entry
