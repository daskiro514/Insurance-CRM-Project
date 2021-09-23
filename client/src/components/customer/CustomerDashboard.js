import React from 'react'
import { connect } from 'react-redux'
import alarm from '../../img/admin/alarm.svg'
import userAvatar from '../../img/admin/userAvatar.png'

const userDashboard = ({ user }) => {

  return (
    <div className='m-2'>
      <div className='row adminHeader d-flex align-items-center mb-3 mt-3'>
        <div className='col-md-6 mr-auto'>
          <h5><strong>{user.name}</strong> {user.companyName}</h5>
          <p className='mb-0'>180 Jackson Street NE Tampa Florida 32285</p>
        </div>
        <div className='col-md-6 d-flex flex-row-reverse align-items-center'>
          <div>
            <img src={alarm} alt='ALARM' width='22px' className='mr-2' />
            <span className='mr-2'>{user.name}</span>
            <img src={user.avatar ? user.avatar : userAvatar} alt='AVATAR' className='rounded-circle' width='35px' />
          </div>
        </div>
      </div>
      <div className='border rounded-lg container py-3 px-4 clientShow'>
        <h5>Policy Details</h5>
        <div className='row pt-2'>
          <div className='col-sm-6'>Policy Number</div>
          <div className='col-sm-6 pl-4'>{user.policyNumber}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Company/Policyholder</div>
          <div className='col-sm-6 pl-4'>{user.companyName}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Premium</div>
          <div className='col-sm-6 pl-4'>{user.ppmfeEndorsements}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Effective Dates</div>
          <div className='col-sm-6 pl-4'>{user.peDates}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Policy Holder Email</div>
          <div className='col-sm-6 pl-4'>{user.email}</div>
        </div>
        <div className='row pt-3'>
          <div className='col-sm-6'>General Liability Class Description</div>
          <div className='col-sm-6 pl-4'>{user.glcDescription}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>General Liability Class Code Ongoing Rate</div>
          <div className='col-sm-6 pl-4'>{user.glccoRate}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>General Liability Class Code Completed Ops Rate</div>
          <div className='col-sm-6 pl-4'>{user.glcccoRate}</div>
        </div>
        <div className='row pt-3'>
          <div className='col-sm-6'>Workers Comp Class Description</div>
          <div className='col-sm-6 pl-4'>{user.wccDescription}</div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>Work Comp Class Rate</div>
          <div className='col-sm-6 pl-4'>{user.wccRate}</div>
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
        <div className='col-md-6'>
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
                <i className="material-icons" style={{fontSize: '16px'}}>&#xe870;</i> Submit Payment of $2350
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, {})(userDashboard)