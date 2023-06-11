const express=require('express');
const serverless=require('serverless-http');
const cors=require('cors');
require("dotenv").config();
const {dbRoutes,userAuth}=require('./functions')
const router=express.Router()
module.exports=async(app)=>{
    app.use(express.json());
    app.use(cors());
    dbRoutes(router);
    userAuth(router);
    app.use(router);
    //app.use('/.netlify/functions/api',router);
    //serverless(app);

}
