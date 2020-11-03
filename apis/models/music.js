const mongoose = require('mongoose');
const musicSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Music', musicSchema);