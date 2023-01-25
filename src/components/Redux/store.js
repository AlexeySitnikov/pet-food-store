import { configureStore } from '@reduxjs/toolkit'
import { ALL_STORE } from '../../utils/constrans'
import { likeProductReducer } from './Slices/likeProductSlice/likeProductSlice'
import { productsReducer } from './Slices/productsSlice/productsSlice'
import { searchProductsByNameReducer } from './Slices/searchProductByNameSlice/searchProductByNameSlice'
import { tokenReducer } from './Slices/tokenSlice/tokenSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsNameToSearch: searchProductsByNameReducer,
    token: tokenReducer,
    likeProduct: likeProductReducer,
  },
})

store.subscribe(() => {
  localStorage.setItem(ALL_STORE, JSON.stringify(store.getState()))
})
