/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit'
import { initialCart } from '../../initialState'

export const productsSlice = createSlice({
  name: 'productsCart',
  initialState: initialCart.products,
  reducers: {
    addToCart(state, action) {
      const currentProduct = state.find((product) => product.id === action.payload._id)
      if (currentProduct) {
        currentProduct.quantityToBuy += 1
      } else {
        const product = {
          id: action.payload._id,
          quantityToBuy: 1,
        }
        state.push(product)
      }
    },

    removeFromCart: (state, action) => {
      const currentProduct = state.findIndex((product) => product.id === action.payload._id)
      if (currentProduct !== -1) {
        state.slice(currentProduct, 1)
      }
    },

    clearCart: () => [],

    increacreProductQuantity: (state, action) => {
      const currentProduct = state.find((product) => product.id === action.payload._id)
      if (currentProduct) {
        currentProduct.quantityToBuy += 1
      }
    },
    decreaseProductsQuantity: (state, action) => {
      const currentProduct = state.find((product) => product.id === action.payload._id)
      if (currentProduct) {
        currentProduct.quantityToBuy -= 1
      }
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increacreProductQuantity,
  decreaseProductsQuantity,
} = productsSlice.actions

export const productsReducer = productsSlice.reducer
