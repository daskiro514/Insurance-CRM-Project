const express = require('express')
const router = express.Router()

// For User Generate
const bcrypt = require('bcryptjs')
const normalize = require('normalize-url')
const gravatar = require('gravatar')

// Model
const User = require('../../models/User')
const Carrier = require('../../models/Carrier')

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
  const customers = await User.find({ type: 'customer' })

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

module.exports = router