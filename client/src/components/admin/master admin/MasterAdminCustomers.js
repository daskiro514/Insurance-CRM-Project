import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { goPage } from '../../../actions/admin'
import { getCustomers } from '../../../actions/admin'
import MasterAdminHeader from './partials/MasterAdminHeader'
import MasterAdminCustomerRow from './partials/MasterAdminCustomerRow'
import MasterAdminSidebar from './MasterAdminSidebar'

const MasterAdminCustomers = ({ goPage, getCustomers, customers }) => {
  let history = useHistory()

  React.useEffect(() => {
    getCustomers()
  }, [getCustomers])

  return (
    <div className='row'>
      <MasterAdminSidebar />
      <div className='col-md-10'>
        <div className='m-2 main'>
          <MasterAdminHeader />
          <div className='customerTable table-responsive'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Policy Number</th>
                  <th>Company/Policyholder</th>
                  <th>Policy Premium(GL)</th>
                  <th>Premium Due Date(GL)</th>
                  <th>Policy Premium(WC)</th>
                  <th>Premium Due Date(WC)</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((item, index) =>
                  <MasterAdminCustomerRow key={index} item={item} />
                )}
              </tbody>
            </table>
            <div className='d-flex align-items-center mx-3 my-2' >
              <div className='mr-auto addClient'>
                <span onClick={() => goPage(history, 'addCustomer')}>+ ADD CLIENT</span>
              </div>
              <div className='d-flex align-items-center pageControl'>
                <div className='mr-3'>
                  1 - 10 OF 47
                </div>
                <div>
                  <i className='fas fa-angle-double-left mr-2'></i>
                  <i className='fas fa-angle-double-right'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  customers: state.admin.customers
})

export default connect(mapStateToProps, { goPage, getCustomers })(MasterAdminCustomers)