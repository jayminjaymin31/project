
const projectTeamSchema = require("../schema/ProjectTeamSchema")




const getTeamIdByProject = (req, res) => {
    const projectId = req.params.id;
    projectTeamSchema.find({ projects: projectId })
      .populate('projects', 'title')
      .populate('users', 'name')
      .exec((err, projectTeam) => {
        if (err) {
          return res.status(500).json({
            message: 'Error in getting team',
            error: err
          });
        }
        if (!projectTeam) {
          return res.status(404).json({
            message: 'No team found for this project ID'
          });
        }
        return res.status(200).json({
            projectTeam: projectTeam
        });
      });
  };

const updateProjectTeam = (req, res) => {

    const id = req.params.id

    projectTeamSchema.findByIdAndUpdate(id, req.body, (err, success) => {


        if (err) {
            res.status(500).json({
                message: "Error in updating project team",
                err: err
            })
        }
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message: " project team updated successfully",
                })
            }
            else {
                res.status(404).json({
                    message: " project team not found",
                })
            }



        }


    })



}

const deleteProjectTeam = (req, res) => {
    const id = req.params.id

    projectTeamSchema.findByIdAndDelete(id, (err, project) => {

        if (err) {
            res.status(500).json({
                message: "Error in deleting project team",
                err: err
            })
        }
        else {
            if ( project != null ||  project != undefined) {
                res.status(200).json({
                    message: " project team deleted successfully",
                    project:  project
                })
            }
            else {
                res.status(404).json({
                    message: " project team not found",
                })
            }
        }


    })
}



const getProjectTeamById = (req, res) => {

    const id = req.params.id
    projectTeamSchema.findById(id)
        .populate('projects')
        .populate('users')
        .exec((err, project) => {

        if (err) {
            res.status(500).json({
                message: "Error in getting projectTeam",
                err: err
            })
        }
        else {

            if (project != null || project != undefined) {
                res.status(200).json({
                    message: "projectTeam fetched successfully",
                    project: project
                })
            }
            else {
                res.status(404).json({
                    message: "project Team not found",
                })
            }
        }
    })
}

const addprojectTeam = (req, res) => {

    const projectTeam = new projectTeamSchema(req.body)
    projectTeam.save((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in saving projectTeam",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "project Team saved successfully",
                data: data
            })
        }


    })
}

const getAllProjectTeam = (req, res) => {

    projectTeamSchema.find().populate('projects').populate('users').exec((err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            })
        }
        else {
            if (data != undefined || data != null && data.length != 0) {
                res.status(200).json({
                    message: 'Team Details',
                    data: data
                })
            }
            else {
                res.status(200).json({
                    message: 'No Team Details Found'
                })
            }
        }
    })



}
module.exports = {

    updateProjectTeam,
    deleteProjectTeam,
    getTeamIdByProject,
    getProjectTeamById,
    getAllProjectTeam,
    addprojectTeam
}