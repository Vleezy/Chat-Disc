const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let newUserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
      type: String,
      required: true
  },
  emailAdd: {
    type: String,
    required: true
  },
  userName: {
    type: String
  },
  // I need to double check the correct type for date of birth and password (regex)
  dateOfBirth: {
    type: Number
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
    collection: 'newUsers'
  })
  
module.exports = mongoose.model('New Users', newUserSchema)