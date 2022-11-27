const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  team: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  teamAdmin: {
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model('userData', userSchema);