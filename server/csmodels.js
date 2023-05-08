const mongoose = require("mongoose")
const schemas = require("./schemas")

const conn = mongoose.createConnection("mongodb://localhost:27017/cs")

conn.on('error',(error)=>{console.error(error)})
conn.on('connected',()=>{console.log("connected to MongoDB")})

const App = conn.model('Apps',schemas.appSchema)
const Folder = conn.model('Folders',schemas.folderSchema)
const Dashboard = conn.model('Dashboards',schemas.dbSchema)
const View = conn.model('Views',schemas.viewSchema)

module.exports = {App,Folder,Dashboard,View}
// const instance = axios.create({
//     baseURL:'http://localhost:5424/api/v1/',
// })
// instance.defaults.headers.common['Content-Type'] = "application/json";

// function getInstance() {
//     var base64encodedData = Buffer.from('Demo1' + ':' + '').toString('base64');
//     console.log(base64encodedData)
//     return instance.get("",{headers: {
//         "WWW-Authenticate":'Basic Realm="TM1"',
//         'Authorization':"Basic "+base64encodedData,
//     }}).then((response) => {
//             console.log("Login success with response code:",response.status)
//             const sessionId = response.headers['set-cookie']
//             console.log("auth cookie:",sessionId);
//             instance.defaults.headers.common['Cookie'] = sessionId
//             //console.log("instance:",instance);
//             return instance
//         })
//         .catch(function (error) {
//             console.error(error);
//             return error
            
//         });
// }




// // function setAuthCookies(cookies) {
// //     instance.defaults.headers.common['Cookie'] = cookies
// // }

// module.exports =  getInstance 

// // const addSessionId = (sessionId) => {
// //   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;      
// // }

// // function login() {
// //     var base64encodedData = Buffer.from('Demo1' + ':' + '').toString('base64');
// //     console.log(base64encodedData)
// //     const options = {
// //         method: 'GET',
// //         url: 'http://localhost:5424/api/v1/',
// //         headers: {
// //             "Content-Type":"application/json",
// //             "WWW-Authenticate": 'Basic Realm="TM1"',
// //             'Authorization':"Basic "+base64encodedData,
// //         },
// //     };
// //     axios.request(options)
// //         .then(function (response) {
// //             console.log(response.headers);
// //         })
// //         .catch(function (error) {
// //             //console.error(error);
// //         });
// // }

// // function getCubesList(){
// //     console.log("getCubes")
// // }
    

// // login();
// // getCubesList()



// // console.log("Hello")
