import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { useHistory } from "react-router-dom"
import menuLogo from '../../img/logo/menu-logo.svg'
import { setShowInsurance } from '../../actions/admin'

const CustomerSidebar = ({ logout, setShowInsurance }) => {
  let history = useHistory()

  const goPage = async location => {
    await history.push(`/`)
    await history.push(`/home`)
    await history.push(`/home/${location}`)
  }

  return (
    <div className='col-md-2 p-2 sidebar'>
      <div className='container-fluid'>
        <div className='row my-4 mx-2 h3 menuItem' onClick={() => goPage('')}>
          <img src={menuLogo} alt='MENULOGO' className='pr-2' />Aquerate
        </div>
        <div className='row mx-3 my-2 menuItem' onClick={() => {
          goPage('')
          setShowInsurance('GL')
        }}>
          <div className='d-flex align-items-center'>
            <div><i className='fas fa-user-friends'></i></div>
            <div>General Liability</div>
          </div>
        </div>
        <div className='row mx-3 my-2 menuItem' onClick={() => {
          goPage('')
          setShowInsurance('WC')
        }}>
          <div className='d-flex align-items-center'>
            <div><i className='fas fa-user-friends'></i></div>
            <div>Worker's Compensation</div>
          </div>
        </div>
        <div className='row mx-3 my-2 menuItem' onClick={() => {
          goPage('')
          setShowInsurance('COV')
        }}>
          <div className='d-flex align-items-center'>
            <div><i className='fa fa-list-ul'></i></div>
            <div>Coverages</div>
          </div>
        </div>
        <div className='row mx-3 my-1 menuItem' onClick={() => goPage('payment')}>
          <i className='fas fa-comment-dollar'></i>Payment
        </div>
        <div className='row mx-3 menuItem signoutLink' onClick={logout}>
          &#8601; Sign Out
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { logout, setShowInsurance })(CustomerSidebar)
