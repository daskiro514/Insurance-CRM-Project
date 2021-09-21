import React from 'react'
import { connect } from 'react-redux'
import { getCustomer } from '../../../actions/admin'
import MasterAdminHeader from './partials/MasterAdminHeader'

const MasterAdminCustomer = ({ match, getCustomer, customer }) => {
  React.useEffect(() => {
    getCustomer(match.params.id)
  }, [match, getCustomer])

  return (
    <div className='m-2 main'>
      <MasterAdminHeader />
      {customer ?
        <div className='border rounded-lg container py-3 px-4 clientShow'>
          <h5>Policy Details</h5>
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
            <div className='col-sm-6 pl-4'>{customer.peDates}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>Policy Holder Email</div>
            <div className='col-sm-6 pl-4'>{customer.email}</div>
          </div>
          <div className='row pt-3'>
            <div className='col-sm-6'>General Liability Class Description</div>
            <div className='col-sm-6 pl-4'>{customer.glcDescription}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>General Liability Class Code Ongoing Rate</div>
            <div className='col-sm-6 pl-4'>{customer.glccoRate}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>General Liability Class Code Completed Ops Rate</div>
            <div className='col-sm-6 pl-4'>{customer.glcccoRate}</div>
          </div>
          <div className='row pt-3'>
            <div className='col-sm-6'>Workers Comp Class Description</div>
            <div className='col-sm-6 pl-4'>{customer.wccDescription}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>Work Comp Class Rate</div>
            <div className='col-sm-6 pl-4'>{customer.wccRate}</div>
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

export default connect(mapStateToProps, { getCustomer })(MasterAdminCustomer)
