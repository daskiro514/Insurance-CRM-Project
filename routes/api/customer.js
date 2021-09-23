const express = require('express')
const router = express.Router()

// Model
const User = require('../../models/User')
const ClassInsu = require('../../models/ClassInsu')

router.post('/updateOnCustomer/:id', async (req, res) => {
  const gliClasses = req.body.gliClasses
  const wciClasses = req.body.wciClasses

  await User.findByIdAndUpdate(req.params.id, { email: req.body.email })

  for (var i = 0; i < gliClasses.length; i++) {
    await ClassInsu.findByIdAndUpdate(gliClasses[i]._id, {amount: gliClasses[i].amount})
  }

  for (var i = 0; i < wciClasses.length; i++) {
    await ClassInsu.findByIdAndUpdate(wciClasses[i]._id, {amount: wciClasses[i].amount})
  }

  res.json({
    success: true
  })
})

module.exports = router