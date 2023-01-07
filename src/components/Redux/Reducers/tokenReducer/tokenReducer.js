import { initialState } from '../../initialState'
import { GETTOKEN, SETTOKEN } from '../../Types/tokenTypes'

// eslint-disable-next-line default-param-last
export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTOKEN:
      return action.payload
    case SETTOKEN: return null

    default: return state
  }
}
