const userSchema = require('../schema/UserSchema');
const encrypt = require('../util/encrypt')

const loginUser1 = async (req, res) => {

    userSchema.findOne({ email: req.body.email }).populate('role').exec(async (err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in fetching data",
                err: err
            })
        }
        else {

            console.log(data)
            if (data !== null || data !== undefined) {

                const result = await encrypt.comparePassword(req.body.password, data.password)
                console.log(result)
                if (result == true) {
                    res.status(200).json({
                        message: "user found",
                        data: data
                    })
                }
                else {
                    res.status(404).json({
                        message: "user not found",
                    })
                }


            }
            else {
                res.status(404).json({
                    message: "user not found",
                })
            }


        }
    })

}





const registerUser = async(req,res)=>{

    const hash = await encrypt.encryptPassword(req.body.password)
    console.log(hash)
    const userData = {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        role:req.body.role,
        password:hash
    }

    const user = new userSchema(userData)
    user.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding user",
            })
        }
        else{
            res.status(201).json({
                message:"user added successfully",
                data:data
            })
        }

    })




}

const getUserData = (req, res) => {

    userSchema.find()
    .populate('role') // add this line to populate the "role" field
    .exec((err, data) => {
        if (err) {
            res.status(404).json({
                message: "error in fetching data",
            })
        }
        else {
            res.status(200).json({
                message: "data fetched successfully",
                data: data
            })
        }
    })

}


const getUserById = (req, res) => {
    var id = req.params.id

    userSchema.findById(id)
        .populate('role') // populate the 'role' field
        .exec((err, data) => {
            if (err) {
                res.status(404).json({
                    message: "error in fetching data",
                    err: err
                })
            } else {
                res.status(200).json({
                    message: "data fetched successfully",
                    data: data
                })
            }
        })
}








const addUser = (req, res) => {


    const user = new userSchema(req.body)
    user.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding user",
            })
        }
        else {
            res.status(201).json({
                message: "user added successfully",
                data: data
            })
        }

    })
}

const updateUser = (req, res) => {

    const id = req.params.id
    userSchema.findByIdAndUpdate(id, req.body, (err, data) => {
        if (err) {
            res.status(404).json({
                message: "data is not update",
            })
        }
        else {
            res.status(200).json({
                message: "data is update successfully",
                data: data
            })
        }
    })


}


const deleteUser = (req, res) => {

    const id = req.params.id
    userSchema.findByIdAndDelete(id, req.body, (err, data) => {
        if (err) {
            res.status(404).json({
                message: "data is not remove",
            })
        }
        else {
            res.status(200).json({
                message: "data is remove successfully",
                data: data
            })
        }
    })


}
const loginUser = (req, res) => {


    var email = req.body.email
    var password = req.body.password

    if (email != undefined && password != undefined && email != "" && password != "") {
        userSchema.find({ email: email, password: password }).populate('role').exec((err, data) => {

            if (err) {
                res.status(500).json({
                    message: "error while fetching user"
                })
            }
            else {
                if (data != undefined && data != null && data.length > 0) {
                    res.status(200).json({
                        message: "user found",
                        data: data
                    })
                }
                else {
                    res.status(404).json({
                        message: "user not found"
                    })
                }
            }
        })


    }
    else {
        res.status(404).json({
            message: "email and password both are required"
        })
    }


}



module.exports = {
    getUserData,
    addUser,
    updateUser,
    deleteUser,
    loginUser,
    getUserById,
    registerUser,
    loginUser1
}
