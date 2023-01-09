/* eslint-disable no-underscore-dangle */
import { initialState } from '../../initialState'
import {
  ADDTOCART, CLEARCART, DECREASEPRODUCTQUANTITY, INCREASEPRODUCTQUANTITY, REMOVEFROMCART,
} from '../../Types/cartTypes'

// eslint-disable-next-line default-param-last
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART: {
      const arr = [...state]
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === action.payload.id) {
          arr[i].quantityToBuy += 1
          return arr
        }
      }
      return [...state, action.payload] }
    case REMOVEFROMCART: return null
    case CLEARCART: {
      // console.log({ state })
      // return state
      return []
    }

    case INCREASEPRODUCTQUANTITY: {
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantityToBuy: product.quantityToBuy + 1,
          }
        }
        return product
      })
    }

    case DECREASEPRODUCTQUANTITY: {
      console.log({ state })
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantityToBuy: product.quantityToBuy - 1,
          }
        }
        return product
      })
    }

    default: return state
  }
}
