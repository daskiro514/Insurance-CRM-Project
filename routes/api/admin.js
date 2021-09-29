const express = require('express')
const router = express.Router()

// For User Generate
const bcrypt = require('bcryptjs')
const normalize = require('normalize-url')
const gravatar = require('gravatar')

// Model
const User = require('../../models/User')
const Carrier = require('../../models/Carrier')
const ClassInsu = require('../../models/ClassInsu')

router.get('/getCarriers', async (req, res) => {
  const carriers = await Carrier.find()

  res.json({
    success: true,
    carriers
  })
})

router.post('/addCustomer', async (req, res) => {
  const gliClasses = req.body.gliClasses
  const wciClasses = req.body.wciClasses
  let gliClassIds = []
  let wciClassIds = []

  let newCustomer = new User({
    ...req.body
  })

  for (var i = 0; i < gliClasses.length; i++) {
    let newClassInsu = new ClassInsu({
      name: gliClasses[i].className,
      amount: gliClasses[i].amount,
      rate: gliClasses[i].rate,
      type: gliClasses[i].type,
      customer: newCustomer._id
    })
    await newClassInsu.save()
    gliClassIds.push(newClassInsu._id)
  }

  for (var i = 0; i < wciClasses.length; i++) {
    let newClassInsu = new ClassInsu({
      name: wciClasses[i].className,
      amount: wciClasses[i].amount,
      rate: wciClasses[i].rate,
      type: wciClasses[i].type,
      customer: newCustomer._id
    })
    await newClassInsu.save()
    wciClassIds.push(newClassInsu._id)
  }

  newCustomer.type = 'customer'
  newCustomer.passwordForUpdate = req.body.password
  newCustomer.password = bcrypt.hashSync(req.body.password, 10)
  const avatar = normalize(
    gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' }),
    { forceHttps: true }
  )
  newCustomer.avatar = avatar

  newCustomer.gliClasses = gliClassIds
  newCustomer.wciClasses = wciClassIds

  await newCustomer.save()

  res.json({
    success: true
  })
})

router.get('/getCustomers', async (req, res) => {
  const customers = await User.find({ type: 'customer' }).populate(['gliClasses', 'wciClasses'])

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
  const customer = await User.findById(req.params.id).populate(['gliClasses', 'wciClasses'])

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

module.exports = router