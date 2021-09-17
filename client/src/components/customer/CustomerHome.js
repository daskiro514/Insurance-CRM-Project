import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import CustomerSidbar from './CustomerSidebar'
import CustomerDashboard from './CustomerDashboard'

const CustomerHome = () => {

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <CustomerSidbar />
        <div className='col-md-10'>
          <Router basename="/home">
            <PrivateRoute exact path="/" component={CustomerDashboard} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default CustomerHome