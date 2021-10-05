import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../../actions/auth'
import alarm from '../../../../img/admin/alarm.svg'
import userAvatar from '../../../../img/admin/userAvatar.png'

const MasterAdminHeader = ({ user, logout }) => {

  return (
    <div className='row adminHeader d-flex align-items-center mb-3 mt-3'>
      <div className='col-md-6 mr-auto mb-3'></div>
      <div className='col-md-6 d-flex flex-row-reverse align-items-center'>
        <div className='dropdown'>
          <button type='button' className='btn dropdown-toggle' data-toggle='dropdown'>
            <span className='mr-2'>{user.name}</span>
            <img src={user.avatar ? user.avatar : userAvatar} alt='AVATAR' className='rounded-circle' width='35px' />
          </button>
          <div className="dropdown-menu">
            <p className="dropdown-item">&#8601; Sign Out</p>
          </div>
        </div>
        <div>
          <img src={alarm} alt='ALARM' width='22px' className='mr-2' />
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
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { logout })(MasterAdminHeader)