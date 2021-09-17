import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { useHistory } from "react-router-dom"
import menuLogo from '../../img/logo/menu-logo.svg'

const CustomerSidebar = ({ logout }) => {
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
          <img src={menuLogo} alt='MENULOGO' className='pr-2' height='30px' />InsuRon
        </div>
        <div className='row mx-3 my-1 menuItem' onClick={() => goPage('')}>
          <i className='fas fa-user-friends'></i>My Account
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

export default connect(mapStateToProps, { logout })(CustomerSidebar)
