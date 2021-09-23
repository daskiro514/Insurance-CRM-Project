const mongoose = require('mongoose')

const ClassInsuSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number
  },
  rate: {
    type: Number
  },
  type: {
    type: String
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

module.exports = mongoose.model('classinsu', ClassInsuSchema)