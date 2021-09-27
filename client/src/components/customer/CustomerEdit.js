import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import CustomerAdminHeader from './partials/CustomerAdminHeader'
import { updateOnCustomer } from '../../actions/customer'
import { setAlert } from '../../actions/alert'

const CustomerEdit = ({ user, updateOnCustomer, setAlert }) => {
  let history = useHistory()
  const [email, setEmail] = React.useState('')
  const [gliClasses, setGliClasses] = React.useState([])
  const [wciClasses, setWciClasses] = React.useState([])

  React.useEffect(() => {
    setEmail(user.email)
    setGliClasses(user.gliClasses)
    setWciClasses(user.wciClasses)
  }, [user])

  const setAmount = (target, amount, index) => {
    if (amount <= 0) {
      setAlert('You should input the amount value correct!', 'danger')
    } else {
      if (target === 'gli') {
        let tempClasses = [...gliClasses]
        tempClasses[index].amount = amount
        setGliClasses(tempClasses)
      }
      if (target === 'wci') {
        let tempClasses = [...wciClasses]
        tempClasses[index].amount = amount
        setWciClasses(tempClasses)
      }
    }
  }

  const update = () => {
    updateOnCustomer({email, gliClasses, wciClasses}, history, user._id)
  }

  return (
    <div className='m-2'>
      <CustomerAdminHeader />
      <div className='border rounded-lg container py-3 px-4 clientShow'>
        <div className='d-flex align-items-center justify-content-between'>
          <h5>Policy Details</h5>
        </div>
        <div className='row pt-2'>
          <div className='col-sm-6'>Policy Number</div>
          <div className='col-sm-6 pl-4'>{user.policyNumber}</div>
        </div>
        <div className='form-group pt-1'>
          <label>Policy Holder Email</label>
          <input
            type='email'
            style={{ backgroundColor: '#eee' }}
            className='form-control'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='table-responsive mt-4'>
          <h5>General Liability Insurance</h5>
          <table className='table table-borderless'>
            <thead>
              <tr>
                <th>No</th>
                <th>Class / Name</th>
                <th className='insuAmount'>Amount ($)</th>
                <th>Rate (%)</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {gliClasses.map((item, index) =>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type='number'
                      style={{ backgroundColor: '#eee' }}
                      className='form-control'
                      value={item.amount}
                      onChange={e => setAmount('gli', e.target.value, index)}
                      required
                    />
                  </td>
                  <td>{item.rate}</td>
                  <td>{item.type}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='table-responsive'>
          <h5>Worker's Compensation Insurance</h5>
          <table className='table table-borderless'>
            <thead>
              <tr>
                <th>No</th>
                <th>Class / Name</th>
                <th>Amount ($)</th>
                <th>Rate (%)</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {wciClasses.map((item, index) =>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type='number'
                      style={{ backgroundColor: '#eee' }}
                      className='form-control'
                      value={item.amount}
                      onChange={e => setAmount('wci', e.target.value, index)}
                      required
                    />
                  </td>
                  <td>{item.rate}</td>
                  <td>{item.type}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className='form-group'>
          <button className='btn btn-block btn-success' onClick={() => update()}>UPDATE</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { updateOnCustomer, setAlert })(CustomerEdit)