import { Navigate } from 'react-router-dom'
// import { TOKEN_KEY_IN_LS } from '../../utils/constrans'
import { api } from '../API/api'

export function PrivateRoute({ children }) {
  // const tokenFromLS = localStorage.getItem(TOKEN_KEY_IN_LS)
  const token = api.getToken()

  return token ? children : <Navigate to="login" />
}
