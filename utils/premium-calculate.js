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

  return totalPremium
}

const policyPremium = customer => {
  return ((totalPremium(customer) - customer.paidPremium).toFixed(2))
}

const monthlyPremium = customer => {
  console.log(customer.peDatesFrom)
}

module.exports = {
  policyPremium,
  monthlyPremium
}