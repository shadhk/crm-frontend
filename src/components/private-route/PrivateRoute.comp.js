import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginSuccess } from "../login/loginSlice"
import { Route, Redirect } from "react-router-dom"
import { DefaultLayout } from "../../layout/DefaultLayout"
import { fetchNewAccessJWT } from "../../api/userApi"
import { getUserProfile } from "../../page/dashboard/userAction"

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector(state => state.login)
  const { user } = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT()
      result && dispatch(loginSuccess())
    }

    !user._id && dispatch(getUserProfile())

    !sessionStorage.getItem("accessJWT") && localStorage.getItem("crmSite") && updateAccessJWT()

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess())
  }, [dispatch, isAuth, user._id])

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
