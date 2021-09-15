import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import MasterAdmin from '../admin/master admin/MasterAdmin'
import CustomerHome from '../customer/CustomerHome'

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
    return <Redirect to={"/login"} />
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

export default connect(mapStateToProps)(Home)
