const express = require('express')
const router = express.Router()
const config = require('config')

// For User Generate
const bcrypt = require('bcryptjs')
const normalize = require('normalize-url')
const gravatar = require('gravatar')

// Model
const User = require('../../models/User')
const Carrier = require('../../models/Carrier')
const ClassInsu = require('../../models/ClassInsu')

// Schedule
const schedule = require('node-schedule')

// Mailgun Info
const mailgunApiKey = config.get('mailgun.mailgunApiKey')
const mailgunDomain = config.get('mailgun.domain')
var mailgun = require('mailgun-js')({ apiKey: mailgunApiKey, domain: mailgunDomain })

const { totalPremium, policyPremium, monthlyPremium, monthlyDueDate } = require('../../utils/premium-calculate')

router.get('/getCarriers', async (req, res) => {
  const carriers = await Carrier.find()

  res.json({
    success: true,
    carriers
  })
})

router.post('/addCustomer', async (req, res) => {
  let newCustomer = new User({
    ...req.body
  })

  newCustomer.type = 'customer'
  newCustomer.passwordForUpdate = req.body.password
  newCustomer.password = bcrypt.hashSync(req.body.password, 10)
  const avatar = normalize(
    gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' }),
    { forceHttps: true }
  )
  newCustomer.avatar = avatar

  await newCustomer.save()

  res.json({
    success: true
  })
})

router.get('/getCustomers', async (req, res) => {
  const customersFromDB = await User.find({ type: 'customer' }).populate(['gliClasses', 'wciClasses'])
  var customers = []
  customersFromDB.forEach(customerFromDB => {
    var customer = { ...customerFromDB._doc }
    customer.policyPremiumGL = policyPremium(customer, 'GL')
    customer.policyPremiumWC = policyPremium(customer, 'WC')
    customers.push(customer)
  })

  res.json({
    success: true,
    customers
  })
})

router.post('/updateCustomerPriority/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body)

  res.json({
    success: true
  })
})

router.get('/getCustomer/:id', async (req, res) => {
  var customerFromDB = await User.findById(req.params.id).populate(['gliClasses', 'wciClasses'])
  var customer = { ...customerFromDB._doc }
  customer.totalPremiumGL = totalPremium(customer, 'GL')
  customer.totalPremiumWC = totalPremium(customer, 'WC')
  customer.policyPremiumGL = policyPremium(customer, 'GL')
  customer.policyPremiumWC = policyPremium(customer, 'WC')
  customer.monthlyPremiumGL = monthlyPremium(customer, 'GL')
  customer.monthlyPremiumWC = monthlyPremium(customer, 'WC')
  customer.monthlyDueDateGL = monthlyDueDate(customer, 'GL')
  customer.monthlyDueDateWC = monthlyDueDate(customer, 'WC')

  res.json({
    success: true,
    customer
  })
})

router.post('/updateCustomer/:id', async (req, res) => {
  const gliClasses = req.body.gliClasses
  const wciClasses = req.body.wciClasses
  let gliClassIds = []
  let wciClassIds = []

  let update = {
    ...req.body
  }

  await ClassInsu.deleteMany({ customer: req.params.id })

  for (var i = 0; i < gliClasses.length; i++) {
    let newClassInsu = new ClassInsu({
      name: gliClasses[i].name,
      amount: gliClasses[i].amount,
      rate: gliClasses[i].rate,
      type: gliClasses[i].type,
      customer: req.params.id
    })
    await newClassInsu.save()
    gliClassIds.push(newClassInsu._id)
  }

  for (var i = 0; i < wciClasses.length; i++) {
    let newClassInsu = new ClassInsu({
      name: wciClasses[i].name,
      amount: wciClasses[i].amount,
      rate: wciClasses[i].rate,
      type: wciClasses[i].type,
      customer: req.params.id
    })
    await newClassInsu.save()
    wciClassIds.push(newClassInsu._id)
  }

  update.gliClasses = gliClassIds
  update.wciClasses = wciClassIds

  await User.findByIdAndUpdate(req.params.id, update, { new: true })

  res.json({
    success: true,
  })
})

router.post('/sendAlertToCustomer', async (req, res) => {
  var emailContentToCustomer = {
    from: 'Aquerate <info@aquerate.com>',
    to: req.body.customerEmail,
    subject: 'Test Alert For Premium Payment',
    text: `Hi. Your premium due date is ${req.body.dueDate.slice(0, 10)}. You should pay $${req.body.premium} soon.
    Aquerate Team.`
  }

  mailgun.messages().send(emailContentToCustomer, function (error, body) {
    console.log(body)
  })

  res.json({
    success: true
  })
})

const sendEmailToCustomer = customer => {
  var emailContentToCustomer = {
    from: 'Aquerate <info@aquerate.com>',
    to: customer.email,
    subject: 'Urgent: Update Your Financials',
    text: `As a part of Aquerates mission to service you, and give you accurate quotes, it’s essential you update your financials in the dashboard. Please login and do so now. https://aquerate.com`
  }

  mailgun.messages().send(emailContentToCustomer, function (error, body) {
    console.log(body)
  })
}

const ruleForEmail = new schedule.RecurrenceRule()
ruleForEmail.hour = 0

const scheduleForSendEmail = schedule.scheduleJob(ruleForEmail, async () => {
  var newDate = new Date()
  var year = newDate.getFullYear()
  var month = newDate.getMonth() + 1
  var date = newDate.getDate()

  const users = await User.find({ type: 'customer' })
  for (var i = 0; i < users.length; i++) {
    var user = users[i]._doc
    var targetTime = new Date(user.peDatesFromGL.getTime() + 7776000000)
    var targetYear = targetTime.getFullYear()
    var targetMonth = targetTime.getMonth() + 1
    var targetDate = targetTime.getDate()

    if (targetYear === year && targetMonth === month && targetDate === date) {
      sendEmailToCustomer(user)
    }
  }
  for (var i = 0; i < users.length; i++) {
    var user = users[i]._doc
    var targetTime = new Date(user.peDatesFromWC.getTime() + 7776000000)
    var targetYear = targetTime.getFullYear()
    var targetMonth = targetTime.getMonth() + 1
    var targetDate = targetTime.getDate()

    if (targetYear === year && targetMonth === month && targetDate === date) {
      sendEmailToCustomer(user)
    }
  }
})

module.exports = router