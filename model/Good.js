const mongoose = require('mongoose')


const goodSchema = mongoose.Schema({
    good:String,
    price : Number
})
//Create the model according to Scheema
const Good = mongoose.model('good', goodSchema);

module.exports = Good 
