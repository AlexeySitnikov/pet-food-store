import { GETTOKEN, SETTOKEN } from '../Types/tokenTypes'

export const getTokenAC = () => ({
  type: GETTOKEN,
  payload: {
  },
})

export const setTokenAC = (token) => ({
  type: SETTOKEN,
  payload: {
    token,
  },
})
