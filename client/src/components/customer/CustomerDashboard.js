import React from 'react'
import { connect } from 'react-redux'
import { goPage } from '../../actions/admin'
import { useHistory } from 'react-router'
import CustomerAdminHeader from './partials/CustomerAdminHeader'
import { formatDate, formatDueDate } from '../../utils/formatDate1'
import { getCustomer } from '../../actions/customer'

const CustomerDashboard = ({ user, customer, goPage, getCustomer, showInsurance }) => {
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
          <div className='col-sm-6'>Company/Policyholder</div>
          <div className='col-sm-6 pl-4'>{customer.companyName}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Holder Email</div>
          <div className='col-sm-6 pl-4'>{customer.email}</div>
        </div>
        {showInsurance === 'GL' ?
          <>
            <div className='row pt-3'>
              <div className='col-sm-6'>Policy Effective Dates</div>
              <div className='col-sm-6 pl-4'>{formatDate(customer.peDatesFromGL)} ~ {formatDate(customer.peDatesTillGL)}</div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>Premium Due Date</div>
              <div className='col-sm-6 pl-4'>{formatDueDate(customer.peDatesTillGL)}</div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>Total Premium</div>
              <div className='col-sm-6 pl-4'>$ {customer.totalPremiumGL}</div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>Paid Premium</div>
              <div className='col-sm-6 pl-4'>$ {customer.paidPremiumGL}</div>
            </div>
            <div className='row pt-2'>
              <div className='col-sm-6'>Amount Owed</div>
              <div className='col-sm-6 pl-4'><span className={'badge ' + (customer.policyPremiumGL <= 0 ? 'badge-primary ' : 'badge-danger')}>$ {customer.policyPremiumGL}</span></div>
            </div>
            {formatDueDate(customer.monthlyDueDateGL) === 'Expired'
              ?
              null
              :
              <>
                <div className='row pt-2'>
                  <div className='col-sm-6'>Monthly Due Date</div>
                  <div className='col-sm-6 pl-4'>{formatDueDate(customer.monthlyDueDateGL)}</div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>Monthly Premium</div>
                  {customer.monthlyPremiumGL > 0 ?
                    <div className='col-sm-6 pl-4'><span className='badge badge-success'>$ {customer.monthlyPremiumGL}</span></div>
                    : null
                  }
                </div>
              </>
            }
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
                    <th>Subtotal</th>
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
                      <td>{(item.amount * (item.type === 'Sales' ? item.rate / 100 : item.rate / 1000) * 12 / 9).toFixed(2)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
          : null
        }
        {showInsurance === 'WC' ?
          <>
            <div className='row pt-3'>
              <div className='col-sm-6'>Policy Effective Dates</div>
              <div className='col-sm-6 pl-4'>{formatDate(customer.peDatesFromWC)} ~ {formatDate(customer.peDatesTillWC)}</div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>Premium Due Date</div>
              <div className='col-sm-6 pl-4'>{formatDueDate(customer.peDatesTillWC)}</div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>Total Premium</div>
              <div className='col-sm-6 pl-4'>$ {customer.totalPremiumWC}</div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>Paid Premium</div>
              <div className='col-sm-6 pl-4'>$ {customer.paidPremiumWC}</div>
            </div>
            <div className='row pt-2'>
              <div className='col-sm-6'>Amount Owed</div>
              <div className='col-sm-6 pl-4'><span className={'badge ' + (customer.policyPremiumWC <= 0 ? 'badge-primary ' : 'badge-danger')}>$ {customer.policyPremiumWC}</span></div>
            </div>
            {formatDueDate(customer.monthlyDueDateWC) === 'Expired'
              ?
              null
              :
              <>
                <div className='row pt-2'>
                  <div className='col-sm-6'>Monthly Due Date</div>
                  <div className='col-sm-6 pl-4'>{formatDueDate(customer.monthlyDueDateWC)}</div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>Monthly Premium</div>
                  {customer.monthlyPremiumWC > 0 ?
                    <div className='col-sm-6 pl-4'><span className='badge badge-success'>$ {customer.monthlyPremiumWC}</span></div>
                    : null
                  }
                </div>
              </>
            }
            <div className='table-responsive mt-4'>
              <h5>Worker's Compensation Insurance</h5>
              <table className='table table-borderless'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Class / Name</th>
                    <th>Amount ($)</th>
                    <th>Rate (%)</th>
                    <th>Type</th>
                    <th>Subtotal</th>
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
                      <td>{(item.amount * item.rate / 100 * 12 / 9).toFixed(2)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
          : null
        }
        {showInsurance === 'COV' ?
          <>
            <h5 className='pt-4'>Coverages</h5>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='row'>
                  <div className='col-sm-6'>
                    Business Owner’s Policy
                  </div>
                  <div className='col-sm-6'>
                    $1,000,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    General Liability Insurance
                  </div>
                  <div className='col-sm-6'>
                    $2,000,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Worker’s Compensation Insurance
                  </div>
                  <div className='col-sm-6'>
                    $500,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Business Income Insurance
                  </div>
                  <div className='col-sm-6'>
                    $1,000,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Commercial Auto Insurance
                  </div>
                  <div className='col-sm-6'>
                    $750,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Commercial Flood Insurance
                  </div>
                  <div className='col-sm-6'>
                    $1,000,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Commercial Property Insurance
                  </div>
                  <div className='col-sm-6'>
                    $2,000,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Commercial Umbrella Insurance
                  </div>
                  <div className='col-sm-6'>
                    $500,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Cyber Insurance
                  </div>
                  <div className='col-sm-6'>
                    $1,000,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Professional Liability Insurance
                  </div>
                  <div className='col-sm-6'>
                    $750,000
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    Surety & Fidelity Bonds
                  </div>
                  <div className='col-sm-6'>
                    $300,000
                  </div>
                </div>
              </div>
            </div>
          </>
          : null
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  customer: state.customer.customer,
  showInsurance: state.admin.showInsurance
})

export default connect(mapStateToProps, { goPage, getCustomer })(CustomerDashboard)