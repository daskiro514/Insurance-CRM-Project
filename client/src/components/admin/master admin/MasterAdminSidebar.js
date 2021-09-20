import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../actions/auth'
import { getCarriers } from '../../../actions/admin'
import { useHistory } from "react-router-dom"
import menuLogo from '../../../img/logo/menu-logo.svg'

const MasterAdminSidebar = ({ logout, getCarriers, carriers }) => {
  let history = useHistory()

  React.useEffect(() => {
    getCarriers()
  }, [getCarriers])

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
        {carriers.map((carrier, index) =>
          <div className='row mx-3 my-1 menuItem' onClick={() => goPage(`carrier/${carrier._id}`)} key={index}>
            {carrier.name}
          </div>
        )}
        <div className='row mx-3 menuItem signoutLink' onClick={logout}>
          &#8601; Sign Out
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  carriers: state.admin.carriers
})

export default connect(mapStateToProps, { logout, getCarriers })(MasterAdminSidebar)
