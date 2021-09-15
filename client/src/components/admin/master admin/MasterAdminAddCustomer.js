import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo/logo.svg'
import alarm from '../../../img/admin/alarm.svg'
import userAvatar from "../../../img/admin/userAvatar.png"

const MasterAdminAddCustomer = ({ user }) => {

  return (
    <div className='m-2'>
      <div className='row adminHeader d-flex align-items-center mb-2'>
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
      <div className='p-4 form'>
        <div className='h4 mb-3'>
          Add Client
        </div>
        <div className="form-group">
          <label>Name of Company/Policyholder</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Policy Effective Dates</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Policy Premium Minus Fully Earned Endorsements</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Policy Holder Email</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>General Liability Class Description</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>General Liability Class Code Ongoing Rate</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>General Liability Class Code Completed Ops Rate</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Workers Comp Class Description</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Workers Comp Class Rate</label>
          <input
            type="text"
            className="form-control"
            required
          />
        </div>
        
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {})(MasterAdminAddCustomer)