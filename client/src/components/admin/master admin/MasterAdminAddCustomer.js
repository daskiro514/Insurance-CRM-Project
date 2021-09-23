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
  })

  const { name, username, password, password2, carrier, policyNumber, companyName, peDates, ppmfeEndorsements, email } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [gliClasses, setGliClasses] = React.useState([])

  const [wciClasses, setWciClasses] = React.useState([])

  const [className, setClassName] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const [rate, setRate] = React.useState(0)
  const [type, setType] = React.useState('Payroll')

  const [className1, setClassName1] = React.useState('')
  const [amount1, setAmount1] = React.useState(0)
  const [rate1, setRate1] = React.useState(0)
  const [type1, setType1] = React.useState('Payroll') 

  const saveClass = () => {
    const classForAdd = {
      className: className,
      amount: amount,
      rate: rate,
      type: type
    }
    if (className.length === 0 || amount <= 0 || rate <= 0) {
      setAlert('You should input the Insurance variables correct!', 'warning')
    } else {
      let tempGliClasses = [...gliClasses]
      tempGliClasses.push(classForAdd)
      setGliClasses(tempGliClasses)
      setClassName('')
      setAmount(0)
      setRate(0)
      setType('Payroll')
    }
  }

  const saveClass1 = () => {
    const classForAdd = {
      className: className1,
      amount: amount1,
      rate: rate1,
      type: type1
    }
    if (className1.length === 0 || amount1 <= 0 || rate1 <= 0) {
      setAlert('You should input the Insurance variables correct!', 'warning')
    } else {
      let tempClasses = [...wciClasses]
      tempClasses.push(classForAdd)
      setWciClasses(tempClasses)
      setClassName1('')
      setAmount1(0)
      setRate1(0)
      setType1('Payroll')
    }
  }

  const deleteClass = (index) => {
    if (window.confirm('Are you sure?')) {
      let tempGliClasses = [...gliClasses]
      tempGliClasses.splice(index, 1)
      setGliClasses(tempGliClasses)
    }
  }

  const deleteClass1 = (index) => {
    if (window.confirm('Are you sure?')) {
      let tempClasses = [...wciClasses]
      tempClasses.splice(index, 1)
      setWciClasses(tempClasses)
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    if (gliClasses.length > 0 && wciClasses.length > 0) {
      let sendData = {...formData}
      sendData.gliClasses = gliClasses
      sendData.wciClasses = wciClasses
      addCustomer(sendData, history)
    } else {
      setAlert('You should have at least one Insurance Class', 'warning')
    }
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
        <div className='form-group'>
          <h5>Worker's Compensation Insurance</h5>
          <div className='table-responsive'>
            <table className='table table-borderless'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Class / Name</th>
                  <th>Amount</th>
                  <th>Rate</th>
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
                      name='className1'
                      value={className1}
                      onChange={e => setClassName1(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type='number'
                      className='form-control'
                      name='amount1'
                      value={amount1}
                      onChange={e => setAmount1(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type='number'
                      className='form-control'
                      name='rate1'
                      value={rate1}
                      onChange={e => setRate1(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type='button'
                      className='form-control'
                      onClick={() => saveClass1()}
                      style={{ color: 'white', backgroundColor: '#007bff' }}
                      value='SAVE'
                    />
                  </td>
                </tr>
                {wciClasses.map((item, index) =>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.className}</td>
                    <td>{item.amount}</td>
                    <td>{item.rate}</td>
                    <td>
                      <input
                        type='button'
                        className='form-control'
                        onClick={() => deleteClass1(index)}
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