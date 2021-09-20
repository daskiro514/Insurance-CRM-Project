import React from 'react'
import { connect } from 'react-redux'

const MasterAdminCustomer = () => {

  return (
    <div className='m-2 main'>
      Master Admin Customer
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { })(MasterAdminCustomer)
