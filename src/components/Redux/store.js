import { createStore } from 'redux'
import { getInitialState } from './initialState'
import { rootReducer } from './Reducers/rootReducer'

export const store = createStore(rootReducer, getInitialState())

// store.subscribe(() => {
//   localStorage.setItem('asd', JSON.stringify(store.getState()))
// })
