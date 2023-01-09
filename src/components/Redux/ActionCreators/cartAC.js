/* eslint-disable no-underscore-dangle */
import {
  ADDTOCART, REMOVEFROMCART, CLEARCART, INCREASEPRODUCTQUANTITY, DECREASEPRODUCTQUANTITY,
} from '../Types/cartTypes'

export const addToCartAC = (product) => ({
  type: ADDTOCART,
  payload: {
    id: product._id,
    quantityToBuy: 1,
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

export const increaseProductAC = (product) => ({
  type: INCREASEPRODUCTQUANTITY,
  payload: {
    id: product.id,
  },
})

export const decreaseProductAC = (product) => ({
  type: DECREASEPRODUCTQUANTITY,
  payload: {
    id: product.id,
  },
})
