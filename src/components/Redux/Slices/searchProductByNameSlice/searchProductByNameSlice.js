import { createSlice } from '@reduxjs/toolkit'
import { initialCart } from '../../initialState'

export const searchProductByNameSlice = createSlice({
  name: 'productsNameToSearch',
  initialState: initialCart.productsNameToSearch,
  reducers: {
    changeProductNameForSearch(state, action) {
      state = action.payload
    },
  },
})

export const {
  changeProductNameForSearch
} = searchProductByNameSlice.actions

export const searchProductsByNameReducer = searchProductByNameSlice.reducer