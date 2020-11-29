const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    Email: String,
    password: String,

})
//Create the model according to Scheema
const User = mongoose.model('user', userSchema);

module.exports = User;
