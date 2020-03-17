const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Created date is required']
  }
});
let User = mongoose.model('User', userSchema);

module.exports = User;