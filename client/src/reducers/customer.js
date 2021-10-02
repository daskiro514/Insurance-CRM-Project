import {
  CUSTOMER_LOADED
} from '../actions/types'

const initialState = {
  customer: {}
}

function customerReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CUSTOMER_LOADED:
      return {
        ...state,
        customer: payload
      }
    default:
      return state
  }
}

export default customerReducer
