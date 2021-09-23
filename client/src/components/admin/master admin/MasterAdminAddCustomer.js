import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addCustomer } from '../../../actions/admin'
import { setAlert } from '../../../actions/alert'
import MasterAdminHeader from './partials/MasterAdminHeader'

const MasterAdminAddCustomer = ({ addCustomer, carriers, setAlert }) => {
  const history = useHistory()

  const [formData, setFormData] = React.useState({
    name: 'Test Name',
    username: 'king4',
    password: 'admin123',
    password2: 'admin123',
    carrier: '6147ee1c798a275630f9ed2a',
    policyNumber: 'E548614596438',
    companyName: 'Test Company',
    peDates: '2021-11-10',
    ppmfeEndorsements: 9702.36,
    email: 'client@king4.com',
    // glcDescription: '',
    // glccoRate: 0,
    // glcccoRate: 0,
    // wccDescription: '',
    // wccRate: 0,
  })

  const { name, username, password, password2, carrier, policyNumber, companyName, peDates, ppmfeEndorsements, email } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [gliClasses, setGliClasses] = React.useState([
    {
      className: 'Automobile',
      amount: 1000,
      rate: 3.5,
      type: 'Payroll'
    }
  ])

  const [className, setClassName] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const [rate, setRate] = React.useState(0)
  const [type, setType] = React.useState('Payroll')

  const saveClass = () => {
    const classForAdd = {
      className: className,
      amount: amount,
      rate: rate,
      type: type
    }
    if (className.length === 0 || amount <= 0 || rate <= 0) {
      console.log('ok')
      setAlert('You should input the Insurance variables correct!', 'warning')
    } else {
      let tempGliClasses = [...gliClasses]
      tempGliClasses.push(classForAdd)
      setGliClasses(tempGliClasses)
    }
  }

  const deleteClass = (index) => {
    if (window.confirm('Are you sure?')) {
      let tempGliClasses = [...gliClasses]
      tempGliClasses.splice(index, 1)
      setGliClasses(tempGliClasses)
    }
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
          <h5>General Liability Insurance</h5>
          <div className='table-responsive'>
            <table className='table table-borderless'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Class / Name</th>
                  <th>Amount</th>
                  <th>Rate</th>
                  <th className='insuType'>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='form'>
                  <td></td>
                  <td>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      value={className}
                      onChange={e => setClassName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type='number'
                      className='form-control'
                      name='amount'
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type='number'
                      className='form-control'
                      name='rate'
                      value={rate}
                      onChange={e => setRate(e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      className='form-control'
                      name='type'
                      value={type}
                      onChange={e => setType(e.target.value)}
                    >
                      <option value='Sales'>Sales</option>
                      <option value='Cost'>Cost</option>
                      <option value='Payroll'>Payroll</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type='button'
                      className='form-control'
                      onClick={() => saveClass()}
                      style={{ color: 'white', backgroundColor: '#007bff' }}
                      value='SAVE'
                    />
                  </td>
                </tr>
                {gliClasses.map((item, index) =>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.className}</td>
                    <td>{item.amount}</td>
                    <td>{item.rate}</td>
                    <td>{item.type}</td>
                    <td>
                      <input
                        type='button'
                        className='form-control'
                        onClick={() => deleteClass(index)}
                        style={{ color: 'white', backgroundColor: '#dc3545' }}
                        value='DELETE'
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className='form-group'>
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
         */}
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

export default connect(mapStateToProps, { addCustomer, setAlert })(MasterAdminAddCustomer)