import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { goPage, setCustomerForPriorityEdit } from '../../../../actions/admin'

const MasterAdminCustomerRow = ({ item, goPage, setCustomerForPriorityEdit }) => {
  let history = useHistory()

  const [btnClass, setBtnClass] = React.useState('btn-success')

  React.useEffect(() => {
    setBtnClass(item.priority === 'high' ? 'btn-danger' : item.priority === 'mid' ? 'btn-warning' : 'btn-success')
  }, [item])

  return (
    <tr onClick={() => goPage(history, `customer/${item._id}`)}>
      <td>{item.policyNumber}</td>
      <td>{item.companyName}</td>
      <td>$ {item.ppmfeEndorsements}</td>
      <td>{item.peDates.slice(0, 10)}</td>
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