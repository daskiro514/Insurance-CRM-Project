import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addCustomer } from '../../../actions/admin'
import { setAlert } from '../../../actions/alert'
import MasterAdminHeader from './partials/MasterAdminHeader'
import MasterAdminSidebar from './MasterAdminSidebar'

const MasterAdminAddCustomer = ({ addCustomer, carriers, setAlert }) => {
  const history = useHistory()

  const [formData, setFormData] = React.useState({
    name: '',
    username: '',
    password: '',
    password2: '',
    carrier: '',
    companyName: '',
    peDatesFromGL: '',
    peDatesTillGL: '',
    peDatesFromWC: '',
    peDatesTillWC: '',
    paidPremiumGL: 0,
    paidPremiumWC: 0,
    email: '',
  })

  const { name, username, password, password2, carrier, companyName, peDatesFromGL, peDatesTillGL, peDatesFromWC, peDatesTillWC, paidPremiumGL, paidPremiumWC, email } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (peDatesTillGL > peDatesFromGL && peDatesTillWC > peDatesFromWC) {
      addCustomer(formData, history)
    } else if (peDatesTillGL <= peDatesFromGL || peDatesTillWC <= peDatesFromWC) {
      setAlert('You chose incorrect Dates', 'warning')
    }
  }

  return (
    <div className='row'>
      <MasterAdminSidebar />
      <div className='col-md-10'>
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
            <h5 className='mt-4'>General Liability Insurance</h5>
            <div>
              <label>Policy Effective Dates</label>
              <div className='row'>
                <div className='form-group col-sm-5 peDates'>
                  <input
                    type='date'
                    className='form-control'
                    name='peDatesFromGL'
                    value={peDatesFromGL}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group col-sm-2 text-center'> ~ </div>
                <div className='form-group col-sm-5 peDates'>
                  <input
                    type='date'
                    className='form-control'
                    name='peDatesTillGL'
                    value={peDatesTillGL}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label>Paid Amount</label>
              <input
                type='number'
                className='form-control'
                name='paidPremiumGL'
                value={paidPremiumGL}
                onChange={onChange}
                required
              />
            </div>
            <h5 className='mt-4'>Worker's Compensation Insurance</h5>
            <div>
              <label>Policy Effective Dates</label>
              <div className='row'>
                <div className='form-group col-sm-5 peDates'>
                  <input
                    type='date'
                    className='form-control'
                    name='peDatesFromWC'
                    value={peDatesFromWC}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group col-sm-2 text-center'> ~ </div>
                <div className='form-group col-sm-5 peDates'>
                  <input
                    type='date'
                    className='form-control'
                    name='peDatesTillWC'
                    value={peDatesTillWC}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label>Paid Amount</label>
              <input
                type='number'
                className='form-control'
                name='paidPremiumWC'
                value={paidPremiumWC}
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
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  carriers: state.admin.carriers
})

export default connect(mapStateToProps, { addCustomer, setAlert })(MasterAdminAddCustomer)