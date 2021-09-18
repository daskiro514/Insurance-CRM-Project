import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { goPage } from '../../../actions/admin'
import { getCustomers } from '../../../actions/admin'
// import logo from '../../../img/logo/logo.svg'
import alarm from '../../../img/admin/alarm.svg'
import userAvatar from '../../../img/admin/userAvatar.png'

const MasterAdminCustomers = ({ user, goPage, getCustomers, customers }) => {
  let history = useHistory()

  React.useEffect(() => {
    getCustomers()
  }, [getCustomers])

  return (
    <div className='m-2'>
      <div className='row adminHeader d-flex align-items-center mb-3 mt-3'>
        <div className='col-md-6 mr-auto mb-3'>
          {/* <Link to='/'><img src={logo} alt='LOGO' width='250px' /></Link> */}
        </div>
        <div className='col-md-6 d-flex flex-row-reverse align-items-center'>
          <div>
            <img src={alarm} alt='ALARM' width='22px' className='mr-2' />
            <span className='mr-2'>{user.name}</span>
            <img src={user.avatar ? user.avatar : userAvatar} alt='AVATAR' className='rounded-circle' width='35px' />
          </div>
          <div className='mr-3'>
            <div style={{ height: '30px', width: '180px', backgroundColor: '#E8E8E8', color: '#555' }}>
              <span className='ml-2'>
                <i className='fa fa-search mt-2 mr-1'></i>
                <input placeholder='Search' className='headerInput' />
              </span>
            </div>
          </div>
        </div>
      </div>
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
            {customers.map((item, index) =>
              <tr key={index}>
                <td>{item.policyNumber}</td>
                <td>{item.companyName}</td>
                <td>$ {item.ppmfeEndorsements}</td>
                <td>{item.peDates.slice(0,10)}</td>
                <td><button className='btn btn-danger btn-sm'>HIGH</button></td>
              </tr>
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
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  customers: state.admin.customers
})

export default connect(mapStateToProps, { goPage, getCustomers })(MasterAdminCustomers)