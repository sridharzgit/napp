const express = require('express')
const csmodels = require('./csmodels')
const mongoose = require("mongoose")
const schemas = require("./schemas")


// const conn = mongoose.createConnection("mongodb://localhost:27017/cs")

// conn.on('error',(error)=>{console.error(error)})
// conn.on('connected',()=>{console.log("connected to MongoDB")})

// const App = conn.model('Apps',schemas.appSchema)
// const Folder = conn.model('Folders',schemas.folderSchema)
// const Dashboard = conn.model('Dashboards',schemas.dbSchema)
// const View = conn.model('Views',schemas.viewSchema)



const router = express.Router()

router.get("/apps", async (req,res) =>{
    const App = csmodels.App
    const AppsList = await App.find({})
    res.send(AppsList)
})




// router.get("/",(req,res)=>{
//     res.send("Contact route is displaying data")
// })

// App.create({name:'App45'}).then(result=>{
//     console.log("This is 45 ",result)
// })


module.exports = router


