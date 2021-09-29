import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { goPage, setCustomerForPriorityEdit } from '../../../../actions/admin'
import formatDate from '../../../../utils/formatDate1'

const MasterAdminCustomerRow = ({ item, goPage, setCustomerForPriorityEdit }) => {
  let history = useHistory()

  const [btnClass, setBtnClass] = React.useState('btn-success')
  const [premium, setPremium] = React.useState(0)

  React.useEffect(() => {
    setBtnClass(item.priority === 'high' ? 'btn-danger' : item.priority === 'mid' ? 'btn-warning' : 'btn-success')

    // PREMIUM CALCULATE
    var totalPremium = 0
    item.gliClasses.forEach(element => {
      if (element.type === 'Sales') {
        totalPremium += (element.amount / 9 * 12 / 100 * element.rate)
      } else {
        totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
      }
    })
    item.wciClasses.forEach(element => {
      totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
    })

    setPremium((totalPremium - item.paidPremium).toFixed(2))
  }, [item])

  return (
    <tr onClick={() => goPage(history, `customer/${item._id}`)}>
      <td>{item._id}</td>
      <td>{item.companyName}</td>
      <td>$ {premium}</td>
      <td>{formatDate(item.peDatesTill)}</td>
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