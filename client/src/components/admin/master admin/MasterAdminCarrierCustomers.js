import React from 'react'
import { connect } from 'react-redux'
import { getCustomers } from '../../../actions/admin'
import MasterAdminHeader from './partials/MasterAdminHeader'
import MasterAdminCustomerRow from './partials/MasterAdminCustomerRow'

const MasterAdminCarrierCustomers = ({ match, getCustomers, customers }) => {
  const [carrierCustomers, setCarrierCustomers] = React.useState([])

  React.useEffect(() => {
    getCustomers()
  }, [getCustomers])

  React.useEffect(() => {
    setCarrierCustomers(customers.filter(customer => customer.carrier === match.params.id))
  }, [customers, match])

  return (
    <div className='m-2 main'>
      <MasterAdminHeader />
      <div className='customerTable table-responsive'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Policy Number</th>
              <th>Company/Policyholder</th>
              <th>Policy Premium</th>
              <th>Next Due Date</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {carrierCustomers.map((item, index) =>
              <MasterAdminCustomerRow key={index} item={item} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  customers: state.admin.customers
})

export default connect(mapStateToProps, { getCustomers })(MasterAdminCarrierCustomers)