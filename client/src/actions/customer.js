import api from '../utils/api'
import { setAlert } from './alert'
import { goPage } from './admin'
import { loadUser } from './auth'
import { CUSTOMER_LOADED } from './types'

export const updateOnCustomer = (formData, history, customerID) => async dispatch => {
  const response = await api.post(`/customer/updateOnCustomer/${customerID}`, formData)

  if (response.data.success) {
    dispatch(loadUser())
    dispatch(setAlert('Updated Successfully!', 'success'))
    dispatch(goPage(history, ''))
  }
}

export const getCustomer = customerID => async dispatch => {
  const response = await api.get(`/admin/getCustomer/${customerID}`)

  if (response.data.success) {
    dispatch({
      type: CUSTOMER_LOADED,
      payload: response.data.customer
    })
  }
}