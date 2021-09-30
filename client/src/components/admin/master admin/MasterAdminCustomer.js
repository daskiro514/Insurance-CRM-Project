import React from 'react'
import { connect } from 'react-redux'
import { goPage, getCustomer, sendAlertToCustomer } from '../../../actions/admin'
import MasterAdminHeader from './partials/MasterAdminHeader'
import { useHistory } from 'react-router-dom'
import formatDate from '../../../utils/formatDate1'

const MasterAdminCustomer = ({ match, getCustomer, customer, goPage, sendAlertToCustomer }) => {
  let history = useHistory()
  const [gliClasses, setGliClasses] = React.useState([])
  const [wciClasses, setWciClasses] = React.useState([])
  const [premium, setPremium] = React.useState(0)

  React.useEffect(() => {
    getCustomer(match.params.id)
  }, [match, getCustomer])

  React.useEffect(() => {
    if (customer) {
      setGliClasses(customer.gliClasses)
      setWciClasses(customer.wciClasses)

      // PREMIUM CALCULATE
      var totalPremium = 0
      customer.gliClasses.forEach(element => {
        if (element.type === 'Sales') {
          totalPremium += (element.amount / 9 * 12 / 100 * element.rate)
        } else {
          totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
        }
      })
      customer.wciClasses.forEach(element => {
        totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
      })

      setPremium((totalPremium - customer.paidPremium).toFixed(2))
    }
  }, [customer])

  return (
    <div className='m-2 main'>
      <MasterAdminHeader />
      {customer ?
        <div className='border rounded-lg container py-3 px-4 clientShow'>
          <div className='d-flex align-items-center justify-content-between'>
            <h5>Policy Details</h5>
            <div>
              <button
                className='btn btn-sm'
                style={{ color: 'white', backgroundColor: '#000356' }}
                onClick={() => goPage(history, `editCustomer/${customer._id}`)}
              >Edit</button>&nbsp;
              <button
                className='btn btn-sm btn-info'
                onClick={() => sendAlertToCustomer(customer.email, customer.peDatesTill, premium)}
              >
                Send Alert
              </button>
            </div>
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
            <div className='col-sm-6 pl-4'>{formatDate(customer.peDatesTill)}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>Policy Premium</div>
            <div className='col-sm-6 pl-4'><span className={'badge ' + (premium < 0 ? 'badge-primary ' : 'badge-danger')}>$ {premium}</span></div>
          </div>
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
          <h5 className='pt-3'>Coverages</h5>
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
        </div>
        :
        null
      }

    </div>
  )
}

const mapStateToProps = state => ({
  customer: state.admin.adminCustomer
})

export default connect(mapStateToProps, { getCustomer, goPage, sendAlertToCustomer })(MasterAdminCustomer)
