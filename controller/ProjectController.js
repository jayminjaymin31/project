const projectSchema =require("../schema/ProjectSchema");



const getModuleIdByProject = (req, res) => {
    const projectId = req.params.id;
    projectSchema.find({ projects: projectId })
  
      .exec((err, module) => {
        if (err) {
          return res.status(500).json({
            message: 'Error in getting module',
            error: err
          });
        }
        if (!module) {
          return res.status(404).json({
            message: 'No module found for this project ID'
          });
        }
        return res.status(200).json({
          module: module
        });
      });
  };
  

const updateProject = (req, res) => {

    const id = req.params.id

    projectSchema.findByIdAndUpdate(id, req.body, (err, success) => {


        if (err) {
            res.status(500).json({
                message: "Error in updating project",
                err: err
            })
        }
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message: " project updated successfully",
                })
            }
            else {
                res.status(404).json({
                    message: " project not found",
                })
            }



        }


    })



}



const deleteProject = (req, res) => {
    const id = req.params.id

    projectSchema.findByIdAndDelete(id, (err, project) => {

        if (err) {
            res.status(500).json({
                message: "Error in deleting project",
                err: err
            })
        }
        else {
            if ( project != null ||  project != undefined) {
                res.status(200).json({
                    message: " project deleted successfully",
                    project:  project
                })
            }
            else {
                res.status(404).json({
                    message: " project not found",
                })
            }
        }


    })




}

const getProjectById = (req, res) => {

    const id = req.params.id
    projectSchema.findById(id, (err, project) => {

        if (err) {
            res.status(500).json({
                message: "Error in getting  project",
                err: err
            })
        }
        else {

            if ( project != null ||  project != undefined) {
                res.status(200).json({
                    message: " project fetched successfully",
                    project: project
                })
            }
            else {
                res.status(404).json({
                    message: " project not found",
                })
            }



        }



    })


}

const getAllProject = (req, res) => {

    projectSchema.find((err, project) => {

        if (err) {
            res.status(500).json({
                message: "Error in getting project",
                err: err
            })
        }
        else {
            if ( project != null || project != undefined ||  project.length != 0) {
                res.status(200).json({
                    message: "Project fetched successfully",
                    project:  project
                })
            }
            else {
                res.status(404).json({
                    message: "Project not found",
                })
            }

        }

    })


}


const addproject = (req, res) => {

    const project = new projectSchema(req.body)
    project.save((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in saving project",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "project saved successfully",
                data: data
            })
        }


    })
}

module.exports = {
        addproject,
        updateProject,
        deleteProject,
        getProjectById,
        getAllProject,
        getModuleIdByProject
}