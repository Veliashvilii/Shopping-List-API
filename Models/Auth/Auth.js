const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/, 
  },

  password: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(?=.*[A-Z])(?=.*\W).{8,}$/.test(v);
      },
      message: props => `Password must be at least 8 characters long and contain one uppercase letter and one special character.`
    }
  }
});

module.exports = mongoose.model('Auth', AuthSchema);