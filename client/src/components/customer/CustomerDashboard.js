import React from 'react'
import { connect } from 'react-redux'
import { goPage } from '../../actions/admin'
import { useHistory } from 'react-router'
import CustomerAdminHeader from './partials/CustomerAdminHeader'
import { formatDate, formatDueDate } from '../../utils/formatDate1'
import { getCustomer } from '../../actions/customer'

const CustomerDashboard = ({ user, customer, goPage, getCustomer }) => {
  let history = useHistory()
  const [gliClasses, setGliClasses] = React.useState([])
  const [wciClasses, setWciClasses] = React.useState([])

  React.useEffect(() => {
    getCustomer(user._id)
  }, [getCustomer, user])

  React.useEffect(() => {
    if (customer._id) {
      setGliClasses(customer.gliClasses)
      setWciClasses(customer.wciClasses)
    }
  }, [customer])

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
          <div className='col-sm-6 pl-4'>{customer._id}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Effective Dates</div>
          <div className='col-sm-6 pl-4'>{formatDate(customer.peDatesFrom)} ~ {formatDate(customer.peDatesTill)}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Premium Due Date</div>
          <div className='col-sm-6 pl-4'>{formatDueDate(customer.peDatesTill)}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Total Premium</div>
          <div className='col-sm-6 pl-4'>$ {customer.totalPremium}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Paid Premium</div>
          <div className='col-sm-6 pl-4'>$ {customer.paidPremium}</div>
        </div>
        <div className='row pt-2'>
          <div className='col-sm-6'>Amount Owed</div>
          <div className='col-sm-6 pl-4'><span className={'badge ' + (customer.policyPremium <= 0 ? 'badge-primary ' : 'badge-danger')}>$ {customer.policyPremium}</span></div>
        </div>
        {formatDueDate(customer.monthlyDueDate) === 'Expired'
          ?
          null
          :
          <>
            <div className='row pt-2'>
              <div className='col-sm-6'>Monthly Due Date</div>
              <div className='col-sm-6 pl-4'>{formatDueDate(customer.monthlyDueDate)}</div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>Monthly Premium</div>
              <div className='col-sm-6 pl-4'><span className={'badge ' + (customer.monthlyPremium <= 0 ? 'badge-primary ' : 'badge-success')}>$ {customer.monthlyPremium}</span></div>
            </div>
          </>
        }
        <div className='row pt-3'>
          <div className='col-sm-6'>Company/Policyholder</div>
          <div className='col-sm-6 pl-4'>{customer.companyName}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Holder Email</div>
          <div className='col-sm-6 pl-4'>{customer.email}</div>
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
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  customer: state.customer.customer,
})

export default connect(mapStateToProps, { goPage, getCustomer })(CustomerDashboard)