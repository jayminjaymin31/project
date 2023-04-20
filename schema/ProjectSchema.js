const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technology: {
        type: String,
        required: true
    },
    estimatedHours: {
        type: Number,
        required: true
    },
},{
    timestamps: true

// createdAt_Date: {
//     type: Date,
//     required: true
// },
// updatedAt_Date : {
//     type: Date,
//     required: true
// },
})


module.exports = mongoose.model('project', ProjectSchema);