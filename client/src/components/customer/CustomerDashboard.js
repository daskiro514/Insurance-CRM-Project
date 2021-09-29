import React from 'react'
import { connect } from 'react-redux'
import { goPage } from '../../actions/admin'
import { useHistory } from 'react-router'
import CustomerAdminHeader from './partials/CustomerAdminHeader'
import formatDate from '../../utils/formatDate1'

const CustomerDashboard = ({ user, goPage }) => {
  let history = useHistory()
  const [gliClasses, setGliClasses] = React.useState([])
  const [wciClasses, setWciClasses] = React.useState([])
  const [premium, setPremium] = React.useState(0)

  React.useEffect(() => {
    setGliClasses(user.gliClasses)
    setWciClasses(user.wciClasses)

    // PREMIUM CALCULATE
    var totalPremium = 0
    user.gliClasses.forEach(element => {
      if (element.type === 'Sales') {
        totalPremium += (element.amount / 9 * 12 / 100 * element.rate)
      } else {
        totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
      }
    })
    user.wciClasses.forEach(element => {
      totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
    })

    setPremium((totalPremium - user.paidPremium).toFixed(2))
  }, [user])

  return (
    <div className='m-2'>
      <CustomerAdminHeader />
      <div className='border rounded-lg container py-3 px-4 clientShow'>
        <div className='d-flex align-items-center justify-content-between'>
          <h5>Policy Details</h5>
          <button
            className='btn btn-sm'
            style={{ color: 'white', backgroundColor: '#000356' }}
            onClick={() => goPage(history, 'edit')}
          >Edit</button>
        </div>
        <div className='row pt-2'>
          <div className='col-sm-6'>Policy Number</div>
          <div className='col-sm-6 pl-4'>{user._id}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Effective Dates</div>
          <div className='col-sm-6 pl-4'>{formatDate(user.peDatesFrom)} ~ {formatDate(user.peDatesTill)}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Premium Due Date</div>
          <div className='col-sm-6 pl-4'>{formatDate(user.peDatesTill)}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Premium</div>
          <div className='col-sm-6 pl-4'><span className={'badge ' + (premium < 0 ? 'badge-primary ' : 'badge-danger')}>$ {premium}</span></div>
        </div>
        <div className='row pt-3'>
          <div className='col-sm-6'>Company/Policyholder</div>
          <div className='col-sm-6 pl-4'>{user.companyName}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Holder Email</div>
          <div className='col-sm-6 pl-4'>{user.email}</div>
        </div>

        <div className='table-responsive mt-4'>
          <h5>General Liability Insurance</h5>
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
              {gliClasses.map((item, index) =>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
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
                  <td>{item.amount}</td>
                  <td>{item.rate}</td>
                  <td>{item.type}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-sm-6'>
          <div className='border rounded-lg container py-3 px-4 clientShow'>
            <h5 className='pt-3'>Coverages</h5>
            <div className='row'>
              <div className='col-sm-8'>
                Business Owner’s Policy
              </div>
              <div className='col-sm-4 pl-4 pl-4'>
                $1,000,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                General Liability Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $2,000,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Worker’s Compensation Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $500,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Business Income Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $1,000,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Commercial Auto Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $750,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Commercial Flood Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $1,000,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Commercial Property Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $2,000,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Commercial Umbrella Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $500,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Cyber Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $1,000,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Professional Liability Insurance
              </div>
              <div className='col-sm-4 pl-4'>
                $750,000
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                Surety & Fidelity Bonds
              </div>
              <div className='col-sm-4 pl-4'>
                $300,000
              </div>
            </div>
          </div>
        </div>
        {/* <div className='col-md-6'>
          <div className='border rounded-lg container py-3 px-4 clientShow'>
            <h5>Payment Portal</h5>
            <div className='row pb-2'>
              <div className='col-sm-4 pt-1'>
                Amount To Pay
              </div>
              <div className='col-sm-8'>
                <select
                  className='form-control bg-light'
                  name='carrier'
                >
                  <option value=''>monthly premium</option>
                </select>
              </div>
            </div>
            <div className='row pb-2'>
              <div className='col-sm-4 pt-1'>
                Payment Method
              </div>
              <div className='col-sm-8'>
                <select
                  className='form-control bg-light'
                  name='carrier'
                >
                  <option value=''>card ending in *6541</option>
                </select>
              </div>
            </div>
            <div className='row pb-2'>
              <div className='col-sm-4 pt-1'>
                Card Number
              </div>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control bg-light'
                  name='policyNumber'
                />
              </div>
            </div>
            <div className='row pb-2'>
              <div className='col-sm-4 pt-1'>
                CVC
              </div>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control bg-light'
                  name='policyNumber'
                />
              </div>
            </div>
            <div className='row pb-4'>
              <div className='col-sm-4 pt-1'>
                Expiration Date
              </div>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control bg-light'
                  name='policyNumber'
                />
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button
                className='btn border rounded-lg'
                style={{ backgroundColor: '#000356', color: 'white' }}
              >
                <i className="material-icons" style={{ fontSize: '16px' }}>&#xe870;</i> Submit Payment of $ {premium}
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { goPage })(CustomerDashboard)