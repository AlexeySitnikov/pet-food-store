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
          wantToBuy: false,
        }
        state.push(product)
      }
    },

    removeFromCart: (state, action) => {
      const currentProductIndex = state.findIndex((product) => product.id === action.payload._id)
      // console.log(action.payload.name)
      if (currentProductIndex !== -1) {
        state.splice(currentProductIndex, 1)
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
    checkWantToBuy: (state, action) => {
      const currentProduct = state.find((product) => product.id === action.payload._id)
      currentProduct.wantToBuy = !currentProduct.wantToBuy
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increacreProductQuantity,
  decreaseProductsQuantity,
  checkWantToBuy,
} = productsSlice.actions

export const productsReducer = productsSlice.reducer
