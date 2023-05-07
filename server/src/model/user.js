const mongoose = require('mongoose');
//schema -> to add a structure
const userSchema = new mongoose.Schema({
    //id: String, // String is shorthand for {type: String}
    name: String,
    password: String,
    email: String,
    role: String
  });

const User = mongoose.model('User', userSchema);
exports.default = User