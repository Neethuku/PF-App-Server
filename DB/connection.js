const mongoose = require('mongoose')
const connectionString = process.env.connectionString
mongoose.connect(connectionString).then(
    ()=>{
        console.log("MongoDb Atlas Connected with PFServer");
    }
).catch((err)=>{
    console.log("MongoDb Connection failed",err);
})