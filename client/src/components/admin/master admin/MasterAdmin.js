import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../../routing/PrivateRoute'
import MasterAdminSidebar from './MasterAdminSidebar'
import MasterAdminCustomers from './MasterAdminCustomers'

const MasterAdmin = () => {

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <MasterAdminSidebar />
        <div className='col-md-10'>
          <Router basename="/home">
            <PrivateRoute exact path="" component={MasterAdminCustomers} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default MasterAdmin