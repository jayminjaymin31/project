
const taskSchema = require("../schema/TaskSchema")


const getTaskIdByProject = (req, res) => {
    const taskId = req.params.id;
    taskSchema.find({ projects: taskId })
        .populate('module')
        .populate('projects')
        .populate('status')
        .exec((err, data) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error in getting task',
                    error: err
                });
            }
            if (!module) {
                return res.status(404).json({
                    message: 'No module found for this task ID'
                });
            }
            return res.status(200).json({
                dara: data
            });
        });
};

const updateTask = (req, res) => {

    const id = req.params.id

    taskSchema.findByIdAndUpdate(id, req.body, (err, success) => {


        if (err) {
            res.status(500).json({
                message: "Error in updating Task",
                err: err
            })
        }
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message: " Task updated successfully",
                })
            }
            else {
                res.status(404).json({
                    message: " Task not found",
                })
            }



        }


    })



}

const deleteTask = (req, res) => {
    const id = req.params.id

    taskSchema.findByIdAndDelete(id, (err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in deleting Task",
                err: err
            })
        }
        else {
            if (data != null || data != undefined) {
                res.status(200).json({
                    message: "Task deleted successfully",
                    data: data
                })
            }
            else {
                res.status(404).json({
                    message: " data not found",
                })
            }
        }


    })
}



const getTaskById = (req, res) => {
    const id = req.params.id;
    taskSchema.findById(id)
        .populate('module')
        .populate('projects')
        .populate('status')
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    message: "Error in getting Task",
                    err: err
                });
            } else {
                if (data) {
                    res.status(200).json({
                        message: "Task fetched successfully",
                        data: data
                    });
                } else {
                    res.status(404).json({
                        message: "Task not found"
                    });
                }
            }
        });
};

const addTask = (req, res) => {

    const module = new taskSchema(req.body)
    module.save((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in saving Task",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "Task saved successfully",
                data: data
            })
        }


    })
}

const getAllTask = (req, res) => {

    taskSchema.find().populate('module').populate('projects').populate('status').exec((err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            })
        }
        else {
            if (data != undefined || data != null && data.length != 0) {
                res.status(200).json({
                    message: 'Task Details',
                    data: data
                })
            }
            else {
                res.status(200).json({
                    message: 'No Task Details Found'
                })
            }
        }
    })



}
module.exports = {

    updateTask,
    deleteTask,
    getTaskById,
    getAllTask,
    addTask,
    getTaskIdByProject
}