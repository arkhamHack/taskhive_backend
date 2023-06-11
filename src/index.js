const express=require('express');
const {PORT}=require('./config');
const app=require('./app');

const StartServer=async()=>{
    const app2=express();
    await app(app2);
    app2.listen('0.0.0.0',()=>{
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}
StartServer();
// module.exports.handler=serverless(StartServer());
