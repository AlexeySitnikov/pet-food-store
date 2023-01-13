import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './Slices/productsSlice/productsSlice'
import { searchProductsByNameReducer } from './Slices/searchProductByNameSlice/searchProductByNameSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsNameToSearch: searchProductsByNameReducer,
  },
})
