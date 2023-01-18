import { createSlice } from '@reduxjs/toolkit'
import { TOKEN_KEY_IN_LS } from '../../../../utils/constrans'
import { initialCart } from '../../initialState'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: initialCart.token,
  reducers: {
    setToken(state, action) {
      localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(action.payload))
      return action.payload
    },
    getToken() {
      return JSON.parse(localStorage.getItem(TOKEN_KEY_IN_LS))
    },
  },
})

export const {
  setToken,
  getToken,
} = tokenSlice.actions

export const tokenReducer = tokenSlice.reducer
