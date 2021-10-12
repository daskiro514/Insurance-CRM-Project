import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCustomer, updateCustomer } from '../../../actions/admin'
import { setAlert } from '../../../actions/alert'
import { formatDate } from '../../../utils/formatDate1'
import MasterAdminHeader from './partials/MasterAdminHeader'
import MasterAdminSidebar from './MasterAdminSidebar'

const MasterAdminEditCustomer = ({ match, getCustomer, customer, setAlert, updateCustomer, showInsurance }) => {
  let history = useHistory()

  const [policyNumber, setPolicyNumber] = React.useState('')
  const [companyName, setCompanyName] = React.useState('')
  const [peDatesFrom, setPeDatesFrom] = React.useState('2020-01-01')
  const [peDatesTill, setPeDatesTill] = React.useState('2020-01-01')
  const [paidPremium, setPaidPremium] = React.useState(0)
  const [email, setEmail] = React.useState('')

  const [gliClasses, setGliClasses] = React.useState([])
  const [wciClasses, setWciClasses] = React.useState([])

  React.useEffect(() => {
    getCustomer(match.params.id)
  }, [match, getCustomer])

  React.useEffect(() => {
    if (customer) {
      setPolicyNumber(customer._id)
      setCompanyName(customer.companyName)
      setPeDatesFrom(formatDate(customer.peDatesFrom))
      setPeDatesTill(formatDate(customer.peDatesTill))
      setPaidPremium(customer.paidPremium)
      setEmail(customer.email)
      setGliClasses(customer.gliClasses)
      setWciClasses(customer.wciClasses)
    }
  }, [customer])

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
      name: className,
      amount: amount,
      rate: rate,
      type: type
    }
    if (className.length === 0 || amount < 0 || rate <= 0) {
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
      name: className1,
      amount: amount1,
      rate: rate1,
      type: type1
    }
    if (className1.length === 0 || amount1 < 0 || rate1 <= 0) {
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
    let sendData = { policyNumber, companyName, peDatesFrom, peDatesTill, paidPremium, email, gliClasses, wciClasses }
    updateCustomer(sendData, history, customer._id)
  }

  return (
    <div className='row'>
      <MasterAdminSidebar />
      <div className='col-md-10'>
        <div className='m-2 main'>
          <MasterAdminHeader />
          {customer ?
            <form className='border rounded-lg container py-3 px-4 clientShow form' onSubmit={onSubmit}>
              <div className='d-flex align-items-center justify-content-between'>
                <h5>Policy Details</h5>
              </div>
              <div className='form-group'>
                <label>Policy Number</label>
                <input
                  type='text'
                  className='form-control'
                  name='policyNumber'
                  value={policyNumber}
                  onChange={e => setPolicyNumber(e.target.value)}
                  disabled
                  style={{ cursor: 'not-allowed' }}
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
                  onChange={e => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Policy Effective Dates</label>
                <div className='row'>
                  <div className='form-group col-sm-5 peDates'>
                    <input
                      type='date'
                      className='form-control'
                      name='peDatesFrom'
                      value={peDatesFrom}
                      onChange={e => setPeDatesFrom(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group col-sm-2 text-center'> ~ </div>
                  <div className='form-group col-sm-5 peDates'>
                    <input
                      type='date'
                      className='form-control'
                      name='peDatesTill'
                      value={peDatesTill}
                      onChange={e => setPeDatesTill(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label>Policy Holder Email</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label>Paid Premium</label>
                <input
                  type='number'
                  className='form-control'
                  name='paidPremium'
                  value={paidPremium}
                  onChange={e => setPaidPremium(e.target.value)}
                  required
                />
              </div>
              {showInsurance === 'GL' ?
                <div className='table-responsive mt-4'>
                  <h5>General Liability Insurance</h5>
                  <table className='table table-borderless'>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Class / Name</th>
                        <th>Amount ($)</th>
                        <th>Rate (%)</th>
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
                          <td>{item.name}</td>
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
                : null
              }
              {showInsurance === 'WC' ?
                <div className='table-responsive mt-4'>
                  <h5>Worker's Compensation Insurance</h5>
                  <table className='table table-borderless'>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Class / Name</th>
                        <th>Amount ($)</th>
                        <th>Rate (%)</th>
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
                          <td>{item.name}</td>
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
                : null
              }
              <div className='form-group'>
                <button type='submit' className='form-control btn-success' value='UPDATE'>
                  UPDATE
                </button>
              </div>
            </form>
            :
            null
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  customer: state.admin.adminCustomer,
  showInsurance: state.admin.showInsurance
})

export default connect(mapStateToProps, { getCustomer, setAlert, updateCustomer })(MasterAdminEditCustomer)
