import { Navigate } from 'react-router-dom'
import { api } from '../API/api'

export function PrivateRoute({ children }) {
  const token = api.getToken()
  return token ? children : <Navigate to="login" />
}
