
const moduleSchema = require("../schema/ModuleSchema")



// const getProjectIdByModule = (req, res) => {

//     const projectId = req.params.projects
//     moduleSchema.find({'projects._id':projectId},(err,data)=>{
    

//         if (err) {
//             res.status(500).json({
//                 message: "Error in getting module",
//                 err: err
//             })
//         }
//         else {

//             if ( data != null ||  data != undefined) {
//                 res.status(200).json({
//                     message: " module fetched successfully",
//                     data: data
//                 })
//             }
//             else {
//                 res.status(404).json({
//                     message: " module not found",
//                 })
//             }



//         }



//     })


// }
// const getModuleIdByProject = (req, res) => {
//     const projectId = req.params.projectId;
//     moduleSchema.find({ projects: projectId }, (err, module) => {
//       if (err) {
//         return res.status(500).json({
//           message: 'Error in getting module',
//           error: err
//         });
//       }
//       if (!module) {
//         return res.status(404).json({
//           message: 'No module found for this project ID'
//         });
//       }
//       return res.status(200).json({
//         module: module
//       });
//     });
//   };
  

const getModuleIdByProject = (req, res) => {
    const projectId = req.params.id;
    moduleSchema.find({ projects: projectId })
      .populate('projects')
      .populate('status')
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
  
const updateModule = (req, res) => {

    const id = req.params.id

    moduleSchema.findByIdAndUpdate(id, req.body, (err, success) => {


        if (err) {
            res.status(500).json({
                message: "Error in updating module",
                err: err
            })
        }
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message: " module updated successfully",
                })
            }
            else {
                res.status(404).json({
                    message: " module not found",
                })
            }



        }


    })



}

const deleteModule = (req, res) => {
    const id = req.params.id

    moduleSchema.findByIdAndDelete(id, (err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in deleting module",
                err: err
            })
        }
        else {
            if ( data != null ||  data != undefined) {
                res.status(200).json({
                    message: "module deleted successfully",
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



const getModuleById = (req, res) => {

    const id = req.params.id
    moduleSchema.findById(id) 
    .populate('projects', 'title')
    .populate('status', 'statusName')
    .exec ((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in getting module",
                err: err
            })
        }
        else {

            if ( data != null ||  data != undefined) {
                res.status(200).json({
                    message: " module fetched successfully",
                    data: data
                })
            }
            else {
                res.status(404).json({
                    message: " module not found",
                })
            }



        }



    })


}
const addModule = (req, res) => {

    const module = new moduleSchema(req.body)
    module.save((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in saving module",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "module saved successfully",
                data: data
            })
        }


    })
}

const getAllModule = (req, res) => {

    moduleSchema.find().populate('projects').populate('status').exec((err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            })
        }
        else {
            if (data != undefined || data != null && data.length != 0) {
                res.status(200).json({
                    message: 'module Details',
                    data: data
                })
            }
            else {
                res.status(200).json({
                    message: 'No module Details Found'
                })
            }
        }
    })



}
module.exports = {

    updateModule,
    deleteModule,
    getModuleById,
    getAllModule,
    addModule,
    // getProjectIdByModule,
    getModuleIdByProject

}