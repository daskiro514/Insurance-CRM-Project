import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { addCustomer } from '../../../actions/admin'
import logo from '../../../img/logo/logo.svg'
import alarm from '../../../img/admin/alarm.svg'
import userAvatar from '../../../img/admin/userAvatar.png'

const MasterAdminAddCustomer = ({ user, addCustomer }) => {
  const history = useHistory()

  const [formData, setFormData] = React.useState({
    // name: 'Client King2',
    // username: 'king2',
    // password: 'admin123',
    // password2: 'admin123',
    // policyNumber: 'E548614596436',
    // companyName: 'CapStone, LLC',
    // peDates: '2021-05-17',
    // ppmfeEndorsements: 2540.96,
    // email: 'capstonesolutions@gmail.com',
    // glcDescription: 'Automotive Parts and Supplies Distributors (5013)',
    // glccoRate: 3.5,
    // glcccoRate: 2.7,
    // wccDescription: 'Automotive - Machine Shop (3632)',
    // wccRate: 3.46,

    name: '',
    username: '',
    password: '',
    password2: '',
    policyNumber: '',
    companyName: '',
    peDates: '',
    ppmfeEndorsements: 0,
    email: '',
    glcDescription: '',
    glccoRate: 0,
    glcccoRate: 0,
    wccDescription: '',
    wccRate: 0,
  })

  const { name, username, password, password2, policyNumber, companyName, peDates, ppmfeEndorsements, email, glcDescription, glccoRate, glcccoRate, wccDescription, wccRate } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    addCustomer(formData, history)
  }

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
      <form className='p-4 form' onSubmit={onSubmit}>
        <div className='h4 mb-3'>
          Add Client
        </div>
        <div className='form-group'>
          <label>Name of Client</label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Username of Client</label>
          <input
            type='text'
            className='form-control'
            name='username'
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            name='password2'
            value={password2}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label>Policy Number</label>
          <input
            type='text'
            className='form-control'
            name='policyNumber'
            value={policyNumber}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Name of Company/Policyholder</label>
          <input
            type='text'
            className='form-control'
            name='companyName'
            value={companyName}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Policy Effective Dates</label>
          <input
            type='date'
            className='form-control'
            name='peDates'
            value={peDates}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Policy Premium Minus Fully Earned Endorsements (_$)</label>
          <input
            type='Number'
            className='form-control'
            name='ppmfeEndorsements'
            value={ppmfeEndorsements}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Policy Holder Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>General Liability Class Description</label>
          <input
            type='text'
            className='form-control'
            name='glcDescription'
            value={glcDescription}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>General Liability Class Code Ongoing Rate (_%)</label>
          <input
            type='Number'
            className='form-control'
            name='glccoRate'
            value={glccoRate}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>General Liability Class Code Completed Ops Rate (_%)</label>
          <input
            type='Number'
            className='form-control'
            name='glcccoRate'
            value={glcccoRate}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Workers Comp Class Description</label>
          <input
            type='text'
            className='form-control'
            name='wccDescription'
            value={wccDescription}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Workers Comp Class Rate (_$)</label>
          <input
            type='Number'
            className='form-control'
            name='wccRate'
            value={wccRate}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='form-control btn-success' value='SUBMIT'>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { addCustomer })(MasterAdminAddCustomer)