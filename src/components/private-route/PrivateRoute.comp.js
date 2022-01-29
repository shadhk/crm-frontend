import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginSuccess } from "../login/loginSlice"
import { Route, Redirect } from "react-router-dom"
import { DefaultLayout } from "../../layout/DefaultLayout"
import { fetchNewAccessJWT } from "../../api/userApi"

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector(state => state.login)

  const dispatch = useDispatch()

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT()
      result && dispatch(loginSuccess())
    }

    !sessionStorage.getItem("accessJWT") && localStorage.getItem("crmSite") && updateAccessJWT()

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess())
  }, [dispatch, isAuth])

  return <Route {...rest} exact render={() => (isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />)} />
}
