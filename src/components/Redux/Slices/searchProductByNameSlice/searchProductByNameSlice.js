import { createSlice } from '@reduxjs/toolkit'
import { initialCart } from '../../initialState'

export const productsSlice = createSlice({
  name: 'productsNameToSearch',
  initialState: initialCart.productsNameToSearch,
  reducers: {

  },
})
