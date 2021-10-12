import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { goPage, setCustomerForPriorityEdit } from '../../../../actions/admin'
import { formatDueDate } from '../../../../utils/formatDate1'

const MasterAdminCustomerRow = ({ item, goPage, setCustomerForPriorityEdit }) => {
  let history = useHistory()

  const [btnClass, setBtnClass] = React.useState('btn-success')

  React.useEffect(() => {
    setBtnClass(item.priority === 'high' ? 'btn-danger' : item.priority === 'mid' ? 'btn-warning' : 'btn-success')
  }, [item])

  return (
    <tr onClick={() => goPage(history, `customer/${item._id}`)}>
      <td>{item._id}</td>
      <td>{item.companyName}</td>
      <td><span className={'badge ' + (item.policyPremiumGL < 0 ? 'badge-primary ' : 'badge-danger')}>$ {item.policyPremiumGL}</span></td>
      <td>{formatDueDate(item.peDatesTillGL)}</td>
      <td><span className={'badge ' + (item.policyPremiumWC < 0 ? 'badge-primary ' : 'badge-danger')}>$ {item.policyPremiumWC}</span></td>
      <td>{formatDueDate(item.peDatesTillWC)}</td>
      <td>
        <button
          className={'text-uppercase btn btn-sm ' + btnClass}
          onClick={e => {
            e.stopPropagation()
            setCustomerForPriorityEdit(true, item)
          }}
        >
          {item.priority}
        </button>
      </td>
    </tr>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { goPage, setCustomerForPriorityEdit })(MasterAdminCustomerRow)