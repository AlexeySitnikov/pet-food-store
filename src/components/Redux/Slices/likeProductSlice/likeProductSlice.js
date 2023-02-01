/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit'
import { initialCart } from '../../initialState'

export const likeProductSlice = createSlice({
  name: 'likeProduct',
  initialState: initialCart.likeProduct,
  reducers: {
    addLike(state, action) {
      const currentIndex = state.findIndex((id) => id === action.payload._id)
      if (currentIndex !== -1) {
        state.splice(currentIndex, 1)
      } else {
        state.push(action.payload._id)
      }
    },
    deleteLike(state, action) {
      const currentIndex = state.findIndex((id) => id === action.payload._id)
      if (currentIndex !== -1) {
        state.splice(currentIndex, 1)
      }
    },
  },
})

export const {
  addLike, deleteLike,
} = likeProductSlice.actions

export const likeProductReducer = likeProductSlice.reducer
