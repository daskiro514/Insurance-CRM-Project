import React from 'react'
import { Link } from 'react-router-dom'
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
    return (
      <section className='home'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <div className='buttons'>
              {/* <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link> */}
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

export default connect(mapStateToProps)(Home)
