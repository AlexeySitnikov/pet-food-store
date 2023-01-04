import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer/cartReducer'

export const rootReducer = combineReducers({
  cart: cartReducer,
})
