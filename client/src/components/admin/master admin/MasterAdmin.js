import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../../routing/PrivateRoute'
import MasterAdminSidebar from './MasterAdminSidebar'
import MasterAdminCustomerPriorityEdit from './modals/MasterAdminCustomerPriorityEdit'
import MasterAdminCustomers from './MasterAdminCustomers'
import MasterAdminCustomer from './MasterAdminCustomer'
import MasterAdminAddCustomer from './MasterAdminAddCustomer'
import MasterAdminCarrierCustomers from './MasterAdminCarrierCustomers'

const MasterAdmin = () => {

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <MasterAdminSidebar />
        <div className='col-md-10'>
          <Router basename="/home">
            <PrivateRoute exact path="/" component={MasterAdminCustomers} />
            <PrivateRoute exact path="/addCustomer" component={MasterAdminAddCustomer} />
            <PrivateRoute exact path="/customer/:id" component={MasterAdminCustomer} />
            <PrivateRoute exact path="/carrier/:id" component={MasterAdminCarrierCustomers} />
          </Router>
          <MasterAdminCustomerPriorityEdit />
        </div>
      </div>
    </div>
  )
}

export default MasterAdmin