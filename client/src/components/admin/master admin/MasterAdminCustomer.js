import React from 'react'
import { connect } from 'react-redux'
import { getCustomer } from '../../../actions/admin'
import MasterAdminHeader from './partials/MasterAdminHeader'
import { goPage } from '../../../actions/admin'
import { useHistory } from 'react-router-dom'

const MasterAdminCustomer = ({ match, getCustomer, customer, goPage }) => {
  let history = useHistory()
  const [gliClasses, setGliClasses] = React.useState([])
  const [wciClasses, setWciClasses] = React.useState([])

  React.useEffect(() => {
    getCustomer(match.params.id)
  }, [match, getCustomer])

  React.useEffect(() => {
    setGliClasses(customer ? customer.gliClasses : [])
    setWciClasses(customer ? customer.wciClasses : [])
  }, [customer])

  return (
    <div className='m-2 main'>
      <MasterAdminHeader />
      {customer ?
        <div className='border rounded-lg container py-3 px-4 clientShow'>
          <div className='d-flex align-items-center justify-content-between'>
            <h5>Policy Details</h5>
            <button
              className='btn btn-sm'
              style={{ color: 'white', backgroundColor: '#000356' }}
              onClick={() => goPage(history, `editCustomer/${customer._id}`)}
            >Edit</button>
          </div>
          <div className='row pt-2'>
            <div className='col-sm-6'>Policy Number</div>
            <div className='col-sm-6 pl-4'>{customer.policyNumber}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>Company/Policyholder</div>
            <div className='col-sm-6 pl-4'>{customer.companyName}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>Policy Premium</div>
            <div className='col-sm-6 pl-4'>{customer.ppmfeEndorsements}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>Policy Effective Dates</div>
            <div className='col-sm-6 pl-4'>{customer.peDates.slice(0, 10)}</div>
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

export default connect(mapStateToProps, { getCustomer, goPage })(MasterAdminCustomer)
