const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/justfortesting");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  // categories: [],
  datecreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", userSchema);