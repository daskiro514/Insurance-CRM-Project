import api from '../utils/api'
import { setAlert } from './alert'
import {
  CUSTOMERS_LOADED,
} from './types'

export const goPage = (history, location) => async () => {
  await history.push(`/${location}`)
}

export const addCustomer = (formData, history) => async dispatch => {
  const response = await api.post('/admin/addCustomer', formData)

  if (response.data.success) {
    dispatch(setAlert('Client Added Successfully!', 'success'))
    dispatch(goPage(history, ''))
  }
}

export const getCustomers = () => async dispatch => {
  const response = await api.get('/admin/getCustomers')

  if (response.data.success) {
    dispatch({
      type: CUSTOMERS_LOADED,
      payload: response.data.customers
    })
  }
}