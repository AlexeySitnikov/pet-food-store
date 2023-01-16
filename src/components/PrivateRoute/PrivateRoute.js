import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
// import { api } from '../API/api'
// import { setToken } from '../Redux/Slices/tokenSlice/tokenSlice'

export function PrivateRoute({ children }) {
  const token = useSelector((store) => store.token)
  return token ? children : <Navigate to="login" />
}
