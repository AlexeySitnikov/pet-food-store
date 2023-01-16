import { TOKEN_KEY_IN_LS } from '../../utils/constrans'

function getInitialState() {
  const tokenFromLS = JSON.parse(localStorage.getItem(TOKEN_KEY_IN_LS))
  return ({
    products: [],
    productsNameToSearch: '',
    token: tokenFromLS ?? '',
  })
}

export const initialCart = getInitialState()
