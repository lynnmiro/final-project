var mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,    
    trim: true
  },
});
module.exports = mongoose.model('user', UserSchema);

