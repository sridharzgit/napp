const express = require("express")
const mongoose = require("mongoose")
const csRoute = require("./csrouter")
//const dataRoute = require("./datarouter")

const app = express()
const port = 3080 
app.use(express.json())
app.use("/cs",csRoute)
//app.use("/data",dataRoute)


app.listen(port,()=>{console.log("App listening from port:",port)})










// app.get("/",(req,res)=>{
//     res.json({"Test":"Success"});
// })


// app.get("/names",(req,res)=>{
//     res.json(["A","B","C"]);
// })

// app.get("/ages",(req,res)=>{
//     res.json([1,2,3,4]);
// })

// // app.get("/",(req,res)=>{
// //     getInstance().then(instance=>{
// //         //console.log("Hello",instance)
// //         instance.get("Cubes").then(response=>{
// //             console.log(response);        
// //             res.setHeader('Content-Type', 'application/json');
// //             const cubesList = response.data.value.map(item=>item.Name)
// //             //res.end(JSON.stringify(cubesList, null, 6));
// //             res.json(cubesList);
// //             //res.send(response.data)
// //         }).catch(error => {
// //             console.error(error);
// //             res.send(error)
            
// //         });    
// //     } ).catch(error=>{
// //         //console.log(error)
// //         res.send(error)
// //     }) 
    
// // })



// app.get("/api/cubes",(req,res)=>{
//     getInstance().then(instance=>{
//         //console.log("Hello",instance)
//         instance.get("Cubes").then(response=>{
//             //console.log(response);        
//             res.setHeader('Content-Type', 'application/json');
//             //const cubesList = response.data.value.slice(0,1).map(item=>item.Name)
//             const cubesList = response.data.value.slice(0,2)
//             //console.log(response.data.value[0]);
//             //res.end(JSON.stringify(cubesList, null, 6));
//             res.json(cubesList);
//             //res.send(response.data)
//         }).catch(error => {
//             console.error(error);
//             res.send(error)
            
//         });    
//     } ).catch(error=>{
//         //console.log(error)
//         res.send(error)
//     }) 
    
// })

// //start 
// //  /apps post should create an app 
// //  /dashborads post 
// //  /view post
// //  /wizards post 

// //end

// // cs api

// app.get("/csapi/v1/apps",(req,res)=>{


// })








