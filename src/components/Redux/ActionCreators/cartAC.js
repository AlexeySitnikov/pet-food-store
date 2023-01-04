import { ADDTOCART, REMOVEFROMCART, CLEARCART } from '../Types/cartTypes'

export const addToCartAC = (id) => ({
  type: ADDTOCART,
  payload: {
    id,
  },
})

export const removeFromCartAC = () => ({
  type: REMOVEFROMCART,
  payload: {
  },
})

export const clearCartAC = () => ({
  type: CLEARCART,
  payload: {
  },
})
