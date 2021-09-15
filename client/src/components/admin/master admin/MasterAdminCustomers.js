import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { goPage } from '../../../actions/admin'
import logo from '../../../img/logo/logo.svg'
import alarm from '../../../img/admin/alarm.svg'
import userAvatar from "../../../img/admin/userAvatar.png"

const MasterAdminCustomers = ({ user, goPage }) => {
  let history = useHistory()

  return (
    <div className='m-2'>
      <div className='row adminHeader d-flex align-items-center mb-3'>
        <div className='col-md-6 mr-auto mb-3'>
          <Link to='/'><img src={logo} alt='LOGO' width='250px' /></Link>
        </div>
        <div className='col-md-6 d-flex flex-row-reverse align-items-center'>
          <div>
            <img src={alarm} alt='ALARM' width='22px' className='mr-2' />
            <span className='mr-2'>{user.name}</span>
            <img src={user.avatar ? user.avatar : userAvatar} alt="AVATAR" className='rounded-circle' width='35px' />
          </div>
          <div className='mr-3'>
            <div style={{ height: '30px', width: '180px', backgroundColor: '#E8E8E8', color: '#555' }}>
              <span className='ml-2'>
                <i className="fa fa-search mt-2 mr-1"></i>
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
            <tr>
              <td>E84142547102</td>
              <td>CapStone, LLC</td>
              <td>$2,540.96</td>
              <td>08/24/2021</td>
              <td><button className='btn btn-danger btn-sm'>HIGH</button></td>
            </tr>
            <tr>
              <td>E83451645694</td>
              <td>Rick Anderson</td>
              <td>$3,178.17</td>
              <td>09/13/2021</td>
              <td><button className='btn btn-warning btn-sm'>MED</button></td>
            </tr>
            <tr>
              <td>E83451645694</td>
              <td>Ekindo Solutions, INC</td>
              <td>$7,648.55</td>
              <td>11/30/2021</td>
              <td><button className='btn btn-success btn-sm'>LOW</button></td>
            </tr>
          </tbody>
        </table>
        <div className='d-flex align-items-center mx-3 my-2' >
          <div className='mr-auto addClient'>
            <span onClick={() => goPage(history, 'addCustomer')}>+ ADD CLIENT</span>
            {/* <Link to='/addCustomer'>+ ADD CLIENT</Link> */}
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
  user: state.auth.user
})

export default connect(mapStateToProps, { goPage })(MasterAdminCustomers)