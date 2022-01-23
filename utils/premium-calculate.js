const totalPremium = (customer, type) => {
  var totalPremium = 0

  if (type === 'GL') {
    customer.gliClasses.forEach(element => {
      if (element.type === 'Sales') {
        totalPremium += (element.amount / 9 * 12 / 100 * element.rate)
      } else {
        totalPremium += (element.amount / 9 * 12 / 1000 * element.rate)
      }
    })
  }

  if (type === 'WC') {
    customer.wciClasses.forEach(element => {
      totalPremium += (element.amount / 9 * 12 / 100 * element.rate)
    })
  }
  
  return totalPremium.toFixed(2)
}

const policyPremium = (customer, type) => {
  if (type === 'GL') {
    return ((totalPremium(customer, type) - customer.paidPremiumGL).toFixed(2))
  }
  if (type === 'WC') {
    return ((totalPremium(customer, type) - customer.paidPremiumWC).toFixed(2))
  }
}

const monthlyDueDate = (customer, type) => {
  var today = new Date()
  var nextDueMiliSec
  if (type === 'GL') {
    nextDueMiliSec = (customer.peDatesTillGL - today) % 2628000000
  }
  if (type === 'WC') {
    nextDueMiliSec = (customer.peDatesTillWC - today) % 2628000000
  }
  return new Date(today.getTime() + nextDueMiliSec)
}

const monthlyPremium = (customer, type) => {
  var today = new Date()
  if (today > customer.peDatesTill) {
    return policyPremium(customer, type)
  }

  var monthAmountLeft
  if (type === 'GL') {
    monthAmountLeft = (customer.peDatesTillGL - today) / 2628000000
  }
  if (type === 'WC') {
    monthAmountLeft = (customer.peDatesTillWC - today) / 2628000000
  }

  if (monthAmountLeft <= 1) monthAmountLeft = 1

  return (policyPremium(customer, type) / monthAmountLeft).toFixed(2)
}

module.exports = {
  totalPremium,
  policyPremium,
  monthlyDueDate,
  monthlyPremium
}