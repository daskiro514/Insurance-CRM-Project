import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addCustomer } from '../../../actions/admin'
import { setAlert } from '../../../actions/alert'
import MasterAdminHeader from './partials/MasterAdminHeader'
import MasterAdminSidebar from './MasterAdminSidebar'

const MasterAdminAddCustomer = ({ addCustomer, carriers, setAlert }) => {
  const history = useHistory()

  const [enabledGL, setEnabledGL] = React.useState(false)
  const [enabledWC, setEnabledWC] = React.useState(false)

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
    if (enabledGL === false && enabledWC === false) {
      setAlert('You should choose one Insurance at least.', 'warning')
      return
    }
    if (enabledGL && peDatesTillGL > peDatesFromGL && enabledWC && peDatesTillWC > peDatesFromWC) {
      addCustomer(formData, history)
      return
    }
    if (enabledGL && peDatesTillGL > peDatesFromGL) {
      addCustomer(formData, history)
      return
    }
    if (enabledWC && peDatesTillWC > peDatesFromWC) {
      addCustomer(formData, history)
      return
    }
    if (peDatesTillGL <= peDatesFromGL || peDatesTillWC <= peDatesFromWC) {
      setAlert('You chose incorrect Dates', 'warning')
      return
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
            <div className='d-flex align-items-center'>
              <h5 className='mt-4'>General Liability Insurance </h5>
              <input type='checkbox' className='ml-3 mt-3 checkbox' value={enabledGL} onChange={() => setEnabledGL(!enabledGL)} />
            </div>
            <div>
              <label>Policy Effective Dates</label>
              <div className='row'>
                <div className='form-group col-sm-5 peDates'>
                  <input
                    type='date'
                    className={'form-control' + (enabledGL ? ' ' : ' disabled')}
                    name='peDatesFromGL'
                    value={peDatesFromGL}
                    onChange={onChange}
                    required
                    disabled={!enabledGL}
                  />
                </div>
                <div className='form-group col-sm-2 text-center'> ~ </div>
                <div className='form-group col-sm-5 peDates'>
                  <input
                    type='date'
                    className={'form-control' + (enabledGL ? '' : ' disabled')}
                    name='peDatesTillGL'
                    value={peDatesTillGL}
                    onChange={onChange}
                    required
                    disabled={!enabledGL}
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label>Paid Amount</label>
              <input
                type='number'
                className={'form-control' + (enabledGL ? '' : ' disabled')}
                name='paidPremiumGL'
                value={paidPremiumGL}
                onChange={onChange}
                required
                disabled={!enabledGL}
              />
            </div>
            <div className='d-flex align-items-center'>
              <h5 className='mt-4'>Worker's Compensation Insurance</h5>
              <input type='checkbox' className='ml-3 mt-3 checkbox' value={enabledWC} onChange={() => setEnabledWC(!enabledWC)} />
            </div>
            <div>
              <label>Policy Effective Dates</label>
              <div className='row'>
                <div className='form-group col-sm-5 peDates'>
                  <input
                    type='date'
                    className={'form-control' + (enabledWC ? '' : ' disabled')}
                    name='peDatesFromWC'
                    value={peDatesFromWC}
                    onChange={onChange}
                    required
                    disabled={!enabledWC}
                  />
                </div>
                <div className='form-group col-sm-2 text-center'> ~ </div>
                <div className='form-group col-sm-5 peDates'>
                  <input
                    type='date'
                    className={'form-control' + (enabledWC ? '' : ' disabled')}
                    name='peDatesTillWC'
                    value={peDatesTillWC}
                    onChange={onChange}
                    required
                    disabled={!enabledWC}
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label>Paid Amount</label>
              <input
                type='number'
                className={'form-control' + (enabledWC ? '' : ' disabled')}
                name='paidPremiumWC'
                value={paidPremiumWC}
                onChange={onChange}
                required
                disabled={!enabledWC}
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