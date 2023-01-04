import { initialState } from '../../initialState'
import { ADDTOCART, CLEARCART, REMOVEFROMCART } from '../../Types/cartTypes'

// eslint-disable-next-line default-param-last
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART: {
      return [...state, action.payload] }
    case REMOVEFROMCART: return null
    case CLEARCART: {
      console.log({ state })
      return state
    }

    default: return state
  }
}
