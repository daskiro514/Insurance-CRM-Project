import api from '../utils/api'
import { setAlert } from './alert'
import { goPage } from './admin'

export const updateOnCustomer = (formData, history, customerID) => async dispatch => {
  const response = await api.post(`/customer/updateOnCustomer/${customerID}`, formData)

  if (response.data.success) {
    dispatch(setAlert('Updated Successfully!', 'success'))
    dispatch(goPage(history, ''))
  }
}