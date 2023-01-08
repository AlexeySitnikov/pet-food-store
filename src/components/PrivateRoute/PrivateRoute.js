import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
// import { TOKEN_KEY_IN_LS } from '../../utils/constrans'
import { api } from '../API/api'
import { setTokenAC } from '../Redux/ActionCreators/tokenAC'

export function PrivateRoute({ children }) {
  // const tokenFromLS = localStorage.getItem(TOKEN_KEY_IN_LS)
  const token = api.getToken()
  const dispatch = useDispatch()
  dispatch(setTokenAC(token))

  return token ? children : <Navigate to="login" />
}
