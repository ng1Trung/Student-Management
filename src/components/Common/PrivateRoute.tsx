import { Navigate, Route, RouteProps } from 'react-router-dom'

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
    const isLoggedIn = !!localStorage.getItem('access_token')

    console.log(isLoggedIn)

    if (!isLoggedIn) return <Navigate to="/login" />

    return <Route {...props} />
}
