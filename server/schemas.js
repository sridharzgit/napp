const mongoose  = require('mongoose');

const appSchema = new mongoose.Schema({name:String})


const folderSchema = new mongoose.Schema({name:String})


const dbSchema = new mongoose.Schema({name:String})


const viewSchema = new mongoose.Schema({name:String})



module.exports =  {appSchema,folderSchema,dbSchema,viewSchema}
