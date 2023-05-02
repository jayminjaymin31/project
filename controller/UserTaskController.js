
const { populate } = require("../schema/UserSchema");
const userTaskSchema = require("../schema/UserTaskSchema")




const getUserTeamByUserId = (req, res) => {
    const projectId = req.params.id;
    userTaskSchema.find({ user: projectId })
      .populate('user')
      .populate('task').
        exec((err, module) => {
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
            message: "data successfully",
          module: module
        });
      });
  };

const updateUserTask = (req, res) => {

    const id = req.params.id

    userTaskSchema.findByIdAndUpdate(id, req.body, (err, success) => {


        if (err) {
            res.status(500).json({
                message: "Error in updating UserTask",
                err: err
            })
        }
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message: " User Task updated successfully",
                })
            }
            else {
                res.status(404).json({
                    message: " User Task not found",
                })
            }



        }


    })



}

const deleteUserTask = (req, res) => {
    const id = req.params.id

    userTaskSchema.findByIdAndDelete(id, (err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in deleting User Task ",
                err: err
            })
        }
        else {
            if ( data != null ||  data != undefined) {
                res.status(200).json({
                    message: "User Task deleted successfully",
                    data:  data
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


const getUserTaskById = (req, res) => {
    const id = req.params.id;
    userTaskSchema.findById(id)
        .populate('user') 
        .populate('task')
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    message: "Error in getting User Task",
                    err: err
                });
            } else {
                if (data) {
                    res.status(200).json({
                        message: "User Task fetched successfully",
                        data: data
                    });
                } else {
                    res.status(404).json({
                        message: "User Task not found",
                    });
                }
            }
        });
};

const addUserTask = (req, res) => {

    const module = new userTaskSchema(req.body)
    module.save((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in saving User Task",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "User Task saved successfully",
                data: data
            })
        }


    })
}

const getAllUserTask = (req, res) => {

    userTaskSchema.find().populate('user').populate('task').exec((err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            })
        }
        else {
            if (data != undefined || data != null && data.length != 0) {
                res.status(200).json({
                    message: 'User Task Details',
                    data: data
                })
            }
            else {
                res.status(200).json({
                    message: 'No User Task Details Found'
                })
            }
        }
    })



}
module.exports = {

    updateUserTask,
    deleteUserTask,
    getUserTaskById,
    getAllUserTask,
    addUserTask,
    getUserTeamByUserId
}