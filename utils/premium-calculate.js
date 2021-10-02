const totalPremium = customer => {
  var totalPremium = 0
  customer.gliClasses.forEach(element => {
    if (element.type === 'Sales') {
      totalPremium += (element.amount / 9 * 12 / 100 * element.rate)
    } else {
      totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
    }
  })
  customer.wciClasses.forEach(element => {
    totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
  })

  return totalPremium.toFixed(2)
}

const policyPremium = customer => {
  return ((totalPremium(customer) - customer.paidPremium).toFixed(2))
}

const monthlyDueDate = customer => {
  var today = new Date()
  var nextDueMiliSec = (customer.peDatesTill - today) % 2628000000
  return new Date(today.getTime() + nextDueMiliSec)
}

const monthlyPremium = customer => {
  var today = new Date()
  if (today > customer.peDatesTill) {
    return policyPremium(customer)
  }

  monthAmountLeft = Math.ceil((customer.peDatesTill - today) / 2628000000)

  return (policyPremium(customer) / monthAmountLeft).toFixed(2)
}

module.exports = {
  totalPremium,
  policyPremium,
  monthlyDueDate,
  monthlyPremium
}