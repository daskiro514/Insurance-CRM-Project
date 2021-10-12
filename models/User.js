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
  companyName: {
    type: String
  },
  peDatesFromGL: {
    type: Date,
    default: Date.now
  },
  peDatesTillGL: {
    type: Date,
    default: Date.now
  },
  peDatesFromWC: {
    type: Date,
    default: Date.now
  },
  peDatesTillWC: {
    type: Date,
    default: Date.now
  },
  paidPremiumGL: {
    type: Number,
    default: 0
  },
  paidPremiumWC: {
    type: Number,
    default: 0
  },
  gliClasses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'classinsu'
    }
  ],
  wciClasses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'classinsu'
    }
  ],
  priority: {
    type: String,
    default: 'low'
  }
})

module.exports = mongoose.model('user', UserSchema)