const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let newUserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
      type: String
  },
  emailAdd: {
    type: String
  },
  userName: {
    type: String
  },
  // I need to double check the correct type for date of birth and password (regex)
  dateOfBirth: {
    type: Number
  },
  password: {
      type: String
  }
}, {
    collection: 'newUsers'
  })
  
module.exports = mongoose.model('New Users', newUserSchema)