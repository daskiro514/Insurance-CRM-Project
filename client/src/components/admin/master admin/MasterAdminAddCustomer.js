import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addCustomer } from '../../../actions/admin'
import MasterAdminHeader from './partials/MasterAdminHeader'

const MasterAdminAddCustomer = ({ addCustomer, carriers }) => {
  const history = useHistory()

  const [formData, setFormData] = React.useState({
    name: '',
    username: '',
    password: '',
    password2: '',
    carrier: '',
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

  const { name, username, password, password2, carrier, policyNumber, companyName, peDates, ppmfeEndorsements, email, glcDescription, glccoRate, glcccoRate, wccDescription, wccRate } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    addCustomer(formData, history)
  }

  return (
    <div className='m-2 main'>
      <MasterAdminHeader />
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
          <label>Carrier</label>
          <select
            className='form-control'
            name='carrier'
            value={carrier}
            onChange={onChange}
            required
          >
            <option value=''>Choose Carrier...</option>
            {carriers.map((carrier, index) => 
              <option value={carrier._id} key={index}>{carrier.name}</option>
            )}
          </select>
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
  carriers: state.admin.carriers
})

export default connect(mapStateToProps, { addCustomer })(MasterAdminAddCustomer)