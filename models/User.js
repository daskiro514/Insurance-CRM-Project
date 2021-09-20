const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  passwordForUpdate: {
    type: String,
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  // ADDED FOR INSURON
  type: {
    type: String,
    required: true
  },
  // FOR CLIENTS(CUSTOMERS)
  carrier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'carrier'
  },
  policyNumber: {
    type: String
  },
  companyName: {
    type: String
  },
  peDates: {
    type: Date,
  },
  ppmfeEndorsements: {
    type: Number
  },
  glcDescription: {
    type: String
  },
  glccoRate: {
    type: Number
  },
  glcccoRate: {
    type: Number
  },
  wccDescription: {
    type: String
  },
  wccRate: {
    type: Number
  },
  priority: {
    type: String,
    default: 'low'
  }
})

module.exports = mongoose.model('user', UserSchema)