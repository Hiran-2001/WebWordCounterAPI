const mongoose = require("mongoose")

exports.connectToMongo =()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Successfully connected to db atlas");
    }).catch((err)=>{
        console.log(err);
    })
}
 