const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema =  new Schema({
    module:
        {
        type:Schema.Types.ObjectId,
        ref: "module"
    }
,
    projects:
        {
            type:Schema.Types.ObjectId,
            ref: "project"   
        }
    ,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status:
        {
            type:Schema.Types.ObjectId,
            ref: "status"
        }
    ,
    totalMinutes: {
        type: Number,
        required: true
    }


})
module.exports = mongoose.model('task', TaskSchema)