import React from 'react'
import { connect } from 'react-redux'
import MasterAdmin from '../admin/master admin/MasterAdmin'
import CustomerHome from '../customer/CustomerHome'
// import Landing from './Landing'
import { Redirect } from 'react-router-dom'

const Home = ({ isAuthenticated, user }) => {
  if (isAuthenticated && user && user.type === "admin") {
    return (
      <MasterAdmin />
    )
  } else if (isAuthenticated && user && (user.type === "customer")) {
    return (
      <CustomerHome />
    )
  } else {
    return (
      // <Landing />
      <Redirect to={'/login'} />
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

export default connect(mapStateToProps)(Home)
