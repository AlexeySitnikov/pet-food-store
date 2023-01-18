import { ALL_STORE } from '../../utils/constrans'

// function getInitialState() {
//   const tokenFromLS = JSON.parse(localStorage.getItem(TOKEN_KEY_IN_LS))
//   return ({
//     products: [],
//     productsNameToSearch: '',
//     token: tokenFromLS ?? '',
//   })
// }

export const initialState = {
  products: [],
  productsNameToSearch: '',
  token: '',
}

export const getInitialState = () => {
  const stateFromLS = localStorage.getItem(ALL_STORE)
  return stateFromLS ? JSON.parse(stateFromLS) : initialState
}

export const initialCart = getInitialState()
