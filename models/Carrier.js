const mongoose = require('mongoose')

const CarrierSchema = new mongoose.Schema({
  name: {
    type: String,
  }
})

module.exports = mongoose.model('carrier', CarrierSchema)