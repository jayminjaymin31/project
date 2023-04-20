const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')


    app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended:true}))

const userRoutes = require('./routes/UserRoutes')
const roleRoutes = require('./routes/RoleRoutes')
const projectRoutes = require('./routes/ProjectRoutes')
const fileUploadRoutes = require('./routes/FileUploadRoutes')
const projectTeamRoutes = require('./routes/ProjectTeamRoutes')
const statusRoutes = require('./routes/StatusRoutes')
const moduleRoutes = require('./routes/ModuleRoutes')
const taskRoutes = require('./routes/TaskRoutes')
const userTaskRoutes = require('./routes/UserTaskRoutes')



app.use('/user',userRoutes)
app.use('/role', roleRoutes)
app.use('/project',projectRoutes) 
app.use('/upload',fileUploadRoutes)
app.use('/projectteam',projectTeamRoutes) 
app.use('/status', statusRoutes)
app.use('/module',moduleRoutes) 
app.use('/task',taskRoutes)
app.use('/usertask',userTaskRoutes)




mongoose.connect("mongodb://127.0.0.1:27017/bt_node", {}, (err) => {
    if (err) {
        console.log("error in db connections....")
    }
    else {
        console.log("db connected....")
    }
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})