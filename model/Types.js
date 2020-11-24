const mongoose = require('mongoose')


const typeSchema = mongoose.Schema({
    goodID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Good'
    },
})
//Create the model according to Scheema
const Type = mongoose.model('type', typeSchema);

module.exports = Type;