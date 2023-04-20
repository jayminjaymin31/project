const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const UserTaskSchema = new Schema({
    user:[
        {
            type:Schema.Types.ObjectId,
            ref: "users"   
        }
    ],
    task:[
        {
            type:Schema.Types.ObjectId,
            ref: "task"   
    }
]
 })

 module.exports = mongoose.model('usertask', UserTaskSchema)