/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit'
import { initialCart } from '../../initialState'

export const likeProductSlice = createSlice({
  name: 'likeProduct',
  initialState: initialCart.likeProduct,
  reducers: {
    like(state, action) {
      const currentIndex = state.findIndex((id) => id === action.payload._id)
      if (currentIndex !== -1) {
        state.splice(currentIndex, 1)
      } else {
        state.push(action.payload._id)
      }
    },
  },
})

export const {
  like,
} = likeProductSlice.actions

export const likeProductReducer = likeProductSlice.reducer
