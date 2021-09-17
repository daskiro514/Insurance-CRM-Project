import {
  CUSTOMERS_LOADED
} from '../actions/types'

const initialState = {
  customers: []
}

function adminReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CUSTOMERS_LOADED:
      return {
        ...state,

        customers: payload
      }
    default:
      return state
  }
}

export default adminReducer
