const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectTeamSchema = new Schema({
    projects: 
        {
        type: Schema.Types.ObjectId,
        ref: "project"
    }
,
    users:[
         {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
]
})

module.exports = mongoose.model('projectteam', ProjectTeamSchema)