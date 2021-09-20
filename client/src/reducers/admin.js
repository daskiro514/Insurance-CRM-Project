import {
  CARRIERS_LOADED,
  CUSTOMERS_LOADED,
  PRIORITY_EDIT_SHOW,
  PRIORITY_EDIT_CUSTOMER_LOADED
} from '../actions/types'

const initialState = {
  carriers: [],
  customers: [],
  carrierCustomers: [],
  customerForPriorityEdit: null,
  customerPriorityEditModalShow: false
}

function adminReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CARRIERS_LOADED: {
      return {
        ...state,
        carriers: payload
      }
    }
    case CUSTOMERS_LOADED:
      return {
        ...state,
        customers: payload
      }
    case PRIORITY_EDIT_SHOW:
      return {
        ...state,
        customerPriorityEditModalShow: payload
      }
    case PRIORITY_EDIT_CUSTOMER_LOADED:
      return {
        ...state,
        customerForPriorityEdit: payload
      }
    default:
      return state
  }
}

export default adminReducer
