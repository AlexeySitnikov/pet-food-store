import { ADDTOCART, REMOVEFROMCART, CLEARCART } from '../Types/cartTypes'

export const addToCartAC = (id) => ({
  type: ADDTOCART,
  payload: {
    id,
  },
})

export const removeFromCartAC = (id) => ({
  type: REMOVEFROMCART,
  payload: {
    id,
  },
})

export const clearCartAC = () => ({
  type: CLEARCART,
  payload: {
  },
})
