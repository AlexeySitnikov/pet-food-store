import { Navigate } from 'react-router-dom'
import { TOKEN_KEY_IN_LS } from '../../utils/constrans'

export function PrivateRoute({ children }) {
  const tokenFromLS = localStorage.getItem(TOKEN_KEY_IN_LS)
  const token = JSON.parse(tokenFromLS)

  return token ? children : <Navigate to="login" />
}
