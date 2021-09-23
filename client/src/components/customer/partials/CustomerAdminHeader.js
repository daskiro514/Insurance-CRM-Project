import React from 'react'
import { connect } from 'react-redux'
import alarm from '../../../img/admin/alarm.svg'
import userAvatar from '../../../img/admin/userAvatar.png'

const CustomerAdminHeader = ({ user }) => {

  return (
    <div className='row adminHeader d-flex align-items-center mb-3 mt-3'>
      <div className='col-md-6 mr-auto'>
        <h5><strong>{user.name}</strong> {user.companyName}</h5>
        <p className='mb-0'>180 Jackson Street NE Tampa Florida 32285</p>
      </div>
      <div className='col-md-6 d-flex flex-row-reverse align-items-center'>
        <div>
          <img src={alarm} alt='ALARM' width='22px' className='mr-2' />
          <span className='mr-2'>{user.name}</span>
          <img src={user.avatar ? user.avatar : userAvatar} alt='AVATAR' className='rounded-circle' width='35px' />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {})(CustomerAdminHeader)