const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = Schema({
    projects:
        {
        type: Schema.Types.ObjectId,
        ref: "project"
    }
,
    moduleName:{
        type: String
    },
    description:{   
        type: String
    },
    estimatedHours:{
        type: Number
    },
    status:
        {
        type: Schema.Types.ObjectId,
        ref: "status"
    }
,
},{
    timestamps: true
}
)


module.exports = mongoose.model('module', moduleSchema);