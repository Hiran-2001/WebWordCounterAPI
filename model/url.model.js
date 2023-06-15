const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    words:{
        type:Number
    }
})

module.exports = mongoose.model('url',Schema)

