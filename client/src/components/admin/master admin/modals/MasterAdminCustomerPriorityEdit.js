import React from 'react'
import { connect } from 'react-redux'
import { setCustomerForPriorityEdit, updateCustomerPriority } from '../../../../actions/admin'

const MasterAdminCustomerPriorityEdit = ({ show, customer, setCustomerForPriorityEdit, updateCustomerPriority }) => {
  if (show) {
    return (
      <div className='modal mt-5 pt-5'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Choose a Priority...</h4>
              <button className='close' onClick={() => {
                setCustomerForPriorityEdit(false)
              }}>X</button>
            </div>

            <div className='modal-body'>
              <button
                className={'btn btn-block ' + (customer.priority === 'high' ? 'btn-danger' : 'btn-outline-danger')}
                onClick={() => { updateCustomerPriority(customer._id, 'high') }}
              >HIGH</button>
              <button
                className={'btn btn-block ' + (customer.priority === 'mid' ? 'btn-warning' : 'btn-outline-warning')}
                onClick={() => { updateCustomerPriority(customer._id, 'mid') }}
              >MID</button>
              <button
                className={'btn btn-block ' + (customer.priority === 'low' ? 'btn-success' : 'btn-outline-success')}
                onClick={() => { updateCustomerPriority(customer._id, 'low') }}
              >LOW</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => ({
  show: state.admin.customerPriorityEditModalShow,
  customer: state.admin.customerForPriorityEdit
})

export default connect(mapStateToProps, { setCustomerForPriorityEdit, updateCustomerPriority })(MasterAdminCustomerPriorityEdit)