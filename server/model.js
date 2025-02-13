const mongoose = require("mongoose")
const Data = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        Match:/.+\@.+\..+/
    },
    phone:{
        type:Number,
        required: true,
        match: [/^\d{10}$/, 'Numéro de téléphone invalide']
    },
    message:{
        type:String,
        required: true
    }

})
const db = mongoose.model("contact",Data);
module.exports = db ;