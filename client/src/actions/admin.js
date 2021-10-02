import api from '../utils/api'
import { setAlert } from './alert'
import {
  CARRIERS_LOADED,
  CUSTOMERS_LOADED,
  PRIORITY_EDIT_SHOW,
  PRIORITY_EDIT_CUSTOMER_LOADED,
  ADMIN_CUSTOMER_LOADED
} from './types'

export const getCarriers = () => async dispatch => {
  const response = await api.get('/admin/getCarriers')

  if (response.data.success) {
    dispatch({
      type: CARRIERS_LOADED,
      payload: response.data.carriers
    })
  }
}

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

export const setCustomerForPriorityEdit = (show, customer) => async dispatch => {
  dispatch({
    type: PRIORITY_EDIT_SHOW,
    payload: show
  })

  if (customer) {
    dispatch({
      type: PRIORITY_EDIT_CUSTOMER_LOADED,
      payload: customer
    })
  }
}

export const updateCustomerPriority = (customerID, priority) => async dispatch => {
  const response = await api.post(`/admin/updateCustomerPriority/${customerID}`, { priority })

  if (response.data.success) {
    dispatch(getCustomers())
    dispatch({
      type: PRIORITY_EDIT_SHOW,
      payload: false
    })
  }
}

export const getCustomer = customerID => async dispatch => {
  const response = await api.get(`/admin/getCustomer/${customerID}`)

  if (response.data.success) {
    dispatch({
      type: ADMIN_CUSTOMER_LOADED,
      payload: response.data.customer
    })
  }
}

export const updateCustomer = (formData, history, customerID) => async dispatch => {
  const response = await api.post(`/admin/updateCustomer/${customerID}`, formData)

  if (response.data.success) {
    dispatch(setAlert('Client Updated Successfully!', 'success'))
    dispatch(goPage(history, ''))
  }
}

export const sendAlertToCustomer = (customerEmail, dueDate, premium) => async dispatch => {
  const response = await api.post('/admin/sendAlertToCustomer', {customerEmail, dueDate, premium})

  if (response.data.success) {
    dispatch(setAlert('Email Sent Successfully!', 'success'))
  }
}
