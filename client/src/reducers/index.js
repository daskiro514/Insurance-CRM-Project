import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import admin from './admin'
import customer from './customer'

export default combineReducers({
  alert,
  auth,
  admin,
  customer
})
