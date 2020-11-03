const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('User', userSchema);