const express=require('express');
const {PORT}=require('./config');
const app=require('./app');

const StartServer=async()=>{
    const app2=express();
    await app(app2);
    app2.listen(process.env.PORT || 80, '0.0.0.0');
}
StartServer();
// module.exports.handler=serverless(StartServer());
