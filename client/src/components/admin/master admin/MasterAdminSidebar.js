import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../actions/auth'
import { goPage, setShowInsurance } from '../../../actions/admin'
import { useHistory } from "react-router-dom"
import menuLogo from '../../../img/logo/menu-logo.svg'

const MasterAdminSidebar = ({ logout, goPage, setShowInsurance }) => {
  let history = useHistory()
  let pathname = history.location.pathname

  return (
    <div className='col-md-2 p-2 sidebar'>
      <div className='container-fluid'>
        <div className='row my-4 mx-2 h3 menuItem' onClick={() => goPage(history, '')}>
          <img src={menuLogo} alt='MENULOGO' className='pr-2' />Aquerate
        </div>
        {(pathname === '/' || pathname === '/addCustomer') ? null
          :
          <>
            <div className='row mx-3 my-2 menuItem' onClick={() => setShowInsurance('GL')}>
              <div className='d-flex align-items-center'>
                <div><i className='fas fa-user-friends'></i></div>
                <div>General Liability</div>
              </div>
            </div>
            <div className='row mx-3 my-2 menuItem' onClick={() => setShowInsurance('WC')}>
              <div className='d-flex align-items-center'>
                <div><i className='fas fa-user-friends'></i></div>
                <div>Worker's Compensation</div>
              </div>
            </div>
            <div className='row mx-3 my-2 menuItem' onClick={() => setShowInsurance('COV')}>
              <div className='d-flex align-items-center'>
                <div><i className='fa fa-list-ul'></i></div>
                <div>Coverages</div>
              </div>
            </div>
          </>
        }
        <div className='row mx-3 menuItem signoutLink' onClick={logout}>
          &#8601; Sign Out
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { logout, setShowInsurance, goPage })(MasterAdminSidebar)
