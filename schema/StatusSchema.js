const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StatusSchema = new Schema({
    statusName: {
        type: String,
        required: true,
        // unique: true

    },
   
    status: {
        type: Boolean,
        default: true
    }

})

module.exports = mongoose.model('status', StatusSchema)