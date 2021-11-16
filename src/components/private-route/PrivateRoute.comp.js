import React from "react"
import { Route, Redirect } from "react-router-dom"
import { DefaultLayout } from "../../layout/DefaultLayout"

const isAuth = true
export const PrivateRoute = ({ children, ...rest }) => {
  return <Route {...rest} exact render={() => (isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />)} />
}
