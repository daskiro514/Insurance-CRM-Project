import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../actions/auth'
import { useHistory } from "react-router-dom"
import menuLogo from '../../../img/logo/menu-logo.svg'

const MasterAdminSidebar = ({ logout }) => {
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
          Liberty Mutual
        </div>
        <div className='row mx-3 my-1 menuItem' onClick={() => goPage('')}>
          State Farm
        </div>
        <div className='row mx-3 my-1 menuItem' onClick={() => goPage('')}>
          Nationwide
        </div>
        <div className='row mx-3 my-1 menuItem' onClick={() => goPage('')}>
          The Hartford
        </div>
        <div className='row mx-3 my-1 menuItem' onClick={() => goPage('')}>
          Progressive
        </div>
        <div className='row mx-3 my-1 menuItem' onClick={() => goPage('')}>
          Travelers
        </div>
        <div className='row mx-3 menuItem' onClick={logout} style={{position: 'absolute', bottom: '20px'}}>
          &#8601; Sign Out
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { logout })(MasterAdminSidebar)
