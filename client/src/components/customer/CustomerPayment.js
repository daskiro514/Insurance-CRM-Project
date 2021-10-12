import React from 'react'
import { connect } from 'react-redux'
import CustomerAdminHeader from './partials/CustomerAdminHeader'
import { formatDate } from '../../utils/formatDate1'

const CustomerPayment = ({ user, customer }) => {
  // const [premium, setPremium] = React.useState(0)

  // React.useEffect(() => {
  //   // PREMIUM CALCULATE
  //   var totalPremium = 0
  //   user.gliClasses.forEach(element => {
  //     if (element.type === 'Sales') {
  //       totalPremium += (element.amount / 9 * 12 / 100 * element.rate)
  //     } else {
  //       totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
  //     }
  //   })
  //   user.wciClasses.forEach(element => {
  //     totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
  //   })

  //   setPremium((totalPremium - user.paidPremium).toFixed(2))
  // }, [user])

  return (
    <div className='m-2'>
      <CustomerAdminHeader />
      <div className='border rounded-lg container py-3 px-4 clientShow'>
        <h4>Payment Portal</h4>
        <div className='mt-3 ml-2'>
          <h5>General Liability Insurance</h5>
          <div className='row'>
            <div className='col-sm-6'>Premium Due Date</div>
            <div className='col-sm-6 pl-4'>{formatDate(customer.peDatesTillGL)}</div>
          </div>
          <div className='row pt-2'>
            <div className='col-sm-6'>Total Premium</div>
            <div className='col-sm-6 pl-4'><span className={'badge ' + (customer.totalPremiumGL < 0 ? 'badge-primary ' : 'badge-danger')}>$ {customer.totalPremiumGL}</span></div>
          </div>
          {customer.policyPremiumGL > 0 ?
            <>
              <div className='row pt-2'>
                <div className='col-sm-6'>Amount Owed</div>
                <div className='col-sm-6 pl-4'>$ {customer.policyPremiumGL}</div>
              </div>
              <div className='row pt-2'>
                <div className='col-sm-6'>Payment Method</div>
                <div className='col-sm-6 pl-4'>
                  <div className='form-group'>
                    <select
                      className='form-control bg-light'
                    >
                      <option value=''>card ending in *6541</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <button
                  className='btn border rounded-lg'
                  style={{ backgroundColor: '#000356', color: 'white' }}
                >
                  <i className="material-icons" style={{ fontSize: '16px' }}>&#xe870;</i> Submit Payment of $ {customer.policyPremiumGL}
                </button>
              </div>
            </>
            : null
          }
        </div>
        <div className='mt-3 ml-2'>
          <h5>Worker's Compensation Insurance</h5>
          <div className='row'>
            <div className='col-sm-6'>Premium Due Date</div>
            <div className='col-sm-6 pl-4'>{formatDate(customer.peDatesTillWC)}</div>
          </div>
          <div className='row pt-2'>
            <div className='col-sm-6'>Total Premium</div>
            <div className='col-sm-6 pl-4'><span className={'badge ' + (customer.totalPremiumWC < 0 ? 'badge-primary ' : 'badge-danger')}>$ {customer.totalPremiumWC}</span></div>
          </div>
          {customer.policyPremiumWC > 0 ?
            <>
              <div className='row pt-2'>
                <div className='col-sm-6'>Amount Owed</div>
                <div className='col-sm-6 pl-4'>$ {customer.policyPremiumWC}</div>
              </div>
              <div className='row pt-2'>
                <div className='col-sm-6'>Payment Method</div>
                <div className='col-sm-6 pl-4'>
                  <div className='form-group'>
                    <select
                      className='form-control bg-light'
                    >
                      <option value=''>card ending in *6541</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <button
                  className='btn border rounded-lg'
                  style={{ backgroundColor: '#000356', color: 'white' }}
                >
                  <i className="material-icons" style={{ fontSize: '16px' }}>&#xe870;</i> Submit Payment of $ {customer.policyPremiumWC}
                </button>
              </div>
            </>
            : null
          }
        </div>

        <h4>Billing Contact Info</h4>
        <div className='row pb-2'>
          <div className='col-sm-6 pt-1'>
            Card Number
          </div>
          <div className='col-sm-6 pl-4'>
            <input
              type='text'
              className='form-control bg-light'
              name='policyNumber'
            />
          </div>
        </div>
        <div className='row pb-2'>
          <div className='col-sm-6 pt-1'>
            CVC
          </div>
          <div className='col-sm-6 pl-4'>
            <input
              type='text'
              className='form-control bg-light'
              name='policyNumber'
            />
          </div>
        </div>
        <div className='row pb-4'>
          <div className='col-sm-6 pt-1'>
            Expiration Date
          </div>
          <div className='col-sm-6 pl-4'>
            <input
              type='text'
              className='form-control bg-light'
              name='policyNumber'
            />
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

export default connect(mapStateToProps, {})(CustomerPayment)