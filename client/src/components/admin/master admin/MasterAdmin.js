import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../../routing/PrivateRoute'
import MasterAdminSidebar from './MasterAdminSidebar'
import MasterAdminCustomers from './MasterAdminCustomers'
import MasterAdminAddCustomer from './MasterAdminAddCustomer'

const MasterAdmin = () => {

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <MasterAdminSidebar />
        <div className='col-md-10'>
          <Router basename="/home">
            <PrivateRoute exact path="/" component={MasterAdminCustomers} />
            <PrivateRoute exact path="/addCustomer" component={MasterAdminAddCustomer} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default MasterAdmin