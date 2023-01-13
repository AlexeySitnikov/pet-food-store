import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './Slices/productsSlice/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsNameToSearch: productsNameToSearchReducer,
  },
})
